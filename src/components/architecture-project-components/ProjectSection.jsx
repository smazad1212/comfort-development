"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import Gallery from '@/components/common/Gallery'

const ProjectSection = () => {
    
    useEffect(() => {
        const infoflow1TextItems = document.querySelectorAll(".project-info-flow-card");
      
        function followImageCursor(event, infoflow1TextItem) {
          const contentBox = infoflow1TextItem.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          
          // Select the .info-flow-content directly as the 3rd child
          const content = infoflow1TextItem.querySelector(".info-flow-content");
          if (content) {
            content.style.transform = `translate(${dx}px, ${dy}px)`;
          }
        }
      
        infoflow1TextItems.forEach((item) => {
          item.addEventListener("mousemove", (event) => followImageCursor(event, item));
        });
      
        // Clean up the event listener when the component unmounts
        return () => {
          infoflow1TextItems.forEach((item) => {
            item.removeEventListener("mousemove", (event) => followImageCursor(event, item));
          });
        };
      }, []);
    return (
        <>
            <div className="home6-project-section mb-120">
                <div className="container-fluid">
                    <div className="title-area mb-90">
                        <div className="row g-4 align-items-end wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="col-lg-5">
                                <div className="section-title">
                                    <h2>A glimpse into our creative work.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Gallery/>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <Link href="/project" className="primary-btn3 bounce_up">
                                <span>
                                    View All Project
                                    <svg viewBox="0 0 13 20">
                                        <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                                    </svg>
                                </span>
                                <i className="corner tl" />
                                <i className="corner tr" />
                                <i className="corner br" />
                                <i className="corner bl" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectSection