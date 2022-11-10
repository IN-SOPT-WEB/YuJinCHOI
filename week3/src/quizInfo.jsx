import pic1 from "./assets/baetteok.jpeg";
import pic2 from "./assets/emergency.jpeg";
import pic3 from "./assets/schoolfood.jpeg";
import pic4 from "./assets/sinjeon.jpeg";
import pic5 from "./assets/yeopgi.jpeg";

const quizList = [
  {
    src: pic1,
    answer: "배떡",
  },
  {
    src: pic2,
    answer: "응급실 떡볶이",
  },
  {
    src: pic3,
    answer: "스쿨 푸드",
  },
  {
    src: pic4,
    answer: "신전 떡볶이",
  },
  {
    src: pic5,
    answer: "엽기 떡볶이",
  },
];

const optionTextList = quizList.map((quiz) => {
  return quiz.answer;
});

export { quizList, optionTextList };
