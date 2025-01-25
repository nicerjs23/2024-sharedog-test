import React, { createContext, useContext, useState } from "react";

// FirebaseContext 생성
const FirebaseContext = createContext();

// Context Provider 생성
export const FirebaseProvider = ({ children }) => {
  const [docId, setDocId] = useState(null); // 문서 ID 상태
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보 상태

  return (
    <FirebaseContext.Provider
      value={{ docId, setDocId, userInfo, setUserInfo }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

// Custom Hook 생성
export const useFirebaseContext = () => {
  return useContext(FirebaseContext);
};
