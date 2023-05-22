import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSearchbarStore from '@utils/useSearchbarStore';
import type { MarkdownInstance } from 'astro';
import { useState, useCallback, useRef, useEffect } from 'react';

interface SearchModalProps {
	mdData: MarkdownInstance<Record<string, any>>[];
	isOpen: boolean;
}

const SearchModal: React.FC<SearchModalProps> = ({ mdData, isOpen }) => {
	// scroll
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollTop =
				scrollContainerRef.current.scrollHeight;
		}
	}, []);

	const [showModal, setShowModal] = useState<boolean>(isOpen);
	const handleClose = useCallback(() => {
		setShowModal(false);

		setTimeout(() => {
			return;
		}, 300);
	}, [showModal]);

	// search logic
	const searchStore = useSearchbarStore();
	const [resultArray, setResultArray] = useState<
		MarkdownInstance<Record<string, any>>[]
	>([]);
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		searchStore.setSearchString(e.target.value);
		const results = mdData.filter(file =>
			file.file.includes(searchStore.searchValue)
		);
		setResultArray(results);
	};

	return (
		<>
			<div
				className="fixed inset-0 z-50 flex items-center justify-center
				overflow-y-auto overflow-x-hidden bg-neutral-800/70 outline-none
				focus:outline-none">
				<div
					className="relative mx-auto my-6 h-full w-full md:h-auto md:w-4/6
				lg:h-auto lg:w-3/6 xl:w-2/5">
					<div
						className={`translate h-full duration-300 
						${showModal ? `translate-y-0` : `translate-y-full`}
						${showModal ? `opacity-100` : `opacity-0`}
						`}>
						<div
							className="translate relative flex h-full w-full flex-col
						rounded-lg border-0 bg-white shadow-lg outline-none
						focus:outline-none md:h-auto lg:h-auto">
							{/* Header */}
							<div
								className="relative flex items-center justify-between
							rounded-t p-6">
								<button
									onClick={handleClose}
									className="left-9 rounded-full border-0 bg-elixir-orange px-2 py-1 text-white transition
									hover:opacity-70">
									<FontAwesomeIcon icon={faXmark} size="lg" />
								</button>
								<div className="text-lg">
									<input
										type="text"
										autoFocus
										placeholder="Serch"
										className="rounded-full bg-neutral-400/30 py-1 pl-3"
										onChange={handleOnChange}
									/>
								</div>
								<FontAwesomeIcon
									icon={faMagnifyingGlass}
									className="rounded-full bg-elixir-orange p-2 text-white"
									size="lg"
								/>
							</div>
							{/* Body */}
							<div
								className="relative max-h-80 flex-auto overflow-y-scroll p-6"
								ref={scrollContainerRef}>
								{resultArray.map(file => (
									<ResultCard file={file} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchModal;

interface ResultCardProp {
	file: MarkdownInstance<Record<string, any>>;
}
const ResultCard: React.FC<ResultCardProp> = ({ file }) => {
	return (
		<a href={file.url} className="rounded-lg drop-shadow-md">
			{file.file}
		</a>
	);
};
