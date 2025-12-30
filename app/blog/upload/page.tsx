"use client";

import { useState } from "react";

type UploadResult = {
  secure_url: string;
  public_id: string;
  width?: number;
  height?: number;
  format?: string;
};

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<UploadResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const uploadToCloudinary = async () => {
    if (!file) return;

    setUploading(true);
    setError(null);
    setResult(null);

    try {
      // 1) Ask your Next.js API to sign params
      const signRes = await fetch("/api/image-upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ folder: "my-app/uploads" }),
      });

      if (!signRes.ok) throw new Error("Failed to get signature");
      const { timestamp, signature, folder, apiKey, cloudName } =
        await signRes.json();

      // 2) Upload directly to Cloudinary Upload API
      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", apiKey);
      formData.append("timestamp", String(timestamp));
      formData.append("signature", signature);
      formData.append("folder", folder);

      const cloudinaryRes = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: "POST", body: formData }
      );

      const data = await cloudinaryRes.json();
      if (!cloudinaryRes.ok) {
        throw new Error(data?.error?.message || "Cloudinary upload failed");
      }

      setResult({
        secure_url: data.secure_url,
        public_id: data.public_id,
        width: data.width,
        height: data.height,
        format: data.format,
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      setError(e?.message ?? "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ padding: 24, maxWidth: 560 }}>
      <h2>Upload Image to Cloudinary</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />

      <button
        onClick={uploadToCloudinary}
        disabled={!file || uploading}
        style={{ marginTop: 12 }}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div style={{ marginTop: 16 }}>
          <p>
            <b>public_id:</b> {result.public_id}
          </p>
          <img
            src={result.secure_url}
            alt="uploaded"
            style={{ width: "100%", borderRadius: 12 }}
          />
        </div>
      )}
    </div>
  );
}
