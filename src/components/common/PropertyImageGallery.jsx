import React from 'react';

let propertyData = null;

const QuadrupleImageGallery = () => (
  <div className="row g-4">
    <div className="col-lg-4 col-md-6 quadruple-image-large">
      <img src={propertyData.allImages[0]} alt={propertyData.title} />
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="video-and-img-area">
        <div className="row g-4">
          <div className="col-lg-12 video-top-img quadruple-image-split">
            <img src={propertyData.allImages[1]} alt={propertyData.title} />
          </div>
          <div className="col-lg-12 video-bottom-img quadruple-image-split">
            <img src={propertyData.allImages[2]} alt={propertyData.title} />
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 quadruple-image-large">
      <img src={propertyData.allImages[3]} alt={propertyData.title} />
    </div>
  </div>
)

const TripleImageGallery = () => (
  <div className="row g-4">
    <div className="col-lg-4 col-md-6 quadruple-image-large">
      <img src={propertyData.allImages[0]} alt={propertyData.title} />
    </div>
    <div className="col-lg-4 col-md-6 quadruple-image-large">
      <img src={propertyData.allImages[1]} alt={propertyData.title} />
    </div>
    <div className="col-lg-4 quadruple-image-large">
      <img src={propertyData.allImages[2]} alt={propertyData.title} />
    </div>
  </div>
)

const DoubleImageGallery = () => (
  <div className="row g-4">
    <div className="col-lg-6 col-md-6 quadruple-image-large">
      <img src={propertyData.allImages[0]} alt={propertyData.title} />
    </div>
    <div className="col-lg-6 col-md-6 quadruple-image-large">
      <img src={propertyData.allImages[1]} alt={propertyData.title} />
    </div>
  </div>
)

const SingleImageGallery = () => (
  <div className="row g-4">
    <div className="col-lg-12 quadruple-image-large">
      <img src={propertyData.allImages ? propertyData.allImages[0] : propertyData.image} alt={propertyData.title} />
    </div>
  </div>
)

const PropertyImageGallery = ({ property, size }) => {
  propertyData = property;
  if (!propertyData) {
    return null;
  }
  switch (size) {
    case 1:
      return <SingleImageGallery />;
    case 2:
      return <DoubleImageGallery />;
    case 3:
      return <TripleImageGallery />;
    default:
      return <QuadrupleImageGallery />;
  }
}

export default PropertyImageGallery;