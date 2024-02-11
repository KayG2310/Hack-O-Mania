import { Html, Head, Main, NextScript} from 'next/document'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import useFirebase from '@/lib/useFirebase';
// import { useRouter } from 'next/navigation';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";


export default function App(){
  const user = useFirebase().user;

  // const router = useRouter();

  // const handleClick = () => {
  //   fetch(`${process.env.NEXT_PUBLIC_BACKEND}/profile/get`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       'email': user.email,
  //     })
  //   }).then(res => res.json()).then(data => {
  //     router.push(`/profile/${data.data.id}`)
  //   })

  // }

    return (
    <Html lang="en">
      <Head />
      <body>
        
        <div className="flex h-20 bg-slate-800 justify-center items-center fixed w-full opacity-70 z-20">
            <Link className="mr-auto pl-10" href="/">
                <img src="/logo.png" alt="Logo" className="h-14" />
            </Link>
        <div className='navbar flex mr-auto text-3xl text-white'>
          <ul className='gap-[60px] flex'>
            <li><a href='crop'>Crops</a></li>
            <li><a href='support'>Support</a></li>
            <li><a href='crop/add'>Add crop</a></li>

          </ul>
        </div>
        {/* <Link className="mr-auto text-3xl" href='/login'>Hello</Link> */}

            <div className="justify-end items-center flex gap-10 pr-10 ">
              <a href="/login" className="text-white">{(user==null)?"Login":"Logout"}</a>
              <button className="text-white">Profile</button>
            </div>
        </div>
        
        <div className="h-20"></div>

        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }