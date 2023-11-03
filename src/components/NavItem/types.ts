import { DropdownItem } from "../NavDropdown/types";

export interface NavItemProps {
    dropdownItems?: DropdownItem[];
    label: string;
    name?: string;
}