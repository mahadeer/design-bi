import { MenuOptions, IMenuOption } from './Utils/MenuRegister';
import MenuDropdown from './Helpers/MenuDropdown';

export default function MenuBar() {
  return (
    <div className="menu-bar bg-gray-100 border-b border-gray-400 flex flex-row text-sm text-black items-center">
      <div className="menu-item px-3">
        <img className="logo" alt="ICON" src="../favicon.ico" />
      </div>
      {MenuOptions.map((mO: IMenuOption) => (
        <div key={mO.menuKey} className="menu-item hover:bg-gray-200 px-3">
          {mO.label}
          <MenuDropdown isOpen={mO.menuKey === 'file'} options={mO.children} />
        </div>
      ))}
    </div>
  );
}
