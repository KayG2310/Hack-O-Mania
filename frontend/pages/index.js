import { useInView } from 'react-intersection-observer';

const cardObj = [
    { title: "Convenience", description: "Our user-friendly interface makes it easy for farmers to input and manage their crop information anytime, anywhere"},
    { title: "Efficiency", description: "Save time and effort by entering your crop data online, eliminating the need for individual farm visits."},
    { title: "Centralized Database", description: "Our user-friendly interface makes it easy for farmers to input and manage their crop information anytime, anywhere"},
    { title: "Convenience", description: "Our user-friendly interface makes it easy for farmers to input and manage their crop information anytime, anywhere"},
    { title: "Convenience", description: "Our user-friendly interface makes it easy for farmers to input and manage their crop information anytime, anywhere"},
]
const details = [
    { title: "Convenience", description: "Our user-friendly interface makes it easy for farmers to input and manage their crop information anytime, anywhere"},
    { title: "Efficiency", description: "Save time and effort by entering your crop data online, eliminating the need for individual farm visits."},
    { title: "Centralized Database", description: "Our user-friendly interface makes it easy for farmers to input and manage their crop information anytime, anywhere"},
    { title: "Convenience", description: "Our user-friendly interface makes it easy for farmers to input and manage their crop information anytime, anywhere"},
    { title: "Convenience", description: "Our user-friendly interface makes it easy for farmers to input and manage their crop information anytime, anywhere"},
]

export default function App(){
    return (
        <main className="overflow-y-auto grid">

            <div className="w-full text-7xl text-center mt-40 text-green-600 pacifico">
                F a r m C o m
            </div>

            <div className="text-center text-2xl italic text-amber-500"> Welcome to FarmCom!</div>

            <div className="w-[50vw] text-center text-lg m-auto mt-14">
            Streamline your farming experience with our innovative platform designed to simplify crop data collection. Say goodbye to the hassle of individual farm visits. With FarmConnect, you can conveniently input your crop data from the comfort of your own home or farm.
            </div>

            <div className="text-center text-3xl text-red-400 mt-48"> Why Choose FarmCom?</div>

            <div className="grid grid-cols-5 p-10 gap-20 place-items-center">
            {cardObj.map((card) => (
                <Card cardObj={card} />
            ))}
            </div>

            <div className="grid grid-cols-5 p-10 gap-20 place-items-center">
            {details.map((detail) => (
                <Details detail={detail} />
            ))}
            </div>

            <Section add="bg-gradient-to-l from-green-950 to-green-400" heading="Personalized Dashboard" content="Upon logging in, farmers are greeted with a personalized dashboard displaying key metrics and insights relevant to their farming operation. Customize your dashboard layout to prioritize the information that matters most to you, whether it's yield trends, weather forecasts, or upcoming tasks." image="front.jpg" grad_dir="img_left"/>
            <Section add="flex-row-reverse bg-gradient-to-l from-blue-950 to-blue-400" heading="Efficient Data Entry" content="Our platform offers a streamlined data entry process, allowing you to quickly and accurately input your crop information. With intuitive forms and dropdown menus, entering data has never been easier." image="front.jpg" grad_dir="img_right"/>
            <Section add="bg-gradient-to-l from-slate-950 to-slate-400" heading="Data Security" content="Rest easy knowing that your crop data is secure with FarmConnect. We employ industry-leading encryption protocols and strict access controls to safeguard your information against unauthorized access or data breaches." image="front.jpg" grad_dir="img_left"/>
            <Section add="flex-row-reverse bg-gradient-to-l from-blue-950 to-blue-400" heading="Support and Assistance" content="Need help getting started or have questions about using FarmConnect? Our dedicated support team is here to assist you every step of the way. From onboarding assistance to troubleshooting technical issues, we're committed to providing the support you need to succeed." image="front.jpg" grad_dir="img_right"/>


        </main>
    )
}

function Card({cardObj}){
    return(
        <div className="w-64 h-44 bg-slate-950 shadow-white shadow rounded-lg text-center flex flex-col justify-center items-center group p-2 hover:shadow-slate-900 transition hover:bg-slate-500">
            <div className="translate-y-10 group-hover:-translate-y-0 transition-all text-3xl">
                {cardObj.title}
            </div>
            <div className="group-hover:opacity-100 transition-all opacity-0">
                {cardObj.description}
            </div>
        </div>
    )

}

function Details({detail}){
    const [ref, inView] = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
      });
      <div ref={ref} className={`w-64 h-44 bg-green-500 rounded-lg text-center flex flex-col justify-center items-center group p-2 ${inView ? 'animate-fade-in' : ''}`}>
    <div className="self-center group-hover:-translate-y-14 transition-all text-3xl">
        {detail.title}
    </div>
    <div className="group-hover:opacity-100 transition-all opacity-0 hover:pointer-events-auto pointer-events-none">
        {detail.description}
    </div>
</div>
}

const Section = ({add, heading, content, image, grad_dir}) => {
    return (
      <div className={`h-[70vh] flex place-items-center ${add}`}>
          
          <div className='text-center px-32 flex flex-col justify-evenly place-items-center w-1/2 h-[100%]'>
          <p className=" text-6xl">{heading}</p>
          <p>{content}</p>
          </div>
          <img className={`h-[70vh] w-[50%] ${grad_dir}`} src={image}></img>
  
      </div>
    )
  }
