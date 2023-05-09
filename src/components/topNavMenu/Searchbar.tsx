import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Searchbar: React.FC = () => {
	return (
		<div className="rounded-full bg-rose-500 p-2 px-3 text-white hover:bg-rose-700">
			<FontAwesomeIcon icon={faMagnifyingGlass} />
		</div>
	);
};

export default Searchbar;
