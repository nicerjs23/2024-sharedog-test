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
  const handlePreRegistration = () => {
    goTo(`/preRegistration`, { replace: true });
  };

  return (
    <S.Wrapper>
      <Header onClose={() => goTo("/", { replace: true })} />
      <S.ContentsBox>
        <S.Title>아쉽게도 견주님의 강아지는</S.Title>
        <S.Title>헌혈 대상이 아니에요.</S.Title>

        <S.TestPng>
          <img src={testNoPng} alt="수의사 로고" />
        </S.TestPng>

        <S.Line $marginTop="13px" $marginBottom="22px" />

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

        <S.SubTitle>
          아쉽지만, 나눠주개 프로그램을 통해 헌혈 문화 확산에 도움을
          보탤 수 있어요!
        </S.SubTitle>
        <S.HighlightText>
          * 나눠주개 프로그램은 동국대학교 소속 대학생 5명이 운영하는
          소셜임팩트 조직에서 직접 제작한 프로그램이에요.
        </S.HighlightText>
        <S.InfoBox>
          <InfoText
            text="나눠주개 팀과 함께 반려견 헌혈 문화와 공혈견에 대해 알릴 수 있어요."
            highlight={["반려견 헌혈 문화", "공혈견"]}
          />
          <InfoText
            text="나눠주개가 제공하는 헌혈 교육을 듣고 반려견 헌혈 
문화에 대한 지식을 쌓아요."
            highlight={["헌혈 교육"]}
          />
          <InfoText
            text="내 반려견이 아플 때, 헌혈 관련 도움을 받을 수 있는
커뮤니티 서비스를 이용할 수 있어요."
            highlight={["헌혈 관련 도움", "커뮤니티 서비스"]}
          />
          <InfoText
            text="다양한 네트워킹 프로그램을 통해 대형견, 소형견 견주
분들과 소통하며 서로 도움을 주고 받을 수 있어요."
            highlight={["네트워킹", "프로그램"]}
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
          나눠주개 프로그램 사전 신청하시면 출시 시 가장 먼저
          연락드려요!
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
const InfoText = ({ text, highlight = [] }) => {
  // highlight를 항상 배열로 변환
  const highlights = Array.isArray(highlight)
    ? highlight
    : [highlight];

  return (
    <S.InfoTextBox>
      <S.InfoIcon>
        <img src={resultBloodIcon} alt="피아이콘" />
      </S.InfoIcon>
      {/* 특정 글자 하이라이트 */}
      <S.InfoText>
        <span>
          {text
            .split(new RegExp(`(${highlights.join("|")})`, "gi"))
            .map((part, index) => (
              <React.Fragment key={index}>
                {highlights.includes(part) ? (
                  <span style={{ color: "#FF6969" }}>{part}</span>
                ) : (
                  part
                )}
              </React.Fragment>
            ))}
        </span>
      </S.InfoText>
    </S.InfoTextBox>
  );
};
