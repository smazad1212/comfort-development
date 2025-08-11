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
import Link from "next/link";
import { FaBed, FaBath, FaUtensils, FaCouch, FaRulerCombined, FaCar, FaCalendarAlt, FaBuilding, FaDoorOpen, FaHome } from "react-icons/fa";

import properties from "@/data/property.json";
import RelatedProperties from '@/components/common/RelatedProperties'
import PropertyImageGallery from '@/components/common/PropertyImageGallery';

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
            <PropertyImageGallery property={propertyData} size={propertyData.allImages?.length || 1} video={false}/>
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
                {/*if property data has attachments, loop through them*/}
                { propertyData.attachments && propertyData.attachments.length > 0 && (
                <div className="attachment-area">
                  <h2>Property Attachment</h2>
                  <ul className="attachment-list">
                    {propertyData.attachments.map((attachment, index) => (
                      <li className="single-attachment" key={index}>
                        <a href={attachment.link} download={attachment.fileName}>
                          <div className="icon">
                            <img src="/assets/img/inner-pages/icon/pdf-icon.svg" alt="pdf icon" />
                          </div>
                          <div className="content">
                            <h6>{attachment.name}</h6>
                            <span>{attachment.type}</span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProperties/>
      <Home1FooterTop />
    </>
  )
}

export default PropertyDetails