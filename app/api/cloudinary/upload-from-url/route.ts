/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export const runtime = "nodejs";

type Body = {
  imageUrl: string; // your OG API URL
  title?: string;
  description?: string;
  folder?: string;
  tags?: string[];
  blogId?: string;
  author?: string;
  publicId?: string; // optional overwrite id
};

function toContext(obj: Record<string, string | number | undefined>) {
  return Object.entries(obj)
    .filter(([, v]) => v !== undefined && v !== null && String(v).length > 0)
    .map(([k, v]) => `${k}=${encodeURIComponent(String(v))}`)
    .join("|");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    const {
      imageUrl,
      title,
      description,
      folder,
      tags,
      blogId,
      author,
      publicId,
    } = body;

    if (!imageUrl) {
      return NextResponse.json(
        { message: "imageUrl required" },
        { status: 400 },
      );
    }

    // 1) Fetch the generated OG image bytes
    const imgRes = await fetch(imageUrl, {
      cache: "no-store",
      // Optional headers if needed:
      // headers: { "User-Agent": "Mozilla/5.0" },
    });

    if (!imgRes.ok) {
      const text = await imgRes.text().catch(() => "");
      return NextResponse.json(
        { error: `Failed to fetch OG image: ${imgRes.status} ${text}` },
        { status: 400 },
      );
    }

    const contentType = imgRes.headers.get("content-type") || "image/png";

    // Convert to Buffer
    const arrayBuffer = await imgRes.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 2) Build context + options
    const context = toContext({
      source: "next/og",
      page: "blog",
      uploaded_by: "share_button",
      title,
      description,
      blogId,
      author,
    });

    const uploadOptions: any = {
      folder: folder ?? "my-app/blog",
      resource_type: "image",
      tags: tags ?? ["blog", "share", "nextjs"],
      context,
      // set format if you want (png/jpg/webp) – optional
      // format: "png",
      // if you want same public_id for overwrite:
      ...(publicId ? { public_id: publicId, overwrite: true } : {}),
    };

    // 3) Upload buffer using upload_stream
    const result = await new Promise<any>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        uploadOptions,
        (err, res) => {
          if (err) reject(err);
          else resolve(res);
        },
      );
      stream.end(buffer);
    });

    return NextResponse.json({
      secure_url: result.secure_url,
      public_id: result.public_id,
      width: result.width,
      height: result.height,
      format: result.format,
      bytes: result.bytes,
      context: result.context,
      tags: result.tags,
      contentType,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Upload failed" },
      { status: 500 },
    );
  }
}
