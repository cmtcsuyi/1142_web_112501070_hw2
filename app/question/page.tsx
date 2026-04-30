"use client"

import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import { useState, useEffect } from "react";

export default function Question() {

  const router = useRouter();

  let questionData = [
    {
      title: "麵包師傅要你「靜置 30 分鐘」，你會怎麼做？",
      options:[
        {
          text: "一",
          value: 1
        },
        {
          text: "二",
          value: 2
        },
        {
          text: "三",
          value: 3
        }
      ]
    },
    {
      title: "222222222222222222222222222222222222？",
      options:[
        {
          text: "一",
          value: 1
        },
        {
          text: "二",
          value: 2
        },
        {
          text: "三",
          value: 3
        }
      ]
    },
    {
      title: "333333333333333333333333333333333333？",
      options:[
        {
          text: "一",
          value: 1
        },
        {
          text: "二",
          value: 2
        },
        {
          text: "三",
          value: 3
        }
      ]
    }
  ];

  const [questionIndex, setQuestionIndex] = useState(0);

  function nextQuestion(optionIndex: any){
    console.log("使用者選擇:" + optionIndex);

    if(questionIndex != questionData.length-1){
      console.log("下一題");
      setQuestionIndex( questionIndex + 1 );
    }else{
      console.log("進入準備");
      router.push("/prepare");
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        答題

        <div>
          <div>{("Q"+ (questionIndex+1) + ".") + questionData[questionIndex].title }</div>
          <div onClick={ ()=>nextQuestion(0) }>{ questionData[questionIndex].options[0].text }</div>
          <div onClick={ ()=>nextQuestion(1) }>{ questionData[questionIndex].options[1].text }</div>
          <div onClick={ ()=>nextQuestion(2) }>{ questionData[questionIndex].options[2].text }</div>
        </div>

        {/* <Link className="text-white bg-black px-3 py-2" href="/prepare">準備</Link> */}
      </div>
    </>
  );
}