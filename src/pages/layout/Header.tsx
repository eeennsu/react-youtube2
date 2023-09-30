import type { FC } from 'react';
import { logo } from '../../utils/constants';
import { Link } from 'react-router-dom';
import SearchBar from '../../features/Header/SearchBar';

const Header: FC = () => {

    return (
        <header className='sticky top-0 flex items-center justify-around px-2 py-3 gap-x-12 lg:gap-x-0 lg:justify-between lg:px-4'>
            <div className='flex items-center'>
                <Link to='/'>
                    <img src={logo} className='h-[45px]' />
                </Link>
            </div>  
            <div>
                <SearchBar />
            </div>    
        </header>
    );
};

export default Header;