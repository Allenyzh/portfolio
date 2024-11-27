import { useState } from "react";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Navbar from "./components/NavBar";
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
      <div className="flex flex-col min-h-screen ">
        <Navbar
          setCurrentPage={setCurrentPage}
          setCurrentBlogPostId={setCurrentBlogPostId}
        />
        <main className="flex-1">
          {currentPage === "portfolio" &&
            (currentBlogPostId !== null ? (
              <BlogPost
                postId={currentBlogPostId}
                onBack={() => setCurrentBlogPostId(null)}
              />
            ) : (
              <Portfolio
                onPostClick={(id: number) => setCurrentBlogPostId(id)}
              />
            ))}

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
