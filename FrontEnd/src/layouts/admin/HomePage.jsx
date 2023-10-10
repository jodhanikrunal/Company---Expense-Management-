import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
    AOS.refresh();
  }, []);

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Outlay - Empower Your Finance</title>
      <link rel="icon" type="image/x-icon" href="./Images/Outlay_logo.svg" />
      <link
        rel="stylesheet"
        href="./assets/libs/OwlCarousel-2/dist/assets/owl.carousel.min.css"
      />
      <link rel="stylesheet" href="./dist/css/iconfont/tabler-icons.css" />
      <link rel="stylesheet" href="./dist/css/style.css" />
      {/*--------------------------*/}
      {/* Header Start */}
      {/*--------------------------*/}

      {/* <header className="main-header position-fixed w-100">
        <div className="container">
          <nav className="navbar navbar-expand-xl py-0">
            <div className="logo">
              <a className="navbar-brand py-0 me-0" href="#">
                <img src="./Images/Outlay_logo.svg" alt="Error" />
              </a>
            </div>
            <a
              className="d-inline-block d-lg-block d-xl-none d-xxl-none  nav-toggler text-decoration-none"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <i className="ti ti-menu-2 text-warning" />
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
               <ul className="navbar-nav me-auto">
                </ul>
              <Link
                className="btn btn-warning btn-hover-secondery text-capitalize"
                to="/signup"
              >
                Register
              </Link>
            </div>
          </nav>
        </div>
      </header> */}
      <header className="main-header position-fixed w-100">
        <div className="container">
          <nav className="navbar navbar-expand-xl py-0">
            <div className="logo" data-aos="fade-down" data-aos-duration="800">
              <a className="navbar-brand py-0 me-0" href="#">
                <img src="./Images/Outlay_logo.svg" alt="Error" />
              </a>
            </div>
            <a
              className="d-inline-block d-lg-block d-xl-none d-xxl-none nav-toggler text-decoration-none"
              data-aos="fade-left" data-aos-duration="800"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <i className="ti ti-menu-2 text-warning" />
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto">
              </ul>
              <Link
                className="btn btn-warning btn-hover-secondery text-capitalize"
                to="/signup"
                data-aos="fade-up" data-aos-duration="800"
              >
                Register
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/*--------------------------*/}
      {/* Header End  */}
      {/*--------------------------*/}
      {/*--------------------------*/}
      {/*- Hero Banner Start-------*/}
      {/*--------------------------*/}
      {/* <section className="hero-banner position-relative overflow-hidden">
        <div className="container">
          <div className="row d-flex flex-wrap align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div
                className="position-relative left-hero-color"
                style={{ marginTop: "-40%" }}
              >
                <h1 className="mb-0 fw-bold">
                  Empower Your Finances with Outlay
                </h1>
                <p>Your Smart Expense Management Solution</p>
                <a href="#" className="btn btn-warning btn-hover-secondery">
                  <span className="d-inline-block me-1" /> Discover More
                </a>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div
                className="position-relative right-hero-color "
                style={{ marginTop: "-25%" }}
              >
                <img
                  src="./Images/right-image.svg"
                  className="img-fluid"
                  alt="Error"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="hero-banner position-relative overflow-hidden">
        <div className="container">
          <div className="row d-flex flex-wrap align-items-center">
            <div
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
              data-aos="fade-right" // Apply fade-right animation
              data-aos-duration="800" // Set animation duration
            >
              <div className="position-relative left-hero-color" style={{ marginTop: "-40%" }}>
                <h1 className="mb-0 fw-bold">Empower Your Finances with Outlay</h1>
                <p>Your Smart Expense Management Solution</p>
                <a href="#" className="btn btn-warning btn-hover-secondery">
                  <span className="d-inline-block me-1" /> Discover More
                </a>
              </div>
            </div>
            <div
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
              data-aos="fade-left" // Apply fade-left animation
              data-aos-duration="800" // Set animation duration
            >
              <div className="position-relative right-hero-color " style={{ marginTop: "-25%" }}>
                <img src="./Images/right-image.svg" className="img-fluid" alt="Error" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*--------------------------*/}
      {/*- Hero Banner End-------*/}
      {/*--------------------------*/}
      {/*--------------------------*/}
      {/*- Service sectin Start----*/}
      {/*--------------------------*/}

      {/* <section className="service position-relative overflow-hidden">
        <div className="container position-relative">
          <img
            src="./Images/dot-shape.png"
            className="shape position-absolute"
          />
          <div className="row">
            <div className="col-12">
              <small className="fs-7 d-block">Working Process</small>
            </div>
            <div className="col-12 d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-block d-block align-items-center justify-content-xxl-between justify-content-xl-between justify-content-lg-between justify-content-md-between justify-content-sm-between justify-content-sm-center ">
              <h2 className="fs-2 text-black mb-0">
                Our Featured Service
                <br /> that We Provide
              </h2>
              <a
                href="#"
                className="btn btn-warning btn-hover-secondery section-btn"
              >
                All Services
              </a>
            </div>
          </div>
          <div className="row d-flex flex-wrap justify-content-center step-row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <div className="icon-round overflow-hidden rounded-circle position-relative d-flex align-items-center justify-content-center mx-auto text-center">
                    <i className="ti ti-download text-primary position-relative" />
                  </div>
                  <h5 className="mb-0 fw-500">Step 1</h5>
                  <h3 className="fs-4">Create a free Account</h3>
                  <p className="fs-7 mb-0 fw-500">
                    There are many variations of pass for ages of oremsum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <div className="icon-round overflow-hidden rounded-circle position-relative d-flex align-items-center justify-content-center mx-auto text-center">
                    <i className="ti ti-user text-primary position-relative" />
                  </div>
                  <h5 className="mb-0 fw-500">Step 2</h5>
                  <h3 className="fs-4">Start with your free Trial</h3>
                  <p className="fs-7 mb-0 fw-500">
                    There are many variations of pass for ages of oremsum.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <div className="icon-round overflow-hidden rounded-circle position-relative d-flex align-items-center justify-content-center mx-auto text-center">
                    <i className="ti ti-gift text-primary position-relative" />
                  </div>
                  <h5 className="mb-0 fw-500">Step 3</h5>
                  <h3 className="fs-4">Now Start your Journey</h3>
                  <p className="fs-7 mb-0 fw-500">
                    There are many variations of pass for ages of oremsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="service position-relative overflow-hidden">
        <div className="container position-relative">
          <img src="./Images/dot-shape.png" className="shape position-absolute" />
          <div className="row">
            <div className="col-12">
              <small className="fs-7 d-block">Working Process</small>
            </div>
            <div
              className="col-12 d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-block d-block align-items-center justify-content-xxl-between justify-content-xl-between justify-content-lg-between justify-content-md-between justify-content-sm-between justify-content-sm-center "
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <h2 className="fs-2 text-black mb-0">
                Our Featured Service
                <br /> that We Provide
              </h2>
              <a
                href="#"
                className="btn btn-warning btn-hover-secondery section-btn"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                All Services
              </a>
            </div>
          </div>
          <div className="row d-flex flex-wrap justify-content-center step-row">
            {/* <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="card border-0 shadow">
              <div className="card-body">
                <div className="icon-round overflow-hidden rounded-circle position-relative d-flex align-items-center justify-content-center mx-auto text-center">
                  <i className="ti ti-download text-primary position-relative" />
                </div>
                <h5 className="mb-0 fw-500">Step 1</h5>
                <h3 className="fs-4">Create a Free Account</h3>
                <p className="fs-7 mb-0 fw-500">
                  Sign up and create your free account.
                </p>
              </div>
            </div>
          </div> */}

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <a href="/signup" style={{ textDecoration: "none", color: "black" }}> {/* Add the anchor tag */}
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <div className="icon-round overflow-hidden rounded-circle position-relative d-flex align-items-center justify-content-center mx-auto text-center">
                      <i className="ti ti-download text-primary position-relative" />
                    </div>
                    <h5 className="mb-0 fw-500">Step 1</h5>
                    <h3 className="fs-4">Create a Free Account</h3>
                    <p className="fs-7 mb-0 fw-500">
                      Sign up and create your free account.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <a href="/login" style={{ textDecoration: "none", color: "black" }}> {/* Add the anchor tag */}
              <div className="card border-0 shadow">
                <div className="card-body">
                  <div className="icon-round overflow-hidden rounded-circle position-relative d-flex align-items-center justify-content-center mx-auto text-center">
                    <i className="ti ti-user text-primary position-relative" />
                  </div>
                  <h5 className="mb-0 fw-500">Step 2</h5>
                  <h3 className="fs-4">Start with Your Free Trial</h3>
                  <p className="fs-7 mb-0 fw-500">
                    Begin your journey with our free trial period.
                  </p>
                </div>
              </div>
              </a>
            </div>
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="800"
            >
              <div className="card border-0 shadow">
                <div className="card-body">
                  <div className="icon-round overflow-hidden rounded-circle position-relative d-flex align-items-center justify-content-center mx-auto text-center">
                    <i className="ti ti-gift text-primary position-relative" />
                  </div>
                  <h5 className="mb-0 fw-500">Step 3</h5>
                  <h3 className="fs-4">Start Your Journey</h3>
                  <p className="fs-7 mb-0 fw-500">
                    Embark on your financial journey with Outlay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*--------------------------*/}
      {/*- Service sectin Start----*/}
      {/*--------------------------*/}
      {/*------------------------------*/}
      {/*- Our Service sectin Start----*/}
      {/*------------------------------*/}
      <section className="our-service position-relative overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <img src="./Images/our-service.svg" className="img-fluid" />
            </div>
            <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ps-xxl-0 ps-xl-0 ps-lg-3 ps-md-3 ps-sm-3 ps-3">
              <small className="fs-7 d-block">Our Service</small>
              <h2 className="fs-2 text-black mb-0">
                Our Featured Service that We Provide
              </h2>
              <p className="mb-0 fw-500 fs-7">
                An Expense Management System is designed to simplify and
                automate the process of tracking, recording, and analyzing
                expenditures.
              </p>
              <ul className="list-unstyled mb-0 pl-0">
                <li className="d-flex flex-wrap align-items-start">
                  <i className="ti ti-circle-check fs-4 pe-2" />
                  <span className="fs-7 text-black">
                    List of the tasks that require your attention.
                  </span>
                </li>
                <li className="d-flex flex-wrap align-items-start">
                  <i className="ti ti-circle-check fs-4 pe-2" />
                  <span className="fs-7 text-black">
                    Google Calendar integration to see when interruptions will
                    happen
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*--------------------------*/}
      {/*- Our Service sectin End--*/}
      {/*--------------------------*/}
      {/*--------------------------*/}
      {/* Portfolio section Start--*/}
      {/*--------------------------*/}
      <section className="portfolio position-relative bg-primary">
        <div className="container position-relative">
          <div className="row">
            <div className="col-12">
              <small className="fs-7 d-block text-warning">Our Services</small>
            </div>
            <div className="col-12 d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-block d-block align-items-center justify-content-xxl-between justify-content-xl-between justify-content-lg-between justify-content-md-between justify-content-sm-between justify-content-sm-center ">
              <h2 className="fs-3 text-white mb-0">What we Provides ?</h2>
              <a
                href="#"
                className="btn btn-warning btn-hover-secondery section-btn"
              >
                Open Portfolio
              </a>
            </div>
          </div>
          <div className="row d-flex flex-wrap justify-content-center step-row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
              <div className="card bg-transparent">
                <div className="card-body">
                  <div className="icon mx-auto rounded-circle d-flex justify-content-center align-items-center">
                    <i className="ti ti-brand-github text-white" />
                  </div>
                  <h3 className="fs-4 text-white">Github Sync</h3>
                  <p className="fs-7 mb-0 fw-500">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
              <div className="card bg-transparent">
                <div className="card-body">
                  <div className="icon  mx-auto rounded-circle d-flex justify-content-center align-items-center">
                    <i className="ti ti-crown text-white" />
                  </div>
                  <h3 className="fs-4 text-white">Branding</h3>
                  <p className="fs-7 mb-0 fw-500">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
              <div className="card bg-transparent">
                <div className="card-body">
                  <div className="icon mx-auto rounded-circle d-flex justify-content-center align-items-center">
                    <i className="ti ti-message-circle-2 text-white" />
                  </div>
                  <h3 className="fs-4 text-white">Comments</h3>
                  <p className="fs-7 mb-0 fw-500">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container position-relative">
          <div className="portfolio-wrap">
            <div className="owl-carousel owl-theme portfolio-slider">
              <div className="item">
                <a href="#">
                  <img src="./Images/Portfolio.jpg" className="w-100" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="./Images/Portfolio.jpg" className="w-100" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="./Images/Portfolio.jpg" className="w-100" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="./Images/Portfolio.jpg" className="w-100" />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img src="./Images/Portfolio.jpg" className="w-100" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--------------------------*/}
      {/* Portfolio section End ---*/}
      {/*--------------------------*/}
      {/*--------------------------*/}
      {/* Pricing section Start----*/}
      {/*--------------------------*/}
      <section className="pricing position-relative overflow-hidden">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
              <small className="fs-7 d-block">Pricing Plan</small>
              <h2 className="fs-3 pricing-head text-black mb-0 position-relative">
                What’s About Our Pricing Subscription
              </h2>
            </div>
          </div>
          <div className="row plans">
            <div className="col-12 text-center">
              <div className="form-check form-switch d-flex justify-content-center ps-0 align-items-center">
                <label
                  className="form-check-label text-black fs-7"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Monthly
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  defaultChecked
                />
                <label
                  className="form-check-label text-black fs-7"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Yearly
                </label>
              </div>
              <div className="save d-inline-block position-relative text-warning fw-500 fs-9 text-center">
                Save Up To 58%
              </div>
            </div>
          </div>
          <div className="row justify-content-center price-plan">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card position-relative shadow border-0 h-100">
                <div className="card-body pb-4">
                  <small className="fs-7 d-block text-warning text-center">
                    Personal
                  </small>
                  <h2 className="mb-4 text-center position-relative">
                    <sub className="fs-2 text-black">0</sub>
                    <sup className="fs-6 position-absolute">$</sup>
                  </h2>
                  <small className="fs-7 d-block text-center">Free</small>
                  <p className="fs-7 text-center fw-500">
                    For individuals looking for a simple CRM solution
                  </p>
                  <ul className="list-unstyled mb-0 pl-0">
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2" />
                      <span className="fs-7 text-black">
                        Basic CRM features
                      </span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2" />
                      <span className="fs-7 text-black">
                        Unlimited Personal Pipelines
                      </span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2" />
                      <span className="fs-7 text-black">Email Power Tools</span>
                    </li>
                  </ul>
                </div>
                <div className="card-action text-center pb-xxl-5 pb-xl-5 pb-lg-5 pb-md-4 pb-sm-4 pb-4">
                  <a
                    href="#"
                    className="btn btn-warning btn-hover-secondery text-capitalize"
                  >
                    Set Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card position-relative shadow border-0 h-100">
                <div className="position-absolute badge bg-warning d-inline-block mx-auto">
                  Most Popular
                </div>
                <div className="card-body pb-4">
                  <small className="fs-7 d-block text-warning text-center">
                    Professional
                  </small>
                  <h2 className="mb-4 text-center position-relative">
                    <sub className="fs-2 text-black">49</sub>
                    <sup className="fs-6 position-absolute">$</sup>
                  </h2>
                  <small className="fs-7 d-block text-center">Free</small>
                  <p className="fs-7 text-center fw-500">
                    For individuals looking for a simple CRM solution
                  </p>
                  <ul className="list-unstyled mb-0 pl-0">
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2" />
                      <span className="fs-7 text-black">
                        Basic CRM features
                      </span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2" />
                      <span className="fs-7 text-black">
                        Unlimited Personal Pipelines
                      </span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2" />
                      <span className="fs-7 text-black">Email Power Tools</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2" />
                      <span className="fs-7 text-black">
                        Unlimited Shared Pipelines
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="card-action text-center pb-xxl-5 pb-xl-5 pb-lg-5 pb-md-4 pb-sm-4 pb-4">
                  <a
                    href="#"
                    className="btn btn-warning btn-hover-secondery text-capitalize"
                  >
                    Set Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card position-relative shadow border-0 h-100">
                <div className="card-body pb-4">
                  <small className="fs-7 d-block text-warning text-center">
                    Enterprise
                  </small>
                  <h2 className="mb-4 text-center position-relative">
                    <sub className="fs-2 text-black">99</sub>
                    <sup className="fs-6 position-absolute">$</sup>
                  </h2>
                  <small className="fs-7 d-block text-center">Free</small>
                  <p className="fs-7 text-center fw-500">
                    For individuals looking for a simple CRM solution
                  </p>
                  <ul className="list-unstyled mb-0 pl-0">
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2" />
                      <span className="fs-7 text-black">
                        Basic CRM features
                      </span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2" />
                      <span className="fs-7 text-black">
                        Unlimited Personal Pipelines
                      </span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2" />
                      <span className="fs-7 text-black">Email Power Tools</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2" />
                      <span className="fs-7 text-black">
                        Unlimited Shared Pipelines
                      </span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2" />
                      <span className="fs-7 text-black"> Full API Access</span>
                    </li>
                  </ul>
                </div>
                <div className="card-action text-center pb-xxl-5 pb-xl-5 pb-lg-5 pb-md-4 pb-sm-4 pb-4">
                  <a
                    href="#"
                    className="btn btn-warning btn-hover-secondery text-capitalize"
                  >
                    Set Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--------------------------*/}
      {/* Pricing section End------*/}
      {/*--------------------------*/}
      {/*--------------------------*/}
      {/*---- FAQ section Start----*/}
      {/*--------------------------*/}
      <section className="faq position-relative overflow-hidden">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <small className="fs-7 d-block">Frequently Asked Questions</small>
              <h2 className="fs-3 text-black mb-0">
                Want to ask something from us?
              </h2>
            </div>
          </div>
          <div className="accordion-block">
            <div className="accordion row" id="accordionPanelsStayOpenExample">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="accordion-item mb-3">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      className="accordion-button text-black fs-7"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      What is an Expense Management System ?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div className="accordion-body fs-7 fw-500 pt-0">
                      An EMS is a software that automates expense tracking,
                      approval, and reporting, simplifying the entire process.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingTwo"
                  >
                    <button
                      className="accordion-button collapsed text-black fs-7"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Why is efficient expense management important ?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div className="accordion-body fs-7 fw-500 pt-0">
                      Efficient management saves time, reduces errors, and
                      boosts productivity, benefiting the company's financial
                      health.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingThree"
                  >
                    <button
                      className="accordion-button collapsed text-black fs-7"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      What key features does an EMS offer ?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree"
                  >
                    <div className="accordion-body fs-7 fw-500 pt-0">
                      EMS features include receipt scanning, real-time tracking,
                      approval workflows, and detailed reporting.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="accordion-item mb-3">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingfour"
                  >
                    <button
                      className="accordion-button collapsed text-black fs-7"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapsefour"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapsefour"
                    >
                      What benefits does an EMS provide ?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapsefour"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingfour"
                  >
                    <div className="accordion-body fs-7 fw-500 pt-0">
                      EMS offers enhanced visibility, cost savings, fraud
                      prevention, simplified workflows, and compliance
                      assurance.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingfive"
                  >
                    <button
                      className="accordion-button collapsed text-black fs-7"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapsefive"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapsefive"
                    >
                      What kind of cost savings can be expected with an EMS ?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapsefive"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingfour"
                  >
                    <div className="accordion-body fs-7 fw-500 pt-0">
                      Automating processes saves time, reduces errors, and
                      prevents financial losses due to non-compliant expenses.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingsix"
                  >
                    <button
                      className="accordion-button collapsed text-black fs-7"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapsesix"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapsesix"
                    >
                      How does an Outlay simplify approval workflows?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapsesix"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingsix"
                  >
                    <div className="accordion-body fs-7 fw-500 pt-0">
                      Approval processes become seamless as managers review and
                      approve expenses digitally, accelerating reimbursements.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--------------------------*/}
      {/*---- FAQ section End----*/}
      {/*--------------------------*/}
      {/*--------------------------*/}
      {/*---Contact section Start--*/}
      {/*--------------------------*/}
      <section className="contact bg-primary position-relative overflow-hidden">
        <div className="container position-relative">
          <div className="dots-shape-left position-absolute">
            <img src="./Images/dot-shape.png" />
          </div>
          <div className="dots-shape-right position-absolute">
            <img src="./Images/dot-shape.png" />
          </div>
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
              <small className="fs-7 d-block text-warning">Join us Now</small>
              <h2 className="fs-3 text-white mb-0">
                Ready to try the product for free?
              </h2>
              <div className="owl-carousel owl-theme testimonial">
                <div className="item">
                  <div className="details position-relative">
                    <p className="fs-5 fw-light blue-light mb-4">
                      Discover a platform loved by users, making expense
                      management a delightful journey.”
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="avtar-img rounded-circle overflow-hidden">
                        <img
                          src="./Images/testimonial-image.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name ps-3">
                        <h6 className="text-white">Harsh Dudhat</h6>
                        <small className="d-block blue-light fw-500 fs-10 pb-0">
                          Managers
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="details position-relative">
                    <p className="fs-5 fw-light blue-light mb-4">
                      Users adore our platform like a trusted financial
                      companion, simplifying expenses with every click.”
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="avtar-img rounded-circle overflow-hidden">
                        <img
                          src="./Images/testimonial-image.png"
                          className="img-fluid"
                        />
                      </div>
                      <div className="name ps-3">
                        <h6 className="text-white">Kaushal Lodha</h6>
                        <small className="d-block blue-light fw-500 fs-10 pb-0">
                          Managers
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
              <form className="position-relative">
                <div className="row ps-xxl-5 ps-xl-5 ps-lg-3 ps-md-0 ps-sm-0 ps-0">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">
                        User Name
                      </label>
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Enter your username"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label text-white fs-7 mb-3">
                        Email Password
                      </label>
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
                  <div className="agree fs-7 fw-500">
                    By clicking on the Sign Up button, you agree to{" "}
                    <b style={{ color: "white" }}>Outlay</b>.<br />
                    <a href="#" className="text-warning text-decoration-none">
                      terms and conditions of use.
                    </a>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-warning btn-hover-secondery text-capitalize mt-2 w-auto contact-btn">
                      Try for Free
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          `
          <div className="trusted-companies">
            <div className="row justify-content-center">
              <div className="col-xx-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                <h3 className="fs-7 mb-0 text-white text-center">
                  Trusted by Companies across the world
                </h3>
                <ul className="d-flex flex-wrap align-items-center list-unstyled mb-0 pl-0 owl-carousel owl-theme trusted-logos">
                  <li className="text-center item">
                    <a href="#">
                      <img src="./Images/google.svg" />
                    </a>
                  </li>
                  <li className="text-center item">
                    <a href="#">
                      <img src="./Images/microsoft.svg" />
                    </a>
                  </li>
                  <li className="text-center item">
                    <a href="#">
                      <img src="./Images/amazon.svg" />
                    </a>
                  </li>
                  <li className="text-center item">
                    <a href="#">
                      <img src="./Images/unique.svg" />
                    </a>
                  </li>
                  <li className="text-center item">
                    <a href="#">
                      <img src="./Images/google.svg" />
                    </a>
                  </li>
                  <li className="text-center item">
                    <a href="#">
                      <img src="./Images/microsoft.svg" />
                    </a>
                  </li>
                  <li className="text-center item">
                    <a href="#">
                      <img src="./Images/amazon.svg" />
                    </a>
                  </li>
                  <li className="text-center item">
                    <a href="#">
                      <img src="./Images/unique.svg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--------------------------*/}
      {/*---Contact section End---*/}
      {/*--------------------------*/}
      {/*--------------------------*/}
      {/*---Footer Start-----------*/}
      {/*--------------------------*/}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="footer-logo-col">
                <a href="#">
                  <img src="./Images/Outlay_logo_W.svg" />
                </a>
                <p className="blue-light mb-0 fs-7 fw-500">
                  Empower Your Finances with Outlay: Where Efficiency Meets
                  Expense Management Excellence.
                </p>
                <div className="callus text-white fw-500 fs-7">
                  Surat, Gujarat, India
                  <div className="blue-light">
                    Call us:{" "}
                    <a
                      href="#"
                      className="text-warning fw-500 fs-7 text-decoration-none"
                    >
                      808-956-9599
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12">
              <h5 className="text-white">Social</h5>
              <ul className="list-unstyled mb-0 pl-0">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-12">
              <h5 className="text-white">Company</h5>
              <ul className="list-unstyled mb-0 pl-0">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Affiliates</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Legal &amp; Privacy</a>
                </li>
              </ul>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="subscribe">
                <h5 className="text-white">Subscribe</h5>
                <p className="blue-light fw-500">
                  Subscribe to get the latest news form us
                </p>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control br-15"
                    placeholder="Enter email address"
                    aria-label="Enter email address"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-warning btn-hover-secondery ms-xxl-2 ms-xl-2 ls-lg-0 ms-md-0 ms-sm-0 ms-0"
                    type="button"
                    id="button-addon2"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="copyrights text-center blue-light  fw-500">
            @<span id="autodate">2023</span> - All Rights Reserved by{" "}
            <a href="#" className="blue-light text-decoration-none">
              Outlay.live
            </a>
          </div>
          <a href="#" className="blue-light text-decoration-none"></a>
        </div>
        <a href="#" className="blue-light text-decoration-none"></a>
      </footer>
      <a href="#" className="blue-light text-decoration-none">
        {/*--------------------------*/}
        {/*-----Footer End-----------*/}
        {/*--------------------------*/}
      </a>
    </div>
  );
}

