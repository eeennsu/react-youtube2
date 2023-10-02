import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';
import { getChannelVideos_API } from '../../api/api';
import { useParams } from 'react-router-dom';
import { Loading, VideoCard } from '../../components';
import VideosTable from '../../components/VideosTable';
import { Box } from '@mui/material';

const ChannelVideos: FC = () => {

    const { channelId } = useParams();

    const { data, isError, error, isLoading } = useQuery(
        ['getChannelVideos', { channelId }],
        () => getChannelVideos_API(channelId),
        {
            staleTime: Infinity,
            retry: 1,
            enabled: Boolean(channelId),
            refetchOnWindowFocus: false,
        }
    );

    console.log(data?.data);

    return (
        <Box sx={{
            maxWidth: 1024,
            marginX: 'auto'
        }}>
            {/* {
                isLoading && (
                    <Loading />
                )
            } */}
            {
                data && (
                    <VideosTable 
                        error={error}
                        isError={isError}
                        isLoading={isError}
                        chanelVideosItem={data.data.items}
                    />
                )
            }
        </Box>
    );
};

export default ChannelVideos;