import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function WizardStep() {
  return (
    <div className="wizard-area px-5">
      <div className="mx-4 p-4">
        <div className="wizard-row">
          <div className="wizard-group completed">
            <div className="wizard-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="wizard-text">Personal</div>
          </div>
          <div className="wizard-trail completed" />
          <div className="wizard-group active">
            <div className="wizard-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-user-plus "
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="23" y1="11" x2="17" y2="11" />
              </svg>
            </div>
            <div className="wizard-text">Account</div>
          </div>
        </div>
      </div>
    </div>
  );
}
