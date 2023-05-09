import { globalHomeRoute } from 'src/globalVariables';
import Searchbar from './Searchbar';

const Navbar: React.FC = () => {
	return (
		<div
			className="hidden cursor-pointer flex-row items-center gap-2 rounded-full 
      border-[1px] border-neutral-200 p-2 shadow-sm transition hover:shadow-md 
      sm:flex">
			<a
				href={`${globalHomeRoute}/about`}
				className="rounded-full px-3 py-1 hover:bg-gray-200">
				About Us
			</a>
			<a
				href={`${globalHomeRoute}/helpdesk`}
				className="rounded-full px-3 py-1 hover:bg-gray-200">
				Help Desk
			</a>
			<a
				href={`${globalHomeRoute}/News`}
				className="rounded-full px-3 py-1 hover:bg-gray-200">
				News
			</a>
			<a
				href={`${globalHomeRoute}/Events`}
				className="rounded-full px-3 py-1 hover:bg-gray-200">
				Events
			</a>
			<Searchbar />
		</div>
	);
};

export default Navbar;
