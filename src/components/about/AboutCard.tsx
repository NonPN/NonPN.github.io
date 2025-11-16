import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaRegFaceMehBlank } from "react-icons/fa6";

const AboutCard = () => {
  return (
    <div>
      <button
        onClick={() => {}}
        className="btn btn-soft is-drawer-close:p-0 is-drawer-open:hidden mt-3 w-full"
      >
        <FaRegFaceMehBlank
          className="is-drawer-open:ml-2 is-drawer-close:size-4"
          size={20}
        />
      </button>
      <div className="card is-drawer-close:hidden from-base-300 to-base-100 mt-3 bg-linear-to-b shadow-lg inset-shadow-sm">
        <div className="card-body p-4">
          <h2 className="card-title">Would like to know more about me?</h2>
          <ul className="list">
            <li className="list-row px-0">
              <label className="flex gap-5">
                <div className="flex w-18 items-center gap-2">
                  <FaGithub />
                  <text className="text-xs">GitHub</text>
                </div>
                <a
                  href="https://github.com/NonPN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-info link-hover text-xs"
                >
                  NonPN
                </a>
              </label>
            </li>
            <li className="list-row px-0">
              <label className="flex gap-5">
                <div className="flex w-18 items-center gap-2">
                  <FaLinkedin />
                  <text className="text-xs">LinkedIn</text>
                </div>
                <a
                  href="https://www.linkedin.com/in/non-puthikanon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-info link-hover text-xs"
                >
                  non-puthikanon
                </a>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
