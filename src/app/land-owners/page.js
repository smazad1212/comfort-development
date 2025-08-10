"use client"
import React from "react";
import Breadcrum from '@/components/common/Breadcrum'
import Home1FooterTop from '@/components/Footer/Home1FooterTop'
import Steps from '@/components/steps/Steps'

import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const circleIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 15 15">
    <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
  </svg>
)

const LandOwners = () => {
  return (
    <>
      <Breadcrum content='What We Work' pageTitle={'Land Owners'} pagename={'Land Owners'} />
      <div className="service-details-page pt-120 mb-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*<div className="service-details-thumb mb-60">*/}
              {/*  <img src="https://vernex-next-js.vercel.app/assets/img/inner-pages/service-details-thumb-img.jpg" alt="" />*/}
              {/*</div>*/}
              <div className="title-area mb-60">
                <h2>Build <span>With Comfort</span></h2>
                {/*<ul className="tag-list">*/}
                {/*  <li>Family Homes</li>*/}
                {/*  <li>Custom Homes</li>*/}
                {/*</ul>*/}
              </div>
            </div>
          </div>
          <div className="row g-lg-4 gy-5 mb-20">
            <div className="col-lg-12 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="details-content-wrapper">
                <p>At Comfort Development Ltd, we believe landowners are not just participants in our projects, they are our most valued partners. Together, we shape skylines and redefine urban living, one thoughtful development at a time. With every joint venture, we commit to delivering apartments that combine design excellence, functional comfort, and enduring value.
                </p>
                <span className="line-break" />
                <p>
                  Our promise is simple: transparency, timely delivery, and a shared vision of success. We don’t just construct buildings, we build trust, long-term relationships, and lasting impact. With careful financial planning and a deep understanding of the market, we ensure our partners never have to wait for sales to see progress.
                </p>
                <span className="line-break" />
                <ul>
                  <li>
                    {circleIcon}
                    Site Assessment
                  </li>
                  <li>
                    {circleIcon}
                    Design Planning
                  </li>
                  <li>
                    {circleIcon}
                    Foundation Work
                  </li>
                  <li>
                    {circleIcon}
                    Home Remodeling
                  </li>
                  <li>
                    {circleIcon}
                    Flooring Upgrades
                  </li>
                  <li>
                    {circleIcon}
                    Smart Integration
                  </li>
                </ul>
                <span className="line-break" />
                <p>
                  Whether you’re envisioning a modern apartment block or a landmark residential complex, Comfort turns your land into a legacy one that speaks of reliability, integrity, and architectural distinction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Steps></Steps>
      <Home1FooterTop />
    </>
  )
}

export default LandOwners