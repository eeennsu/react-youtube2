import type { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSuggestedVideos_API } from '../../api/api';
import { Stack } from '@mui/material';
import { Error, Loading } from '../../components';
import VideoCard from '../../components/VideoCard';
import { demoThumbnailUrl, categories, demoChannelTitle, demoChannelUrl, demoProfilePicture, demoVideoTitle, demoVideoUrl, logo } from '../../utils/constants';
import ChannelCard from '../../components/ChannelCard';
import VideosTable from '../../components/VideosTable';


const SuggestedVideos: FC = () => {

    const { data, isLoading, isError, error } = useQuery(
        ['getSuggestedVideos'],
        getSuggestedVideos_API,
        {
            refetchOnWindowFocus: false,
        }
    );  

    return (
        <VideosTable 
            isLoading={isLoading}
            error={error}
            isError={isError}
            items={data?.data.items}
        />
    );
};

export default SuggestedVideos;