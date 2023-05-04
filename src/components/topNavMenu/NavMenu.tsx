import * as Nav from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';

const navMenuItemCSS =
	'mx-2 text-xl text-white hover:underline hover:decoration-elixir-orange hover:decoration-2 hover:underline-offset-8';

export default function NavMenu() {
	return (
		<Nav.Root className="z-50">
			<Nav.List className="flex flex-row">
				<Nav.Item>
					<NavMenuLink link="/elixir-no-webpages/" label="Home" />
				</Nav.Item>
				<Nav.Item>
					<NavMenuLink link="/elixir-no-webpages/services" label="Services" />
				</Nav.Item>
				<Nav.Item>
					<NavMenuLink link="/elixir-no-webpages/training" label="Training" />
				</Nav.Item>
				<Nav.Item>
					<NavMenuLink link="elixir-no-webpages/news" label="News" />
				</Nav.Item>
				<Nav.Item>
					<NavMenuLink link="elixir-no-webpages/events" label="Events" />
				</Nav.Item>
				{/* about us */}
				<Nav.Item>
					<Nav.Trigger className={navMenuItemCSS}>
						<div className="flex flex-row items-center">
							About us
							<CaretDownIcon
								className="relative place-content-center"
								aria-hidden
							/>
						</div>
					</Nav.Trigger>
					<Nav.Content className="absolute left-32 top-10 w-full rounded-lg bg-gray-700/70 sm:w-auto">
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
					</Nav.Content>
				</Nav.Item>
			</Nav.List>
		</Nav.Root>
	);
}

interface NavMenuLinkProp {
	link: string;
	label: string;
}

const NavMenuLink = ({ link, label }: NavMenuLinkProp) => {
	return (
		<Nav.Link asChild>
			<a
				href={link}
				// TODO(): replace with navMenuItemCSS when done
				className="mx-2 my-1 text-xl text-white hover:underline hover:decoration-elixir-orange hover:decoration-2 hover:underline-offset-8">
				{label}
			</a>
		</Nav.Link>
	);
};
