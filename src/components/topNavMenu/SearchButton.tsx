import useSearchStore from '@utils/useSearchStore';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchButton: React.FC = () => {
	const openSearchModal = useSearchStore().setOpenModal;
	const handleOnClick = () => {
		openSearchModal(true);
	};

	return (
		<button onClick={handleOnClick}>
			<FontAwesomeIcon
				icon={faMagnifyingGlass}
				className="rounded-full bg-elixir-orange p-2 text-white"
				size="lg"
			/>
		</button>
	);
};
export default SearchButton;
