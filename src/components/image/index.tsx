import NextImage from "next/image";

interface ImageProps {
  src: any;
  alt?: any;
  className?: any;
  width?: any;
  height?: any;
  lazy?: boolean;
}

const Image = ({
  src,
  alt = "",
  className,
  width = undefined,
  height = undefined,
  lazy = true,
}: ImageProps) => {
  if (lazy && width) {
    const loader = ({ src }: { src: string }) => src;
    return (
      <NextImage
        src={src}
        loader={loader}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  } else {
    return <img src={src.src} alt={alt} className={className} />;
  }
};

export default Image;
