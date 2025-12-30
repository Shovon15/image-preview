import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const folder = body?.folder ?? "uploads";

    // Cloudinary expects a unix timestamp (seconds)
    const timestamp = Math.floor(Date.now() / 1000);

    // Add any params you will also send from the client
    const paramsToSign = {
      timestamp,
      folder,
      // You can add more: public_id, tags, eager, context etc.
    };

    // Generate signature using Cloudinary SDK
    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.CLOUDINARY_API_SECRET as string
    );

    return NextResponse.json({
      timestamp,
      signature,
      folder,
      apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message ?? "Failed to sign request" },
      { status: 500 }
    );
  }
}
