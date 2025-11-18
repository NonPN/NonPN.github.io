import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { FaRegFaceMehBlank } from "react-icons/fa6";
import resume from "@/assets/resume.pdf";

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
          <div className="divider">OR</div>
          <div className="group relative cursor-pointer">
            <div className="from-primary to-accent absolute -inset-1 rounded-lg bg-linear-to-r opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <a
              className="bg-base-200 relative flex items-center justify-center space-x-3 rounded-lg px-1 py-5 leading-none ring-1 ring-gray-900/5"
              href={resume}
              download="non_puthikanon_resume.pdf"
            >
              <span className="text-xs font-bold">Download my Resume</span>
              <FaFileDownload size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
