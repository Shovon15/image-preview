/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import blogPageData from "@/dummyData/pageData/pages/blog";
import { SITE_URL } from "@/config";
import { NextRequest } from "next/server";

export const runtime = "edge";

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(_req: NextRequest, { params }: Props) {
  const id = (await params).id;
  const blogItem = blogPageData.items.find((item) => item.id === Number(id));

  if (!blogItem) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "1200px",
            height: "630px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#000",
            color: "#fff",
            fontSize: 48,
          }}
        >
          Blog not found
        </div>
      ),
      { width: 1200, height: 630 },
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
          color: "white",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        {/* Background image */}
        <img
          src={blogItem.cover ?? ``}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "115%",
            height: "100%",
            objectFit: "fill",
            opacity: 0.4,
          }}
        />

        {/* Overlay */}
        {/* <div
          style={{
            display: "flex",
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.85))",
          }}
        /> */}

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            // border: "1px solid white",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: 20,
              color: "red",
            }}
          >
            {blogItem.title}
          </h1>

          <p
            style={{
              fontSize: 32,
              opacity: 0.9,
              maxWidth: "90%",
            }}
          >
            {blogItem.description}
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

// /* eslint-disable @next/next/no-img-element */

// import { SITE_URL } from "@/config";
// import { ImageResponse } from "next/og";

// export async function GET() {
//   return new ImageResponse(
//     (
//       <div
//         style={{
//           width: "1200px",
//           height: "690px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           padding: "80px",
//           color: "white",
//           fontFamily: "Inter",
//           position: "relative",
//           border: " 1px solid white",
//         }}
//       >
//         <img
//           src={`${SITE_URL}/assets/city_lights.jpg`}
//           // src={"https://image-preview-lac.vercel.app/assets/city_lights.jpg"}
//           alt="..."
//           style={{
//             // height: "100%",
//             // width: "100%",
//             objectFit: "cover",
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//           }}
//         />
//         <h1
//           style={{
//             fontSize: 64,
//             fontWeight: 800,
//             lineHeight: 1.2,
//             marginBottom: 20,
//             color: "red",
//           }}
//         >
//           {"This is a sample blog post title"}
//         </h1>

//         <p
//           style={{
//             fontSize: 32,
//             opacity: 0.85,
//             maxWidth: "80%",
//           }}
//         >
//           {
//             "This is a sample excerpt for the blog post used for the Open Graph image."
//           }
//         </p>
//       </div>
//       // {
//       //   width: 1200,
//       //   height: 630,
//       // },
//       // size,
//     ),
//   );
// }
