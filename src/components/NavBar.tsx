import ColorThemeSwap from "./ColorThemeSwap";

interface NavbarProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<"portfolio" | "blog">>;
  setCurrentBlogPostId: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function NavBar({
  setCurrentPage,
  setCurrentBlogPostId,
}: NavbarProps) {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10 custom-box-shadow">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold "
          >
            <li>
              <a
                onClick={() => setCurrentPage("portfolio")}
                className="hover:text-blue-200"
              >
                Homepage
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setCurrentPage("blog");
                  setCurrentBlogPostId(null);
                }}
                className="hover:text-blue-200"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center lg:hidden">
        <a className="btn btn-ghost text-xl">Zhenhao Yang</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <a
              onClick={() => setCurrentPage("portfolio")}
              className="hover:text-blue-200"
            >
              Homepage
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setCurrentPage("blog");
                setCurrentBlogPostId(null);
              }}
              className="hover:text-blue-200"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end pr-4">
        <ColorThemeSwap />
      </div>
    </div>
  );
}
