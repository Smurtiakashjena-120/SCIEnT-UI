import { useState } from 'react'
import Landing from './components/Landing'
import About from './components/About'
import Work from './components/Work'
import Join from './components/Join'
import Blog from './components/Blog'
import Footer from './components/Footer'


function Home() {
  const [count, setCount] = useState(0)

  return (
<div>
<Landing></Landing>
<About></About>
<Work></Work>
<Join></Join>
<Blog></Blog>
<Footer></Footer>
</div>
  )
}

export default Home
