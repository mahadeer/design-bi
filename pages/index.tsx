import BannerSVG from '../components/Helpers/BannerSVG';
import FooterArea from '../components/FooterArea';

export default function LandingPage() {
  return (
    <div className="laptop:block hidden">
      <div className="landing-page h-screen bg-white">
        <div className="design-bi-banner mx-20">
          <BannerSVG />
        </div>
        <div className="landing-actions mx-20">
          <a
            href="/create-report"
            className="create-report button button-primary"
          >
            Create Report
          </a>
          <a
            href="/load-report"
            className="load-report button button-secondary"
          >
            Load Report
          </a>
        </div>
        <div className="service-message mx-20">
          <p className="button button-info">
            Under Construction. Want to get involved please contact us.
          </p>
        </div>
        <FooterArea />
      </div>
    </div>
  );
}
