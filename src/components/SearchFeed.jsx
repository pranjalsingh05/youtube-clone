import { useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"
import {  Videos } from "./"
import { useParams } from "react-router-dom"
import { fetchfromAPI } from "../utils/fetchfromAPI"


const Feed = () => {
  const [videos, setVideos] = useState([])
  const {searchTerm}=useParams();


  useEffect(() => {


    fetchfromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  }, [searchTerm])


  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: '2' }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search results for: <span style={{ color: '#FC1503' }}>{searchTerm}</span> Videos
      </Typography>

      <Box p={2} display='flex'>
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>

  )
}

export default Feed