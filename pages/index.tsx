export default function App() {
  return (
    <div className="laptop:block hidden">
      <div className="app-container h-screen bg-gray-100">
        <div className="nav-bar bg-gray-100" />
        <div className="menu-bar bg-gray-800" />
        <div className="design-area filter-off settings-off">
          <div className="filter-area bg-gray-700" />
          <div className="filter-bar bg-gray-700" />
          <div className="report-area mx-5 my-10 bg-white" />
          <div className="settings-area bg-gray-600" />
          <div className="tab-bar bg-gray-700" />
        </div>
        <div className="status-bar bg-gray-800" />
        <div className="footer-area bg-gray-100" />
      </div>
    </div>
  );
}
