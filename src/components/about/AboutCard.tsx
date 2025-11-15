import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import { FaRegFaceMehBlank } from "react-icons/fa6";

const AboutCard = () => {
  return (
    // <ul className="list rounded-box is-drawer-close:hidden bg-base-300 mt-3 shadow-lg inset-shadow-sm">
    //   <li className="p-4 pb-2 text-xs tracking-wide opacity-60">
    //     Most played songs this week
    //   </li>
    //   <li className="list-row">
    //     <div>
    //       <img
    //         className="rounded-box size-10"
    //         src="https://img.daisyui.com/images/profile/demo/1@94.webp"
    //       />
    //     </div>
    //     <div>
    //       <div>Dio Lupa</div>
    //       <div className="text-xs font-semibold uppercase opacity-60">
    //         Remaining Reason
    //       </div>
    //     </div>
    //     <button className="btn btn-square btn-ghost">
    //       <svg
    //         className="size-[1.2em]"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 24 24"
    //       >
    //         <g
    //           strokeLinejoin="round"
    //           strokeLinecap="round"
    //           strokeWidth="2"
    //           fill="none"
    //           stroke="currentColor"
    //         >
    //           <path d="M6 3L20 12 6 21 6 3z"></path>
    //         </g>
    //       </svg>
    //     </button>
    //     <button className="btn btn-square btn-ghost">
    //       <svg
    //         className="size-[1.2em]"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 24 24"
    //       >
    //         <g
    //           strokeLinejoin="round"
    //           strokeLinecap="round"
    //           strokeWidth="2"
    //           fill="none"
    //           stroke="currentColor"
    //         >
    //           <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    //         </g>
    //       </svg>
    //     </button>
    //   </li>
    //   <li className="list-row">
    //     <div>
    //       <img
    //         className="rounded-box size-10"
    //         src="https://img.daisyui.com/images/profile/demo/4@94.webp"
    //       />
    //     </div>
    //     <div>
    //       <div>Ellie Beilish</div>
    //       <div className="text-xs font-semibold uppercase opacity-60">
    //         Bears of a fever
    //       </div>
    //     </div>
    //     <button className="btn btn-square btn-ghost">
    //       <svg
    //         className="size-[1.2em]"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 24 24"
    //       >
    //         <g
    //           strokeLinejoin="round"
    //           strokeLinecap="round"
    //           strokeWidth="2"
    //           fill="none"
    //           stroke="currentColor"
    //         >
    //           <path d="M6 3L20 12 6 21 6 3z"></path>
    //         </g>
    //       </svg>
    //     </button>
    //     <button className="btn btn-square btn-ghost">
    //       <svg
    //         className="size-[1.2em]"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 24 24"
    //       >
    //         <g
    //           strokeLinejoin="round"
    //           strokeLinecap="round"
    //           strokeWidth="2"
    //           fill="none"
    //           stroke="currentColor"
    //         >
    //           <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    //         </g>
    //       </svg>
    //     </button>
    //   </li>
    // </ul>
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
