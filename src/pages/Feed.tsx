import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from '../features/Feed/Sidebar';
import useSidebarStore from '../zustand/sidedbar/sidebarStore';
import Videos from '../features/Feed/Videos';

const Feed: FC = () => {

    const { selectedCategory } = useSidebarStore();

    return (
        <Stack sx={{ 
            flexDirection: {
                sx: 'column',
                md: 'row'
            }    
        }}>
            <Box sx={{
                height: {
                    sm: 'auto',
                    md: '92vh'
                },
                borderRight: '1px solid #3d3d3d',
                px: {
                    sm: 0,
                    md: 2
                },
            }}>
                <Sidebar />
                <Typography className='copyright'>
                    Copyright {new Date().getFullYear()} eeennsu
                </Typography>
            </Box>
            
            <Box sx={{
                mt: {
                    sm: 2,
                    md: 3  
                },
                ml: {
                    sm: 2,
                    md: 3
                }
            }}>
                <Typography variant='h4' sx={{
                    display: 'flex',
                    gap: 1,
                    fontSize: 34,
                    fontWeight: 600
                }}>
                    {selectedCategory}
                    <span className='text-red-600 '>Videos</span>
                </Typography>

                <Videos />
            </Box>
        </Stack>
    );
};

export default Feed;