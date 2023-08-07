import { resolve } from "styled-jsx/css";
import PostDetails from "@/app/components/PostDetails";
import { Suspense } from "react";

export default async function PostDetailsPage({ params }) {
  const postId = params.postId;
  const loadingJsx = (
    <div>
        <h1>Loading...</h1>
    </div>
  )
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1 style={{ marginBottom: "50px" }}>Post Details</h1>
      <Suspense fallback={loadingJsx}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
