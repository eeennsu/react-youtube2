import { create } from 'zustand';
import { SidebarStoreType } from './type';

const useSidebarStore = create<SidebarStoreType>(set => ({
    selectedCategory: '',
    setSelectedCategory: (selectedCategory) => set(state => ({ selectedCategory })),

    isSearched: false,
    setIsSearched: (flag) => set(state => ({ isSearched: flag }))
}));

export default useSidebarStore;