import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">
        Whoops, alguma coisa não está certa...
      </h1>
      <p className="text-accent-foreground">
        Um erro aconteceu na aplicação, abaixo você encontra mais detalhes.
      </p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link className="dark: text-sky-400 text-sky-600" to={'/'}>
          Dashboard
        </Link>
      </p>
    </div>
  )
}
