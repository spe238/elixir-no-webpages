import { globalHomeRoute } from 'src/globalVariables';
import Searchbar from './Searchbar';

const Navbar: React.FC = () => {
	return (
		<div
			className="hidden flex-row items-center gap-2
      rounded-full border-[1px] border-neutral-200 p-2 shadow-sm transition 
      hover:shadow-md sm:flex">
			<a
				href={`${globalHomeRoute}/about`}
				className="cursor-pointer rounded-full p-3 transition hover:bg-gray-200">
				About Us
			</a>
			<div className="h-[25px] w-[2px] rounded-full bg-neutral-300"></div>
			<a
				href={`${globalHomeRoute}/helpdesk`}
				className="cursor-pointer rounded-full p-3 transition hover:bg-gray-200">
				Help Desk
			</a>
			<div className="h-[25px] w-[2px] rounded-full bg-neutral-300"></div>
			<a
				href={`${globalHomeRoute}/News`}
				className="cursor-pointer rounded-full p-3 transition hover:bg-gray-200">
				News
			</a>
			<div className="h-[25px] w-[2px] rounded-full bg-neutral-300"></div>
			<a
				href={`${globalHomeRoute}/Events`}
				className="cursor-pointer rounded-full p-3 transition hover:bg-gray-200">
				Events
			</a>
			<Searchbar />
		</div>
	);
};

export default Navbar;
