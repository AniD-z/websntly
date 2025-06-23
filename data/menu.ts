// menu.ts

export type MenuItem = {
  href: string;
  label: string;
};

const menu: MenuItem[] = [
  {
    href: "/", 
    label: "About us",
  },
  {
    href: "/magazine",
    label: "Materials",
  },
  {
    href: "", // This is just a placeholder
    label: "Contact Us",
  },
];

export default menu;
