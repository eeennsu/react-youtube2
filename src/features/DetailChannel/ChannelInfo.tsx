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
    )

    console.log('channelInfo', data?.data);

    const item = data?.data.items[0];
    
    return (
        <Box>
            <Box>
                <div style={{
                    zIndex: 10,
                    height: 300,
                    background: 'linear-gradient(90deg, rgba(252,138,231,1) 0%, rgba(235,255,141,1) 50%, rgba(112,220,242,1) 100%)'
                }} />
                {
                    isLoading && (
                        <Loading />
                    )
                }
                {
                    (data && item) && (
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 4,
                        }}>
                            <img className='border-2 border-white rounded-full' src={item.snippet.thumbnails.medium.url} />
                            <div>
                                {item.snippet.title}
                            </div>
                        </Box>
                    )
                }
            </Box>      
        </Box>
    );
};

export default ChannelInfo;