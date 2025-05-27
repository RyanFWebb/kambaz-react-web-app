import React from "react";
export default function Square({ children }: { children: React.ReactNode }) {
    const num = Number(children);
    return (<span id="wd-square">{num * num}</span>);
}