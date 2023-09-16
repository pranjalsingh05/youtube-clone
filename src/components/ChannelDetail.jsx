import { useState,useEffect, } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material";
import {Videos,ChannelCard} from "./"
import { fetchfromAPI } from "../utils/fetchfromAPI";


const ChannelDetail = () => {
const[channelDetail,setChannelDetail]=useState(null)
const[videos,setVideos]=useState([])

  const{id}=useParams();

  useEffect(()=>{
    fetchfromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]));

    fetchfromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  },[id])

  
  return (
    <Box minHeight='95vh'>
      <Box>
        <div 
          style={{
            background:" linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,45,186,1) 100%)", 
            zIndex:10,
            height:'300px'}}
        />
        <ChannelCard channelDetail={channelDetail}
        marginTop='-120px' />
      </Box>
      <Box p={2} display='flex'>
        <Box sx={{ mr:{sm:'100px'}}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail