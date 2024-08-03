
//     )
// }

export default function Work() {
    return (
        <div className="bg-slate-900 min-h-screen flex items-center justify-center pb-10">
            <div className="pt-16 flex flex-col items-center">
                <h1 className="text-primary-800 mb-4 text-6xl font-serif font-extrabold bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-400 inline-block text-transparent bg-clip-text">
                    What We Do
                </h1>
                <div className="grid grid-cols-3   max-w-6xl mt-10">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="bg-slate-800 p-4 border border-slate-600 flex flex-col items-center justify-between h-96 min-w-80">
                            <div className="text-center mb-4 flex flex-col justify-center items-center">
                                <h3 className="text-slate-300"> Work Title {index + 1} </h3>
                                <p className=" text-xl text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur architecto dolorum cum quos placeat quasi quam nostrum, nobis sint eum excepturi sed</p>
                            </div>


<button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-slate-800 rounded-md group-hover:bg-opacity-0">
Visiting Link
</span>
</button>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
