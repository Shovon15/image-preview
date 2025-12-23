import { ImageResponse } from "next/og";
// import { getPost } from '@/app/lib/data'

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: { slug: string };
}) {
  //   const post = await getPost(params.slug)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          color: "white",
          fontFamily: "Inter",
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          {"post.title"}
        </h1>

        <p
          style={{
            fontSize: 32,
            opacity: 0.85,
            maxWidth: "80%",
          }}
        >
          {"post.excerpt || post.description"}
        </p>
      </div>
    ),
    size,
  );
}
