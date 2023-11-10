export interface DropdownItem {
  key: string
  label: string
  route?: string
}

export interface NavDropdownProps {
  items: DropdownItem[]
  visible: boolean
}
