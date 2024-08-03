import backgroundImage from '/surface.webp'; // Adjust the path as needed

export default function People() {
    return (
        <div 
            className="bg-cover bg-center min-h-screen filter brightness-75 contrast-125 pb-10" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
<div className='flex flex-col items-center'>

    <h1 className="text-6xl font-serif font-extrabold bg-gradient-to-r from-orange-500 via-yellow-400 to-yellow-800 inline-block text-transparent bg-clip-text">
    Members 
</h1>

</div>
<div className='flex justify-center items-center mt-5'>
<Profile name={"Kailash"} link={"#"} position={"Team Head"} pic={"/profile.avif"}></Profile>

</div>

<div className='grid grid-cols-3 gap-8 m-5 place-items-center' >
    <Profile name={"Omkar"} link={"#"} position={"Technical Head"} pic={"/profile.avif"}></Profile>
    <Profile name={"Ashutosh"} link={"#"} position={"Treasurer"} pic={"/profile.avif"}></Profile>
    <Profile name={"Akash"} link={"#"} position={"Events"} pic={"/profile.avif"}></Profile>
    <Profile name={"Sai"} link={"#"} position={"Public Relations"} pic={"/profile.avif"}></Profile>
    <Profile name={"Surabhi"} link={"#"} position={"Web Manager"} pic={"/profile.avif"}></Profile>
    <Profile name={"Shashank"} link={"#"} position={"Backend anager"} pic={"/profile.avif"}></Profile>
</div>

            
        </div>
    );
}



const Profile =({pic,position,name,link}) => {


    return(
        <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={pic}
          alt={name}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{position}</span>
        <div className="flex mt-4 md:mt-6">
          <a
            href={link}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            GitHub
          </a>

        </div>
      </div>
    </div>
    )
}
