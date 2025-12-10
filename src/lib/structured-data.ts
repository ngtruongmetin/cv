import { RESUME_DATA } from "@/data/resume-data";

export function generatePersonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: RESUME_DATA.name,
    alternateName: RESUME_DATA.initials,
    description: RESUME_DATA.about,
    url: RESUME_DATA.personalWebsiteUrl,
    image: RESUME_DATA.avatarUrl,
    sameAs: RESUME_DATA.contact.social.map((s) => s.url),
    address: {
      "@type": "PostalAddress",
      addressLocality: RESUME_DATA.location,
      addressCountry: "Vietnam",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: RESUME_DATA.contact.email,
      telephone: RESUME_DATA.contact.tel,
      contactType: "Personal",
    },
    jobTitle: "Full Stack Engineer",
    worksFor:
      RESUME_DATA.work.length > 0
        ? {
            "@type": "Organization",
            name: RESUME_DATA.work[0].company,
            url: RESUME_DATA.work[0].link,
          }
        : undefined,
    alumniOf: RESUME_DATA.education.map((edu) => ({
      "@type": "EducationalOrganization",
      name: edu.school,
    })),
    knowsAbout: RESUME_DATA.skills,
  };
}

export function generateWebPageStructuredData() {
  const url = "https://ngtruong.bcic.edu.vn";

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    url,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: `${RESUME_DATA.name}'s Resume`,
      url,
    },
    about: {
      "@type": "Person",
      name: RESUME_DATA.name,
      url,
    },
    mainEntity: generatePersonStructuredData(),
  };
}


export function generateResumeStructuredData() {
  const url = "https://ngtruong.bcic.edu.vn";

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${RESUME_DATA.name} - Professional Resume`,
    description: `${RESUME_DATA.name}'s professional CV and portfolio.`,
    url,
    dateModified: new Date().toISOString(),
    mainEntity: generatePersonStructuredData(),
  };
}

