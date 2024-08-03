import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Events from './Events'
import People from './People'


function App() {
  const [count, setCount] = useState(0)

  return (
<div>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/events' element={<Events></Events>}></Route>
<Route path='/people' element={<People></People>}></Route>
</Routes>
</BrowserRouter>
</div>
  )
}

export default App
