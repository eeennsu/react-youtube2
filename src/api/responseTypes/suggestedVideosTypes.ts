type Thumbnail = {
    url: string;
    width: number;
    height: number;
}

type Item = {
    kind: string;
    id: {
        kind: string;
        videoId: string;
    }
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
            default: Thumbnail;
            medium: Thumbnail;
            high: Thumbnail;
        };
        channelTitle: string;
        liveBroadcastContent: string | 'none';
        publishTime: string;
    }
}

type ResponseType_suggestedVideos = {
    kind: string;
    nextPageToken: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    }
    items: Item[]
} 