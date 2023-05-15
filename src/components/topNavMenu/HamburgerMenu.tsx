import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HamburgerMenu: React.FC = () => {
	return (
		<button>
			<FontAwesomeIcon icon={faBars} />
		</button>
	);
};

export default HamburgerMenu;
