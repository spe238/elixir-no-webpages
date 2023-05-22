import { useCallback, useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ModalProps {
	isOpen: boolean;
	title: string;
	disabled?: boolean;
	onClose?: () => void;
	body: React.ReactElement | JSX.Element[];
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	title,
	disabled,
	onClose,
	body,
}) => {
	const [showModal, setShowModal] = useState<boolean>(isOpen);

	const handleClose = useCallback(() => {
		if (disabled) {
			return;
		}
		setShowModal(false);

		setTimeout(() => {
			if (!onClose) {
				return;
			}
			onClose();
		}, 300);
	}, [disabled, onClose]);

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
								className="relative flex items-center justify-center
							rounded-t p-6">
								<button
									onClick={handleClose}
									className="absolute left-9 border-0 p-1 text-elixir-orange transition
									hover:opacity-70">
									<FontAwesomeIcon icon={faXmark} size="lg" />
								</button>
								<div className="text-lg font-semibold">{title}</div>
							</div>
							{/* Body */}
							<div className="relative flex-auto p-6">{body}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
