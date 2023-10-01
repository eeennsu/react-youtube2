import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';
import { getChannelVideos_API } from '../../api/api';
import { useParams } from 'react-router-dom';

const ChannelVideos: FC = () => {

    const { id } = useParams();

    const { data, isError, error, isLoading } = useQuery(
        ['getChannelVideos', { id }],
        () => getChannelVideos_API(id),
        {
            staleTime: Infinity,
            retry: 1,
            enabled: Boolean(id),
            refetchOnWindowFocus: false,
        }
    )

    // console.log('channelVideos', data?.data);

    return (
        <div className=''>
           
        </div>
    );
};

export default ChannelVideos;