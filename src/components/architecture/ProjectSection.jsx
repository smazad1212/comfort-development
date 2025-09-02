import Link from 'next/link'
import React from 'react'
import properties from '@/data/property.json'
import Image from 'next/image'

const ProjectSection = () => {
  const displayedProjects = properties.slice(0, 3);

  const getClassNames = (index) => {
    let classNames = 'project-card2';
    if (index === 1) classNames += ' two';
    if (index < displayedProjects.length - 1) classNames += ' mb-40';
    return classNames;
  };

  const renderProjectContent = (project) => (
    <div className="project-content-wrap">
      <div className="project-content">
        <span>Project:</span>
        <h2><Link href={project.detailsLink}>{project.title}</Link></h2>
        <p><strong>Address:</strong> {project.address}</p>
        <p><strong>Land Area:</strong> {project.landArea}</p>
        <p><strong>Flat Size:</strong> {project.flatSize}</p>
        <br/>
        <ul>
          <li><Link href={project.detailsLink}>{project.status}</Link></li>
        </ul>
      </div>
      <div className="button-area">
        <Link href={project.detailsLink} className="primary-btn">
          View Details
          <svg viewBox="0 0 13 20">
            <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
          </svg>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="home3-project-section mb-120">
      <div className="container">
        <div className="row justify-content-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-xxl-7 col-xl-8 col-lg-9">
            <div className="section-title three text-center">
              <span>Our Projects</span>
              <h2>Highlights</h2>
              <p>Discover our standout real estate projects, crafted for modern living with quality.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        {displayedProjects.map((project, index) => (
          <div className={getClassNames(index)} key={index}>
            <div className="row g-4">
              {index === 1 ? (
                <>
                  <div className="col-md-6 order-md-1 order-2 image-animation-container">
                    <div className="project-img image-reveal wcf--image-effect-zoom-in overflow-hidden" data-animation-type="scale">
                      <Image src={project.image} alt={project.title} width={690} height={440} />
                    </div>
                  </div>
                  <div className="col-md-6 order-md-2 order-1 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                    {renderProjectContent(project)}
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                    {renderProjectContent(project)}
                  </div>
                  <div className="col-md-6 image-animation-container">
                    <div className="project-img image-reveal wcf--image-effect-zoom-in overflow-hidden" data-animation-type="scale">
                      <Image src={project.image} alt={project.title} width={690} height={440} />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
        {properties.length > 3 && (
          <div className="row pt-80 bounce_up">
            <div className="col-lg-12 d-flex justify-content-center">
              <Link href="/property" className="primary-btn2">
                <span>
                  View More Project
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
      <img src="/assets/img/home3/home3-project-section-vector.svg" alt="" className="vector" />
    </div>
  )
}

export default ProjectSection