import { useState, useEffect } from "react";
import logo from "./assets/Discord-Symbol2.png";
import styled from "styled-components";
import * as S from "./AppStyles.js";

function App() {
  //---↓ Lógica do useState e useEffect ↓---
  const [login, setLogin] = useState(""); //Cria a variável login e a função setLogin para mudar o state
  const [senha, setSenha] = useState("");
  const [tentativaLogin, setTentativaLogin] = useState(0);

  useEffect(() => {
    //If que evita mostra na primeira ou segunda carga do React o login que ele fez.
    if (tentativaLogin > 0) {
      let msgString = `Login e senha corretos! \nLogin: ${login} \nSenha: ${senha}`;
      alert(msgString);
      console.log(msgString);
      setTentativaLogin(0); //=> Evita Loop e Bug redefinindo a variável.
    }
  }, [tentativaLogin]);

  const Entrar = () => {
    setTentativaLogin((prev) => prev + 1);
  };
  //---↑ Lógica do useState e useEffect ↑---

  //---↓ Lógica da página HTML ↓---
  return (
    <> {/* ← ↓ Aqui dá um reset no HTML */}
      <S.GlobalStyle></S.GlobalStyle>

      <S.BackgroudStyle>
        <S.LogoVisual src={logo} alt="Logo do Discord"></S.LogoVisual>
        <S.LoginCard>
          {/*---↓ Lado Esquerdo, o formulário ↓---*/}
          <S.LeftPanel>
            <S.Title> Boas-vindas de volta! </S.Title>
            <S.SubTitle>
              {" "}
              Estamos muito animados em te ver novamente!{" "}
            </S.SubTitle>

            <S.InputGroup>
              <S.Labels>
                {" "}
                E-mail ou número de telefone <span>*</span>{" "}
              </S.Labels>
              <S.Inputs
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              ></S.Inputs>
            </S.InputGroup>

            <S.InputGroup>
              <S.Labels>
                {" "}
                Senha <span>*</span>{" "}
              </S.Labels>
              <S.Inputs
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              ></S.Inputs>
            </S.InputGroup>

            <S.ForgotPassword href="#"> Esqueceu sua senha? </S.ForgotPassword>

            <S.LoginButton onClick={Entrar}>Entrar</S.LoginButton>

            <S.RegisterText>
              Precisando de uma conta?{" "}
              <S.RegisterLink href="#">Registre-se</S.RegisterLink>
            </S.RegisterText>
          </S.LeftPanel>
          {/*---↑ Lado Esquerdo, o formulário ↑---*/}

          {/*---↓  Lado Direito - QR Code ↓---*/}
          <S.RightPanel>
            <S.QRCode> [QR CODE] </S.QRCode>

            <S.QRCodeTitle>Entrar com código QR</S.QRCodeTitle>

            <S.QRCodeSubtitle>
              Escaneie isto com o <strong>app móvel do Discord</strong> para
              fazer login imediatamente.
            </S.QRCodeSubtitle>

            <S.RegisterLink href="#">
              {" "}
              Ou, faça login com uma passkey{" "}
            </S.RegisterLink>
          </S.RightPanel>
          {/*---↑  Lado Direito - QR Code ↑---*/}
        </S.LoginCard>
      </S.BackgroudStyle>
    </>
  );
}
export default App;