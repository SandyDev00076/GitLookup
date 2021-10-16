import React from "react";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}
const GoodAnchor = ({ children, ...props }: Props) => {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default GoodAnchor;
