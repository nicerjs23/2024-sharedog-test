import * as S from "./TestResultPage.styled";
import resultBloodIcon from "@assets/icons/resultBlood.png";
import testOkPng from "@assets/images/testok.png";
import IgIcon from "@assets/icons/IG.svg";
import { useCustomNavigate } from "@hooks/useCustomNavigate";

import useShare from "@hooks/useShare";
import Header from "@components/pre/Header";
import React from "react";
export const TestResultOkPage = () => {
  const { goTo } = useCustomNavigate();
  const startUrl = `${window.location.origin}/`; // 시작화면의 URL을 고정시킴
  const { handleShare } = useShare({
    url: startUrl,
  });
  const params = new URLSearchParams(window.location.search);
  const docId = params.get("id");

  const handlePreRegistration = () => {
    goTo(`/preRegistration?id=${docId}`, { replace: true });
  };
  return (
    <S.Wrapper>
      <Header onClose={() => goTo("/", { replace: true })} />
      <S.ContentsBox>
        <S.Title>견주님의 강아지는</S.Title>
        <S.Title>헌혈견이 될 수 있어요!</S.Title>
        <S.TestPng>
          <img src={testOkPng} alt="오케이손가락이미지" />
        </S.TestPng>
        <S.Line marginTop="13px" marginBottom="22px" />

        <S.SubTitle>
          나눠주개와 함께 헌혈하고 강아지 4마리를 구해봐요.
        </S.SubTitle>

        <S.InfoBox>
          <InfoText
            text="헌혈 시 무료 건강검진을 받을 수 있어요."
            highlight="무료 건강검진"
          />
          <InfoText
            text="헌혈은 지정 동물병원에서 진행할 수 있어요."
            highlight="지정 동물병원"
          />
          <InfoText
            text="헌혈 후 강아지는 건강한 새 혈액을 생성해요."
            highlight="새 혈액을 생성"
          />
        </S.InfoBox>

        <S.Line />

        <S.SubTitle>
          나눠주개 프로그램을 통해 헌혈하러 가요!
        </S.SubTitle>

        <S.InfoBox>
          <InfoText
            text="나눠주개가 개발한 헌혈 서비스를 가장 먼저 이용하고,
헌혈에 관한 모든 정보를 한 공간에서 얻을 수 있어요."
            highlight="헌혈 서비스"
          />
          <InfoText
            text="나눠주개가 제공하는 헌혈 교육을 듣고 함께 헌혈하러
갈 수 있어요."
            highlight="헌혈 교육"
          />
          <InfoText
            text="헌혈 방법과 절차를 담은 헌혈 가이드북을 무료로 제공
해드려요."
            highlight="헌혈 방법과 절차를 담은 헌혈 가이드북"
          />
          <InfoText
            text="함께 반려견 헌혈과 공혈견 문제를 알려봐요."
            highlight="반려견 헌혈과 공혈견"
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
        <S.Btn props="ok" onClick={handlePreRegistration}>
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
