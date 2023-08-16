import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

const options = {
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  invalidate: true,
};

export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
  return cloudinary.uploader
    .destroy(params.id, options)
    .then((res) => {
      return NextResponse.json(res);
    })
    .catch((error) => {
      if (error instanceof Error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 });
      }

      console.error(error);
      return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    });
};