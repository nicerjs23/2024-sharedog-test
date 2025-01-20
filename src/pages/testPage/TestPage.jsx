import * as S from "./TestPage.styled";
import { useState } from "react";
import TestHeader from "@components/test/TestHeader";
import { testQuestions } from "@data/testData/TestData";
import TestQna from "@components/test/TestQna";
import VetDoctorLogo from "@assets/images/vetDoctorCut.png";
import { useCustomNavigate } from "@hooks/useCustomNavigate";
import TestLoading from "@components/test/TestLoading";

// Firebase Firestore 연결
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase"; // firebase.js에서 Firestore 가져옴

export const TestPage = () => {
  const { goTo } = useCustomNavigate();

  const [currentIndex, setCurrentIndex] = useState(0); // 현재 문항 인덱스
  const [selectedOptions, setSelectedOptions] = useState(
    Array(testQuestions.length).fill(null)
  ); // 선택된 옵션 상태
  const [questionScores, setQuestionScores] = useState(
    Array(testQuestions.length).fill(0)
  ); // 문항별 점수 상태
  const [selectedStrings, setSelectedStrings] = useState([]); // 선택된 문항 내용 배열
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태

  // ✅ 뒤로 가기 핸들러
  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // ✅ X 버튼 (테스트 초기화 및 /main 이동)
  const handleExit = () => {
    setSelectedOptions(Array(testQuestions.length).fill(null)); // 선택된 옵션 초기화
    setQuestionScores(Array(testQuestions.length).fill(0)); // 점수 초기화
    setSelectedStrings([]); // 선택된 문항 내용 초기화
    goTo("/", { replace: true }); // 메인 페이지로 이동
  };

  // ✅ 옵션 선택 핸들러
  const handleSelectOption = (id) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentIndex] = id; // 선택된 옵션의 ID 저장
    setSelectedOptions(updatedOptions);

    // 선택된 옵션 점수 업데이트
    const selectedOption = testQuestions[currentIndex].options.find(
      (option) => option.id === id
    );
    const score = selectedOption ? selectedOption.score : 0;

    const updatedScores = [...questionScores];
    updatedScores[currentIndex] = score; // 현재 문항 점수 업데이트
    setQuestionScores(updatedScores);
    // 선택된 문항 내용 합치기
    const selectedOptionText = testQuestions[
      currentIndex
    ].options.find((option) => option.id === id);
    const optionText = `${selectedOptionText?.redText} ${selectedOptionText?.text}`;

    // 선택된 문항 내용 배열에 추가
    const updatedStrings = [...selectedStrings];
    updatedStrings[currentIndex] = optionText;
    setSelectedStrings(updatedStrings);
  };

  // ✅ Firestore에 데이터 저장
  const saveToFirestore = async (selectedStrings, resultText) => {
    try {
      // Firestore의 "testResults" 컬렉션에 선택된 문항 내용 배열 저장
      await addDoc(collection(db, "testResults"), {
        selectedStrings: selectedStrings,
        resultText: resultText, // 결과 텍스트 추가
        timestamp: new Date(), // 저장 시점
      });
      console.log("✅ Firestore에 저장 성공!");
    } catch (error) {
      console.error("Firestore 저장 실패:", error);
    }
  };

  // ✅ 다음 버튼 클릭 핸들러
  const handleNext = () => {
    if (currentIndex < testQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1); // 다음 문항으로 이동
      console.log(
        `📝 **${currentIndex + 1}번 문항 선택 내용:** ${
          selectedStrings[currentIndex]
        }`
      );
    } else {
      // ✅ 마지막 문항 처리
      console.log(
        `📝 **${currentIndex + 1}번 문항 선택 내용:** ${
          selectedStrings[currentIndex]
        }`
      );
      setIsLoading(true); // 로딩 상태 활성화
      const LOADING_DURATION = 2000; // 로딩 시간 (2초)
      const resultScore = questionScores.reduce(
        (acc, score) => acc + score,
        0
      );
      setTimeout(() => {
        setIsLoading(false);
        console.log("📝 전체 선택한 문항 내용:", selectedStrings);
        console.log("✅ **총합 점수**:", resultScore);

        // ✅ 결과에 따라 헌혈견 가능/불가능 처리
        const resultText =
          resultScore >= 5 ? "헌혈견 가능" : "헌혈견 불가능";
        console.log("✅ **결과**:", resultText);

        // ✅ Firestore에 선택한 문항 내용 배열과 결과 텍스트 저장
        saveToFirestore(selectedStrings, resultText);

        // ✅ 마지막 문항 완료 후 결과 페이지로 이동
        if (resultScore >= 5) {
          goTo("/resultOK", { replace: true });
        } else {
          goTo("/resultNO", { replace: true });
        }
      }, LOADING_DURATION);
    }
  };

  // ✅ 로딩 화면만 표시
  if (isLoading) {
    return <TestLoading />;
  }

  return (
    <S.Wrapper>
      <S.GapDiv>
        <TestHeader
          currentIndex={currentIndex}
          totalQuestions={testQuestions.length}
          onBack={handleBack}
          onExit={handleExit}
        />

        <TestQna
          {...testQuestions[currentIndex]}
          selectedOption={selectedOptions[currentIndex]}
          onSelect={handleSelectOption}
        />
      </S.GapDiv>
      <S.BtnBox>
        <S.TestLogo>
          <img src={VetDoctorLogo} alt="강아지의사로고" />
        </S.TestLogo>
        <S.NextBtn
          onClick={handleNext}
          disabled={selectedOptions[currentIndex] === null}
          $isActive={selectedOptions[currentIndex] !== null}
        >
          다음
        </S.NextBtn>
      </S.BtnBox>
    </S.Wrapper>
  );
};
