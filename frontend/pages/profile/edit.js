import React, { useState } from 'react';
import { parse } from 'cookie';
import { FaFileUpload } from 'react-icons/fa';
import { useRouter } from 'next/router';
import useFirebase from "../../lib/useFirebase"

const farmer = {
    name: 'Enter Name',
    phone: 'Enter Phone',
    age: 'Enter Age',
    district: 'Enter District',
    state: 'Enter State',
    area: 'Enter Area', }

export default function App(){
    const router = useRouter();

    const user = useFirebase().user;

    const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
        // Get the selected file
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        // Setting the state variable
        setImage(imageUrl);
      };

      const handleSubmit = () => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND}/profile/update`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'email': user.email,
            'name': farmer.name,
            'age': farmer.age,
            'area': farmer.area,
            'district': farmer.district,
            'state': farmer.state,
            'phone': farmer.phone
          })
        }).then(res => res.json()).then(data => {
          router.push(`/profile/${data.data.id}`)
        })
    
      }

  return (
    <main className="overflow-y-auto">
      <div className="flex flex-col items-center justify-center w-full h-full gap-5">
        {/* Blue Top */}
        <div className="bg-blue-500 h-[30vh] w-full absolute top-0 z-[-1]"></div>

        {/* Profile Pic */}
        <div className="flex flex-col items-center relative">

            <div className="mt-4 w-64 h-64 bg-gray-700 rounded-full">
                {image && <img src={image} alt="Profile" className="w-full h-full object-cover rounded-full hover:gre" />}
            </div>
        </div>

        <div className='grid grid-cols-2 gap-x-20 gap-y-5'>
        {/* Form */}
        {Object.entries(farmer).map(([key, value]) => (
            <div className='gap-5 grid'>
            <Title name={key} />
            <div className="flex flex-row justify-center items-center w-64 h-12 border border-blue-500 hover:bg-blue-500 rounded-lg p-5 gap-2">
                <input 
                  type="text"
                  placeholder={farmer[key]} 
                  className="bg-transparent text-white border:hidden" 
                  onChange={(e) => farmer[key] = e.target.value}
                />
            </div>
            </div>
        ))}
        </div>

        {/* Submit */}

        <button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-64 h-12'>
            Submit
        </button>
        <br/>

      </div>
    </main>
  )
}


function Title({name}){
    return(
      <div className="flex flex-col pl-7 items-start justify-left w-full h-full">
        <h1 className="text-3xl font-bold">{name}</h1>
      </div>
    )
}