import React from 'react';
import Link from 'next/link';
import Breadcrum from '@/components/common/Breadcrum';
import SelectComponent from '@/components/common/SelectComponent';
import Home1FooterTop from '@/components/Footer/Home1FooterTop';
import properties from '@/data/property.json';

const propertyPage = () => {
  // Extract unique statuses, and other properties dynamically if required
  const uniqueStatuses = [...new Set(properties.map((property) => property.status))];
  const uniqueTypes = [...new Set(properties.map((property) => property.type))];
  const uniqueLocations = [...new Set(properties.map((property) => property.location))];

  return (
    <>
      <Breadcrum
        pageTitle={'Properties'}
        pagename={'Properties'}
        content='We Provide Best Properties'
      />
      <div className="property-form-section">
        <div className="container">
          <div className="property-form-wrap">
            <div className="row g-xxl-4 g-xl-3 g-lg-2 gx-md-2 gy-4">
              <div className="col-lg-3 col-md-3">
                <div className="single-dropdown">
                  <SelectComponent options={["Status", ...uniqueStatuses]} placeholder={"Status"} />
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="single-dropdown">
                  <SelectComponent options={["Status", ...uniqueTypes]} placeholder={"Type"} />
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="single-dropdown">
                  <SelectComponent options={["Location", ...uniqueLocations]} placeholder={"Location"} />
                </div>
              </div>
              <div className="col-lg-2 d-flex justify-content-center">
                <button type="submit">Search Property</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="properties-page pt-120 mb-120">
        <div className="container">
          <div className="row gy-5 mb-70">
            {properties.map((property, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow animate fadeInDown"
                data-wow-delay={`${200 + index * 100}ms`}
                data-wow-duration="1500ms"
              >
                <div className="property-card magnetic-item">
                  <div className="property-img-wrap">
                    <Link href={property.detailsLink} className="property-img">
                      <img src={property.image} alt={property.title} />
                    </Link>
                  </div>
                  <div className="property-content">
                    <ul>
                      <li>{property.type}</li>
                      <li>{property.floors} Floors</li>
                      <li>{property.flatSize}</li>
                    </ul>
                    <h5>
                      <Link href={property.detailsLink}>{property.title}</Link>
                    </h5>
                    <Link href={property.detailsLink} className="primary-btn">
                      View Details
                      <svg viewBox="0 0 13 20">
                        <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/*<div className="row">*/}
          {/*    <div className="col-lg-12 d-flex justify-content-center">*/}
          {/*        <a href="#" className="primary-btn2 bounce_up">*/}
          {/*              <span>*/}
          {/*                  Load More*/}
          {/*                  <svg viewBox="0 0 13 20">*/}
          {/*                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />*/}
          {/*                  </svg>*/}
          {/*              </span>*/}
          {/*        </a>*/}
          {/*    </div>*/}
          {/*</div>*/}
        </div>
      </div>
      <Home1FooterTop />
    </>
  );
};

export default propertyPage;