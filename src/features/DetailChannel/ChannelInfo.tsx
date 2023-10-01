import type { FC } from 'react';
import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getDetailChannel_API } from '../../api/api';
import { ChannelCard, Loading } from '../../components';

const ChannelInfo: FC = () => {

    const { id } = useParams();

    const { data, isError, error, isLoading } = useQuery(
        ['getDetailChannel', { id }],
        () => getDetailChannel_API(id),
        {
            staleTime: Infinity,
            retry: 1,
            enabled: Boolean(id),
            refetchOnWindowFocus: false,
        }
    );

    const item = data?.data.items[0];
    
    return (
        <Box>
            <div style={{
                zIndex: 10,
                height: 270,           
                background: 'linear-gradient(90deg, rgba(252,138,231,1) 0%, rgba(235,255,141,1) 50%, rgba(112,220,242,1) 100%)'
            }} />
            {
                isLoading && (
                    <div className='mt-4'>
                        <Loading  /> 
                    </div>
                )
            }
            {
                (data && item) && (
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -14,
                    }}>
                        <img className='rounded-full' src={item.snippet.thumbnails.medium.url} />
                        <p className='p-2 text-3xl md:text-4xl'>
                            {item.snippet.title}
                        </p>
                        <p className='mt-2 italic'>   
                            {item.statistics.viewCount} Subscribers
                        </p>
                    </Box>
                )
            }
        </Box>      
    );
};

export default ChannelInfo;