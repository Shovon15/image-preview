"use client";

import { useCallback, useState } from "react";

type UploadResult = {
  secure_url: string;
  public_id: string;
  width?: number;
  height?: number;
  format?: string;
};

type SignResponse = {
  timestamp: number;
  signature: string;
  folder: string;
  apiKey: string;
  cloudName: string;
};

function getExtFromContentType(contentType: string | null) {
  if (!contentType) return "jpg";
  if (contentType.includes("png")) return "png";
  if (contentType.includes("webp")) return "webp";
  if (contentType.includes("gif")) return "gif";
  if (contentType.includes("jpeg") || contentType.includes("jpg")) return "jpg";
  return "jpg";
}

export function useCloudinaryUpload() {
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<UploadResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const uploadFromUrl = useCallback(
    async (
      imageUrl: string,
      options?: {
        folder?: string;
        fileName?: string;
      },
    ) => {
      setUploading(true);
      setError(null);
      setResult(null);

      try {
        // 1) Fetch the image bytes from your URL
        const imgRes = await fetch(imageUrl, { cache: "no-store" });
        if (!imgRes.ok) throw new Error("Failed to fetch image from URL");

        const contentType = imgRes.headers.get("content-type");
        const blob = await imgRes.blob();

        // 2) Convert Blob -> File (Cloudinary accepts Blob too, but File is nicer)
        const ext = getExtFromContentType(contentType);
        const fileName = options?.fileName ?? `shared-image.${ext}`;

        const file = new File([blob], fileName, {
          type: contentType ?? "image/jpeg",
        });

        // 3) Ask your Next.js API to sign params
        const signRes = await fetch("/api/image-upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ folder: options?.folder ?? "my-app/uploads" }),
        });

        if (!signRes.ok) throw new Error("Failed to get signature");
        const { timestamp, signature, folder, apiKey, cloudName } =
          (await signRes.json()) as SignResponse;

        // const context = objectToContext({
        //   post_id: 123,
        //   author: "kawsar",
        //   category: "blog",
        //   source: "api/page/blog",
        // });

        // 4) Upload to Cloudinary
        const formData = new FormData();
        formData.append("file", file);

        formData.append("api_key", apiKey);
        formData.append("timestamp", String(timestamp));
        formData.append("signature", signature);
        formData.append("folder", folder);
        // formData.append("context", context);
        // formData.append("tags", ["blog", "share", "nextjs"].join(","));

        const cloudinaryRes = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          { method: "POST", body: formData },
        );

        const data = await cloudinaryRes.json();
        if (!cloudinaryRes.ok) {
          throw new Error(data?.error?.message || "Cloudinary upload failed");
        }

        const uploaded: UploadResult = {
          secure_url: data.secure_url,
          public_id: data.public_id,
          width: data.width,
          height: data.height,
          format: data.format,
        };

        setResult(uploaded);
        return uploaded;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        setError(e?.message ?? "Upload failed");
        return null;
      } finally {
        setUploading(false);
      }
    },
    [],
  );

  return { uploadFromUrl, uploading, result, error, setResult, setError };
}

// Helper to convert an object to Cloudinary context string format
function objectToContext(obj: Record<string, string | number>) {
  return Object.entries(obj)
    .map(([k, v]) => `${k}=${v}`)
    .join("|");
}
