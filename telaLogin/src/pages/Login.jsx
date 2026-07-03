import "../styles/login.css";
import Button from "../components/Button";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";

function Login() {
  return (
    <div id="container">
      <h3>Login</h3>
      <InputEmail />
      <InputSenha />
      <Button />
      <p>Criar uma conta</p>
    </div>
  );
}

export default Login