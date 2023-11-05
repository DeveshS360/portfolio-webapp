export interface DropdownItem {
    key: string;
    label: string;
}

export interface NavDropdownProps  {
    items: DropdownItem[]
    visible: boolean;
}