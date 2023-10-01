type Thumbnail = {
    url: string;
    width: number;
    height: number;
}

type Thumbnails = {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
};

type PageInfo = {
    totalResults: number;
    resultsPerPage: number;
}

type SuggestedVideoItem = {
    kind: string;
    id: {
        kind: string;
        videoId: string;
    }
    snippet: {
        channelId: string;
        title: string;
        description: string;
        thumbnails: Thumbnails;
        channelTitle: string;
        liveBroadcastContent: string | 'none';
        publishTime: string;
        publishedAt: string;
    }
}

type ResponseType_suggestedVideos = {
    kind: string;
    nextPageToken: string;
    pageInfo: PageInfo
    items: SuggestedVideoItem[]
} 

type SearchVideoItem = {
    kind: string;
    id: string;
    snippet: {
        title: string;
        description: string;
        customUrl: string;
        publishedAt: string;
    }
    thumbnails: Thumbnails;
    localized: {
        title: string;
        description: string;
    }
    contentDetails: {
        relatedPlaylists: {
            likes: string;
            uploads: string;
        }
    };
    statistics: {
        viewCount: string;
        subscriberCount:string;
        hiddenSubscriberCount: boolean;
        videoCount: string;
    };
    brandingSettings: {
        channel: {
            title: string;
            description: string;
            keywords: string;
            unsubscribedTrailer: string;
        };
        image: {
            bannerExternalUrl: string;
        }
    }
}

type ResponseType_search = {
    kind: string;
    pageInfo: PageInfo;
    items: SearchVideoItem[]
}

