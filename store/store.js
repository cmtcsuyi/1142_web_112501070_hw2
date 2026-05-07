import { create } from 'zustand';

const questionData = [
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