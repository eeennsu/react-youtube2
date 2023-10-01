import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from '../features/Feed/Sidebar';
import useSidebarStore from '../zustand/sidedbar/sidebarStore';
import Videos from '../features/Feed/SuggestedVideos';
import SuggestedVideos from '../features/Feed/SuggestedVideos';
import OtherVideos from '../features/Feed/OtherVideos';

const Feed: FC = () => {

    const { selectedCategory } = useSidebarStore();

    return (
        <Stack sx={{ 
            flexDirection: {
                sx: 'column',
                md: 'row'
            },
        }}>
            <Box sx={{               
                borderRight: '1px solid #3d3d3d',
                px: {
                    sm: 0,
                    md: 2
                },
                height: {
                    sx: 'auto',
                    md: '80vh'
                }
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
                },
                width: '100%',  
                height: '86vh',                 
                display: 'flex',
                flexDirection: 'column',
                alignItems: {
                    xs: 'center',
                    md: 'start'
                },
                overflowY: 'auto',
                
            }}>
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
                    {selectedCategory === '' ? 'Recommend' : selectedCategory}
                    <span className='text-red-600'>Videos</span>
                </Typography>      
                    {
                        selectedCategory === '' ? (
                            <SuggestedVideos />
                        ) : (
                            <OtherVideos />
                        )
                    }                                                              
            </Box>
        </Stack>
    );
};

export default Feed;