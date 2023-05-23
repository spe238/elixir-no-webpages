import { create } from 'zustand';

interface SearchbarStore {
	openModal: boolean;
	searchValue: string;
	setOpenModal: (data: boolean) => void;
	setSearchString: (data: string) => void;
}

const useSearchStore = create<SearchbarStore>()(set => ({
	openModal: false,
	searchValue: '',
	setOpenModal: data => set({ openModal: data }),
	setSearchString: data => set({ searchValue: data }),
}));

export default useSearchStore;
