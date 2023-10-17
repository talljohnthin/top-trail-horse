import classNames from "classnames";
import React from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  [propName: string]: any;
}

const Wrapper = ({ children, className, ...otherProps }: WrapperProps) => {
  return (
    <div
      className={classNames(
        "max-w-[1440px]",
        "wrapper",
        "relative w-full mx-auto px-4 md:px-8 2xl:px-0",
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Wrapper;
