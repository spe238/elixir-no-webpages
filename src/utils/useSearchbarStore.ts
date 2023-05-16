import { create } from 'zustand';

interface SearchbarStore {
	searchValue: string;
	setSearchString: (data: string) => void;
}

const useSearchbarStore = create<SearchbarStore>()(set => ({
	searchValue: '',
	setSearchString: data => set({ searchValue: data }),
}));

export default useSearchbarStore;
