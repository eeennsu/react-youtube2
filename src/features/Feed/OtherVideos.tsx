import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';
import useSidebarStore from '../../zustand/sidedbar/sidebarStore';
import { videoSearch_API } from '../../api/api';
import VideosTable from '../../components/VideosTable';

const OtherVideos: FC = () => {

    const { selectedCategory } = useSidebarStore();

    const { data, isLoading, isError, error } = useQuery(
        ['/search', { selectedCategory }],
        () => videoSearch_API(selectedCategory),
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

export default OtherVideos;