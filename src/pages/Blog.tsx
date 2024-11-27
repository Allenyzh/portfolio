import "./Blog.css";
import BlogDate from "../components/BlogDate";
import TagLabel from "../components/TagLabel";
import BadgeStyle from "../components/BadgeStyle";
import BlogPost from "../data/BlogPost.json";
import clsx from "clsx";
import { useState, useEffect } from "react";
interface BlogProps {
  onPostClick: (id: number) => void;
}

export default function Blog({ onPostClick }: BlogProps) {
  const [currentTheme, setCurrentTheme] = useState<string | null>("");

  useEffect(() => {
    const getTheme = () => document.documentElement.getAttribute("data-theme");
    setCurrentTheme(getTheme());

    const observer = new MutationObserver(() => {
      setCurrentTheme(getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    //
    return () => observer.disconnect();
  }, []);
  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-8">Blog Posts</h2>
      <div className="grid gap-8">
        {BlogPost.map((post) => (
          <article
            key={post.id}
            className={clsx("p-6 rounded-lg shadow-md", {
              "bg-neutral-100": currentTheme === "dark",
              "bg-neutral-50": currentTheme === "nord",
            })}
          >
            <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
            <div className="flex items-center text-gray-600 mb-4">
              <BlogDate date={post.date} />
            </div>
            <p className="text-gray-700 mb-4 blog-description">
              {post.description}
            </p>
            <div className="flex items-center mb-4">
              <TagLabel p={2} />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <BadgeStyle key={index} text={tag} theme="color" />
                ))}
              </div>
            </div>
            <button
              onClick={() => onPostClick(post.id)}
              className="btn btn-outline btn-primary"
            >
              Read More
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
