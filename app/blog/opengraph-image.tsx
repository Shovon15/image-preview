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
          backgroundImage: `url(${new URL(
            "/assets/city_lights.jpg",
            "https://image-preview-lac.vercel.app",
          )})`,
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
          {"This is a sample blog post title"}
        </h1>

        <p
          style={{
            fontSize: 32,
            opacity: 0.85,
            maxWidth: "80%",
          }}
        >
          {
            "This is a sample excerpt for the blog post used for the Open Graph image."
          }
        </p>
      </div>
    ),
    size,
  );
}
