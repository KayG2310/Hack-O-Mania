export default function App(){
  return (
    <div className="main_bg">
      <div className="h-[90vh] flex place-items-center">
        <div className='text-center px-32 flex flex-col justify-evenly place-items-center w-1/2 h-[100%]'>
          <p className="text-6xl whitespace-nowrap">F A R M C O M</p>
          <img src="front.jpg" className="img_middle"></img>
          <p>Welcome to <b>FarmCom</b>! Streamline your farming experience with our innovative platform designed to simplify crop data collection. Say goodbye to the hassle of individual farm visits. With FarmConnect, you can conveniently input your crop data from the comfort of your own home or farm.</p>
        </div>
        <div className='text-center px-16 flex flex-col justify-evenly place-items-center w-1/2 h-[100%]'>
          <p className="text-3xl whitespace-nowrap">Why choose FarmCom?</p>
          <ListItem head="Efficiency" desc="Save time and effort by entering your crop data online, eliminating the need for individual farm visits"/>
          <ListItem head="Convenience" desc="Our user-friendly interface makes it easy for farmers to input and manage their crop information anytime, anywhere"/>
          <ListItem head="Centralized Database" desc="Your crop data is securely stored in our centralized database, ensuring easy access and organization."/>
          <ListItem head="Data Analysis" desc="Gain valuable insights into your farming practices with our advanced data analysis tools, helping you make informed decisions for improved crop yields"/>
          <ListItem head="Collaboration" desc="Connect with other farmers and agricultural experts to share knowledge, tips, and best practices for sustainable farming"/>
          <p>Ready to simplify your farming operations? Join FarmConnect today and revolutionize the way you manage your crops!</p>
        </div>
      </div>
      <Section add="bg-gradient-to-l from-green-950 to-green-400" heading="Personalized Dashboard" content="Upon logging in, farmers are greeted with a personalized dashboard displaying key metrics and insights relevant to their farming operation. Customize your dashboard layout to prioritize the information that matters most to you, whether it's yield trends, weather forecasts, or upcoming tasks." image="front.jpg" grad_dir="img_left"/>
      <Section add="flex-row-reverse bg-gradient-to-l from-blue-950 to-blue-400" heading="Efficient Data Entry" content="Our platform offers a streamlined data entry process, allowing you to quickly and accurately input your crop information. With intuitive forms and dropdown menus, entering data has never been easier." image="front.jpg" grad_dir="img_right"/>
      <Section add="bg-gradient-to-l from-slate-950 to-slate-400" heading="Data Security" content="Rest easy knowing that your crop data is secure with FarmConnect. We employ industry-leading encryption protocols and strict access controls to safeguard your information against unauthorized access or data breaches." image="front.jpg" grad_dir="img_left"/>
      <Section add="flex-row-reverse bg-gradient-to-l from-blue-950 to-blue-400" heading="Support and Assistance" content="Need help getting started or have questions about using FarmConnect? Our dedicated support team is here to assist you every step of the way. From onboarding assistance to troubleshooting technical issues, we're committed to providing the support you need to succeed." image="front.jpg" grad_dir="img_right"/>
    </div>
  )
}

const ListItem = ({head, desc}) => {
  return (
    <div>
      <b className="black">{head}: </b>
      <p className="text-left">{desc}.</p>
    </div>
  )
}

const Box = ({content,BTNtext}) => {
  return (
    <div className="opacity-85 hover:opacity-100 hover:scale-105  duration-300 flex flex-col justify-evenly mt-10 px-10 w-[15%] h-[40vh] rounded-xl bg-gradient-to-b from-yellow-400 to-yellow-50 text-black shadow-sm shadow-yellow-50">
      <img src="photo.jpg"></img>
      <p className="text-center">
        {content}
      </p>
      <button className="py-1 text-sm  border-yellow-950 bg-gradient-to-r duration-300 via-yellow-400 from-yellow-600 to-yellow-950 hover:bg-gradient-to-t hover:transition-all rounded-xl shadow-md shadow-black font-bold">
        {BTNtext}
      </button>
    </div>
  )
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

const Link = ({text, goto}) =>{
  return (
    <a href={goto} className="hover:text-yellow-400 hover:underline">{text}</a>
  )
}