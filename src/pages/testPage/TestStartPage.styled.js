import styled from "styled-components";

export const Wrapper = styled.section`
  flex-grow: 1;

  min-height: calc(var(--vh, 1vh) * 100);

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  align-items: center;
  justify-content: space-between;
  /* position: fixed; */

  font-family: ${({ theme }) =>
    theme.fonts.SUITSemiBold["font-family"]};
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 10px 15px;
`;

export const XBtn = styled.button`
  display: flex;
`;

export const TestLogoBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 46px;
  margin-bottom: 40px;
`;

export const TestText = styled.div`
  display: flex;
  text-align: center;
  font-size: 1.375rem;
  color: ${({ theme }) => theme.colors.gray03};
  font-family: ${({ theme }) =>
    theme.fonts.SUITExtraBold["font-family"]};
  span {
    color: ${({ theme }) => theme.colors.red04};
  }
`;

export const TestLogo = styled.div`
  display: flex;

  img {
    width: 192px;
    height: auto;
  }
`;

export const TestBtnBox = styled.section`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  width: 88.53%;
  gap: 21px;
  margin-bottom: 66px;
`;
