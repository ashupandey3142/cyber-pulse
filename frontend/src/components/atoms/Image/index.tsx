interface ImageProps {
  src: string
  alt: string
  height?: string
  width?: string
  style?: React.CSSProperties
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  height,
  width,
  style,
}: ImageProps) => {
  return <img src={src} alt={alt} height={height} width={width} style={style} />
}

export default Image
