import type { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loading: FC = () => {

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <CircularProgress color='secondary' />
        </div>
    );
};

export default Loading;