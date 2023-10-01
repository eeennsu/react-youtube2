export type SidebarStoreType = {
    selectedCategory: string;
    setSelectedCategory: (selectedCategory: string) => void;
    
    isSearched: boolean;
    setIsSearched: (flag: boolean) => void;
}