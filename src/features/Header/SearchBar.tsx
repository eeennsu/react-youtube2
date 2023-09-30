import { useRef, type FC, FormEvent, ChangeEvent } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: FC = () => {
    
    const refSearchTerm = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(refSearchTerm.current?.value);
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
                className='text-lg text-white bg-transparent border-none outline-none md:text-xl placeholder:text-gray-300/50' 
                placeholder='Saerch...'
                ref={refSearchTerm}
            />
        </form>
    );
};

export default SearchBar;