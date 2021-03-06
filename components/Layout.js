import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer.js'
import Script from 'next/script'

export default function Layout({title, children}) {
  return (
    <>
      <Head>
        <title>{`Starter${title ? ` | ${title}` : ''}`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className='min-h-screen'>{children}</main>
      <Footer />
      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"/>
    </>
  )
}