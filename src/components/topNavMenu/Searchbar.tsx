import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSearchStore from '@utils/useSearchStore';
import { useCallback, useEffect, useRef, useState, KeyboardEvent } from 'react';

const Searchbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [inputString, setInputString] = useState('');
	const useSearchbar = useSearchStore();

	const ref = useRef<HTMLDivElement>(null);

	const handleClick = useCallback(() => {
		setIsOpen(!isOpen);
	}, [isOpen]);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputString(e.target.value);
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			useSearchbar.setSearchString(inputString);
			setIsOpen(false);
			useSearchbar.setOpenModal(true);
		}
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref?.current?.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);

	return (
		<div ref={ref}>
			<button
				onClick={handleClick}
				className="z-20 rounded-full bg-elixir-orange  p-2 px-3 text-white
					 transition hover:bg-orange-600">
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</button>
			{isOpen && (
				<form
					className="absolute flex h-fit w-fit -translate-x-[12.5rem] -translate-y-10 flex-row
				rounded-full border-[1px] border-neutral-300 bg-white shadow-md transition">
					<input
						type="text"
						placeholder="Search"
						autoFocus
						className="z-10 rounded-full p-2 transition"
						onChange={handleOnChange}
						onKeyDown={handleKeyDown}
					/>
				</form>
			)}
		</div>
	);
};

export default Searchbar;
