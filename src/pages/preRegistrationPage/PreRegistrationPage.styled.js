//사전정보신청, 확인페이지 공통스타일
import styled from "styled-components";
import preBg from "@assets/images/preBg.png";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 540px;
  height: calc(var(--vh, 1vh) * 100);

  background-image: url(${preBg});
  background-size: cover; /* 이미지가 비율을 유지하면서 화면에 꽉 차게 */
  background-position: center; /* 이미지가 화면 중앙에 위치하도록 */
  background-repeat: no-repeat; /* 이미지 반복 방지 */
`;

export const ContentsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 87%;
  height: 100%;
  margin-top: 16px;
`;
export const Contents = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 46px;
`;
export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  display: flex;
  margin-bottom: 24px;
  color: #000000;
  font-size: 1.375rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITExtraBold["font-family"]};
`;
export const SubTitle = styled.div`
  display: flex;
  color: #8a8a8a;
  font-size: 1rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`;
export const LogoBox = styled.section`
  display: flex;
  justify-content: center;
  img {
    width: 55px;
    height: auto;
  }
`;
export const InputInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
export const InputInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;
export const InfoText = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.mainColor};

  font-size: 0.875rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
`;
export const InfoTextarea = styled.input`
  display: flex;
  height: 48.387px;
  border-radius: 18.975px;
  border: 1px solid #e7e8eb;

  padding: 0 10px; /* 내부 여백 */
  font-size: 0.875rem; /* 글씨 크기 */
  color: #8a8a8a;
  font-family: ${({ theme }) =>
    theme.fonts.SUITMedium["font-family"]};
  /* placeholder 스타일 설정 */
  &::placeholder {
    color: #dcdcdc; /* 플레이스홀더 기본 색상 */
    font-size: 0.875rem; /* 플레이스홀더 폰트 크기 */
  }

  /* 포커스(클릭) 상태 */
  &:focus {
    border-color: #e7e8eb; /* 클릭 시 테두리 색상 */
    color: #8a8a8a; /* 클릭 후 글씨 색상 */
    outline: none; /* 기본 아웃라인 제거 */
  }
`;
export const NextBtn = styled.button`
  display: flex;
  margin-bottom: 53px;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 52px;
  border-radius: 1550px;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.SUITBold["font-family"]};
  background-color: ${(props) =>
    props.$isActive ? "#FF6969" : "#ECECEC"};
  color: ${(props) => (props.$isActive ? "#FFFFFF" : "#BDBDBD")};
`;
