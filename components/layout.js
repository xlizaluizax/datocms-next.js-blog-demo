import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen">
        <Nav preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
