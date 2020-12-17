import Link from 'next/link'

const links = [
  { href: 'https://incontri-gay.org/', label: 'Chat Gay' },
  { href: 'https://incontri-gay.org/posts/video-gay-chat-room-pro-e-contro', label: 'Video Chat Gay' },
]

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between p-8">
        <li>
          <Link href="/">
            <a className="mb-8 md:mb-16 -mx-5 sm:mx-0">
              Incontri-Gay.Org
            </a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="no-underline btn-blue">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}