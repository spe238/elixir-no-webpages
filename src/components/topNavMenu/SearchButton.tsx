import useSearchStore from '@utils/useSearchStore';
import { HiMagnifyingGlassCircle } from 'react-icons/hi2';

const SearchButton: React.FC = () => {
	const openSearchModal = useSearchStore().setOpenModal;
	const handleOnClick = () => {
		openSearchModal(true);
	};

	return (
		<button onClick={handleOnClick}>
			<HiMagnifyingGlassCircle size={52} className="text-elixir-orange" />
		</button>
	);
};
export default SearchButton;
