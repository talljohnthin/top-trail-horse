import classNames from "classnames";
import React from "react";

interface Props {
  border?: string;
  color?: string;
  children?: React.ReactNode | string;
  height?: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
  className?: string;
}

const Button: React.FC<Props> = ({
  border,
  children,
  height,
  onClick,
  radius,
  width,
  className,
}) => {
  return (
    <button
      className={classNames(
        "group inline-block py-3 px-8 text-base font-medium leading-normal rounded bg-brand-red hover:bg-opacity-75  text-white hover:text-opacity-75 transition duration-200 overflow-hidden cursor-pointer relative",
        className
      )}
      onClick={onClick}
      style={{
        // backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
