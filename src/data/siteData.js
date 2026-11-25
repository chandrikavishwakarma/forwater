export const siteData = {
  company: {
    name: "Contoocook Artesian Well Company",
    shortName: "Contoocook Artesian Well Co.",
    slogan: "NO WATER? NO PROBLEM!",
    phone: "603-428-6060",
    phoneClean: "6034286060",
    email: "info@forwater.com",
    address: {
      street: "524 Weare Road",
      poBox: "PO BOX 2036",
      city: "Henniker",
      state: "NH",
      zip: "03242",
      full: "524 Weare Road, PO BOX 2036, Henniker, NH 03242"
    },
    license: "State of New Hampshire Water Well License #1",
    founded: 1936,
    facebookUrl: "https://www.facebook.com/1800FORWATER/",
    indeedUrl: "https://www.indeed.com/job/well-driller-drillers-helper-pump-technician-d1e99afe03d51f3a",
    hours: {
      office: "7am to 5pm, Monday through Friday",
      emergency: "7 Days a Week"
    }
  },

  navLinks: [
    { label: "Home", path: "/" },
    { 
      label: "Services", 
      path: "/services",
      submenu: [
        { label: "Well Drilling", path: "/services#welldrilling" },
        { label: "Pump Services", path: "/services#pumpservices" },
        { label: "Water Testing & Filtration", path: "/services#watertesting" },
        { label: "Hydrofracking Services", path: "/services#hydrofracking" }
      ]
    },
    { label: "No Water or Pressure?", path: "/no-water-or-pressure" },
    { label: "Our History", path: "/history" },
    { label: "Resources", path: "/resources" },
    { label: "Open Positions", path: "/open-positions" },
    { label: "Contact", path: "/contact" }
  ],

  // 4 Original Troubleshooting Guides from forwater.com/resources
  troubleshootingGuides: [
    {
      title: "No Water, No or Low Water Pressure?",
      description: "Quick self-diagnosis guide for low or no water pressure emergencies.",
      file: "/documents/Low-or-No-Water-Pressure.pdf",
      size: "520 KB"
    },
    {
      title: "Is Your Submersible Pump Healthy?",
      description: "Checklist to evaluate submersible pump health and operation.",
      file: "/documents/Is-Your-Submersible-Pump-Healthy.pdf",
      size: "708 KB"
    },
    {
      title: "Artesian or Dug Well? What is the Difference?",
      description: "Learn the essential differences between artesian and shallow dug wells.",
      file: "/documents/Artesian-or-Dug-Well-Difference.pdf",
      size: "366 KB"
    },
    {
      title: "Getting Your Drill Site Ready",
      description: "Preparation steps for drilling rig and service equipment access.",
      file: "/documents/Getting-Your-Drill-Site-Ready.pdf",
      size: "2.9 MB"
    }
  ],

  // 4 Original Use and Care Manuals from forwater.com/resources
  careManuals: [
    {
      title: "Taste & Odor Filtration System",
      description: "Troubleshooting and maintenance document for taste and odor water filtration.",
      file: "/documents/Taste-and-Odor-Filtration-System.pdf"
    },
    {
      title: "Big Blue Filtration System",
      description: "Troubleshooting and maintenance document for Big Blue filtration systems.",
      file: "/documents/Big-Blue-Filtration-System.pdf"
    },
    {
      title: "Reverse Osmosis Drink Water System",
      description: "Troubleshooting and maintenance document for reverse osmosis drinking water.",
      file: "/documents/Reverse-Osmosis-Drinking-Water-System.pdf"
    },
    {
      title: "Water Softening System",
      description: "Troubleshooting and maintenance document for water softening systems.",
      file: "/documents/Water-Softening-System.pdf"
    }
  ],

  // Original 5 reasons from Homepage (https://www.forwater.com/)
  whyChooseUs: [
    {
      number: "1",
      title: "More Water at No Extra Cost",
      text: "Our larger-sized well gives you more water at no extra cost."
    },
    {
      number: "2",
      title: "Skilled Professional Staff",
      text: "Our professional, skilled staff keeps you informed every step of the way."
    },
    {
      number: "3",
      title: "7 Days a Week Service",
      text: "You'll rarely go without water. Call us 7 days a week when your pump needs service."
    },
    {
      number: "4",
      title: "Contamination Prevention",
      text: "We take every measure during construction to prevent contamination from entering your water supply."
    },
    {
      number: "5",
      title: "Three Generations of Pride",
      text: "Three generations of Patenaudes have run our business with pride. You'll be glad you chose us, because we care."
    }
  ],

  // Original 4 Industry Associations from Homepage
  affiliations: [
    {
      name: "Builders Club",
      logo: "/logos/affiliation-builders-club.png",
      url: "http://www.buildersclub.com/"
    },
    {
      name: "New Hampshire Water Well Association",
      logo: "/logos/affiliation-nh-well.png",
      url: "http://www.nhwaterwell.com/"
    },
    {
      name: "National Ground Water Association (NGWA)",
      logo: "/logos/affiliation-ngwa.png",
      url: "http://www.ngwa.org/"
    },
    {
      name: "International Ground Source Heat Pump Association (IGSHPA)",
      logo: "/logos/affiliation-igshpa.png",
      url: "http://www.igshpa.okstate.edu/"
    }
  ],

  // Only the 3 actual testimonials from the original website
  testimonials: {
    home: {
      quote: "It is the greatest feeling in the world to have so much water...I will tell anyone of your hydrofracking service. Thanks again - especially for getting here so soon!",
      author: "J. Pokigo",
      location: "Goffstown, NH"
    },
    history: {
      quote: "I have continued to be impressed by the honesty, efficiency, and professionalism of your firm...helpful, friendly, respectful of my concerns, and informative...a fine example of teamwork and a good display of the pride they must take in their work and their company.",
      author: "J. DelBalso",
      location: "Mont Vernon, NH"
    },
    resources: {
      quote: "You were completely responsive and you made a stressful situation as easy as possible. The outcome was a great fresh water system and the installation was accomplished professionally and on time. The equipment was perfectly located in an out of the way area. Your price beat the competition by a good amount and I can't say enough about how easy it was to work with you. I strongly recommend you to anyone in need of a water system professional.",
      author: "Dave Benson",
      location: "Chester, NH"
    }
  },

  faqQuestions: [
    "What do you do if your faucet has no water?",
    "Why do I suddenly have no water?",
    "Why is my water pressure so low?"
  ]
};
