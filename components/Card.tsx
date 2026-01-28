import Image, { StaticImageData } from "next/image";
import noImage from "@/assets/no-image.png";

export const Card = ({
  image,
  alt,
  title,
  price,
  description,
}: {
  image?: StaticImageData;
  alt: string;
  title?: string;
  price?: string;
  description?: string;
}) => {
  return (
    <div className="flex flex-col shadow-lg rounded-lg p-4 max-w-[448px] z-20">
      <div className="flex justify-center">
        <Image
          className="rounded-lg max-h-[400px]"
          src={image || noImage}
          alt={alt}
          width={400}
          height={400}
        />
      </div>

      <div className="flex items-end justify-between font-bold mt-4">
        <h1 className="text-2xl leading-none">{title}</h1>
        <p className="text-xl leading-none">{price}</p>
      </div>

      {description && <p className="text-gray-500 mt-2">{description}</p>}
    </div>
  );
};
