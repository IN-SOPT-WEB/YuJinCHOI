import { useState } from "react";
import styled from "styled-components";
import plate from "./assets/plate.png";
import { optionTextList, quizList } from "./quizInfo";

quizList.sort(() => Math.random() - 0.5);
optionTextList.sort(() => Math.random() - 0.5);

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const checkAnswer = (answer) => {
    if (answer === quizList[currentStep].answer) {
      if (currentStep === quizList.length - 1) {
        setIsFinished(true);
      }
      setModalText("정답입니다! 😄");
      handleModal();
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 1000);
    } else {
      setModalText("다시 생각해보세요 🤔");
      handleModal();
    }
  };

  const handleModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 1000);
  };

  return (
    <>
      <Header>BTS, 봉준호, 손흥민, 떡볶이, let's go</Header>
      <Content>
        <ScoreBoard>{currentStep} points</ScoreBoard>
        {isFinished ? (
          <End>👏🏻 당신은 떡볶이 마스터! 👏🏻</End>
        ) : (
          <QuizContainer>
            <QuizImg src={quizList[currentStep].src} />
            <OptionList>
              {optionTextList.map((optionText) => {
                return (
                  <Option
                    key={optionText}
                    onClick={() => checkAnswer(optionText)}
                  >
                    {optionText}
                  </Option>
                );
              })}
            </OptionList>
            <RestartBtn
              onClick={() => {
                setCurrentStep(0);
                setIsFinished(false);
              }}
            >
              다시, let's go
            </RestartBtn>
          </QuizContainer>
        )}
      </Content>
      {isModalOpen && <Modal>{modalText}</Modal>}
    </>
  );
}

export default App;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  font-size: 45px;
  color: wheat;
`;

const Content = styled.div``;

const ScoreBoard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 36px;
  color: wheat;
  background-color: #990000;
`;

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QuizImg = styled.img`
  width: 350px;
  height: 350px;
  margin-top: 20px;
  border-radius: 25px;
  object-fit: cover;
`;

const OptionList = styled.ul`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Option = styled.li`
  font-size: 20px;
  padding: 5px 15px;
  border-radius: 15px;
  background-color: wheat;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #990000;
  }
`;

const RestartBtn = styled.button`
  font-size: 23px;
  width: 150px;
  height: 70px;
  margin: 4px 0;
  background-image: ${`url(${plate})`};
  border-style: none;
  border-radius: 40px;
  cursor: pointer;

  &:hover {
    font-size: 26px;
  }
`;

const Modal = styled.div`
  width: 230px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: wheat;
  border-radius: 20px;
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const End = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 570px;
  font-size: 36px;
`;
