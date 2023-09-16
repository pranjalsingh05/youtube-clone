import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Box } from "@mui/material"
import { Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from "./components"
import "./index.css"

const App = () =>  (
  <BrowserRouter>
  <Box sx={{ backgroundColor: 'gray'}}>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Feed />} />
        <Route path='/videos/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm'  element={<SearchFeed />} />
    </Routes>
  </Box>
</BrowserRouter>

);
  

export default App