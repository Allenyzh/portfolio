import { useState } from "react";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState<"portfolio" | "blog">(
    "portfolio"
  );
  const [currentBlogPostId, setCurrentBlogPostId] = useState<number | null>(
    null
  );

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100 text-slate-950">
        <div className="navbar bg-base-100 sticky top-0 z-10 text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">Zhenhao Yang</a>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <main className="flex-1">
          {currentPage === "portfolio" && <Portfolio />}
          {currentPage === "blog" &&
            (currentBlogPostId !== null ? (
              <BlogPost
                postId={currentBlogPostId}
                onBack={() => setCurrentBlogPostId(null)}
              />
            ) : (
              <Blog onPostClick={(id: number) => setCurrentBlogPostId(id)} />
            ))}
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
