import type { FC } from 'react';
import { Box, CardContent, CardMedia, Typography, Card } from '@mui/material';
import { demoChannelTitle, demoProfilePicture } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

type Props = {
    channel: SuggestedVideoItem;
}

const ChannelCard: FC<Props> = ({ channel: { snippet: { channelId, channelTitle, thumbnails, } } }) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/channel/${channelId}`);
    }

    return (
        <Card 
            className='transition-transform cursor-pointer hover:scale-105'      
            onClick={handleNavigate}
            sx={{
                boxShadow: 'none',
                borderRadius: 4,
                width: {
                    xs: '90%',
                    sm: 332,
                    md: 304
                },
                mx: {
                    xs: 'auto'
                },   
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#131212'      
            }}
        >       
            <CardMedia 
                image={thumbnails.high?.url || demoProfilePicture} 
                sx={{
                    borderRadius: '50%',
                    height: 190,
                    width: 190, 
                    mt: 2,           
                    objectFit: 'cover',
                    border: '1px solid #e3e3e3',        
                }} 
            />
            <CardContent sx={{
                display: 'flex',              
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                width: '100%',           
                mt: 'auto'
            }}>                    
                <Typography variant='h6' className='line-clamp-2' sx={{                  
                    overflow: 'hidden', 
                    whiteSpace: 'nowrap', 
                    textOverflow: 'ellipsis',
                }}>
                    {channelTitle || demoChannelTitle}
                </Typography>                    
            </CardContent>        
        </Card>
    );
};

export default ChannelCard;