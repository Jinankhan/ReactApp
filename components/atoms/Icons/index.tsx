interface IconProps {
  path: string;
  width: number;
  height: number;
  alt: string;
  sx?: React.CSSProperties;
  handleClick?: () => void;
}

export const Icons = ({
  path,
  width,
  height,
  alt,
  handleClick,
  sx,
}: IconProps) => {
  return (
    <>
      <img
        src={path}
        width={width}
        height={height}
        alt={alt}
        onClick={handleClick}
        style={sx}
      />
    </>
  );
};
