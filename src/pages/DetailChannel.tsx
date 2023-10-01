import type { FC } from 'react';
import { Box } from '@mui/material';
import { ChannelInfo, ChannelVideos } from '../features/DetailChannel';

const DetailChannel: FC = () => {

    return (
        <Box>
            <ChannelInfo />
            <ChannelVideos />
        </Box>
    );
};

export default DetailChannel;
