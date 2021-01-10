import { IMenuOption } from '../Utils/MenuRegister';

interface IMenuDropdownProps {
  options: IMenuOption[];
  isOpen: boolean;
}

export default function MenuDropdown(props: IMenuDropdownProps) {
  const { isOpen, options } = props;
  return (
    <ul className={`menu bg-gray-100 ${isOpen ? 'open' : ''} shadow-lg`}>
      {options.map((option: IMenuOption) => {
        if (option === null) {
          return <li className="seperator" />;
        }
        return (
          <li key={option.menuKey} className="menu-sub-item hover:bg-gray-200">
            {option.label}
          </li>
        );
      })}
    </ul>
  );
}
