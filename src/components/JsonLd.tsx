import React from 'react';

export default function JsonLd() {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AAYURVED NA AANGNE",
    "url": "https://www.aayurvednaangne.in",
    "description": "આયુર્વેદિક પદ્ધતિથી કુદરતી રીતે વજન ઘટાડવા માટેનો વિશ્વસનીય રસ્તો.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.aayurvednaangne.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "AAYURVED NA AANGNE",
    "image": "https://www.aayurvednaangne.in/assets/result_banner.jpg",
    "url": "https://www.aayurvednaangne.in",
    "telephone": "+919687105624",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amreli",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.6032,
      "longitude": 71.2221
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
    </>
  );
}
