import * as S from "./PreRegistrationPage.styled";
import Header from "@components/pre/Header";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import testLogo from "@assets/icons/TestLogo.png";

import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase"; // firebase.js에서 Firestore 가져옴

import { useFirebaseContext } from "@context/FirebaseContext";

export const PreRegistrationPage = () => {
  const { goTo } = useCustomNavigate();
  const { docId, setUserInfo: setContextUserInfo } =
    useFirebaseContext(); // FirebaseContext에서 docId와 setUserInfo 가져오기

  // 입력값 상태 관리
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    phone: false,
    email: false,
  });
  // NextBtn 활성화 상태 확인
  const isNextBtnActive =
    userInfo.name && userInfo.phone && userInfo.email;

  // 입력 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));

    // 입력 시 오류 상태 초기화
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  // Next 버튼 클릭 핸들러
  const handleNext = async () => {
    if (!docId) {
      console.error("문서 ID가 없습니다.");
      return;
    }

    // 유효성 검사
    const phoneIsValid = /^[0-9]{3}-?[0-9]{3,4}-?[0-9]{4}$/.test(
      userInfo.phone
    );
    const emailIsValid =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        userInfo.email
      );

    if (!phoneIsValid || !emailIsValid) {
      // 유효하지 않은 입력에 대한 오류 상태 업데이트
      setErrors({
        phone: !phoneIsValid,
        email: !emailIsValid,
      });
      return;
    }

    try {
      // Firestore에서 기존 문서에 userInfo 추가
      const docRef = doc(db, "testResults", docId);
      await updateDoc(docRef, { userInfo });

      console.log("✅ Firestore에 사전 정보 저장 성공!");
      setContextUserInfo(userInfo); // Context에 userInfo 저장
      goTo("/success", { replace: true });
    } catch (error) {
      console.error("Firestore 사전 정보 저장 실패:", error);
    }
  };

  return (
    <S.Wrapper>
      <Header onClose={() => goTo("/", { replace: true })} />
      <S.ContentsWrapper>
        <S.Contents>
          <S.TitleBox>
            <S.Title>나눠주개 프로그램 사전 신청</S.Title>
            <S.SubTitle>
              나눠주개 프로그램을 통해 쉽게 헌혈하고
            </S.SubTitle>
            <S.SubTitle>4마리의 강아지를 구해봐요!</S.SubTitle>
          </S.TitleBox>
          <S.LogoBox>
            <img src={testLogo} alt="Logo" />
          </S.LogoBox>
          <S.InputInfoWrapper>
            <S.InputInfoBox>
              <S.InfoText>성함</S.InfoText>
              <S.InfoTextarea
                name="name"
                placeholder="홍길동"
                value={userInfo.name}
                onChange={handleChange}
              />
            </S.InputInfoBox>

            <S.InputInfoBox>
              <S.InfoText>전화번호</S.InfoText>
              <S.InfoTextarea
                name="phone"
                placeholder="010-1234-5678"
                value={userInfo.phone}
                onChange={handleChange}
                style={{
                  borderColor: errors.phone ? "#FF6969" : "#e7e8eb",
                }}
              />
            </S.InputInfoBox>

            <S.InputInfoBox>
              <S.InfoText>이메일</S.InfoText>
              <S.InfoTextarea
                name="email"
                placeholder="abcd@naver.com"
                value={userInfo.email}
                onChange={handleChange}
                style={{
                  borderColor: errors.email ? "#FF6969" : "#e7e8eb",
                }}
              />
            </S.InputInfoBox>
          </S.InputInfoWrapper>
        </S.Contents>

        <S.NextBtn
          $isActive={isNextBtnActive}
          onClick={handleNext}
          disabled={!isNextBtnActive}
        >
          나눠주개 앱 사전신청
        </S.NextBtn>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
};
