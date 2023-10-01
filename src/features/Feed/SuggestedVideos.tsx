import type { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSuggestedVideos_API } from '../../api/api';
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