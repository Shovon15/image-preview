// import { ImageResponse } from "next/og";
// // import { getPost } from '@/app/lib/data'

// // Image metadata
// export const size = {
//   width: 5400,
//   height: 1630,
// };

// export const contentType = "image/png";

// export default async function OpenGraphImage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   //   const post = await getPost(params.slug)

//   return new ImageResponse(
//     (
//       <div
//         style={{
//           // width: "1200px",
//           // height: "630px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           padding: "80px",
//           color: "white",
//           fontFamily: "Inter",
//           position: "relative",
//           border: " 2px solid red",

//           // backgroundImage: `url(${new URL(
//           //   "/assets/city_lights.jpg",
//           //   "https://image-preview-lac.vercel.app",
//           //   // "http://localhost:3000",
//           // )})`,
//           // backgroundSize: "fit",
//           // backgroundPosition: "100% 100%",
//           // backgroundRepeat: "no-repeat",
//           //   border: "10px solid red",
//         }}
//       >
//         <img
//           src={"https://image-preview-lac.vercel.app/assets/city_lights.jpg"}
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
//     ),
//     {
//       width: 1200,
//       height: 630,
//     },
//     // size,
//   );
// }
