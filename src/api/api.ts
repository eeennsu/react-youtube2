import axiosInst from './axiosInst';

export const getSuggestedVideos_API = (selectedCategory: string) => axiosInst.get<ResponseType_suggestedVideos>('/search', { params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50',
    q: selectedCategory
}});