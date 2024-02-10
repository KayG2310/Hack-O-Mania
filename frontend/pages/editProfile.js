import React, { useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';

const farmer = {name: 'farmer1', area: '10 acres', crops: ['rice', 'wheat', 'maize']}

export default function App(){
    const [image, setImage] = useState(null);


    const handleFileChange = (event) => {
        // Get the selected file
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        // Setting the state variable
        setImage(imageUrl);
      };

  return (
    <main className="overflow-y-auto">
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* Blue Top */}
        <div className="bg-blue-500 h-[30vh] w-full"></div>

        {/* Profile Pic */}
        <div className="flex flex-col items-center mt-[20vh] absolute">
            <label htmlFor="profilePic" className='z-[1] bg-gray-900 rounded-lg h-12 w-12 place-items-center grid absolute m-[18vh]'>
              <FaFileUpload />
            </label>

            <input id="profilePic" type="file" accept="image/*" onChange={handleFileChange} className="hidden bg-gray-300" />

            <div className="mt-4 w-64 h-64 bg-gray-700 rounded-full">
                {image && <img src={image} alt="Profile" className="w-full h-full object-cover rounded-full" />}
            </div>
        </div>


      <div className="flex flex-col pl-7 items-start justify-left w-full h-full">
        <h1 className="text-3xl font-bold">Crops</h1>
      </div>

      </div>
    </main>
  )
}