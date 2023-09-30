import type { FC } from 'react';
import { useEffect } from 'react';
import axiosInst from '../../api/axiosInst';
import { useQuery } from '@tanstack/react-query';
import { getSuggestedVideos_API } from '../../api/api';
import useSidebarStore from '../../zustand/sidedbar/sidebarStore';

const Videos: FC = () => {

    const { selectedCategory } = useSidebarStore();

    const { data, isLoading, error } = useQuery(
        ['/search'],
        () => getSuggestedVideos_API('sex')
    );  

    console.log(data?.data.items);

    return (
        <div>
            
        </div>
    );
};

export default Videos;