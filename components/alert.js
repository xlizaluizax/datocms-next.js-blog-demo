import Container from './container'
import cn from 'classnames'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              Vai in {' '}
              <a
                href="https://taimi.com/"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                chat gay
              </a>{' '}
              e inizia subito a chiacchierare con le coppie!
            </>
          ) : (
            <>
              This is page is showing published content.{' '}
              <a
                href="/api/preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to enter preview mode!
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
