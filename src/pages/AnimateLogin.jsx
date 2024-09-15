import React, { useState } from "react";
import * as Components from "./AnimatedStyle";
import PageNav from "../Components/PageNav.jsx";
import { useNavigate } from "react-router-dom";

function App() {
  const [signIn, toggle] = useState(true);
  const navigate = useNavigate();

  
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  
  const handleSignIn = () => {
    if (signInEmail && signInPassword) {
      
      navigate("/app");
    } else {
      alert("Please enter both email and password to sign in.");
    }
  };

  
  const handleSignUp = () => {
    if (signUpName && signUpEmail && signUpPassword) {
      
      navigate("/app");
    } else {
      alert("Please enter name, email, and password to sign up.");
    }
  };

  return (
    <main>
      <Components.EntireContentLogin>
        <Components.NavBar>
          <PageNav />
        </Components.NavBar>
        <Components.Container>
          <Components.SignUpContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Create Account</Components.Title>

              <Components.SocialIcons>
                <Components.Icon href="#">
                  <i className="fab fa-google-plus-g"></i>
                </Components.Icon>
                <Components.Icon href="#">
                  <i className="fab fa-facebook-f"></i>
                </Components.Icon>
                <Components.Icon href="#">
                  <i className="fab fa-github"></i>
                </Components.Icon>
                <Components.Icon href="#">
                  <i className="fab fa-linkedin-in"></i>
                </Components.Icon>
              </Components.SocialIcons>

              <Components.Input
                type="text"
                placeholder="Name"
                value={signUpName}
                onChange={(e) => setSignUpName(e.target.value)}
              />
              <Components.Input
                type="email"
                placeholder="Email"
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
              />
              <Components.Button onClick={handleSignUp}>
                Sign Up
              </Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Sign in</Components.Title>
              <Components.Input
                type="email"
                placeholder="Email"
                value={signInEmail}
                onChange={(e) => setSignInEmail(e.target.value)}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
              />
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>
              <Components.Button onClick={handleSignIn}>
                Sign In
              </Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>
              <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel signinIn={signIn}>
                <Components.Title>Hello, Friend!</Components.Title>
                <Components.Paragraph>
                  Enter your personal details and start your journey with us
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Sign Up
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </Components.EntireContentLogin>
    </main>
  );
}

export default App;
