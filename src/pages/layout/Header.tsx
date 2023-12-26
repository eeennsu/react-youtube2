import type { FC } from 'react';
import { logo } from '../../constants';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../../features/Header/SearchBar';
import useSidebarStore from '../../zustand/sidedbar/sidebarStore';

const Header: FC = () => {

    const navigate = useNavigate();    

    const { selectedCategory, setSelectedCategory, setIsSearched } = useSidebarStore();

    const handleResetCategory = () => {
        navigate('/');
        setSelectedCategory('New');
        setIsSearched(false);
    }

    return (
        <header className='sticky top-0 flex items-center justify-around px-2 py-3 gap-x-12 lg:gap-x-0 lg:justify-between lg:px-4'>
            <div className='flex items-center cursor-pointer' onClick={handleResetCategory}>
                <img src={logo} className='h-[45px]' />
            </div>  
            <div className='w-56 md:w-72 lg:w-1/3'>
                <SearchBar />
            </div>    
        </header>
    );
};

export default Header;