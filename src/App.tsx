import type { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './pages/layout/RootLayout';
import { Feed, DetailVideo, DetailChannel } from './pages';

const App: FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RootLayout />}>
                    <Route index element={<Feed />}/>
                    <Route path='/video/:videoId' element={<DetailVideo />}/>
                    <Route path='/channel/:channelId' element={<DetailChannel />}/>
                    {/* <Route path='/search/:searchTerm' element={<SearchFeed />}/> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;