"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ActionButton() {
  // {children}: {children: React.ReactNode}

  return (
    <>
        <Link className="text-white bg-black px-3 py-2" href="/">按鈕元件</Link>
    </>
  );
}