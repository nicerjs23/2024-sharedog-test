//사전정보신청, 확인페이지 공통스타일
import styled from "styled-components";
import preBg from "@assets/images/preBg.png";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 540px;
  min-height: calc(var(--vh, 1vh) * 100);

  background-image: url(${preBg});
  background-size: cover; /* 이미지가 비율을 유지하면서 화면에 꽉 차게 */
  background-position: center; /* 이미지가 화면 중앙에 위치하도록 */
  background-repeat: no-repeat; /* 이미지 반복 방지 */
`;

export const Contents = styled.section`
  display: flex;
  flex-direction: column;
  width: 87%;
  height: 100%;
  justify-content: space-between;
`;
export const TitleBox = styled.section`
  display: flex;
  flex-direction: column;
`;
export const LogoBox = styled.section``;
export const InputInfoBox = styled.section``;
export const NextBtn = styled.button`
  display: flex;
  margin-bottom: 63px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
  border-radius: 1550px;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.SUITBold["font-family"]};
  background-color: ${(props) =>
    props.$isActive ? "#FF6969" : "#ECECEC"};
  color: ${(props) => (props.$isActive ? "#FFFFFF" : "#BDBDBD")};
`;
