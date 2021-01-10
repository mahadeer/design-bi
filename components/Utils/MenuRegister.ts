type TClickEvent = () => void;

export interface IMenuOption {
  menuKey: string;
  label: string;
  isRoot: boolean;
  children: IMenuOption[];
  onClick: TClickEvent;
}

const FileMenuChildren = ['new', 'open', 'save'].map((fM: string) => ({
  menuKey: fM.replace(/ /g, '_'),
  label: fM,
  isRoot: false,
  children: [],
  onClick: () => {},
}));

export const MenuOptions: IMenuOption[] = [
  {
    menuKey: 'file',
    label: 'File',
    isRoot: true,
    children: FileMenuChildren,
    onClick: () => {},
  },
  {
    menuKey: 'edit',
    label: 'Edit',
    isRoot: true,
    children: FileMenuChildren,
    onClick: () => {},
  },
  {
    menuKey: 'export',
    label: 'Export',
    isRoot: true,
    children: FileMenuChildren,
    onClick: () => {},
  },
  {
    menuKey: 'about',
    label: 'About',
    isRoot: true,
    children: FileMenuChildren,
    onClick: () => {},
  },
];
