"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "next/navigation";
import blogPageData from "@/dummyData/pageData/pages/blog";
import { SITE_URL } from "@/config";
import { useState } from "react";

const SingleBlogPage = () => {
  // const params = useParams();
  const params = useParams<{ id: string }>();
  const id = params?.id;
  // const { id } = await params;
  const [isUploading, setIsUploading] = useState(false);

  const blogItem = blogPageData.items.find((item) => item.id === Number(id));

  const ogImageUrl = `${SITE_URL}/api/page/blog/${id}`;

  const handleUpload = async () => {
    if (isUploading) return; // extra safety

    try {
      setIsUploading(true);

      const payload = {
        imageUrl: `${SITE_URL}/api/page/blog/${id}`,
        title: blogItem?.title || "",
        description: blogItem?.description || "",
        folder: "my-app/blog",
        tags: ["blog", "share", "nextjs"],
      };

      const res = await fetch("/api/cloudinary/upload-from-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Upload failed");
      }

      // console.log("Uploaded:", data);

      // share after upload success
      await shareContent();
    } catch (e: any) {
      console.error(e?.message || e);
      alert(e?.message || "Something went wrong");
    } finally {
      setIsUploading(false);
    }
  };

  const shareContent = async () => {
    // console.log("clicked", navigator.share);
    if (navigator.share) {
      try {
        await navigator.share({
          title: blogItem?.title || "",
          url: `${SITE_URL}/blog/${id}`,
          // text: "Check out this content!",
        });
        // console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that do not support the Web Share API
      alert(
        "Web Share API is not supported in your browser. You can copy the URL manually.",
      );
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 px-10">
      <p className="text-4xl font-bold text-center pt-10">Blog Pages</p>
      <p className="text-3xl font-bold text-center">{blogItem?.title}</p>

      {/* Preview OG image */}
      <img
        src={ogImageUrl}
        alt="blog og"
        className="max-w-full rounded-lg border"
      />

      <button
        onClick={handleUpload}
        disabled={isUploading}
        className={`
    px-4 py-1 rounded-md text-white flex items-center gap-2 border
    ${
      isUploading
        ? "bg-blue-300 cursor-not-allowed"
        : "bg-blue-500 cursor-pointer"
    }
  `}
      >
        {isUploading && (
          <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        )}

        {isUploading ? "Uploading..." : "Share Image"}
      </button>

      <p className="pb-10">
        {blogItem ? blogItem.description : "Blog not found"}
      </p>
    </div>
  );
};

export default SingleBlogPage;
