export interface NavItem {
  name: string;
  path: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    name: 'About Us',
    path: '/about',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Patient Safety',
    path: '/patient-safety'
  },
  {
    name: 'Contact',
    path: '/contact',
  }
];
