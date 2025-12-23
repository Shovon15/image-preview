import Link from "next/link";

export default function Page() {
  const posts = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col items-center gap-10 px-10">
      <p className="text-4xl font-bold text-center pt-10">Blog</p>
      <div className="flex flex-col gap-5">
        {posts.map((post) => (
          <Link
            href={`/blog/${post}`}
            key={post}
            className="border px-4 py-1 rounded-md font-medium"
          >
            Blog post #{post}
          </Link>
        ))}
      </div>
    </div>
  );
}
