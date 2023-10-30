import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./LoginPage.css";


export default function LoginPage() {
  const [businessEmail, setBusinessEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [isInvalidPasswordSnackbarOpen, setIsInvalidPasswordSnackbarOpen] = useState(false);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbarOpen(false);
  };

  const handleCloseInvalidPasswordSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsInvalidPasswordSnackbarOpen(false);
  };

  const handleBusinessEmailChange = (event) => {
    setBusinessEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSigninClick = async (e) => {
    // console.log("Business Email:", businessEmail); 
    // console.log("Password:", password);
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: businessEmail, password: password }),
      });
      // const res = await response.json();
      if (response.status === 200) {
        const responseData = await response.json();
        
        localStorage.setItem('User',JSON.stringify(responseData.data));
        // console.log("Token from login : ",responseData.result);
        
        localStorage.setItem("jwtToken", responseData.result);
        
        // console.log("Login successful:", responseData);
        setIsSnackbarOpen(true);
        window.location.href = "/admin/default";
      } else if (response.status === 401) {
        setIsInvalidPasswordSnackbarOpen(true);
        console.log("Login failed: Invalid Password");
      } else {
        console.log("Login failed: Server error");
      }
    } catch (error) {
      console.error(error);
    }
    setBusinessEmail("");
    setPassword("");
  };

  const isFormFilled = businessEmail.trim() !== "" && password.trim() !== "";

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
                </div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-2">Sign In</div>
          <p className="have-an-account-sign">
            <span className="text-wrapper-3">Don't Have an account? </span>
            <span className="text-wrapper-4">
              <Link to="/signup" className="link-no-underline">
                Sign Up
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
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            {isInvalidPasswordSnackbarOpen && (
              <Snackbar
              open={isInvalidPasswordSnackbarOpen}
              autoHideDuration={3000}
              onClose={handleCloseInvalidPasswordSnackbar}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <MuiAlert
                elevation={6}
                variant="filled"
                onClose={handleCloseInvalidPasswordSnackbar}
                severity="error"
                sx={{
                  backgroundColor: '#FF0000', 
                }}
              >
                Invalid Password
              </MuiAlert>
            </Snackbar>
            )}
            <div className="signin">
              <Button
                id="tempbtn"
                variant="contained"
                onClick={handleSigninClick}
                disabled={!isFormFilled}
              >
                Sign In
              </Button>
              {isSnackbarOpen && (
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
                    Login Successfull
                  </MuiAlert>
                </Snackbar>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
