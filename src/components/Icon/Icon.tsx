import { getIcon, IconName } from "@/lib/Icons";

type IconProps = {
  name: IconName;
  width?: string;
  height?: string;
  className?: string;
  color?: string;
};

export const Icon = ({ name, width, height, className, color }: IconProps) => {
  const icon = getIcon(name);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={icon.viewBox}
      fill={color ? color : icon.fill}
      width={width}
      height={height}
      dangerouslySetInnerHTML={{ __html: icon.graphic }}
      className={className}
    ></svg>
  );
};
