import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "./server";
import { useNavigate } from "react-router-dom";
import './GoogleLogin.css';

function GoogleLoginComponent() {
  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
    try {
      if (authResult["code"]) {
        const result = await googleAuth(authResult.code);
        const { email, name, image } = result.data.user;
        const token = result.data.token;
        const obj = { email, name, image, token };
        localStorage.setItem("user-info", JSON.stringify(obj));
        navigate("/dashboard");
      } else {
        console.log(authResult);
        throw new Error(authResult);
      }
    } catch (err) {
      console.log("Error while Google Login...", err);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div className="google-login-wrapper">
      <div className="google-login-card">
        <h2>Welcome to Studio</h2>
        <p>Please sign in with Google to continue</p>
        <button className="google-login-button" onClick={googleLogin}>
          <img
            src="/icon.png"
            alt="Google icon"
            className="google-icon"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default GoogleLoginComponent;
