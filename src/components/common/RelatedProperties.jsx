import Link from 'next/link'
import React, { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import properties from '@/data/property.json'

const RelatedProperties = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".related-property-slider-next",
        prevEl: ".related-property-slider-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <div className="related-property-section mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-lg-12 d-flex align-items-center justify-content-between gap-4 flex-wrap">
            <div className="section-title">
              <span>Building Trust Since 2005</span>
              <h2>Related Property</h2>
            </div>
            <div className="slider-btn-grp">
              <div className="slider-btn related-property-slider-prev">
                <i className="bi bi-arrow-left" />
              </div>
              <div className="slider-btn related-property-slider-next">
                <i className="bi bi-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="related-property-slider-area">
          <div className="row">
            <div className="col-lg-12">
              <Swiper {...settings} className="swiper related-property-slider">
                <div className="swiper-wrapper">
                  {properties.map((property, index) => (
                    <SwiperSlide
                      key={index}
                      className="swiper-slide"
                    >
                      <div className="property-card">
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
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RelatedProperties