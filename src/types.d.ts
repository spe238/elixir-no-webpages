interface LeftMenuItems {
	label: string;
	link: string;
	subItems?: LeftMenuItem[];
}
export interface LeftMenuProps {
	menuName: string;
	menuItems: LeftMenuItems[];
}
