import MenuBar from '../components/MenuBar';
import DesignArea from '../components/DesignArea';
import FooterArea from '../components/FooterArea';

export default function App() {
  return (
    <div className="laptop:block hidden">
      <div className="app-container h-screen bg-gray-200">
        <MenuBar />
        <DesignArea />
        <FooterArea />
      </div>
    </div>
  );
}
