import { NavItemProps } from "../NavItem/types";

export const Nav_Items: NavItemProps[] = [
  {
    name: 'home',
    label: 'Home',
    dropdownItems: [
      {
        key: 'first',
        label: 'First'
      },
      {
        key: 'second',
        label: 'Second',
      },
      {
        key: 'third',
        label: 'Third'
      },
      {
        key: 'fourth',
        label: 'Fourth',
      },
      {
        key: 'fifth',
        label: 'Fifth',
      },
    ]
  },
  {
    name: 'service',
    label: 'Service',
  },
  {
    name: 'blog',
    label: 'Blog',
  },
  {
    name: 'pages',
    label: 'Pages',
  },
  {
    name: 'contact',
    label: 'Contact',
  },
]
