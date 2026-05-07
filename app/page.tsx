"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from '@heroui/react';
import { ColorSlider, Label } from '@heroui/react';
import {parseColor} from "react-aria-components";
import ActionButton from "@/component/ActionButton";

export default function Home() {

  const [color, setColor] = useState(parseColor("hsl(200, 100%, 50%)"));

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        歡迎
        <Button>
      My Button
    </Button>
    <ColorSlider channel="hue" className="w-full max-w-xs" defaultValue="hsl(0, 100%, 50%)">
      <Label>Hue</Label>
      <ColorSlider.Output />
      <ColorSlider.Track>
        <ColorSlider.Thumb />
      </ColorSlider.Track>
    </ColorSlider>
        <Link className="text-white bg-black px-3 py-2" href="/question">START</Link>

        <ActionButton/>

      </div>
    </>
  );
}