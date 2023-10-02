import type { FC } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { countFormat } from '../../utils/countFormat';

type Props = {
    item: DetailVideoItem
}

const VideoTitle: FC<Props> = ({ item }) => {

    const navigate = useNavigate();

    const handleChannelLink = () => {
        navigate(`/channel/${item.snippet.channelId}`);
    }

    return (
        <Box sx={{
            py: 1,
            px: 2
        }}>
            <Typography variant='h4' sx={{
                fontSize: 36,
                fontWeight: 500
            }}>
                {item?.snippet?.title}
            </Typography>
            <Typography variant='body2' sx={{
                display: 'flex',
                width: '100%',               
            }}>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    color: '#fff',
                    mt: 2,
                    maxWidth: 1340
                }}>
                    <Typography onClick={handleChannelLink} className='cursor-pointer '>
                        {item?.snippet?.channelTitle}
                    </Typography>
                    <Stack direction='row' gap={3}>
                        <Typography sx={{
                            opacity: 0.9,
                        }}>
                            조회수 &nbsp;{countFormat(item.statistics.viewCount)} 회                 
                        </Typography>
                        |
                        <Typography sx={{
                            opacity: 0.9,
                        }}>
                            좋아요 {countFormat(item.statistics.likeCount)}          
                        </Typography>
                    </Stack>                 
                </Box>
            </Typography>
        </Box>
    );
};

export default VideoTitle;