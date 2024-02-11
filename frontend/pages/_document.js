import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link';

export default function App(){

    return (
    <Html lang="en">
      <Head />
      <style>
                {`
          .list{
            gap: 60px;
          }
                `}
           
          
            </style>
      <body>
        
        <div className="flex h-20 bg-slate-800 justify-center items-center fixed w-full opacity-70">
            <Link className="mr-auto pl-10" href="/">
                <img src="/logo.png" alt="Logo" className="h-14" />
            </Link>
        <div className='navbar flex mr-auto text-3xl text-white'>
          <ul className='list flex'>
            <li><a href='add_crop'>Add Data</a></li>
            <li><a href='support'>Support</a></li>
          </ul>
        </div>
        {/* <Link className="mr-auto text-3xl" href='/login'>Hello</Link> */}

            <div className="justify-end items-center flex gap-10 pr-10 ">
              <a href="/login" className="text-white">Login</a>
            </div>
        </div>
        
        <div className="h-20"></div>

        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }