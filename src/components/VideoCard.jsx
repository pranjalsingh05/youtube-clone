import {Link} from "react-router-dom"
import { Typography,Card,CardMedia,CardContent } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({video:{id:{videoId},snippet}}) => {
    
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px"},borderRadius:'0px',boxShadow:'none'}}>
          <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl}>
            <CardMedia 
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px' },height:180}}
            />
            <CardContent sx={{background:'#1e1e1e',height:'100px'}} >
                  <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight='bold' color='#fff'>{snippet?.title.slice(0,60)}</Typography>
                </Link>

                  <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                      <Typography variant="subtitle2" fontWeight='bold' color='GRAY'>{snippet?.channelTitle}
                          <CheckCircle sx={{ color: 'blue', fontSize: '12px', ml:'5px'}}></CheckCircle>
                      </Typography>
                  </Link>
            </CardContent>
            
        </Link>
    </Card>
  )
}

export default VideoCard