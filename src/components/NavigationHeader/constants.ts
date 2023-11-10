import { NavItemProps } from '../NavItem/types'

export const Nav_Items: NavItemProps[] = [
  {
    name: 'home',
    label: 'Home',
    route: '/',
  },
  {
    name: 'pages',
    label: 'Pages',
    dropdownItems: [
      {
        key: 'about_me',
        label: 'About Me',
        route: '/about-me',
      },
      {
        key: 'faq',
        label: 'FAQs',
      },
      {
        key: 'dummy_li1',
        label: 'Dummy Item 1',
      },
      {
        key: 'dummy_li2',
        label: 'Dummy Item 2',
      },
      {
        key: 'dummy_li3',
        label: 'Dummy Item 3',
      },
      {
        key: 'dummy_li4',
        label: 'Dummy Item 4',
      },
    ],
  },
  {
    name: 'contact',
    label: 'Contact',
  },
]
