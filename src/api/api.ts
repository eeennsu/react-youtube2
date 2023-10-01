import axiosInst from './axiosInst';

export const getSuggestedVideos_API = () => 
    axiosInst.get<ResponseType_suggestedVideos>('/search', { params: {
        relatedToVideoId: '7ghhRHRP6t4',
        part: 'id,snippet',
        type: 'video',
        maxResults: '50',
    }}
);

export const videoSearch_API = 
    (searchTerm: string) => 
    axiosInst.get<ResponseType_searchVideos>('/search', {
        params: {
            q: searchTerm,
            part: 'snippet,id',
            regionCode: 'KR',
            maxResults: '50',
            order: 'date'
        },
    }
);

export const getDetailChannel_API = 
    // channelId 를 받아오는 데에 시간이 걸릴 수 있으므로
    (channelId?: string) => 
    axiosInst.get<ResponseType_channelInfo>('/channels', {
        params: {
            part: 'snippet,statistics',
            id: channelId
        }
    }
);

export const getChannelVideos_API = 
    (channelId?: string) => 
    axiosInst.get<Response_channelVideos>('/search', {
        params: {
            channelId,
            part: 'snippet,id',
            order: 'date',
            maxResults: '50'
        }
    }
);
