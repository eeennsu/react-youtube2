import type { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

type Props = {
    size?: number;
}

const Loading: FC<Props> = ({ size = 50 }) => {

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <CircularProgress color='warning' size={size} />
        </div>
    );
};

export default Loading;