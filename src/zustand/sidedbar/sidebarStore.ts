import { create } from 'zustand';
import { SidebarStoreType } from './type';

const useSidebarStore = create<SidebarStoreType>(set => ({
    selectedCategory: 'New',
    setSelectedCategory: (selectedCategory) => set(state => ({ selectedCategory }))
}));

export default useSidebarStore;