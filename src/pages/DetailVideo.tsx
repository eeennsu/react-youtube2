import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { VideoTitle } from '../components';
import { useQuery } from '@tanstack/react-query';
import { getDetailVideo_API } from '../api/api';
import { Box, Stack } from '@mui/material';
import ReactPlayer from 'react-player';
import RelatedVideos from '../features/DetailVideo/RelatedVideos';

const DetailVideo: FC = () => {

    const { videoId } = useParams();
    
    const { data, isError, error, isLoading } = useQuery(
        ['getDetailVideo', { videoId }],
        () => getDetailVideo_API(videoId as string),
        {
            staleTime: Infinity,
            retry: 1,
            enabled: Boolean(videoId),
            refetchOnWindowFocus: false,
        }
    );

    console.log('data', data?.data);

    return (
        <>
            {
                data && (
                    <Stack direction={{ xs: 'column', md: 'row' }} >
                        <Box flex={1}>
                            <Box sx={{
                                width: '100%',
                                position: 'sticky',
                                top: 86,                            
                            }}>                        
                                <ReactPlayer className='react-player' url={`https://www.youtube.com/watch?v=${videoId}`} controls />
                                <VideoTitle item={data.data.items[0]} />                        
                            </Box>
                        </Box>   
                        <Box sx={{
                            px: 2,
                            py: {
                                md: 1,
                                xs: 2
                            },
                            justifyContent: 'center',
                            alignItems: 'center',
                            maxHeight: '85vh',
                            overflowY: 'auto',                       
                        }}>
                            <RelatedVideos videoId={videoId as string} />
                        </Box>                    
                    </Stack>    
                )
            }           
        </>
    );
};
//  px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'
export default DetailVideo;