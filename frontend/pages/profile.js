import useFirebase from "../lib/useFirebase"

const User = {
  image: "",
  name: "Potato",
  age: 8,
  area: 51,
  district: "punjab",
  state: "haryana",
  phone: 7239879423,
}

export default function App(){
    return (
        <main>
      <div className="flex flex-col items-center justify-center w-full h-full gap-5">
        {/* Blue Top */}
        <div className="bg-blue-500 h-[30vh] w-full absolute top-0 z-[-1]"></div>

        {/* Profile Pic */}
        <div className="flex flex-col items-center relative">
            <div className="mt-4 w-64 h-64 bg-gray-700 rounded-full">
                <img src={User.image} alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
        </div>

        <div className='grid grid-cols-2 gap-x-20 gap-y-5'>
        {/* Form */}
        {Object.entries(User).map(([key, value]) => (
            key === "image" ? null :
            <div className='gap-5 grid'>
            <Title name={key} />
            <div className="flex flex-row justify-center items-center w-64 h-12 border border-blue-500 hover:bg-blue-500 rounded-lg p-5 gap-2">
                <p className="bg-transparent text-white border:hidden">{value}</p> 
            </div>
            </div>
            
        ))}

        <br/>
        <br/>
        </div>

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