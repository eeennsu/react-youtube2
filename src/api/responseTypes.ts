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

type Snippet = {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string | 'none';
    publishTime: string;
    publishedAt: string;
    thumbnails: Thumbnails;
    title: string;
}

type Statistics = {
    viewCount: string;
    subscriberCount:string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
}

type SuggestedVideoItem = {
    kind: string;
    id: {
        kind: string;
        videoId: string;
    }
    snippet: Snippet;
}

type ResponseType_suggestedVideos = {
    kind: string;
    nextPageToken: string;
    pageInfo: PageInfo
    items: SuggestedVideoItem[]
} 

type SearchVideoItem = {
    kind: string;
    id: {
        kind: string;
        videoId: string;
    };
    snippet: Snippet;
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
    statistics: Statistics;
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

type ResponseType_searchVideos = {
    kind: string;
    pageInfo: PageInfo;
    items: SearchVideoItem[],
    regionColde: string;
    nextPageToken: string;
}

type ChannelInfoItem = {
    brandingSettings: {
        channel: {
            title: string;
        }
    };
    contentDetails: {
        id: string;
        kind: string;
    };
    snippet: {
        customUrl: string;
        description: string;
        localized: {
            title: string;
            description: string;
        };
        publishedAt: string;
        thumbnails: Thumbnails;
        title: string;
    };
    statistics: Statistics;
}

type ResponseType_channelInfo = {
    items: ChannelInfoItem[];
    kind: string;
    pageInfo: PageInfo
}   

type ChannelVideosItem = {
    id: {
        kind: string;
        playlistId: string;
    };
    kind: string;
    snippet: Snippet;
}

type Response_channelVideos = {
    items: ChannelVideosItem[];
    kind: string;
    nextPageToken: string;
    pageInfo: PageInfo;
    regionCode: string;
}

type DetailVideoItem = {
    contentDetails: {
        caption: 'false' | 'true'
        contentRating: unknown;
        definition: string;
        dimension: string;
        duration: string;
        licensedContent: string;
        projection: string;
    };
    id: string;
    kind: string;
    snippet: {
        categoryId: string;
        channelId: string;
        channelTitle: string;
        defaultAudioLanguage: string;
        defaultLanguage: string;
        description: string; 
        liveBroadcastContent: string;
        localized: {
            description: string;
            title: string;
        }
        publishedAt: string;
        tags: string[];
        thumbnails: Thumbnails & {
            maxres: Thumbnail;
            standard: Thumbnail;
        };
        title: string;
    }
    statistics: {
        commentCount: string;
        favoriteCount: string;
        likeCount: string;
        viewCount: string;
    }
}

type Response_detailVideo = {
    items: DetailVideoItem[];
    kind: string;
    pageInfo: PageInfo;
}