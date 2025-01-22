import * as S from "./PreRegistrationPage.styled";
import Header from "@components/pre/Header";
import { useCustomNavigate } from "@hooks/useCustomNavigate";

export const PreRegistrationPage = () => {
  const { goTo } = useCustomNavigate();
  return (
    <S.Wrapper>
      <Header onClose={() => goTo("/", { replace: true })} />
      <S.Contents>
        사전정보페이지
        <S.NextBtn $isActive={true}>나눠주개 앱 사전신청</S.NextBtn>
      </S.Contents>
    </S.Wrapper>
  );
};
