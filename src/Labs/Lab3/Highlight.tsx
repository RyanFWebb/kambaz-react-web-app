import React from "react";
export default function Highlight({ children }: { children: React.ReactNode }) {
    return (
        <span id="wd-highlight" style={{ backgroundColor: "yellow", color: "red" }}>
            {children}
        </span>
    );
}