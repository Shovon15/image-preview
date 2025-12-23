/* eslint-disable @next/next/no-img-element */

import { SITE_URL } from "@/config";
import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "690px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "white",
          fontFamily: "Inter",
          position: "relative",
          border: " 1px solid white",
        }}
      >
        <img
          src={`${SITE_URL}/assets/city_lights.jpg`}
          // src={"https://image-preview-lac.vercel.app/assets/city_lights.jpg"}
          alt="..."
          style={{
            // height: "100%",
            // width: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        <h1
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 20,
            color: "red",
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
      // {
      //   width: 1200,
      //   height: 630,
      // },
      // size,
    ),
  );
}
