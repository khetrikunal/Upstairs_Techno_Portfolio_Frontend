export interface SchemaPerson {
  "@type": "Person";
  "@id": string;
  name: string;
  givenName?: string;
  additionalName?: string;
  familyName?: string;
  jobTitle: string;
  alternateName?: string[];
  description?: string;
  image?: string;
  url?: string;
  sameAs?: string[];
  worksFor: {
    "@id": string;
  };
}

export const corporateOrganizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "Corporation"],
      "@id": "https://upstairstechno.com/#organization",
      "name": "Upstairs Techno Private Limited",
      "legalName": "Upstairs Techno Private Limited",
      "alternateName": [
        "Upstairs Techno",
        "Upstairs Techno Pvt Ltd",
        "Upstairs Techno Pvt. Ltd.",
        "UpstairsTechno"
      ],
      "url": "https://upstairstechno.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://upstairstechno.com/#logo",
        "url": "https://upstairstechno.com/Upstairs_Logo.jpeg",
        "caption": "Upstairs Techno Private Limited Logo"
      },
      "image": "https://upstairstechno.com/Upstairs_Logo.jpeg",
      "description":
        "Upstairs Techno Private Limited is an enterprise technology company delivering scalable software engineering, AI automation, IT consulting, and technical talent development.",
      "email": "contact@upstairstechno.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rajeamarsinha Colony, Malegaon Bk",
        "addressLocality": "Baramati",
        "addressRegion": "Maharashtra",
        "postalCode": "413115",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/upstairstechno/",
        "https://www.linkedin.com/company/upstairs-techno"
      ],
      "founder": [
        {
          "@type": "Person",
          "@id": "https://upstairstechno.com/#person-avinash-narute",
          "name": "Avinash Narute",
          "jobTitle": "Founder",
          "image": "https://upstairstechno.com/Founder.jpeg",
          "worksFor": {
            "@id": "https://upstairstechno.com/#organization"
          }
        },
        {
          "@type": "Person",
          "@id": "https://upstairstechno.com/#person-ganesh-kokare",
          "name": "Ganesh Kokare",
          "jobTitle": "Co-Founder",
          "image": "https://upstairstechno.com/Co-Founder.jpeg",
          "worksFor": {
            "@id": "https://upstairstechno.com/#organization"
          }
        }
      ],
      "director": [
        {
          "@type": "Person",
          "@id": "https://upstairstechno.com/#person-kunal-gururaj-khetri",
          "name": "Kunal Gururaj Khetri",
          "jobTitle": "Chief Executive Officer (CEO)",
          "worksFor": {
            "@id": "https://upstairstechno.com/#organization"
          }
        }
      ],
      "executives": [
        {
          "@type": "Person",
          "@id": "https://upstairstechno.com/#person-kunal-gururaj-khetri",
          "name": "Kunal Gururaj Khetri",
          "jobTitle": "Chief Executive Officer (CEO)",
          "worksFor": {
            "@id": "https://upstairstechno.com/#organization"
          }
        },
        {
          "@type": "Person",
          "@id": "https://upstairstechno.com/#person-shreyash-chilweri",
          "name": "Shreyash Chilweri",
          "jobTitle": "Chief Technology Officer (CTO)",
          "worksFor": {
            "@id": "https://upstairstechno.com/#organization"
          }
        }
      ],
      "employee": [
        {
          "@id": "https://upstairstechno.com/#person-kunal-gururaj-khetri"
        },
        {
          "@id": "https://upstairstechno.com/#person-shreyash-chilweri"
        }
      ],
      "knowsAbout": [
        "Enterprise Software Engineering",
        "Artificial Intelligence & Automation",
        "IT Consulting",
        "Digital Transformation",
        "Talent Development"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://upstairstechno.com/#website",
      "url": "https://upstairstechno.com",
      "name": "Upstairs Techno",
      "publisher": {
        "@id": "https://upstairstechno.com/#organization"
      }
    },
    {
      "@type": "Person",
      "@id": "https://upstairstechno.com/#person-kunal-gururaj-khetri",
      "name": "Kunal Gururaj Khetri",
      "givenName": "Kunal",
      "additionalName": "Gururaj",
      "familyName": "Khetri",
      "jobTitle": "Chief Executive Officer",
      "alternateName": [
        "Kunal Khetri",
        "Kunal G. Khetri"
      ],
      "description":
        "Chief Executive Officer (CEO) and Director of Upstairs Techno Private Limited, leading strategic initiatives, enterprise software engineering, and corporate operations.",
      "worksFor": {
        "@id": "https://upstairstechno.com/#organization"
      },
      "url": "https://upstairstechno.com/about#kunal-gururaj-khetri",
      "sameAs": [
        "https://www.linkedin.com/in/kunal-khetri-82410b31b",
        "https://github.com/khetrikunal",
        "mailto:ceo@upstairstechno.com",
        "https://www.instagram.com/_kunal.khetri/"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://upstairstechno.com/#person-shreyash-chilweri",
      "name": "Shreyash Chilweri",
      "givenName": "Shreyash",
      "familyName": "Chilweri",
      "jobTitle": "Chief Technology Officer",
      "alternateName": ["Shreyash Chilweri"],
      "description":
        "Chief Technology Officer (CTO) of Upstairs Techno Private Limited, overseeing technical architecture, systems engineering, and platform development.",
      "worksFor": {
        "@id": "https://upstairstechno.com/#organization"
      },
      "url": "https://upstairstechno.com/about#shreyash-chilweri",
      "sameAs": [
        "https://www.linkedin.com/in/shreyash-chilweri"
      ]
    }
  ]
};

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://upstairstechno.com/about#webpage",
      "url": "https://upstairstechno.com/about",
      "name": "About Us & Corporate Leadership | Upstairs Techno Private Limited",
      "description":
        "Leadership directory and corporate background of Upstairs Techno Private Limited, led by Chief Executive Officer (CEO) Kunal Gururaj Khetri and founded by Avinash Narute and Ganesh Kokare.",
      "isPartOf": {
        "@id": "https://upstairstechno.com/#website"
      },
      "about": {
        "@id": "https://upstairstechno.com/#organization"
      },
      "mainEntity": {
        "@id": "https://upstairstechno.com/#organization"
      }
    }
  ]
};
