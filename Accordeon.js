import { useState } from "react";
export default function accordeon(props){
    const [closed,setClosed]= useState(true);
    const {children, title} =props;
    return(
        <div>
    <div>{title}</div>
    {
    <div>{children}</div>}
    </div>

    );
}