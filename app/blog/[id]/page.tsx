/* eslint-disable @typescript-eslint/no-explicit-any */

// import { SITE_URL } from "@/config";
// import { useCloudinaryUpload } from "@/hooks/useCloudinaryUpload";
// import { Metadata } from "next";
import SingleBlogPage from "./components/SingleBlogPage";

// async function getMetaData() {
//   const res = await fetch(SITE_URL + "/api/page/blog", {
//     cache: "no-store",
//   });

//   return res;
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const ogImageUrl = `${SITE_URL}/api/page/blog`;

//   return {
//     title: "This is a static title",
//     description: "This is a static description.",

//     openGraph: {
//       title: "This is a static title",
//       description: "This is a static description.",
//       type: "article",
//       images: [
//         {
//           url: ogImageUrl,
//           width: 1200,
//           height: 630,
//           alt: "Blog Open Graph Image",
//         },
//       ],
//     },

//     twitter: {
//       card: "summary_large_image",
//       title: "This is a static title",
//       description: "This is a static description.",
//       images: [ogImageUrl],
//     },
//   };
// }

const page = async () => {
  // const { uploadFromUrl, uploading, result, error } = useCloudinaryUpload();
  // console.log(uploading, result, error, ".............................");

  // const imageUrl = `${SITE_URL}/api/page/blog`;
  // const data = await getMetaData();
  // console.log(data, "Data");

  // const handleUpload = async () => {
  //   await uploadFromUrl(imageUrl, {
  //     folder: "my-app/blog",
  //     fileName: "blog-share.jpg",
  //   });
  // };

  // const handleUpload = async () => {
  //   const res = await fetch("/api/cloudinary/upload-from-url", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       // imageUrl: `${SITE_URL}/api/page/blog`,
  //       imageUrl: imageUrl,
  //     }),
  //   });

  //   const data = await res.json();
  //   console.log("Uploaded:", data);
  // };

  return <SingleBlogPage />;
};

export default page;
