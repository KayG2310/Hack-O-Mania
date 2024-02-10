export default function App(){
    return (
        
      <div className="text-xl min-h-screen flex flex-col place-items-center justify-center bg-gradient-to-l from-slate-900 to-black">
        <title>Add Crop</title>
        
        <div className="flex w-full">
        <div className="w-2/3 pr-4">
            <img src="https://i.pinimg.com/564x/3c/2d/1a/3c2d1ab459ef97cdbdad7d9044fa7cc3.jpg" alt='sample image' className="w-full h-[100vh] img_right " />
           
        </div>
        <form className="flex flex-col items-center justify-center w-1/3 mt-[5px]">
        <div className="flex items-center justify-center font-bold mb-10 text-3xl text-cyan-100">Add Sample Data</div>
        <input 
        type='text' placeholder='Enter Crop Name' className="border-2 border-black bg-gradient-to-r from-blue-200 to-blue-400  rounded-md  mb-5  w-[30vw] pl-[11vw] hover:bg-blue-200 text-black placeholder-[#574e4e] hover: bg-gradient-to-r from-blue-500 to-blue-700" ></input>

        <input 
        type='text' placeholder='Enter State' className="border-2 border-black bg-gradient-to-r from-blue-200 to-blue-400  rounded-md mb-5 w-[30vw] pl-[11vw] text-black placeholder-[#574e4e] hover: bg-gradient-to-r from-blue-500 to-blue-700" ></input>

        <input 
        type='text' placeholder='Enter District' className="border-2 border-black pl-[11vw]
        bg-gradient-to-r from-blue-200 to-blue-400  rounded-md mb-5 w-[30vw] text-black placeholder-[#574e4e] hover: bg-gradient-to-r from-blue-500 to-blue-700" ></input>

        Add image of your crop


        <input 
        type='file' placeholder='Add image of your crop' className="border-2 border-black bg-gradient-to-r from-blue-200 to-blue-400  rounded-md mb-5 w-[30vw] hover: bg-gradient-to-r from-blue-500 to-blue-700"></input>

        <input type="submit" className=" border-2 border-black p-5 bg-gradient-to-r from-blue-500 to-blue-700 to-green-800 rounded-md mb-5 w-[15vw] hover: bg-blue-600"></input>


        </form> 
        
        </div>
        </div>
   
    )}
