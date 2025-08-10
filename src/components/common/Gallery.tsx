import Link from 'next/link';
import propertyData from '@/data/property.json';

const Gallery = () => {
  return (
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="nav-conceptual" role="tabpanel" aria-labelledby="nav-conceptual-tab">
        <div className="row gx-xxl-5 gx-xl-4 g-lg-3 g-4 mb-70">
          {propertyData.map((property, index) => (
            <div
              className={`col-lg-3 col-md-4 col-sm-6 ${index % 2 === 1 ? 'pt-80' : ''} wow animate fadeInDown`}
              data-wow-delay={`${200 + index * 200}ms`}
              data-wow-duration="1500ms"
              key={property.title}
            >
              <div className="project-info-flow-card">
                <Link href={property.detailsLink} className="info-flow-img">
                  <img src={property.image} alt={property.title} />
                </Link>
                <div className="info-flow-content">
                  <Link href={property.detailsLink}>Project: {property.title}</Link>
                  <h6>
                    <Link href={property.detailsLink}>{property.location}</Link>
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;