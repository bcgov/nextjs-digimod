import Navbar from './navbar'
import Footer from './footer'
import { RouteBody, GlobaStyleSize } from './pageContent'

type LayoutProps = {
    children: React.ReactNode,
  };

  

export default function Layout({ children }: LayoutProps) {
  return (
    <>
    <GlobaStyleSize />
      <Navbar />
      <RouteBody>
      <main>{children}</main>
      </RouteBody>
      <Footer />
    </>
  )
}