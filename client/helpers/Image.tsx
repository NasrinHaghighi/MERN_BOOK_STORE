import Image, { StaticImageData } from "next/image";

interface Props {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  width: number;
  height: number;
  onClick?: () => void;
  borderRaduis?:number
  // layout: string | null;
}

export const Images: React.FC<Props> = ({
  className,
  src,
  alt,
  width,
  height,
  onClick,

  // layout,
}) => {
  return (
    <Image
      width={width}
      height={height}
      className={className}
      
      src={src}
      alt={alt}
      onClick={onClick}
    />
  );
};
