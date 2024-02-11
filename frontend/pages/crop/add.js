import useFirebase from "@/lib/useFirebase";
import {useRouter} from "next/router";

export default function App(){
  const user = useFirebase().user;
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form. The image is available in the `image` state variable as a base64 string.
  };

  const handleClick = (description) => {
    let form = document.getElementById('addCrop');
    let data = new FormData(form);
    data.append('email', user.email);
    let json_data = {};
    data.forEach((value, key) => {json_data[key] = value});
    console.log(json_data);

    fetch(`${process.env.NEXT_PUBLIC_BACKEND}/crop/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json_data)
    }).then(res => res.json()).then(data => {
      console.log(data);
      router.push('/crop');
    })
  }
    return (
        
      <div className="text-xl min-h-screen flex flex-col place-items-center justify-center bg-gradient-to-l from-slate-900 to-black">
        <title>Add Crop</title>
        
        <div className="flex w-full">
        <div className="w-2/3 pr-4">
            <img src="https://i.pinimg.com/564x/3c/2d/1a/3c2d1ab459ef97cdbdad7d9044fa7cc3.jpg" alt='sample image' className="w-full h-[100vh] img_right " />
           
        </div>
        <form id='addCrop' onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-1/3 mt-[5px]">
          <div className="flex items-center justify-center font-bold mb-10 text-3xl text-cyan-100">Add Sample Data</div>
          <input 
            name='name' 
            type='text' 
            placeholder='Enter Crop Name' 
            className="border-2 border-white bg-gradient-to-r from-blue-200 to-blue-400  rounded-md  mb-5  w-[30vw] pl-[11vw] hover:bg-blue-200 text-black placeholder-[#574e4e] hover: bg-gradient-to-r from-blue-200 to-blue-300" 
          ></input>

          <input 
            name='state' 
            type='text' 
            placeholder='Enter State' 
            className="border-2 border-white bg-gradient-to-r from-blue-200 to-blue-400  rounded-md mb-5 w-[30vw] pl-[11vw] text-black placeholder-[#574e4e] hover: bg-gradient-to-r from-blue-200 to-blue-300" 
          ></input>

          <input 
            name='district' 
            type='text' 
            placeholder='Enter District' 
            className="border-2 border-white pl-[11vw] bg-gradient-to-r from-blue-200 to-blue-400  rounded-md mb-5 w-[30vw] text-black placeholder-[#574e4e] hover: bg-gradient-to-r from-blue-200 to-blue-300" 
          ></input>


            <input 
              name='cycle' 
              type='month' 
              placeholder='Enter Cycle of the crop' 
              className="border-2 border-white pl-[11vw] bg-gradient-to-r from-blue-200 to-blue-400  rounded-md mb-5 w-[30vw] text-black placeholder-[#574e4e] hover: bg-gradient-to-r from-blue-200 to-blue-300" 
            ></input>

        <p className="text-2xl text-white">Add image of your crop</p>


        <input 
        type='file' placeholder='Add image of your crop' className="border-2 border-white bg-gradient-to-r from-blue-200 to-blue-300  rounded-md mb-5 w-[30vw] "></input>

        <input onClick={handleClick} type="submit" className=" border-2 border-white p-5 bg-black text-white hover:bg-gradient-to-tr from-purple-950 to-green-950 via-blue-950
 
          rounded-md mb-5 w-[15vw]"></input>


        </form> 
        
        </div>
        </div>
   
    )}
