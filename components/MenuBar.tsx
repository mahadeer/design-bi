export default function MenuBar() {
  return (
    <div className="menu-bar bg-gray-800 flex flex-row text-sm text-white items-center">
      <div className="menu-item px-3">
        <img className="logo" alt="ICON" src="../favicon.ico" />
      </div>
      <div className="menu-item hover:bg-gray-700 px-3">File</div>
      <div className="menu-item hover:bg-gray-700 px-3">Edit</div>
      <div className="menu-item hover:bg-gray-700 px-3">Export</div>
      <div className="menu-item hover:bg-gray-700 px-3">About</div>
    </div>
  );
}
