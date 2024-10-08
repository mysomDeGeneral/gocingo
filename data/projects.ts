  export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
  }
  
  const mockProjects: Project[] = [
    {
      "id": 1,
      "title": "Clean Water Initiative",
      "description": "Providing access to clean and safe drinking water in rural communities.",
      "image": "/images/borehole.jpg"
    },
    {
      "id": 2,
      "title": "Education for All",
      "description": "Building schools and supporting education programs in underserved areas.",
      "image": "/images/school_block.jpg"
    },
    {
      "id": 3,
      "title": "Sustainable Agriculture",
      "description": "Promoting sustainable farming practices to improve food security and livelihoods.",
      "image": "/images/farmland.jpg"
    },
    {
      "id": 4,
      "title": "Healthcare Outreach",
      "description": "Bringing essential healthcare services to remote and underserved populations.",
      "image": "/images/health.jpg"
    },
    {
      "id": 5,
      "title": "Women Empowerment",
      "description": "Supporting women through skills training and microfinance initiatives.",
      "image": "/images/soapmaking.jpg"
    },
    {
      "id": 6,
      "title": "Environmental Conservation",
      "description": "Protecting local ecosystems and promoting sustainable resource management.",
      "image": "/images/solar_panels.jpg"
    }
  ]

  export default mockProjects;