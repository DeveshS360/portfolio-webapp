import { NavItemProps } from "../NavItem/types";

export const Nav_Items: NavItemProps[] = [
  {
    name: 'home',
    label: 'Home',
  },
  {
    name: 'pages',
    label: 'Pages',
    dropdownItems: [
      {
        key: 'about_me',
        label: 'About Me'
      },
      {
        key: 'faq',
        label: 'FAQs',
      },
    ]
  },
  {
    name: 'contact',
    label: 'Contact',
  },
]
