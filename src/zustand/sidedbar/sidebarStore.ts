import { create } from 'zustand';
import { SidebarStoreType } from './type';

const useSidebarStore = create<SidebarStoreType>(set => ({
    selectedCategory: '',
    setSelectedCategory: (selectedCategory) => set(state => ({ selectedCategory }))
}));

export default useSidebarStore;