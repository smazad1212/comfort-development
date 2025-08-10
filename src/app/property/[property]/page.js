"use client";
import React from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Breadcrum from '@/components/common/Breadcrum'
import Home1FooterTop from '@/components/Footer/Home1FooterTop'
import useModalVideo from '@/utils/useModalVideo'
import Link from "next/link";
import { FaBed, FaBath, FaUtensils, FaCouch, FaRulerCombined, FaCar, FaCalendarAlt, FaBuilding, FaDoorOpen, FaHome } from "react-icons/fa";

import properties from "@/data/property.json";
import RelatedProperties from '@/components/common/RelatedProperties'

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);


const PropertyDetails = ({ params }) => {
  console.log("Slug:", params.property); // Log the specific slug (property)

  // Find the property data based on the slug
  const propertyData = properties.find(
    (p) => p.detailsLink.toLowerCase() === `/property/${params.property}`.toLowerCase()
  );

  const arrowIcon = (
    <svg width={43} height={6} viewBox="0 0 43 6" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM43 3L38 0.113249V5.88675L43 3ZM3 3.5H38.5V2.5H3V3.5Z" />
    </svg>
  );

  const { openModal, Modal } = useModalVideo();

  // Handle the case where propertyData is not found
  if (!propertyData) {
    return <div>Property not found</div>;
  }

  const iconMap = {
    "Bedrooms": <FaBed />,
    "Bathroom": <FaBath />,
    "Balcony": <FaDoorOpen />,
    "Kitchen": <FaUtensils />,
    "Living Room": <FaCouch />,
    "Family Living": <FaHome />,
    "Property Size": <FaRulerCombined />,
    "Floor Size": <FaRulerCombined />,
    "Garages": <FaCar />,
    "Year Of Built": <FaCalendarAlt />,
    "Units Left": <FaBuilding />,
  };

  const renderDetails = (details) => {
    return details.map((detail, index) => (
      <div className="col-md-6" key={index}>
        <div className="single-item">
          <div className="title">
            {iconMap[detail.title]}
            <h6>{detail.title}</h6>
          </div>
          {arrowIcon}
          <span>{detail.value}</span>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Breadcrum
        content="We Provide Best Properties"
        pageTitle={propertyData.title}
        pagename={propertyData.title}
      />
      <div className="property-details-page pt-120 mb-120">
        <div className="container">
          <div className="property-details-img-grp mb-70">
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <img src={propertyData.image} alt={propertyData.title} />
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="video-and-img-area">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="video-area">
                        {/*<img src={propertyData.image} alt={propertyData.title} />*/}
                        <img src="/assets/img/inner-pages/property-video-img1.jpg" alt="" />
                        <a data-fancybox="video-player" onClick={openModal} className="play-btn">

                          <div className="icon">
                            <svg className="video-circle" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="57px" viewBox="0 0 206 206" style={{ enableBackground: 'new 0 0 206 206' }} xmlSpace="preserve">
                              <circle className="circle" strokeMiterlimit={10} cx={103} cy={103} r={100} />
                              <path className="circle-half top-half" strokeWidth={4} strokeMiterlimit={10} d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6">
                              </path>
                              <path className="circle-half bottom-half" strokeWidth={4} strokeMiterlimit={10} d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53">
                              </path>
                            </svg>
                            <svg className="play-icon" width={18} height={21} viewBox="0 0 22 26" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21.0414 12.6872C21.0414 11.9857 20.68 11.3397 20.0741 10.9581L3.71746 0.667707C3.05587 0.252161 2.24905 0.221801 1.5565 0.588432C0.866106 0.954858 0.453125 1.63119 0.453125 2.39695V22.9762C0.453125 23.742 0.866072 24.4181 1.55755 24.7847C1.87989 24.9547 2.22564 25.0392 2.57141 25.0392C2.96897 25.0392 3.36391 24.927 3.71724 24.7054L20.0739 14.4166C20.68 14.0348 21.0414 13.3888 21.0414 12.6874V12.6872ZM19.4837 13.5246L3.12701 23.8134C2.80597 24.015 2.41492 24.0287 2.07958 23.8524C1.74423 23.6749 1.5435 23.3475 1.5435 22.976V2.39676C1.5435 2.02528 1.74423 1.69657 2.07958 1.52035C2.2363 1.43855 2.40452 1.39701 2.57165 1.39701C2.76458 1.39701 2.9562 1.45119 3.12725 1.55956L19.4839 11.85C19.7817 12.0376 19.9526 12.3438 19.9526 12.6887C19.9523 13.0323 19.7815 13.337 19.4837 13.5246Z" />
                            </svg>
                          </div>
                        </a>

                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="video-bottom-img">
                        {/*<img src={propertyData.image} alt={propertyData.title} />*/}
                        <img src="/assets/img/inner-pages/property-details-grp-img2.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                {/*<img src={propertyData.image} alt={propertyData.title} />*/}
                <img src="/assets/img/inner-pages/property-details-grp-img3.jpg" alt="" />
              </div>

            </div>
          </div>
          <div className="row gy-5">
            <div className="col-lg-12">
              <div className="property-details-content-wrap">
                <div className="title-and-pricing-area mb-50">
                  <div className="title-area">
                    <span>{propertyData.status}</span>
                    <h2>{propertyData.title}</h2>
                    <div className="address-area">
                      <div className="icon">
                        <svg width={23} height={33} viewBox="0 0 23 33" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.5894 0.502504L11.5895 0.502506C15.3686 0.579597 18.7668 2.59493 20.683 5.90177C22.6428 9.28383 22.696 13.3415 20.8268 16.7631L12.6449 31.7387L12.6436 31.7411L12.6384 31.7503L12.6379 31.7514C12.3668 32.2224 11.8869 32.5 11.346 32.5C10.805 32.5 10.325 32.2225 10.0539 31.7513L10.0534 31.7503L10.0482 31.7411L10.0469 31.7387L1.86503 16.763C-0.0042938 13.3415 0.0489118 9.28383 2.00871 5.90178C3.92497 2.59492 7.32314 0.579597 11.1022 0.502506L11.1023 0.502504C11.2643 0.499165 11.4274 0.499165 11.5894 0.502504ZM6.20521 10.3125C6.20521 13.1475 8.51084 15.4532 11.3458 15.4532C14.1809 15.4532 16.4865 13.1475 16.4865 10.3125C16.4865 7.47754 14.1808 5.17191 11.3458 5.17191C8.51084 5.17191 6.20521 7.47754 6.20521 10.3125Z" />
                        </svg>
                      </div>
                      <div className="content">
                        <span>Location</span>
                        <a href={propertyData.mapLink} target="_blank">{propertyData.address}</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details-area mb-70">
                  <h2>Details</h2>
                  <div className="property-details-table">
                    <div className="row g-0">
                      {renderDetails(propertyData.details)}
                    </div>
                  </div>
                </div>
                <div className="description-area mb-60">
                  <h2>Description</h2>
                  <p>{propertyData.description}</p>
                </div>
                <div className="nearby-table-area mb-70">
                  <h2>What’s Nearby</h2>
                  <div className="property-details-table">
                    <div className="row g-0">
                      <div className="col-md-6">
                        <div className="single-item">
                          <div className="title">
                            <h6>School</h6>
                          </div>
                          {arrowIcon}
                          <span>50m</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-item">
                          <div className="title">
                            <h6>Bus Station</h6>
                          </div>
                          {arrowIcon}
                          <span>90m</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-item">
                          <div className="title">
                            <h6>Hospital</h6>
                          </div>
                          {arrowIcon}
                          <span>40m</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-item">
                          <div className="title">
                            <h6>Airport</h6>
                          </div>
                          {arrowIcon}
                          <span>125m</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-item">
                          <div className="title">
                            <h6>Market</h6>
                          </div>
                          {arrowIcon}
                          <span>60m</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-item">
                          <div className="title">
                            <h6>Railway Station</h6>
                          </div>
                          {arrowIcon}
                          <span>118m</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-item">
                          <div className="title">
                            <h6>Gym, Wellness</h6>
                          </div>
                          {arrowIcon}
                          <span>70m</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-item">
                          <div className="title">
                            <h6>Beauty Center</h6>
                          </div>
                          {arrowIcon}
                          <span>80m</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="attachment-area">
                  <h2>Property Attachment</h2>
                  <ul className="attachment-list">
                    <li className="single-attachment">
                      <a href="assets/property_details.pdf" download="property_details.pdf">
                        <div className="icon">
                          <img src="/assets/img/inner-pages/icon/pdf-icon.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>License</h6>
                          <span>Pdf</span>
                        </div>
                      </a>
                    </li>
                    <li className="single-attachment">
                      <a href="assets/property_details.pdf" download="property_details.pdf">
                        <div className="icon">
                          <img src="/assets/img/inner-pages/icon/pdf-icon.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Information</h6>
                          <span>Pdf</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProperties/>
      <Modal />
      <Home1FooterTop />
    </>
  )
}

export default PropertyDetails