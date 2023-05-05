import { CaretDownIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

const navMenuItemCSS =
	'mx-2 text-xl text-white hover:underline hover:decoration-elixir-orange hover:decoration-2 hover:underline-offset-8';

export default function NavMenu() {
	const [aboutDropdownVisible, setAboutDropdownVisible] = useState(false);

	const toggleAboutDropdown = () => {
		setAboutDropdownVisible(!aboutDropdownVisible);
	};

	return (
		<div className="z-50">
			<ul className="flex flex-row">
				<li>
					<NavMenuLink link="/elixir-no-webpages/" label="Home" />
				</li>
				<li>
					<NavMenuLink link="/elixir-no-webpages/helpdesk" label="Helpdesk" />
				</li>
				<li>
					<NavMenuLink link="/elixir-no-webpages/services" label="Services" />
				</li>
				<li>
					<NavMenuLink link="/elixir-no-webpages/training" label="Training" />
				</li>
				<li>
					<NavMenuLink link="/elixir-no-webpages/news" label="News" />
				</li>
				<li>
					<NavMenuLink link="/elixir-no-webpages/events" label="Events" />
				</li>
				{/* about us */}
				<li>
					<button onClick={toggleAboutDropdown} className={navMenuItemCSS}>
						<div
							className="flex flex-row items-center"
							onMouseEnter={() => setAboutDropdownVisible(true)}>
							About us <CaretDownIcon />
							<span
								className="relative place-content-center"
								aria-hidden></span>
						</div>
					</button>
					{aboutDropdownVisible && (
						<div
							className=" absolute w-full rounded-lg bg-gray-700/70 sm:w-auto"
							onMouseLeave={() => setAboutDropdownVisible(false)}>
							<div className="flex flex-col lg:flex-row">
								<div className="mx-2 my-1 flex flex-col items-center justify-start py-2 hover:rounded-md hover:bg-gray-700">
									<NavMenuLink
										link="/elixir-no-webpages/about/organisation"
										label="Organisation"
									/>
									<NavMenuLink
										link="/elixir-no-webpages/about/organisation/bergen"
										label="Bergen"
									/>
									<NavMenuLink
										link="/elixir-no-webpages/about/organisation/oslo"
										label="Oslo"
									/>
									<NavMenuLink
										link="/elixir-no-webpages/about/organisation/trondheim"
										label="Trondheim"
									/>
									<NavMenuLink
										link="/elixir-no-webpages/about/organisation/tromsoe"
										label="Tromsø"
									/>
									<NavMenuLink
										link="/elixir-no-webpages/about/organisation/aas"
										label="Ås"
									/>
								</div>
								<div className="mx-2 my-1 flex flex-col items-center justify-start py-2 hover:rounded-md hover:bg-gray-700">
									<NavMenuLink
										link="/elixir-no-webpages/about/biomeddata"
										label="BioMedData"
									/>
									<NavMenuLink
										link="/elixir-no-webpages/about/biomeddata/ls-rdm"
										label="LS RDM"
									/>
								</div>
								<div className="mx-2 my-1 flex flex-col items-center justify-start py-2 hover:rounded-md hover:bg-gray-700">
									<NavMenuLink
										link="/elixir-no-webpages/about/international-involvement"
										label="International"
									/>
									<NavMenuLink
										link="/elixir-no-webpages/about/international-involvement/elixir-eu"
										label="Elixir EU"
									/>
									<NavMenuLink
										link="/elixir-no-webpages/about/international-involvement/eu-projects"
										label="EU Projects"
									/>
									<NavMenuLink
										link="/elixir-no-webpages/about/international-involvement/global-biodata-coalition"
										label="Biodata"
									/>
								</div>
							</div>
						</div>
					)}
				</li>
			</ul>
		</div>
	);
}

interface Props {
	link: string;
	label: string;
}

function NavMenuLink({ link, label }: Props) {
	return (
		<a
			href={link}
			className="mx-2 my-1 text-xl text-white hover:underline hover:decoration-elixir-orange hover:decoration-2 hover:underline-offset-8">
			{label}
		</a>
	);
}
