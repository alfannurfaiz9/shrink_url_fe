interface INavLinks {
  name: string,
  to: string
}

export const navLinks: INavLinks[] = [
  { name: "Dashboard", to: "/user/dashboard" },
  { name: "Create Link", to: "/user/link" },
  { name: "Profile", to: "/user/profile" },
];


