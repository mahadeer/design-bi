/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faShare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function FooterArea() {
  const onShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: 'design-bi',
        url: window.location.href,
      });
    }
  };
  return (
    <footer className="footer-area bg-gray-100 px-4 text-black border-t border-gray-400">
      <div className="flex flex-row w-full h-full items-center">
        <div className="mr-auto text-left">© 2021 Mahadeer Mohamed</div>
        <div className="flex justify-center items-center space-x-6 mt-0 text-xl">
          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:mahadeer@outlook.com"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://mahadeer.github.io/"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" onClick={onShareClick}>
            <FontAwesomeIcon icon={faShare} />
          </a>
        </div>
      </div>
    </footer>
  );
}
