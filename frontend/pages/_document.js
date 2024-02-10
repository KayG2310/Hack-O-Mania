import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link';


export default function App(){
    return (
    <Html lang="en">
      <Head />
      <body>
        <div className="flex h-16 bg-slate-700 justify-center items-center">
            <Link className="mr-auto pl-10" href="/">
                <img src="/logo.png" alt="Logo" className="h-14" />
            </Link>

        <Link className="mr-auto text-3xl" href='/login'>Hello</Link>

            <div className="justify-end items-center flex gap-10 pr-10 ">
              <a href="/login" className="text-white">Login</a>
            </div>
        </div>

        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }