import Head from 'next/head'
import { useRouter } from 'next/router'

const Favicons = () => {
  const { basePath } = useRouter()
  return (
    <Head>
      <link rel="apple-touch-icon" href={`${basePath}/favicon.svg`} />
      <link rel="icon" type="image/svg+xml" href={`${basePath}/favicon.svg`} />
      <link rel="shortcut icon" type="image/svg+xml" href={`${basePath}/favicon.svg`} />
      <meta name="theme-color" content="#1E1E1E" />
    </Head>
  )
}

export default Favicons
