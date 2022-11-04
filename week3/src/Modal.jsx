import styled from "styled-components";

const Modal = ({ isCorrectAnswer }) => {
  return (
    <ModalContainer>
      {isCorrectAnswer ? "정답입니다! 😃" : "다시 생각해보세요 😭"}
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
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
