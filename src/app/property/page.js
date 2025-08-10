"use client";
import React, { useState } from "react";
import Link from "next/link";
import Breadcrum from "@/components/common/Breadcrum";
import SelectComponent from "@/components/common/SelectComponent";
import Home1FooterTop from "@/components/Footer/Home1FooterTop";
import properties from "@/data/property.json";
import Image from "next/image";

const PropertyPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const uniqueStatuses = [...new Set(properties.map((property) => property.status))];
  const uniqueTypes = [...new Set(properties.map((property) => property.type))];
  const uniqueLocations = [...new Set(properties.map((property) => property.location))];

  const handleClearFilters = () => {
    setSelectedStatus("");
    setSelectedType("");
    setSelectedLocation("");
  };

  const filteredProperties = properties.filter(
    (property) =>
      (!selectedStatus || property.status === selectedStatus) &&
      (!selectedType || property.type === selectedType) &&
      (!selectedLocation || property.location === selectedLocation)
  );

  return (
    <>
      <Breadcrum
        pageTitle={"Properties"}
        pagename={"Properties"}
        content="We Provide Best Properties"
      />
      <div className="property-form-section">
        <div className="container">
          <div className="property-form-wrap">
            <div className="row g-xxl-4 g-xl-3 g-lg-2 gx-md-2 gy-4">
              <div className="col-lg-3 col-md-3">
                <div className={`single-dropdown ${selectedStatus ? "active" : ""}`}>
                  <SelectComponent
                    options={uniqueStatuses}
                    placeholder="Status"
                    onSelect={setSelectedStatus}
                    value={selectedStatus}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className={`single-dropdown ${selectedType ? "active" : ""}`}>
                  <SelectComponent
                    options={uniqueTypes}
                    placeholder="Type"
                    onSelect={setSelectedType}
                    value={selectedType}
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <div className={`single-dropdown ${selectedLocation ? "active" : ""}`}>
                  <SelectComponent
                    options={uniqueLocations}
                    placeholder="Location"
                    onSelect={setSelectedLocation}
                    value={selectedLocation}
                  />
                </div>
              </div>
              <div className="col-lg-2 d-flex justify-content-center">
                <button className="btn btn-secondary" onClick={handleClearFilters}>
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="properties-page pt-120 mb-120">
        <div className="container">
          <div className="row gy-5 mb-70">
            {filteredProperties.map((property, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow animate fadeInDown"
                data-wow-delay={`${200 + index * 100}ms`}
                data-wow-duration="1500ms"
              >
                <div className="property-card magnetic-item">
                  <div className="property-img-wrap">
                    <Link href={property.detailsLink} className="property-img">
                      <Image src={property.image} alt={property.title} height={500} width={420} />
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
        </div>
      </div>
      <Home1FooterTop />
    </>
  );
};

export default PropertyPage;