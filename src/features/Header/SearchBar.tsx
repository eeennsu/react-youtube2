import type { FC, FormEvent } from 'react';
import { useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import useSidebarStore from '../../zustand/sidedbar/sidebarStore';

const SearchBar: FC = () => {
    
    const { setSelectedCategory, setIsSearched } = useSidebarStore();

    const refSearchTerm = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setSelectedCategory(refSearchTerm.current?.value as string);
        setIsSearched(true);
    }                       
    
    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-row-reverse items-center px-4 py-2 transition-colors bg-gray-500 rounded lg:flex-row hover:bg-gray-400 gap-x-2'
        >
            <button type='submit' className='flex items-center justify-center w-10 h-10 transition-colors bg-transparent border-none rounded-full hover:bg-white/50'>
                <SearchIcon className='text-white'/>
            </button>
            <input 
                className='w-full text-lg text-white bg-transparent border-none outline-none md:text-xl placeholder:text-gray-300/50' 
                placeholder='Saerch...'
                ref={refSearchTerm}
            />
        </form>
    );
};

export default SearchBar;