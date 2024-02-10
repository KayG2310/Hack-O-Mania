export default function App(){
    return (
        <main>
            <title>Support</title>
            <style>
                {`
  @import url('https://fonts.googleapis.com/css2?family=Carattere&family=Play&family=Quicksand:wght@700&display=swap');

          
          .custom-font {
            font-family: 'Garette', cursive;
            font-family: 'Play', sans-serif;
            font-family: 'Quicksand', sans-serif;
          }

          .list{
            gap: 150px
          }
                `}
           
          
            </style>
            <div className="bg-gradient-to-r  from-purple-900 via-blue-950 to-green-900 items-center justify-center flex w-full h-[35vh]">
                <div className=" text-white custom-font text-5xl">CONTACT US</div>
                </div>
                <div className="custom-font flex flex-col items-center justify-center m-10 text-2xl">
                Reach out to us on 
                
                <div className="list">
                    <ul className="flex m-14 list">

                    <li>E-mail  </li>
                    <li>Twitter  </li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    </ul>
                    <ul className="flex m-[45px] list"> 
                    <li><a href="support.farmcom@gmail.com" className="text-[20px] m-[20px]">Click here</a> </li>
                    <li><a href=''><img src='twitter.png' className="w-[60px] h-[60px] hover:cursor-pointer"></img></a></li>
                    <li><a href=''><img src='insta.png' className="w-[45px] h-[45px] m-[30px]p-[-2px] hover:cursor-pointer"></img></a></li>
                    <li><a href=''><img src='linkedin.png' className="w-[60px] h-[60px] hover:cursor-pointer"></img></a></li>
                    

                    </ul>

                </div>
                </div>

        </main>


    )}