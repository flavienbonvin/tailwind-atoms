import "../styles/globals.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen w-full flex-col">
      <div className="mb-4 flex h-16 place-items-center border-b-2 border-b-slate-300 px-4">
        <h1 className="text-2xl font-bold tracking-wide underline decoration-brand">
          Navigation bar
        </h1>
      </div>
      <main className="container mx-auto flex-grow px-4 md:px-0">
        <Component {...pageProps} />
      </main>
      <footer className="flex h-12 flex-col place-items-center justify-between gap-2 px-4 sm:flex-row sm:gap-0">
        <span className="flex gap-2">
          <span className="text-gray-500">Flavien Bonvin</span>
          <span className="text-gray-500">|</span>
          <span className="text-gray-500">
            &copy; {new Date().getFullYear()}
          </span>
        </span>
        <a
          href="www.flavienbonvin.com"
          target="_blank"
          rel="noopener"
          className="text-gray-500 hover:text-brand hover:underline">
          www.flavienbonvin.com
        </a>
      </footer>
    </div>
  )
}

export default MyApp
