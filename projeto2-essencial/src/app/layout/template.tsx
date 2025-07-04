"use client";

import { useState } from "react";

export default function Template(props: any) {
  const [data] = useState(new Date().toLocaleTimeString("pt-BR"));

  return (
    <div className="border-8 border-green-500 p-8">
      <span>{data}</span>
      <main>{props.children}</main>
    </div>
  );
}
