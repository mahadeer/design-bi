import FooterArea from '../components/FooterArea';
import NavBarArea from '../components/NavBarArea';
import WizardStep from '../components/Helpers/WizardStep';

export default function CreateReport() {
  return (
    <div className="laptop:block hidden">
      <div className="create-report-page h-screen bg-gray-200">
        <NavBarArea />
        <WizardStep />
        <div className="form-area" />
        <div className="action-area" />
        <FooterArea />
      </div>
    </div>
  );
}
