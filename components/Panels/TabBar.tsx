import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTools } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

interface ITabContentProps {
  iconKey: string;
  icon: IconDefinition;
  label: string;
  isActive: boolean;
}

const tabs: Array<ITabContentProps> = [
  {
    iconKey: 'design',
    icon: faTools,
    label: 'Design',
    isActive: true,
  },
  {
    iconKey: 'axis',
    icon: faCog,
    label: 'Axis Settings',
    isActive: false,
  },
];

const TabContent = (props: ITabContentProps) => {
  const {
    iconKey, icon, label, isActive,
  } = props;
  return (
    <div
      className={`tab-content hover:bg-gray-200 ${iconKey}-tab ${
        isActive ? 'bg-gray-300' : ''
      } 
      grid grid-rows-2 text-center items-center p-2`}
    >
      <span className="tab-icon text-2xl">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="tab-label">{label}</span>
    </div>
  );
};

export default function TabBar() {
  return (
    <div className="tab-bar bg-white border-l border-gray-400">
      <div className="tab-names grid cursor-default">
        {tabs.map((tab: ITabContentProps) => (
          <TabContent key={tab.iconKey} {...tab} />
        ))}
      </div>
    </div>
  );
}
