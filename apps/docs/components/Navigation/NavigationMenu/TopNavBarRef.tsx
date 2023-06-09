import { useTheme } from 'common/Providers'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { Button, IconCommand, IconGitHub, IconMoon, IconSearch, IconSun, SearchButton } from 'ui'

import { getPageType } from '~/lib/helpers'
import { REFERENCES } from './NavigationMenu.constants'

const TopNavBarRef: FC = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { asPath, push } = useRouter()
  const pathSegments = asPath.split('/')

  const library = pathSegments.length >= 3 ? pathSegments[2] : undefined
  const libraryMeta = REFERENCES?.[library] ?? undefined
  const versions = libraryMeta?.versions ?? []

  const version = versions.includes(pathSegments[pathSegments.indexOf(library) + 1])
    ? pathSegments[pathSegments.indexOf(library) + 1]
    : versions[0]

  const pageType = getPageType(asPath)

  useEffect(() => {
    setMounted(true)
  }, [isDarkMode])

  const pageLinks = [
    { text: 'Guides', key: 'docs', link: '/' },
    { text: 'Reference', key: 'reference', link: '/reference' },
  ]

  const onSelectVersion = (version: string) => {
    // [Joshen] Ideally we use <Link> but this works for now
    if (!library) return
    if (version === versions[0]) {
      push(`/reference/${library}`)
    } else {
      push(`/reference/${library}/${version}`)
    }
  }

  // [Joshen] Kaizen: Use UI library's SidePanel for this
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    const sidebar = document.querySelector('.sidebar-menu-container')
    const contentPane = document.querySelector('.main-content-pane')

    sidebar.classList.toggle('hidden')
    contentPane.classList.toggle('hidden')
  }

  return (
    <nav className="h-[60px] border-b backdrop-blur backdrop-filter bg-white-1200 dark:bg-scale-200/90">
      <div className="px-5 max-w-7xl mx-auto flex gap-3 justify-between items-center h-full">
        <div className={['lg:hidden'].join(' ')}>
          <Link href="/">
            <a className=" flex items-center gap-2">
              <Image
                className="cursor-pointer"
                src={
                  isDarkMode
                    ? '/docs/helium-for-hasura-dark.svg'
                    : '/docs/helium-for-hasura-light.svg'
                }
                width={210}
                height={50}
                alt="Helium for Hasura Logo"
              />
            </a>
          </Link>
          {/* {router.asPath.includes('/reference/') && <RefSwitcher />} */}
        </div>

        <div className="hidden lg:flex grow items-center justify-end gap-3">
          <ul className="flex items-center">
            <Link
              href="https://github.com/nullxone/helium-for-hasura-starter-kit"
              target="_blank"
              rel="noreferrer noopener"
            >
              <a className="px-2.5 py-1" target="_blank">
                <IconGitHub size={16} />
              </a>
            </Link>
          </ul>
          <ul className="flex items-center">
            <li className="px-4">
              <div className="cursor-pointer" onClick={() => toggleTheme()}>
                {isDarkMode ? (
                  <IconMoon
                    size={16}
                    strokeWidth={1}
                    className="text-scale-1100 hover:text-scale-1200 transition"
                  />
                ) : (
                  <IconSun
                    size={16}
                    strokeWidth={1}
                    className="text-scale-1100 hover:text-scale-1200 transition"
                  />
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default TopNavBarRef
