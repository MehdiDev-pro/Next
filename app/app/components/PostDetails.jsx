export default async function PostDetails({ postId }) {
    await new Promise((resolve) => {
      setTimeout(() => {
          resolve()
      }, 2000)
    })

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      // ISR
      next: {
        revalidate: 60,
      },
    });
    const post = await response.json();
    console.log(post);
    return (
      <div style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", textAlign: "start", marginBottom: "30px", paddingLeft: "10px", background: "white", borderRadius: "10px", color: "black", width: "90%", height: "100px" }}>
          <h2>{post.title}</h2>
          <h4 style={{ opacity: "0.8" }}>{post.body}</h4>
        </div>
      </div>
    );
  }