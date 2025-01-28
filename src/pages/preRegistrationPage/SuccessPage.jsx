import styled from "styled-components";
import preBg from "@assets/images/preBg.png";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import Img from "@assets/images/successImg.png";
export const SuccessPage = () => {
  const { goTo } = useCustomNavigate();
  return (
    <Wrapper>
      <ContentsWrapper>
        <TextBox>
          <Title>신청해주셔서 감사해요 !</Title>
          <HighlightText>출시 예정일 : 2월 10일</HighlightText>
          <SubTitle>나눠주개 프로그램 출시 시,</SubTitle>
          <SubTitle>
            남겨주신 전화번호와 이메일로 먼저 연락드릴게요!
          </SubTitle>
        </TextBox>
        <ImgBox>
          <img src={Img} alt="풍선이미지" />
        </ImgBox>
        <NextBtn onClick={() => goTo("/", { replace: true })}>
          처음으로 돌아가기
        </NextBtn>
      </ContentsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
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

const ContentsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 87%;
  height: 100%;
  margin-top: 59px;
  justify-content: space-between;
`;
const TextBox = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;

  color: #000000;
  font-size: 1.375rem;

  font-family: ${({ theme }) =>
    theme.fonts.SUITExtraBold["font-family"]};
`;
const SubTitle = styled.div`
  line-height: 20px;
  display: flex;
  color: #8a8a8a;
  font-size: 0.875rem;
  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`;
//하이라이트 문구
const HighlightText = styled.div`
  margin-top: 18px;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-start;
  width: 77.6%;
  color: #ffa2a2;
  font-size: 0.875rem;
  line-height: 23px;
  font-family: ${({ theme }) => theme.fonts.SUITBold["font-family"]};
`;
const ImgBox = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 98px;
  img {
    width: 210px;
    height: auto;
  }
`;
const NextBtn = styled.button`
  display: flex;
  margin-bottom: 53px;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 52px;
  border-radius: 1550px;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.SUITBold["font-family"]};
  background-color: #ff6969;
  color: #ffffff;
`;
