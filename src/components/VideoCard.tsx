import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { formatRelativeTime } from '../utils/formatRelativeTime';

import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { demoChannelTitle, demoThumbnailUrl, demoVideoTitle } from '../utils/constants';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography, Box } from '@mui/material';

type Props = {
    video: SuggestedVideoItem;
}

const VideoCard: FC<Props> = ({ video: { id: { videoId }, snippet: { channelId, channelTitle, publishTime, title, thumbnails } } }) => {

    const compareTime = useMemo(() => (
        formatRelativeTime(new Date(), publishTime)
    ), [publishTime]);
  
    return (
            <Card 
                className='transition-transform hover:scale-105'
                sx={{ 
                    width: {
                        xs: '90%',
                        sm: 332,
                        md: 304
                    },
                    mx: {
                        xs: 'auto'
                    }
                }}
            >
                <Link to={`/video/${videoId}`}>
                    <CardMedia
                        component='img'
                        height={180}
                        width={360}
                        image={thumbnails.medium.url || demoThumbnailUrl}
                        alt={title}
                        sx={{
                            objectFit: 'cover'
                        }}
                    />
                    <CardContent sx={{
                        height: 14,  
                        bgcolor: '#242a33'
                    }}>
                        <Typography variant='body2' noWrap={false} sx={{
                            color: 'white',
                            overflowX: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            width: '100%'
                        }}>
                            {title || demoVideoTitle}                       
                        </Typography>
                    </CardContent>
                    <CardActions 
                        disableSpacing
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            px: 1,                        
                            mt: 'auto'       
                        }}
                    >
                    <Box>
                        <IconButton aria-label='add to favorites'>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label='share'>
                            <ShareIcon />
                        </IconButton>
                    </Box>      
                    <Box sx={{
                        ml: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: 0.5
                    }}>
                        <span className='w-full overflow-hidden font-bold text-right sm:w-44 whitespace-nowrap text-ellipsis'>
                            {channelTitle || demoChannelTitle}
                        </span>
                        <span className='text-xs text-right text-gray-600'>
                            {compareTime || '알 수 없음'}
                        </span>
                    </Box>         
                </CardActions>  
            </Link>           
        </Card>          
    );
};

export default VideoCard;