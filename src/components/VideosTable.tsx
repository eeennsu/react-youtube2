import type { FC } from 'react';
import { Stack, } from '@mui/material';
import { Loading, Error, VideoCard, ChannelCard } from '.';

type Props = {
    isLoading: boolean;
    isError: boolean;
    error: unknown;
    items?: SuggestedVideoItem[] | SearchVideoItem[];     // null일 수도 있으므로
    chanelVideosItem?: ChannelVideosItem[];
}

const VideosTable: FC<Props> = ({ isError, isLoading, items, error, chanelVideosItem }) => {

    return (    
        <Stack
            direction={'row'}
            sx={{
                display: 'flex',
                flexWrap: 'wrap', 
                width: '100%',
                height: '100%',
                rowGap: 4,
                mt: 2
            }}
        >
            {
                isLoading && (
                    <Loading />
                ) 
            }
            {
                isError && (
                    <Error error={error as Error} /> 
                )
            }
            {
                items?.map((item) => (
                    item.id.videoId ? (
                        <VideoCard key={item.id.videoId} video={item}/> 
                    ) : item.snippet.channelId ? (
                        <ChannelCard key={item.snippet.channelId} channel={item}/>
                    ) : null
                )) 
            }
            {
                chanelVideosItem?.map((item) => (
                    <VideoCard key={item.id.playlistId} channelVideo={item}/> 
                ))
            }
        </Stack>
    );
};

export default VideosTable;