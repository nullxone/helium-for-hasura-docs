import { useTheme } from 'common/Providers'
import Link from 'next/link'
import Image from 'next/image'
import { GlassPanel, IconBackground, IconPanel, IconPlay } from 'ui'
import { useBreakpoint } from 'common'
import DocsCoverLogo from './DocsCoverLogo'
import HomeMenuIconPicker from '~/components/Navigation/NavigationMenu/HomeMenuIconPicker'

const HomePageCover = (props) => {
  const isXs = useBreakpoint(639)
  const iconSize = isXs ? 'sm' : 'lg'

  const { isDarkMode } = useTheme()

  const GettingStarted = () => (
    <Link href="/guides/getting-started" passHref>
      <a className={'col-span-12 md:col-span-4'}>
        <GlassPanel
          title="Getting Started"
          icon={<HomeMenuIconPicker icon="getting-started" width={18} height={18} />}
          background={true}
          showIconBg={true}
          showLink={false}
        >
          Use the Helium Starter Kit to build your first API in minutes.
        </GlassPanel>
      </a>
    </Link>
  )

  return (
    <div className="w-full bg-scale-100 border-b prose dark:prose-dar max-w-none mb-16 md:mb-12 xl:mb-0">
      <div className="max-w-7xl px-5 mx-auto py-8 sm:pb-16 sm:pt-12 xl:pt-16 flex flex-col xl:flex-row justify-between gap-12 xl:gap-12">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center w-full max-w-xl">
          <Image
            className="cursor-pointer"
            src={
              isDarkMode
                ? '/docs/helium-for-hasura-simple-dark.svg'
                : '/docs/helium-for-hasura-simple-light.svg'
            }
            width={250}
            height={250}
            alt="Helium for Hasura Logo"
          />
          <div className="flex flex-col">
            <h1 className="m-0 mb-3 text-2xl sm:text-3xl">{props.meta?.title}</h1>
            <p className="m-0 text-scale-1100">
              Model first development to rapidly build, iterate on, and deploy graphql APIs.
            </p>
          </div>
        </div>
        <div className="w-full xl:max-w-[365px] -mb-40">
          <div className="not-prose [&_svg]:text-brand-1100 [&_svg]dark:text-brand-900">
            <GettingStarted />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageCover
