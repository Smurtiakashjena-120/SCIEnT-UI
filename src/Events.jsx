


export default function Events(){


    return(
            <div className="min-h-screen  border-slate-900 border-8 bg-gradient-to-r from-indigo-500 ...">
                <div className="flex flex-col justify-center items-center">
                <h1 className="text-primary-800 mt-3 text-6xl font-serif font-extrabold bg-gradient-to-r from-violet-600 via-pink-400 to-pink-800 inline-block text-transparent bg-clip-text">
        Events
    </h1> 
    <p className='text-slate-900 text-2xl m-10 p-5 text-center w-1/3'>
        Glimpses of Some Events <br></br> &#10024; &#10024; &#10024;
    </p>
                </div>
                <div className="flex justify-center items-center flex-col gap-5">
                 <Cards src={"/e1.jpg"} title={"Project ShowCase"} description={"a project show case by scient club a project show case by scient club a project show case by scient club"} link={"#"}></Cards>
                 <Cards src={"/e2.jpg"} title={"Open House Exhibition"} description={"A Open House conducted by scient at Golden jublie conference hall"} link={"#"}></Cards>
                 <Cards src={"/e3.jpg"} title={"Robotics Challenge"} description={"Represented by NIT Trichy at ISRO robotics challenge"} link={"#"}></Cards>
                 <Cards src={"/e4.jpg"} title={"Transfinite"} description={"A Hackthon conducted by nitt at ORION 48 hours long "} link={"#"}></Cards>
                </div>

            </div>

    )
}


const Cards = ({src,title,description , link})=>{

    return(
        <div>
            <a 
  href={link} 
  className="flex flex-col items-center bg-white border-4 border-slate-50 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
>
  <img 
    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" 
    src={src}
    alt="" 
  />
  <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {title}
    </h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {description}
    </p>

    <a href={link} className="text-slate-300">Know more..</a>
  </div>
</a>

        </div>
    )
}
