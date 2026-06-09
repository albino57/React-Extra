import styled, { createGlobalStyle } from "styled-components";

//---↓ Aqui dá um reset no HTML ↓---//
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

//---↓ TAGs div ↓---//
export const BackgroudStyle = styled.div`
  background: linear-gradient(135deg, #1d1b38 0%, #17366b 50%, #155ba1 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #f2f3f5;
`;

export const LoginCard = styled.div`
  background-color: #313338;
  border-radius: 8px;
  padding: 32px;
  display: flex;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  max-width: 780px;
  width: 100%;
  gap: 32px;
`;

export const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;
  text-align: center;
`;

export const QRCode = styled.div`
  background-color: white;
  width: 176px;
  height: 176px;
  border-radius: 4px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;
`;
//---↑ TAGs div ↑---//


//---↓ TAGs H ↓---//
export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 8px;
  font-weight: 600;
`;

export const QRCodeTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;
//---↑ TAGs H ↑---//


//---↓ TAGs p ↓---//
export const SubTitle = styled.p`
  text-align: center;
  color: #b5bac1;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const RegisterText = styled.p`
  font-size: 14px;
  color: #949ba4;
`;

export const QRCodeSubtitle = styled.p`
  color: #b5bac1;
  font-size: 14px;
`;
//---↑ TAGs p ↑---//


//---↓ TAGs a ↓---//
export const ForgotPassword = styled.a`
  color: #00a8fc;
  font-size: 12px;
  text-decoration: none;
  margin-bottom: 20px;
  margin-top: -8px;
  &:hover{ text-decoration: underline; }
  `;

  export const RegisterLink = styled.a`
  color: #00a8fc;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
`;
//---↑ TAGs a ↑---//


//---↓ TAGs label ↓---//
export const Labels = styled.label`
  color: #b5bac1;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
  span{ color: #f23f42; }
`;
//---↑ TAGs label ↑---//


//---↓ TAGs Input ↓---//
export const Inputs = styled.input`
  background-color: #1e1f22;
  border: none;
  border-radius: 3px;
  padding: 10px;
  color: #dbdee1;
  font-size: 16px;
  outline: none;
`;
//---↑ TAGs Input ↑---//


//---↓ TAGs Img ↓---//
export const LogoVisual = styled.img`
  position: absolute;
  top: 1px;
  left: 5px;
  height: 64px;
`;
//---↑ TAGs Img ↑---//


//---↓ TAGs Button ↓---//
export const LoginButton = styled.button`
  background-color: #5865F2;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 8px;

  &:hover {
    background-color: #4752c4;
  }
`;
//---↑ TAGs Button ↑---//