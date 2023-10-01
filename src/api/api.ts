import axiosInst from './axiosInst';

export const getSuggestedVideos_API = () => axiosInst.get<ResponseType_suggestedVideos>('/search', { params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50',
}});

export const videoSearch_API = (searchTerm: string) => axiosInst.get('/search', {
    params: {
        q: searchTerm,
        part: 'snippet,id',
        regionCode: 'KR',
        maxResults: '50',
        order: 'date'
    },
})