import { useRouter } from 'next/router';
import React from 'react';
import useFirebase from "../lib/useFirebase"

export default function App(){
    return (
    <main className="flex gap-10 items-center justify-center min-h-screen">
        <Login name="Farmer" description = "Use this to login and add crop info"/>
        <Login name="Admin" description = "Use this to login and view crop info with admin properties"/>

    </main>
    )
}


function Login( {name, description} ) {
    const router = useRouter();

    const { handleSignInWithGoogle } = useFirebase()

    async function redirectToGoogle(){
        handleSignInWithGoogle().next(res => {
            console.log(res.data)
        })
        // router.push('/profile/edit')
    }

    console.log(useFirebase().user)
    return (
        <div className="flex flex-col gap-5 justify-center items-center rounded-lg p-10 w-[40vw] bg-gradient-to-b from-blue-900 to-green-700">
            <h1 className="text-3xl font-bold">Login as {name}</h1>
            <p>{description}</p>

            <button 
              onClick={redirectToGoogle}
              class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
            >
              <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
              <span>Login with Google</span>
            </button>
        </div>
    )
}