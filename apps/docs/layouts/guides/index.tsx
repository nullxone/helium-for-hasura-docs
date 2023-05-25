import { MDXProvider } from '@mdx-js/react'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useRef, useState } from 'react'
import { IconExternalLink } from 'ui'
import components from '~/components'
import { highlightSelectedTocItem } from '~/components/CustomHTMLElements/CustomHTMLElements.utils'
import { FooterHelpCalloutType } from '~/components/FooterHelpCallout'
import GuidesTableOfContents from '~/components/GuidesTableOfContents'
import useHash from '~/hooks/useHash'
import { LayoutMainContent } from '../DefaultLayout'
import ExpandableVideo from 'ui/src/components/ExpandableVideo/ExpandableVideo'

interface Props {
  meta: {
    title: string
    description?: string // used in meta tags
    hide_table_of_contents?: boolean
    breadcrumb?: string
    subtitle?: string // used on the page under the H1
    footerHelpType?: FooterHelpCalloutType
    video?: string
    tocVideo?: string
    canonical?: string
  }
  children: any
  toc?: any
  currentPage?: string
  hideToc?: boolean
}

const Layout: FC<Props> = (props) => {
  const [hash] = useHash()

  const articleRef = useRef()
  const [tocList, setTocList] = useState([])

  const { asPath } = useRouter()
  const router = useRouter()

  const EDIT_BUTTON_EXCLUDE_LIST = ['/404']

  useEffect(() => {
    if (hash && tocList.length > 0) {
      highlightSelectedTocItem(hash as string)
    }
  }, [hash, JSON.stringify(tocList)])

  useEffect(() => {
    const articleEl = articleRef.current as HTMLElement

    if (!articleRef.current) return
    const headings = Array.from(articleEl.querySelectorAll('h2, h3'))
    const newHeadings = headings
      .filter((heading) => heading.id)
      .map((heading) => {
        const text = heading.textContent.replace('#', '')
        const link = heading.querySelector('a').getAttribute('href')
        const level = heading.tagName === 'H2' ? 2 : 3
        return { text, link, level }
      })
    setTocList(newHeadings)
  }, [])

  const hasTableOfContents = tocList.length > 0
  const tocVideoPreview = `http://img.youtube.com/vi/${props.meta.tocVideo}/0.jpg`

  return (
    <>
      <Head>
        <title>{props.meta?.title} | Helium for Hasura Docs</title>
        <meta name="description" content={props.meta?.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <LayoutMainContent className="pb-0">
        <div className={['grid grid-cols-12 relative gap-4'].join(' ')}>
          <div
            className={[
              'relative',
              !props.hideToc ? 'col-span-12 md:col-span-9' : 'col-span-12',
              'transition-all ease-out',
              'duration-100',
            ].join(' ')}
          >
            {props.meta.breadcrumb && (
              <p className="text-brand-900 tracking-wider mb-3">{props.meta.breadcrumb}</p>
            )}
            <article
              ref={articleRef}
              className={`${
                props.meta?.hide_table_of_contents || !hasTableOfContents ? '' : ''
              } prose dark:prose-dark max-w-none`}
            >
              <h1 className="mb-0">{props.meta.title}</h1>
              {props.meta.subtitle && (
                <h2 className="mt-3 text-xl text-scale-1100">{props.meta.subtitle}</h2>
              )}
              <div className="w-full h-[1px] bg-scale-500 my-8"></div>
              <MDXProvider components={components}>{props.children}</MDXProvider>

              {EDIT_BUTTON_EXCLUDE_LIST.includes(router.route) ? (
                <></>
              ) : (
                <div className="mt-16 not-prose">
                  <div>
                    <Link
                      href={`https://github.com/nullxone/helium-for-hasura-docs/edit/master/apps/docs/pages${router.asPath}.mdx`}
                      passHref
                    >
                      <a className="text-sm transition flex items-center gap-1 text-scale-1000 hover:text-scale-1200">
                        Edit this page on GitHub <IconExternalLink size={14} strokeWidth={1.5} />
                      </a>
                    </Link>
                  </div>
                </div>
              )}
            </article>
          </div>
          {!props.hideToc && hasTableOfContents && !props.meta?.hide_table_of_contents && (
            <div
              className={[
                'col-span-3',
                'border-scale-400 dark:bg-scale-200 table-of-contents-height',
                'thin-scrollbar overflow-y-auto sticky hidden md:block md:col-span-3 px-2',
                'transition-all ease-out',
                'duration-100',
              ].join(' ')}
            >
              <div className="border-l">
                {props.meta?.tocVideo && !!tocVideoPreview && (
                  <div className="relative mb-6 pl-5">
                    <ExpandableVideo imgUrl={tocVideoPreview} videoId={props.meta.tocVideo} />
                  </div>
                )}
                <span className="block font-mono text-xs uppercase text-scale-1200 px-5 mb-6">
                  On this page
                </span>
                <GuidesTableOfContents list={tocList} />
              </div>
            </div>
          )}
        </div>
      </LayoutMainContent>
    </>
  )
}

export default Layout
