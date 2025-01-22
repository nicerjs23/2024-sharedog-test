import styled from "styled-components";
import xIcon from "@assets/icons/X.svg";

const Header = ({ onClose }) => {
  return (
    <Wrapper>
      <Btn onClick={onClose}>
        <img src={xIcon} alt="x버튼" />
      </Btn>
    </Wrapper>
  );
};

export default Header;
const Wrapper = styled.section`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 46px;
  padding: 10px;
`;

const Btn = styled.button`
  display: flex;
`;
