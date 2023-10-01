// 방법 1
// export { default as Feed } from './Feed';
// export { default as DetailVideo } from './DetailVideo';
// export { default as DetailChannel } from './DetailChannel';
// export { default as SearchFeed } from './SearchFeed';

// 방법 2
import Feed from './Feed';
import DetailVideo from './DetailVideo';
import DetailChannel from './DetailChannel';

export {
    Feed,
    DetailVideo,    
    DetailChannel,
}