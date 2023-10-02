import type { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSuggestedVideos_API } from '../../api/api';
import { Stack } from '@mui/material';
import { VideoCard } from '../../components';

type Props = {
    videoId: string;
}

const RelatedVideos: FC<Props> = ({ videoId }) => {

    const { data, isError, error, isLoading } = useQuery(
        ['relatedToVideoId', { videoId }],
        () => getSuggestedVideos_API(videoId),
        {
            staleTime: Infinity,
            retry: 1,
            enabled: Boolean(videoId),
            refetchOnWindowFocus: false,
        }
    );

    return (
        <Stack sx={{
            gap: 2, 
        }}>
            {
                data && (
                    data.data.items.map((item) => (
                        <VideoCard key={item.id.videoId} video={item} />
                    ))
                )
            }
        </Stack>
    );
};

export default RelatedVideos;