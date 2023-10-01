import type  { FC } from 'react';
import { Stack } from '@mui/material';
import { categories } from '../../utils/constants';
import MenuListItem from './MenuListItem';

const Sidebar: FC = () => {

    return (
        <Stack 
            direction='row'
            sx={{
                overflowY: 'auto',
                height: {
                    sx: 'auto',
                    md: '95%',
                },
                flexDirection: {
                    md: 'column'
                },
                gap: {
                    xs: '6px',
                    md: '16px'
                },
                mt: 4,
                width: {
                    md: 220
                }
            }}
        >
            {
                categories.map((category) => (
                    <MenuListItem 
                        key={category.name} 
                        category={category} 
                    />
                ))
            }
        </Stack>
    );
};

export default Sidebar;