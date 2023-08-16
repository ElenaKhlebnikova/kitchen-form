import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const signature = cloudinary.utils.api_sign_request(body.paramsToSign, process.env.CLOUDINARY_API_SECRET);

    return NextResponse.json({ signature });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      NextResponse.json({ message: error.message }, { status: 500 });
    }

    console.error(error);
    return NextResponse.json({ message: "Something went wrong"}, { status: 500 });
  }
};