



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
const navigate = useNavigate();

    return (
        <div className="bg-slate-900 h-screen">
            <Navbar navigate={navigate}/>
            <div className="pt-16 flex flex-col justify-center items-center">
    <h1 className="text-primary-800 mb-4 text-6xl font-serif font-extrabold bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-400 inline-block text-transparent bg-clip-text">
        About Us
    </h1> 
    <p className='text-slate-50 text-2xl m-10 p-5 text-center w-1/3'>
        Lorem, ipsum dolor sit amet consectetur a 
        <span className='text-red-500'>Ducimus in saepe  </span> rem, nihil fugit aut molestias architecto facere modi id assumenda voluptatem harum illo nobis laborum <span className='text-blue-500'>Quod obcaecat ibero, quos</span>  aspernatur vitae autem. Lorem 
        <span className='text-red-500'>Ducimus in saepe  </span>ipsum dolor sit amet consectetur adipisicing elit. 
        <span className='text-blue-500'>Quod obcaecat ibero, quos</span> ipsum iure doloribus aque, 
    </p>

    <button className=' text-slate-100 border border-blue-500  pt-4 pb-4 pl-10 pr-10 rounded flex items-center'onClick={()=>{navigate("/events")}}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
</svg>

         View Events
         </button>
</div>

        </div>
    );
};

const Navbar = ({navigate}) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`bg-white border-gray-200 dark:bg-gray-900 ${isSticky ? 'fixed top-0 left-0 w-full z-10 shadow-lg' : 'sticky top-0'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
</svg>
                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SCIEnT</span> */}
                    <span className="text-primary-800 mb-4 text-2xl font-serif font-extrabold bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-400 inline-block text-transparent bg-clip-text">SCIEnT</span>
                </a>
                
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={()=> navigate("/events")}>Past Events</a>
                        </li>

                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={()=> navigate("/people")}>Our Team</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default About;
