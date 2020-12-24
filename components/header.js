import Link from 'next/link'
import Container from './container'

export default function Header() {
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Incontri-Gay.Org</a>
      </Link>
    </h2>
    <Container>
    <div className="py-28 flex flex-col lg:flex-row items-center">
      <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
        Chat Gay Gratis
      </h3>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
        <a
          href="http://turbo24.org/chat-gay-adj"
          className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
        >
          Inizia la chat
        </a>
    </div>
    </div>
  </Container>
    </div>
  )
}