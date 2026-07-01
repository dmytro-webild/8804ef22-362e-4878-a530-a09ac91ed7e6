// Created by add_section_from_catalog (AboutTestimonialParallax).

import React from 'react';
import AboutTestimonialParallax from '@/components/sections/about/AboutTestimonialParallax';

export default function AboutSection(): React.JSX.Element {
  return (
    <div data-webild-section="about" id="about">
      <AboutTestimonialParallax
        videoSrc="https://storage.googleapis.com/webild/default/video-placeholder.mp4"
        tag="Om os"
        role="Media Partner"
        textAnimation="fade"
        author="Urban OOH Team"
        quote="Vi bygger bro mellem byggepladser og brands."
      />
    </div>
  );
}
