import Link from "next/link";
export const metadata = {
  title: "Posts",
};

export default async function PostPafe() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // ISR
    next: {
      revalidate: 60,
    },
  });
  const posts = await response.json();
  const postJSX = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", textAlign: "start", marginBottom: "30px", paddingLeft: "10px", background: "white", borderRadius: "10px", color: "black", width: "90%", height: "100px" }}>
        <h2>{post.title}</h2>
        <h4 style={{ opacity: "0.8" }}>{post.body}</h4>
      </Link>
    );
  });

  return (
    <div>
      <h1 style={{ marginBottom: "50px" }}>Posts Page</h1>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>{postJSX}</div>
    </div>
  );
}
