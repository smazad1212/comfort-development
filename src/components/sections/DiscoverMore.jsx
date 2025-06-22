"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import CountUp from 'react-countup'
const AboutSection = () => {
  return (
    <>
      <div className="home3-counter-section mb-120">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-between mb-80 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-xxl-6 col-lg-7">
              <div className="section-title three">
                <span>Discover More</span>
                <h2>Our Partners</h2>
                <p>We collaborate with trusted partners and vendors who share our commitment to quality, reliability, and excellence, ensuring the best materials and services for our projects.</p>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter">
                <div className="content bounce_up">
                  <img src="assets/img/partners/archetype.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter two">
                <div className="content bounce_up">
                  <img src="assets/img/partners/concept.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="logo-section style-2 mb-120">
        <div className="container">
          <div className="logo-wrap">
            <div className="logo-title">
              <h6>Our Vendors:</h6>
            </div>
            <div className="marquee">
              <div className="marquee__group">
                <span><img src="assets/img/vendors/1.png" alt="" /></span>
                <span><img src="assets/img/vendors/2.png" alt="" /></span>
                <span><img src="assets/img/vendors/3.png" alt="" /></span>
                <span><img src="assets/img/vendors/4.png" alt="" /></span>
                <span><img src="assets/img/vendors/5.png" alt="" /></span>
                <span><img src="assets/img/vendors/6.png" alt="" /></span>
                <span><img src="assets/img/vendors/7.png" alt="" /></span>
                <span><img src="assets/img/vendors/8.png" alt="" /></span>
                <span><img src="assets/img/vendors/9.png" alt="" /></span>
                <span><img src="assets/img/vendors/10.png" alt="" /></span>
              </div>
              <div aria-hidden="true" className="marquee__group">
                <span><img src="assets/img/vendors/1.png" alt="" /></span>
                <span><img src="assets/img/vendors/2.png" alt="" /></span>
                <span><img src="assets/img/vendors/3.png" alt="" /></span>
                <span><img src="assets/img/vendors/4.png" alt="" /></span>
                <span><img src="assets/img/vendors/5.png" alt="" /></span>
                <span><img src="assets/img/vendors/6.png" alt="" /></span>
                <span><img src="assets/img/vendors/7.png" alt="" /></span>
                <span><img src="assets/img/vendors/8.png" alt="" /></span>
                <span><img src="assets/img/vendors/9.png" alt="" /></span>
                <span><img src="assets/img/vendors/10.png" alt="" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection