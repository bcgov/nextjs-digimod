import '../styles/globals.css'
import '../styles/wordpress.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import localFont from '@next/font/local'


const bcSansFont = localFont({
  src: [{
    path: '../fonts/BCSans-Regular.woff',
    weight: '400',
    style: 'normal',
  },
  {
    path: '../fonts/BCSans-Italic.woff',
    weight: '400',
    style: 'italic',
  },
  {
    path: '../fonts/BCSans-Bold.woff',
    weight: '700',
    style: 'normal',
  },
  {
    path: '../fonts/BCSans-BoldItalic.woff',
    weight: '700',
    style: 'italic',
  }],
}
)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
    :root {
      --font-base: ${bcSansFont.style.fontFamily};
    }
  `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
