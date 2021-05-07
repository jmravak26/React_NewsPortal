import React from "react";
import "./Page.scss";

interface Props {
  header: React.ReactNode | string;
  content: React.ReactNode | string;
  menu: React.ReactNode | string;
  
}
export default function Page(props: Props) {
  return (
    <div className="page">
      <div className="pageHeader">{props.header}</div>
      <div className="pageMenu">{props.menu}</div>
      <div className="pageContent">{props.content}</div>         
    </div>
  );
}
