import { create } from 'zustand';

const questionData = [
    {
      title: "當天空開始改變時，你會——",
      options:[
        {
          text: "觀察變化的走向，試著理解其中的規律",
          value: 1
        },
        {
          text: "隨著氣流移動，在變化中找到自己的位置",
          value: 2
        },
        {
          text: "維持原本的節奏，讓轉變自然發生",
          value: 3
        }
      ]
    },
    {
      title: "當氣流變得不穩定時，你傾向——",
      options:[
        {
          text: "讓一切回到可以預測的狀態",
          value: 1
        },
        {
          text: "順著變動延展，甚至改變自己的形狀",
          value: 2
        },
        {
          text: "保持穩定，不讓整體受到影響",
          value: 3
        }
      ]
    },
    {
      title: "當你需要決定方向時，你更依賴——",
      options:[
        {
          text: "對環境的判斷與分析",
          value: 1
        },
        {
          text: "當下流動的感覺",
          value: 2
        },
        {
          text: "整體是否維持平衡",
          value: 3
        }
      ]
    },
    {
      title: "在沒有風的時候，你比較像——",
      options:[
        {
          text: "持續整理形狀，讓輪廓更清晰",
          value: 1
        },
        {
          text: "自由飄動，沒有固定樣貌",
          value: 2
        },
        {
          text: "靜靜停留，維持一種穩定狀態",
          value: 3
        }
      ]
    }
  ];

const usePsyStore = create(
    (set) => ({
      psyData:{
        score: 0,
        quizData: questionData,
      },
      setScore: (score) => set((state) => ({ psyData: {...state.psyData, score: score }}))
    })
);

export { usePsyStore }