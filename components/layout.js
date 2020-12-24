import Nav from '../components/nav'
import Footer from '../components/footer'
import Chat from '../components/chat'

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen">
        <Nav preview={preview} />
        <Chat />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
