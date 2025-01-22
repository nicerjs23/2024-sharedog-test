import * as S from "./TestResultPage.styled";
import testNoPng from "@assets/images/testStartLogo.png";
import resultBloodIcon from "@assets/icons/resultBlood.png";
import IgIcon from "@assets/icons/IG.svg";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import useShare from "@hooks/useShare";
import Header from "@components/pre/Header";
import React from "react";

export const TestResultNoPage = () => {
  const { goTo } = useCustomNavigate();
  const startUrl = `${window.location.origin}/`; // 시작화면의 URL을 고정시킴
  const { handleShare } = useShare({
    url: startUrl,
  });

  return (
    <S.Wrapper>
      <Header onClose={() => goTo("/", { replace: true })} />
      <S.ContentsBox>
        <S.Title>아쉽게도 견주님의 강아지는</S.Title>
        <S.Title>헌혈 대상이 아니에요.</S.Title>

        <S.TestPng>
          <img src={testNoPng} alt="수의사 로고" />
        </S.TestPng>

        <S.Line marginTop="13px" marginBottom="22px" />

        <S.SubTitle>
          다음과 같은 이유로 헌혈이 불가능할 수 있어요.
        </S.SubTitle>

        <S.InfoBox>
          <InfoText
            text="만 2~8세를 초과하였을 수 있어요."
            highlight="만 2~8세를 초과"
          />
          <InfoText
            text="20~25kg에 미달하였을 수 있어요."
            highlight="20~25kg에 미달"
          />
          <InfoText
            text="혈액 및 바이러스 질병 이력이 있을 수 있어요."
            highlight="혈액 및 바이러스 질병 이력"
          />
          <InfoText
            text="주기적인 예방접종을 진행하지 않았을 수 있어요."
            highlight="주기적인 예방접종"
          />
        </S.InfoBox>

        <S.Line />

        <S.SubTitle>아쉽게 헌혈은 못하지만, </S.SubTitle>
        <S.SubTitle>
          나눠주개 팀과 함께 반려견 헌혈 문화를 알려봐요!
        </S.SubTitle>

        <S.InfoBox>
          <InfoText
            text="나눠주개 팀과 함께 반려견 헌혈 문화와 공혈견에 대해 알려봐요."
            highlight="반려견 헌혈 문화와 공혈견"
          />
          <InfoText
            text="나눠주개가 제공하는 헌혈 교육을 듣고 반려견 헌혈 
문화에 대한 지식을 쌓아요."
            highlight="헌혈 교육"
          />
        </S.InfoBox>
        <S.IGBox>
          <S.IGIcon
            onClick={() =>
              window.open(
                "https://www.instagram.com/sharedog.official",
                "_blank"
              )
            }
          >
            <img src={IgIcon} alt="인스타아이콘" />
          </S.IGIcon>
          <S.IGText>
            나눠주개 프로그램 사전 신청하고 무료로 혜택 받으러가요 !
          </S.IGText>
        </S.IGBox>
      </S.ContentsBox>
      <S.NavBtnBox>
        <S.Btn onClick={handleShare}>공유</S.Btn>
        <S.Btn props="ok" onClick={() => goTo("/preRegistration")}>
          사전신청
        </S.Btn>
      </S.NavBtnBox>
    </S.Wrapper>
  );
};

const InfoText = ({ text, highlight }) => {
  return (
    <S.InfoTextBox>
      <S.InfoIcon>
        <img src={resultBloodIcon} alt="피아이콘" />
      </S.InfoIcon>
      {/* 특정 글자 하이라이트 */}
      <S.InfoText>
        <span>
          {text.split(highlight).map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index < text.split(highlight).length - 1 && (
                <span style={{ color: "#FF6969" }}>{highlight}</span>
              )}
            </React.Fragment>
          ))}
        </span>
      </S.InfoText>
    </S.InfoTextBox>
  );
};
