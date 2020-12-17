import Alert from '../components/alert'
import Nav from '..components/nav'
import Footer from '../components/footer'

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Nav preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
