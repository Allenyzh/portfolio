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
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <button
          onClick={onBack}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
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

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
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
        <button
          onClick={onBack}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Back to Blog List
        </button>
      </div>
    </div>
  );
}
