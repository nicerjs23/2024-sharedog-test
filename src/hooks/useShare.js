import { useCallback } from "react";

const useShare = ({ title, text, url }) => {
  const handleShare = useCallback(() => {
    const shareData = { title, text, url };

    if (navigator.share) {
      // 모바일 환경에서 Web Share API 사용
      navigator
        .share(shareData)
        .then(() => console.log("공유 성공"))
        .catch((error) => console.error("공유 실패", error));
    } else {
      // PC 환경에서 URL 복사
      navigator.clipboard
        .writeText(url)
        .then(() => alert("URL이 복사되었습니다!"))
        .catch((error) => console.error("URL 복사 실패", error));
    }
  }, [title, text, url]);

  return { handleShare };
};

export default useShare;
