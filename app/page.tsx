import { SITE_URL } from "@/config";
import { url } from "inspector/promises";
import { Metadata } from "next";
import Link from "next/link";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Social Share Preview",
//   description: "This is a social share preview.",
//   openGraph: {
//     title: "Social Share Preview",
//     description: "This is a social share preview.",
//     images: [
//       {
//         url: "/assets/city_lights.jpg",
//         width: 1200,
//         height: 630,
//         alt: "city_lights",
//       },
//     ],
//   },
// };

// async function getHello() {
//   const res = await fetch(SITE_URL + "/api/page/blog", {
//     cache: "no-store",
//   });

//   return res.json();
// }

const Home = async () => {
  // const data = await getHello();
  // console.log("data", data);
  return (
    <div className="flex flex-col items-center gap-10 px-10">
      <p className="text-4xl font-bold text-center pt-10">Hello world!</p>
      <Link href="/blog">
        <button className="cursor-pointer border  px-4 py-1 rounded-md font-medium">
          Blog
        </button>
      </Link>
      {/* <p>{data.message}</p> */}
    </div>
  );
};
export default Home;
