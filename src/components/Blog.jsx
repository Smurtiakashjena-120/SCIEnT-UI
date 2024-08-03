

export default function Blog() {
    return (
        <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center ">
            <div className="pt-16 flex flex-col items-center">
                <h1 className="text-primary-800 mb-4 text-6xl font-serif font-extrabold bg-gradient-to-r from-violet-600 via-pink-400 to-pink-800  text-transparent bg-clip-text  flex items-center">
                Blogs
                </h1>
                                
            </div>

            <div className="flex justify-around gap-5">
         <Card src={"/blog1.webp"}></Card>
         <Card src={"/blog2.webp"}></Card>
         <Card src={"/blog3.webp"}></Card>
            </div>





        </div>
    )
}


const Card = ({src})=>{

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <img className="rounded-t-lg" src={src} alt="" />
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Blog Title In Brief
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Small description of blog such that the reader should be show intrest in this
    </p>
  </div>
</div>

    )
}