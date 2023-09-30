import type { FC } from 'react';
import sidebarStore from '../../zustand/sidedbar/sidebarStore';
import { memo } from 'react';

type Props = {
    category: Category;
}

const MenuListItem: FC<Props> = ({ category }) => {

    const { selectedCategory, setSelectedCategory } = sidebarStore();

    const isSelected = selectedCategory === category.name;

    const handleCategoryChange = () => {
        setSelectedCategory(category.name)
    }

    return (
        <button 
            className={`flex items-center w-full px-4 py-2 text-white transition-colors duration-200 ${isSelected ? 'bg-red-600' : 'bg-transparent'} border-none outline-none cursor-pointer group justify-start rounded-2xl hover:bg-red-600`}
            onClick={handleCategoryChange}
        >
            <span className={` ${isSelected ? 'text-white' : 'text-red-600'} group-hover:text-white`}>
                {category.icon}
            </span>
            <span className='ml-2 lg:ml-4'>
                {category.name}
            </span>
        </button>     
    );
};

export default memo(MenuListItem);