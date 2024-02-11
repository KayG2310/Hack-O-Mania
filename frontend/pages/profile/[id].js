import { FaPencilAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function App({User}){
    return (
        <main>
      <div className="flex flex-col items-center justify-center w-full h-full gap-5">
        {/* Blue Top */}
        <div className="bg-blue-500 h-[30vh] w-full absolute top-0 z-[-1]"></div>

        <Link 
            href='/profile/edit' 
            className='absolute z-[1] top-24 right-5 bg-gray-900 rounded-lg h-12 w-12 place-items-center grid'
        ><FaPencilAlt /></Link>

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

export async function getServerSideProps(context) {
  console.log(context.params.id)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/profile/get_current`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({'id' : context.params.id}),
  })
  const data = (await res.json())['data']
  console.log(data)

  return { 
    props: {
      User: {
        name: data.name,
        age: data.age,
        area: data.area,
        district: data.district,
        state: data.state,
        phone: data.phone
      },
    }
  }

}