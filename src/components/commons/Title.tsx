import type { FC, PropsWithChildren } from 'react';
import { Typography } from '@mui/material';

const Title: FC<PropsWithChildren> = ({ children }) => {

    return (
        <Typography 
            variant='h4' 
            sx={{
                display: 'flex',
                gap: 1,
                fontSize: 34,
                fontWeight: 600,
                p: 1
            }}
        >
            {children}
        </Typography>      
    );
};

export default Title;