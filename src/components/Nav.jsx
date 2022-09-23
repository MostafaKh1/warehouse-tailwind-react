import React from "react";

import { navigationData } from "../data";

export default function Nav() {
  return (
    <nav>
      <ul className="flex  gap-x-8 ">
        {navigationData.map((ele, i) => {
          return (
            <li key={i}>
              <a href={ele.href}>{ele.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
