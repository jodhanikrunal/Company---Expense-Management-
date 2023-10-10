import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import { navigate } from 'gatsby';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import jwtDecode from "jwt-decode";

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios";
import "./SignUpPage.css";
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function SignUpPage() {
  const [companyName, setCompanyName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenteredPassword, setReenteredPassword] = useState("");
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const otpInputRefs = useRef([]);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [isOtpSendingFailed, setIsOtpSendingFailed] = useState(false);
  const [isOtpIncorrect, setIsOtpIncorrect] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [isUser, setisUser] = useState({});

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbarOpen(false);
  };

  const responseGoogle = (response) => {
    const authResponse = response.getAuthResponse();
    if (authResponse) {
      const idToken = authResponse.id_token;
      // console.log("ID Token:", idToken);
      const decodedToken = jwtDecode(idToken);
      console.log("Decoded Token : ", decodedToken);
      setisUser(decodedToken);
    }
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleBusinessEmailChange = (event) => {
    setBusinessEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleReenteredPasswordChange = (event) => {
    setReenteredPassword(event.target.value);
  };

  const handleOtpChange = (index, value) => {
    const updatedOtpDigits = [...otpDigits];
    updatedOtpDigits[index] = value.replace(/\D/g, "").slice(0, 1);
    setOtpDigits(updatedOtpDigits);

    if (value) {
      if (index < otpDigits.length - 1) {
        otpInputRefs.current[index + 1].focus();
      }

      // Check if 6 digits are entered
      if (otpDigits.every((digit) => digit !== "")) {
        setIsOtpSent(true); //setotpverified
      }
    } else {
      if (index > 0) {
        otpInputRefs.current[index - 1].focus();
      }
    }
  };

  // const handleVerifyOtp = async () => {
  //   try {
  //     const response = await
  //                      axios.post("http://localhost:4000/signup",
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({company_name:companyName,
  //                               email:businessEmail,
  //                               password:password,
  //                               confirm_password:reenteredPassword
  //         }),
  //       }
  //       );
  //     if (response.status === 200) {
  //       setIsOtpSent(true);
  //       setErrorMsg("");
  //     } else {
  //       setErrorMsg(response.data.error || "Can't Send OTP");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setErrorMsg("Can't Send OTP");
  //   }

  //   // Reset all input digit boxes to their default state
  //   setOtpDigits(["", "", "", "", "", ""]);
  //   otpInputRefs.current[0].focus();
  // };

  const sendOTP = async () => {
    if (emailExists) {
      setErrorMsg("Email already registered. Cannot send OTP.");
      return;
    }

    setIsOtpSent(true);
    setIsOtpSendingFailed(false);
    setIsOtpIncorrect(false);

    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company_name: companyName,
          email: businessEmail, 
          password: password,
          confirm_password: reenteredPassword,
        }),
      });

      if (response.status === 200) {
        setIsOtpSent(true);
        setIsSnackbarOpen(true);
        setErrorMsg("");
      } else if (response.status === 400) {
        setEmailExists(true);
      } else if (response.status === 410) {
        const responseData = await response.json();
        setErrorMsg(responseData.error || "Correct your E-Mail");
      } else {
        setErrorMsg("Can't Send OTP");
        setIsOtpSendingFailed(true);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg("Can't Send OTP");
      setIsOtpSendingFailed(true);
    }

    // Reset all input digit boxes to their default state
    setOtpDigits(["", "", "", "", "", ""]);
    otpInputRefs.current[0].focus();
  };

  const handleVerifyOtp = async () => {
    const sixDigitNumber = otpDigits.join("");
    const finalOtp = parseInt(sixDigitNumber);
    console.log("test: ", finalOtp);
    const response = await fetch("http://localhost:4000/signup/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company_name: companyName,
        email: businessEmail,
        password: password,
        otp: finalOtp,
      }),
    });
    console.log("Testing..");
    if (response.status === 400) {
      setIsOtpIncorrect(true);
      console.log("OTP verification failed");
      setErrorMsg("Invalid OTP");
    } else {
      setIsOtpVerified(true);
      setIsSnackbarOpen(true);
      const responseData = await response.json();
      console.log("OTP verification successful:", responseData);

      window.location.href = "/login";
    }
  };

  const isFormValid = () => {
    return (
      companyName !== "" &&
      businessEmail !== "" &&
      password !== "" &&
      reenteredPassword !== ""
    );
  };

  // const handleCreateAccountClick = async (e) => {
  //   // console.log("Company Name:", companyName);
  //   // console.log("Business Email:", businessEmail);
  //   // console.log("Password:", password);
  //   // console.log("Re-entered Password:", reenteredPassword);
  //   e.preventDefault();

  //   const formData = {
  //     companyName,
  //     businessEmail,
  //     password,
  //   };

  //   const response = await fetch("http://localhost:4000/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });

  //   setCompanyName("");
  //   setBusinessEmail("");
  //   setPassword("");
  //   setReenteredPassword("");
  //   setOtpDigits(["", "", "", "", "", ""]);
  //   setIsOtpSent(false);
  //   setIsOtpVerified(false);

  //   console.log("Connection Successfull");
  //   // navigate('/login');
  // };

  const [currentSlide, setCurrentSlide] = useState(1);

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 3 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 1 : currentSlide + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="sign-up-page">
      <div className="desktop-wrapper">
        <div className="desktop">
          <div className="overlap">
            <h1 className="empowering-your">
              Empowering
              <br />
              Your Finance
            </h1>
            <div className="group">
              <p className="discover-world-s">
                Unleash the power <br />
                of your finance
              </p>
              <div className="test">
                <div className="carousel">
                  <div
                    className={`slide ${currentSlide === 1 ? "active" : ""}`}
                  >
                    <img
                      src="../Images/img1.jpg"
                      alt="Error"
                      className="Images"
                    />
                  </div>
                  <div
                    className={`slide ${currentSlide === 2 ? "active" : ""}`}
                  >
                    <img
                      src="../Images/img2.jpg"
                      alt="Error"
                      className="Images"
                    />
                  </div>
                  <div
                    className={`slide ${currentSlide === 3 ? "active" : ""}`}
                  >
                    <img
                      src="../Images/img3.jpg"
                      alt="Error"
                      className="Images"
                    />
                  </div>
                  <button className="arrow prev" onClick={handlePrevSlide}>
                    {/* <FaArrowLeft /> */}
                  </button>
                  <button className="arrow next" onClick={handleNextSlide}>
                    {/* <FaArrowRight /> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-2">Sign up</div>
          <p className="have-an-account-sign">
            <span className="text-wrapper-3">Have an account? </span>
            <span className="text-wrapper-4">
              <Link to="/login" className="link-no-underline">
                Sign In
              </Link>
            </span>
          </p>
          
          <div className="group-2">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            />

            <div id="googleoauth">
              <GoogleLogin
                clientId="808967355192-6u05ctam5o45q9senl3h4g1uucu9aont.apps.googleusercontent.com"
                buttonText="Sign In with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>

            <div className="cname">
              <TextField
                id="outlined-basic"
                label="Company Name"
                variant="outlined"
                value={companyName}
                onChange={handleCompanyNameChange}
                required
              />
            </div>

            <div className="bemail">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={businessEmail}
                onChange={handleBusinessEmailChange}
                required
              />
            </div>

            <div className="pwd">
              <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="cpwd">
              <TextField
                id="filled-password-input"
                label="Re-enter Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                value={reenteredPassword}
                onChange={handleReenteredPasswordChange}
                required
              />
            </div>

            <div className="sendotp">
              {!isOtpSent && !emailExists && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={sendOTP}
                  disabled={!isFormValid()}
                >
                  Send OTP
                </Button>
              )}

              {emailExists && (
                <>
                  <p className="error-msg">
                    Email already registered. Cannot send OTP.
                  </p>
                  {window.location.reload()}
                </>
              )}
              {isOtpSendingFailed && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={sendOTP}
                  disabled={!isFormValid()}
                >
                  Resend OTP
                </Button>
              )}
            </div>
            {isOtpSent && !emailExists && (
              <div className="otp">
                {otpDigits.map((digit, index) => (
                  <TextField
                    key={index}
                    id={`otp-digit-${index}`}
                    variant="outlined"
                    inputProps={{
                      maxLength: 1,
                    }}
                    className="otp-digit"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Backspace" &&
                        !otpDigits[index] &&
                        index > 0
                      ) {
                        otpInputRefs.current[index - 1].focus();
                      }
                    }}
                    inputRef={(input) => (otpInputRefs.current[index] = input)}
                  />
                ))}
                {isOtpSent && !isOtpVerified && (
                  <>
                    <Snackbar
                      open={isSnackbarOpen}
                      autoHideDuration={3000}
                      onClose={handleCloseSnackbar}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                    >
                      <MuiAlert
                        elevation={6}
                        variant="filled"
                        onClose={handleCloseSnackbar}
                        severity="success"
                        sx={{
                          backgroundColor: "#006400",
                        }}
                      >
                        OTP Sent Successfully
                      </MuiAlert>
                    </Snackbar>
                    <div className="otp-actions">
                      {errorMsg && <p className="error-msg">{errorMsg}</p>}
                      {isOtpIncorrect ? (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={sendOTP}
                        >
                          Resend OTP
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleVerifyOtp}
                        >
                          Verify OTP
                        </Button>
                      )}
                    </div>
                  </>
                )}
                {isOtpVerified && (
                  <Snackbar
                    open={isSnackbarOpen}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  >
                    <MuiAlert
                      elevation={6}
                      variant="filled"
                      onClose={handleCloseSnackbar}
                      severity="success"
                      sx={{
                        backgroundColor: "#006400",
                      }}
                    >
                      Account Created Successfully
                    </MuiAlert>
                  </Snackbar>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
