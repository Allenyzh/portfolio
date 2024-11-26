import BlogDate from "../components/BlogDate";
import BlogAuthor from "../components/BlogAuthor";
import BadgeStyle from "../components/BadgeStyle";
import TagLabel from "../components/TagLabel";
import blogPosts from "../data/BlogPost.json";

interface BlogPostProps {
  postId: number;
  onBack: () => void;
}

export default function BlogPost({ postId, onBack }: BlogPostProps) {
  const blogPost = blogPosts.find((post) => post.id === postId);

  if (!blogPost) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl max-h-screen flex flex-col">
        <h1 className="text-3xl font-bold mb-4 text-center ">
          404 Post Not Found
        </h1>
        <button onClick={onBack} className="btn btn-warning self-center">
          Back to Blog List
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <article className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {blogPost.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <BlogAuthor name={blogPost.author} />
            <BlogDate date={blogPost.date} />
          </div>
          {blogPost.content.map((item, index) => {
            switch (item.type) {
              case "p":
                return (
                  <p key={index} className="pb-5">
                    {item.text}
                  </p>
                );
              case "img":
                return (
                  <img
                    key={index}
                    src={item.src}
                    alt={item.alt || "Blog image"}
                    className="pb-5"
                  />
                );
              case "code":
                return (
                  <pre key={index} className="bg-gray-100 p-4 rounded mb-5">
                    <code>{item.text}</code>
                  </pre>
                );
              case "subtitle":
                return (
                  <h2 key={index} className="text-2xl font-semibold mb-4">
                    {item.text}
                  </h2>
                );
              case "li":
                return (
                  <ul key={index} className="list-disc pl-5 mb-5">
                    {Array.isArray(item.items) &&
                      item.items.map((listItem, listIndex) => (
                        <li key={listIndex}>{listItem}</li>
                      ))}
                  </ul>
                );
              default:
                return null;
            }
          })}
        </div>
        <div className="bg-gray-100 px-6 py-4 md:px-8 md:py-6">
          <div className="flex items-center flex-wrap gap-2">
            <TagLabel size={5} />
            {blogPost.tags.map((tag, index) => (
              <BadgeStyle key={index} text={tag} theme="color" />
            ))}
          </div>
        </div>
      </article>
      <div className="mt-8 text-center">
        <button onClick={onBack} className="btn btn-primary">
          Back
        </button>
      </div>
    </div>
  );
}
