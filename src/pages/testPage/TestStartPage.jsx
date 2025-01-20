import * as S from "./TestStartPage.styled";
import testLogo from "@assets/images/testStartLogo.png";
import TestStartPgBtn from "@components/test/TestStartPgBtn";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import useShare from "@hooks/useShare";

export const TestStartPage = () => {
  const { goTo } = useCustomNavigate();

  const { handleShare } = useShare({
    url: window.location.href,
  });

  return (
    <S.Wrapper>
      <S.Header></S.Header>
      <S.TestLogoBox>
        <S.TestText>
          <div style={{ display: "block" }}>
            우리집 강아지는
            <br />
            <span>헌혈견</span>이 될 수 있을까?
          </div>
        </S.TestText>
        <S.TestLogo>
          <img src={testLogo} alt="강아지의사로고" />
        </S.TestLogo>
      </S.TestLogoBox>
      <S.TestBtnBox>
        <TestStartPgBtn
          $bgColor="#FF6969"
          $textColor="#FFFFFF"
          text="테스트 시작하기"
          onClick={() => goTo("/test")}
        />
        <TestStartPgBtn
          $bgColor="#FFD7D7"
          $textColor="#FF6969"
          text="테스트 공유하기"
          onClick={handleShare}
        />
      </S.TestBtnBox>
    </S.Wrapper>
  );
};
