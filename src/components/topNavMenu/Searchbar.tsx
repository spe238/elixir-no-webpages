import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Searchbar: React.FC = () => {
	return (
		<div className="rounded-full bg-elixir-orange p-2  px-3 text-white transition hover:bg-orange-600">
			<FontAwesomeIcon icon={faMagnifyingGlass} />
		</div>
	);
};

export default Searchbar;
