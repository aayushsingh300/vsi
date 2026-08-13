// ════════════════════════════════════════════════════════════════════
//  All content data for Venture Skill India website
// ════════════════════════════════════════════════════════════════════

export type CourseCert = {
  slug: string;
  name: string;
  fee: string;
  hrs: string;
  n: string;
  tag: string;
  thumb: string;
  desc: string;
  longDesc: string;
  software: string[];
  modules: { t: string; d: string }[];
  audience: string;
  salary: { min: string; avg: string; max: string };
  features: string[];
};

export const COURSES_CERT: CourseCert[] = [
  {
    slug: "architecture-cad",
    name: "Architecture CAD",
    fee: "₹40,000",
    hrs: "320 hrs",
    n: "7,400+",
    tag: "",
    thumb: "arch",
    desc: "Master AutoCAD, Revit, SketchUp and 3DS Max. Build photo-realistic architectural visualizations.",
    longDesc: "Unlock the power of technology in architectural design. A 320-hour offline programme covering drafting, design and visualization of architectural projects using the latest CAD software — from precise 2D drawings to photo-realistic 3D walkthroughs.",
    software: ["Lumion", "AutoCAD", "V-Ray", "3ds Max", "Revit", "Pre-DCR", "Corona Renderer", "Photoshop MSP", "Enscape", "Vastu Shastra", "SketchUp", "STAAD.Pro"],
    modules: [
      { t: "Module 1 · AutoCAD Foundations", d: "Interface mastery, 2D drafting conventions, dimensioning, layer management and architectural symbol libraries." },
      { t: "Module 2 · Revit Architecture (BIM)", d: "Building Information Modeling — walls, floors, roofs, families, schedules and construction documentation." },
      { t: "Module 3 · 3ds Max Visualization", d: "3D modeling, materials, lighting, photo-realistic rendering and architectural animation." },
      { t: "Module 4 · Aptitude & Reasoning", d: "25 hours of structured aptitude and logical reasoning prep for placement interviews." },
      { t: "Module 5 · Real-World Project", d: "End-to-end portfolio project under live mentoring — design, document, render, present." },
      { t: "Module 6 · Placement Support", d: "Resume building, mock interviews and 1:1 mentoring with our hiring partner network." },
    ],
    audience: "Beginners interested in architectural design, aspiring architects, and working professionals seeking to upgrade their CAD proficiency.",
    salary: { min: "₹2.0 L", avg: "₹3.0 L", max: "₹4.0 L" },
    features: ["100% placement assistance", "Live mentoring · doubt clarification", "LMS access with full course material", "Portfolio project for interviews"],
  },
  {
    slug: "civil-cad",
    name: "Civil CAD",
    fee: "₹30,000",
    hrs: "240 hrs",
    n: "7,200+",
    tag: "",
    thumb: "civil",
    desc: "Structural drafting, site planning, surveying — the full civil engineering software stack.",
    longDesc: "Revolutionize how you approach civil engineering projects. 240 hours covering 2D and 3D modeling, structural analysis and design visualization across the most-used civil CAD toolchain in India.",
    software: ["AutoCAD", "STAAD.Pro", "Civil 3D", "Revit Architecture", "Primavera", "MSP", "Photoshop", "Pre-DCR", "Estimation"],
    modules: [
      { t: "Module 1 · AutoCAD & Drafting", d: "2D civil drafting, site plans, contour drawings, dimensioning and printing standards." },
      { t: "Module 2 · Revit + BIM 360", d: "Structural BIM, multi-discipline coordination, families and clash detection workflows." },
      { t: "Module 3 · STAAD Pro & ETABS", d: "Structural analysis and design — load combinations, RCC and steel design, code checks." },
      { t: "Module 4 · Primavera + MX Road", d: "Project planning, scheduling and highway/road geometric design." },
      { t: "Module 5 · 3D Visualization", d: "3ds Max and SketchUp for client-facing renders and walkthroughs." },
      { t: "Module 6 · Placement Support", d: "Interview prep, aptitude training and direct intro to construction-sector recruiters." },
    ],
    audience: "Aspiring civil engineers, draftsmen and architects looking to upgrade structural design and visualization skills.",
    salary: { min: "₹2.5 L", avg: "₹4.5 L", max: "₹10 L" },
    features: ["Hands-on training with expert mentors", "100+ lab assignments", "Aptitude & logical reasoning (25 hrs)", "100% placement assistance"],
  },
  {
    slug: "fashion-cad",
    name: "Fashion CAD",
    fee: "₹28,000",
    hrs: "200 hrs",
    n: "12,000+",
    tag: "Most Popular",
    thumb: "fashion",
    desc: "Digital pattern making, garment design, fabric simulation. India's growing fashion industry needs you.",
    longDesc: "Transform your design ideas into digital reality. From sketching and pattern making to virtual prototyping and 3D visualization — 200 hours of hands-on training in the tools the Indian fashion industry actually uses.",
    software: ["CorelDRAW", "Photoshop", "Wilcom", "Marvelous Designer"],
    modules: [
      { t: "Module 1 · Photoshop for Fashion", d: "Photo editing, digital illustration, fabric-texture simulation, mood boards." },
      { t: "Module 2 · Illustrator + CorelDRAW", d: "Vector-based flat sketches, technical drawings, repeat-print and pattern design." },
      { t: "Module 3 · Pattern & Print Design", d: "Intricate print development, motif building, colorway creation, fabric mapping." },
      { t: "Module 4 · 3D Garment Visualization", d: "Digital draping, simulation of garment appearance on virtual models." },
      { t: "Module 5 · Portfolio Project", d: "Build a complete digital collection — flats, prints, and presentation boards." },
      { t: "Module 6 · Placement Support", d: "Interview prep, portfolio review and intros to fashion-house & e-commerce recruiters." },
    ],
    audience: "Aspiring fashion designers, NIFT/IIAD aspirants and working designers seeking digital CAD fluency.",
    salary: { min: "₹2.0 L", avg: "₹5.0 L", max: "₹12 L" },
    features: ["Most enrolled programme · 12,000+ alumni", "Dedicated 1:1 mentoring", "Live doubt clarification", "100% placement support"],
  },
  {
    slug: "mechanical-cad",
    name: "Mechanical CAD",
    fee: "On Request",
    hrs: "200 hrs",
    n: "8,200+",
    tag: "Top Enrolled",
    thumb: "mech",
    desc: "SolidWorks, CATIA, Inventor — the backbone of Indian manufacturing and engineering.",
    longDesc: "Equip yourself for the manufacturing industry. From precise 3D models to simulating complex mechanical systems — the most comprehensive mechanical CAD stack you'll find in Eastern India.",
    software: ["SolidWorks", "Solid Edge", "AutoCAD", "Pro/ENGINEER (Creo)", "CATIA", "Unigraphics NX (UGNX4)", "ANSYS 12", "CNC Turning", "Milling Programming", "Tekla Structures", "Autodesk Inventor"],
    modules: [
      { t: "Module 1 · 2D Drafting & 3D Modeling", d: "AutoCAD basics, sketch-based modeling, mechanical drawings, dimensioning standards." },
      { t: "Module 2 · SolidWorks / CATIA / CREO", d: "Part design, assembly modeling, sheet metal, surfacing — production-grade workflows." },
      { t: "Module 3 · Assemblies & Kinematics", d: "Complex assemblies, motion studies, kinematics and tolerance analysis." },
      { t: "Module 4 · ANSYS Simulation", d: "Finite element analysis, structural simulation, optimization studies." },
      { t: "Module 5 · Manufacturing Docs", d: "Drawing standards, BOMs, GD&T and shop-floor-ready documentation." },
      { t: "Module 6 · Placement Support", d: "200 hours of live mentoring, daily assignments and 1:1 placement guidance." },
    ],
    audience: "Aspiring mechanical engineers, ITI/Diploma holders and working professionals upgrading to industry-grade CAD/CAE.",
    salary: { min: "₹2.5 L", avg: "₹4.0 L", max: "₹10 L" },
    features: ["200 hrs live mentoring", "Daily assignments + 100+ labs", "100% placement assistance with 1:1 mentoring", "LMS access"],
  },
  {
    slug: "electrical-cad",
    name: "Electrical CAD",
    fee: "₹27,500",
    hrs: "200 hrs",
    n: "5,000+",
    tag: "",
    thumb: "elec",
    desc: "Industrial automation, control system design, electrical panel layouts.",
    longDesc: "From schematic capture and circuit simulation to PCB layout and electrical documentation — 200 hours of offline training on the PLC + SCADA stack that runs Indian factories.",
    software: ["AutoCAD", "PLC", "SCADA", "AC/DC Drives", "Rockwell Systems", "Siemens Systems", "Plumbing Engineering Design"],
    modules: [
      { t: "Module 1 · Electrical Drafting", d: "AutoCAD Electrical, panel layouts, schematic capture and electrical documentation." },
      { t: "Module 2 · PLC Programming", d: "Ladder logic, I/O configuration, PLC languages, data handling and networking." },
      { t: "Module 3 · PLC Troubleshooting", d: "System troubleshooting, fault diagnostics and HMI integration." },
      { t: "Module 4 · SCADA Development", d: "SCADA application development, remote device configuration, real-time visualization." },
      { t: "Module 5 · Data & Alarms", d: "Real-time data acquisition, alarm management, historical logging and analytics." },
      { t: "Module 6 · Placement Support", d: "100+ lab assignments, interview prep and intros to automation & manufacturing employers." },
    ],
    audience: "Diploma/B.Tech electrical & electronics students, technicians and factory-floor professionals moving into automation roles.",
    salary: { min: "₹2.0 L", avg: "₹5.0 L", max: "₹15 L" },
    features: ["100+ lab assignments", "Live mentoring · doubt clarification", "PLC + SCADA combined", "100% placement assistance"],
  },
  {
    slug: "gis",
    name: "GIS",
    fee: "₹21,500",
    hrs: "200 hrs",
    n: "5,000+",
    tag: "",
    thumb: "gis",
    desc: "Geographic Information Systems — used in urban planning, agriculture, disaster management.",
    longDesc: "Visualize, analyze and interpret geospatial data. Create stunning maps, run in-depth spatial analysis and make informed decisions — applied to environmental monitoring, urban planning, disaster management and market analysis.",
    software: ["AutoCAD", "Civil 3D", "AutoCAD Map 3D", "ArcGIS"],
    modules: [
      { t: "Module 1 · ArcGIS Foundations", d: "Interface, data formats, projections, symbology and cartographic principles." },
      { t: "Module 2 · Spatial Analysis", d: "Vector & raster analysis, geoprocessing, network and overlay analysis." },
      { t: "Module 3 · AutoCAD Map / Civil 3D", d: "CAD–GIS integration, topographic surveys, site grading and corridor modeling." },
      { t: "Module 4 · Remote Sensing Basics", d: "Satellite imagery, supervised classification, change detection." },
      { t: "Module 5 · Domain Projects", d: "Urban planning, agriculture, disaster management and market-analysis case studies." },
      { t: "Module 6 · Placement Support", d: "100+ lab assignments, daily exercises and 1:1 placement mentoring." },
    ],
    audience: "Geography, environmental science, urban planning and civil engineering students, plus researchers working with spatial data.",
    salary: { min: "₹3.0 L", avg: "₹6.0 L", max: "₹15 L" },
    features: ["200 hrs offline training", "100+ lab assignments", "1:1 placement mentoring", "Daily assignments + LMS access"],
  },
];

export type CourseDip = {
  slug: string;
  name: string;
  fee: string;
  hrs: string;
  tag: string;
  desc: string;
  longDesc: string;
  software: string[];
  modules: { t: string; d: string }[];
  audience: string;
  salary: { min: string; avg: string; max: string };
  features: string[];
};

export const COURSES_DIP: CourseDip[] = [
  {
    slug: "diploma-mechanical",
    name: "Mechanical Engineering",
    fee: "₹1,05,000", hrs: "3 yrs", tag: "AICTE",
    desc: "Design, manufacturing, thermal systems and CAD/CAM — the full mechanical diploma.",
    longDesc: "A 3-year AICTE-recognized diploma that takes you from engineering fundamentals to industry-ready design and manufacturing skills. Theory is paired with workshop practice and live CAD/CAM labs so you graduate able to read, draft and build — not just pass exams.",
    software: ["AutoCAD", "SolidWorks", "CATIA", "ANSYS", "Thermal Labs", "Workshop Practice"],
    modules: [
      { t: "Year 1 · Engineering Foundations", d: "Applied mathematics, engineering drawing, workshop technology, materials science and mechanics of solids." },
      { t: "Year 2 · Design & Thermal", d: "Theory of machines, thermodynamics, fluid mechanics, manufacturing processes and CAD modelling." },
      { t: "Year 3 · Specialisation & Project", d: "CAD/CAM, industrial engineering, automobile/production electives and a supervised capstone project." },
      { t: "Placement & Industry Exposure", d: "Factory visits, internship support, aptitude training and 1:1 placement mentoring with our employer network." },
    ],
    audience: "10th-pass students seeking a formal engineering qualification, ITI holders upgrading to a diploma, and anyone aiming for shop-floor, design or supervisory roles in manufacturing.",
    salary: { min: "₹1.8 L", avg: "₹3.0 L", max: "₹6.0 L" },
    features: ["AICTE-recognized 3-year diploma", "Workshop + live CAD/CAM labs", "Internship & factory exposure", "100% placement assistance"],
  },
  {
    slug: "diploma-cse",
    name: "Computer Science & Engg.",
    fee: "₹1,05,000", hrs: "3 yrs", tag: "AICTE",
    desc: "Programming, data structures, web & databases — a job-ready software diploma.",
    longDesc: "A 3-year AICTE-recognized diploma built around how software is actually written today. From first principles of programming to databases, web development and projects, you finish with a portfolio and the fundamentals employers screen for.",
    software: ["C / C++", "Python", "Java", "SQL", "Web Stack", "Data Structures"],
    modules: [
      { t: "Year 1 · Programming Foundations", d: "Programming logic in C/C++, computer fundamentals, digital electronics and applied mathematics." },
      { t: "Year 2 · Core Computing", d: "Data structures, object-oriented programming, database management systems and operating systems." },
      { t: "Year 3 · Applied & Project", d: "Web technologies, software engineering, networking basics and an end-to-end capstone project." },
      { t: "Placement & Career Prep", d: "Coding practice, aptitude rounds, resume building and interview mentoring with IT recruiters." },
    ],
    audience: "Students who want a practical route into software and IT roles, and diploma seekers preferring hands-on coding over a purely theoretical degree.",
    salary: { min: "₹2.0 L", avg: "₹3.5 L", max: "₹7.0 L" },
    features: ["AICTE-recognized 3-year diploma", "Project-led coding curriculum", "LMS access + lab assignments", "100% placement assistance"],
  },
  {
    slug: "diploma-electrical",
    name: "Electrical & Electronics Engg.",
    fee: "₹1,05,000", hrs: "3 yrs", tag: "AICTE",
    desc: "Power systems, machines, automation and control — the EEE diploma.",
    longDesc: "A 3-year AICTE-recognized diploma covering both electrical power and electronics. You'll work across machines, circuits, automation and control systems in our labs — the same PLC/SCADA stack that runs Indian factories.",
    software: ["AutoCAD Electrical", "PLC", "SCADA", "MATLAB Basics", "Power Labs", "Control Systems"],
    modules: [
      { t: "Year 1 · Electrical Fundamentals", d: "Basic electrical engineering, electronics, network analysis and engineering drawing." },
      { t: "Year 2 · Machines & Electronics", d: "Electrical machines, power electronics, analog & digital circuits and measurements." },
      { t: "Year 3 · Power & Automation", d: "Power systems, switchgear & protection, PLC/SCADA automation and a supervised project." },
      { t: "Placement & Industry Exposure", d: "Plant visits, automation lab practice, aptitude training and 1:1 placement mentoring." },
    ],
    audience: "Students targeting roles in power distribution, manufacturing, automation and electronics maintenance, plus ITI electricians upgrading their qualification.",
    salary: { min: "₹1.8 L", avg: "₹3.2 L", max: "₹6.5 L" },
    features: ["AICTE-recognized 3-year diploma", "PLC + SCADA automation labs", "Hands-on machines & power labs", "100% placement assistance"],
  },
  {
    slug: "diploma-architecture",
    name: "Architecture Assistantship",
    fee: "₹1,05,000", hrs: "3 yrs", tag: "AICTE",
    desc: "Drafting, building design and BIM for architecture support roles.",
    longDesc: "A 3-year AICTE-recognized diploma that trains you as a skilled architectural assistant — fluent in manual drafting, building design principles and modern BIM tools. You graduate ready to support architects on real projects.",
    software: ["AutoCAD", "Revit Architecture", "SketchUp", "3ds Max", "Drafting", "Building Design"],
    modules: [
      { t: "Year 1 · Drawing & Basics", d: "Architectural drawing, building materials, surveying and history of architecture." },
      { t: "Year 2 · Design & Services", d: "Building construction, design studio, building services and structural basics." },
      { t: "Year 3 · CAD/BIM & Project", d: "AutoCAD & Revit (BIM), estimation, working drawings and a portfolio project." },
      { t: "Placement & Portfolio", d: "Portfolio review, software certification prep and intros to architecture & construction firms." },
    ],
    audience: "Students who want to enter architecture and interior design support roles, and draughtsmen looking to formalise and modernise their skills with BIM.",
    salary: { min: "₹1.8 L", avg: "₹3.0 L", max: "₹6.0 L" },
    features: ["AICTE-recognized 3-year diploma", "Drafting + Revit BIM labs", "Studio-based design projects", "100% placement assistance"],
  },
  {
    slug: "diploma-it",
    name: "Information Technology",
    fee: "₹1,05,000", hrs: "3 yrs", tag: "AICTE",
    desc: "Networking, web, databases and IT support — a broad, employable IT diploma.",
    longDesc: "A 3-year AICTE-recognized diploma that blends software, networking and IT operations. The focus is breadth and employability — you finish able to build, maintain and support the systems businesses run on.",
    software: ["Python", "SQL", "Web Stack", "Networking", "Linux", "Cloud Basics"],
    modules: [
      { t: "Year 1 · IT Foundations", d: "Programming fundamentals, computer organisation, digital electronics and mathematics." },
      { t: "Year 2 · Systems & Data", d: "Database management, data structures, operating systems and computer networks." },
      { t: "Year 3 · Web, Cloud & Project", d: "Web development, network administration, cloud & security basics and a capstone project." },
      { t: "Placement & Career Prep", d: "Aptitude training, certification guidance and interview mentoring with IT-services recruiters." },
    ],
    audience: "Students wanting versatile IT careers spanning development, networking and support, who value a broad skill base over a single specialisation.",
    salary: { min: "₹2.0 L", avg: "₹3.4 L", max: "₹6.8 L" },
    features: ["AICTE-recognized 3-year diploma", "Software + networking labs", "Hands-on projects & LMS access", "100% placement assistance"],
  },
  {
    slug: "diploma-fashion",
    name: "Fashion Design & Garment Tech.",
    fee: "₹1,05,000", hrs: "3 yrs", tag: "AICTE",
    desc: "Design, pattern making, garment construction and digital fashion CAD.",
    longDesc: "A 3-year AICTE-recognized diploma covering the full journey from sketch to finished garment. You'll learn design, pattern making and construction by hand, then bring it into digital CAD — the way the modern apparel industry actually works.",
    software: ["Adobe Photoshop", "Adobe Illustrator", "CorelDRAW", "Pattern Making", "Garment Construction", "Textile Studio"],
    modules: [
      { t: "Year 1 · Design Foundations", d: "Elements of design, fashion illustration, textile science and basic pattern making." },
      { t: "Year 2 · Construction & CAD", d: "Garment construction, advanced patterns, fashion CAD (Photoshop/Illustrator/CorelDRAW) and draping." },
      { t: "Year 3 · Collection & Project", d: "Apparel production, surface ornamentation, portfolio development and a final collection." },
      { t: "Placement & Portfolio", d: "Portfolio shoots, industry mentoring and intros to fashion houses, exporters and e-commerce brands." },
    ],
    audience: "Aspiring fashion designers, NIFT/IIAD aspirants building a foundation, and creative students seeking a career in apparel and garment technology.",
    salary: { min: "₹1.8 L", avg: "₹3.5 L", max: "₹8.0 L" },
    features: ["AICTE-recognized 3-year diploma", "Sewing + textile studios", "Digital fashion CAD labs", "100% placement assistance"],
  },
  {
    slug: "diploma-civil",
    name: "Civil Engineering",
    fee: "₹1,05,000", hrs: "3 yrs", tag: "AICTE",
    desc: "Structures, surveying, construction and CAD — the civil engineering diploma.",
    longDesc: "A 3-year AICTE-recognized diploma combining classroom theory with site-oriented practice. From surveying and concrete technology to structural design and CAD, you graduate ready for site, design-office and supervisory roles.",
    software: ["AutoCAD", "STAAD Pro", "Revit", "Surveying", "Concrete Lab", "Estimation"],
    modules: [
      { t: "Year 1 · Civil Foundations", d: "Engineering drawing, applied mechanics, building materials and surveying basics." },
      { t: "Year 2 · Structures & Surveying", d: "Strength of materials, concrete technology, advanced surveying and fluid mechanics." },
      { t: "Year 3 · Design, CAD & Project", d: "Structural design (STAAD Pro), estimation & costing, construction management and a project." },
      { t: "Placement & Site Exposure", d: "Site visits, AutoCAD/STAAD certification prep and intros to construction & infrastructure recruiters." },
    ],
    audience: "Students aiming for site engineering, surveying, estimation and structural drafting roles in the construction and infrastructure sector.",
    salary: { min: "₹1.8 L", avg: "₹3.2 L", max: "₹7.0 L" },
    features: ["AICTE-recognized 3-year diploma", "Surveying + concrete labs", "STAAD Pro & AutoCAD training", "100% placement assistance"],
  },
];

export type CourseVoc = {
  slug: string;
  name: string;
  hrs: string;
  icon: string;
  tag: string;
  desc: string;
  longDesc: string;
  software: string[];
  modules: { t: string; d: string }[];
  audience: string;
  salary: { min: string; avg: string; max: string };
  features: string[];
};

export const COURSES_VOC: CourseVoc[] = [
  {
    slug: "voc-it",
    name: "Information Technology",
    hrs: "6 mo", icon: "computer", tag: "NSDC",
    desc: "Job-ready IT skills — computing, office tools, web basics and support.",
    longDesc: "A short, NSDC-aligned vocational programme that gets you job-ready in months, not years. Practical IT skills — computer operations, office productivity, internet and basic web — mapped to entry-level roles in offices and IT-enabled services.",
    software: ["MS Office", "Internet & Email", "Web Basics", "Typing", "Data Entry"],
    modules: [
      { t: "Module 1 · Computer Fundamentals", d: "Operating a computer, file management, the internet and digital safety." },
      { t: "Module 2 · Office Productivity", d: "MS Word, Excel and PowerPoint for real workplace tasks and reporting." },
      { t: "Module 3 · Web & Data Skills", d: "Basic web concepts, online tools, data entry and record-keeping." },
      { t: "Module 4 · Workplace Readiness", d: "Communication, soft skills, interview prep and placement support." },
    ],
    audience: "School leavers and job-seekers who want a quick, practical entry into IT-enabled office and support roles.",
    salary: { min: "₹1.2 L", avg: "₹1.8 L", max: "₹3.0 L" },
    features: ["NSDC-aligned certification", "Hands-on, practical training", "Job-ready in 6 months", "Placement support included"],
  },
  {
    slug: "voc-apparel",
    name: "Apparels & Textiles",
    hrs: "6 mo", icon: "textiles", tag: "NSDC",
    desc: "Stitching, garment construction and quality — skills the apparel sector hires for.",
    longDesc: "An NSDC-aligned vocational programme in apparel manufacturing. Learn machine operation, garment construction and quality checks on industry equipment, mapped to the roles apparel exporters and manufacturers hire for every month.",
    software: ["Sewing Machines", "Pattern Basics", "Garment Construction", "Quality Check"],
    modules: [
      { t: "Module 1 · Machine Operation", d: "Industrial sewing machines, safe operation, threading and maintenance basics." },
      { t: "Module 2 · Garment Construction", d: "Stitching techniques, seams, basic pattern handling and assembly." },
      { t: "Module 3 · Quality & Finishing", d: "Quality standards, finishing, checking and packaging for production." },
      { t: "Module 4 · Workplace Readiness", d: "Productivity on the floor, soft skills and placement with apparel units." },
    ],
    audience: "Youth and women seeking quick employment in the garment and textile manufacturing sector, including self-employment and tailoring.",
    salary: { min: "₹1.2 L", avg: "₹1.8 L", max: "₹3.0 L" },
    features: ["NSDC-aligned certification", "Real industrial machines", "Job-ready in 6 months", "Apparel-sector placement support"],
  },
  {
    slug: "voc-healthcare",
    name: "Healthcare Services",
    hrs: "6 mo", icon: "healthcare", tag: "NSDC",
    desc: "Patient care, hospital support and assistant skills for a growing sector.",
    longDesc: "An NSDC-aligned vocational programme for India's fast-growing healthcare sector. Practical training in patient care support, hospital procedures and basic clinical assistance — preparing you for general duty assistant and support roles.",
    software: ["Patient Care", "Hospital Procedures", "First Aid", "Hygiene & Safety"],
    modules: [
      { t: "Module 1 · Healthcare Basics", d: "Human body basics, hospital environment, hygiene and infection control." },
      { t: "Module 2 · Patient Care Support", d: "Assisting patients, vitals, mobility support and daily care routines." },
      { t: "Module 3 · Clinical Support", d: "Basic first aid, emergency response support and record handling." },
      { t: "Module 4 · Workplace Readiness", d: "Communication, empathy, professional conduct and placement support." },
    ],
    audience: "Students and job-seekers who want a compassionate, stable career in hospitals, clinics and home-care services.",
    salary: { min: "₹1.4 L", avg: "₹2.0 L", max: "₹3.6 L" },
    features: ["NSDC-aligned certification", "Practical care training", "Job-ready in 6 months", "Hospital & clinic placement support"],
  },
  {
    slug: "voc-retail",
    name: "Retail Management",
    hrs: "4 mo", icon: "retail", tag: "NSDC",
    desc: "Sales, customer service and store operations for modern retail.",
    longDesc: "A short NSDC-aligned vocational programme for India's expanding organised retail sector. Learn customer handling, sales, billing and store operations — the practical skills that get you hired as a sales associate or store assistant.",
    software: ["Customer Service", "Billing / POS", "Inventory Basics", "Sales Skills"],
    modules: [
      { t: "Module 1 · Retail Fundamentals", d: "How modern retail works, store layout, products and the customer journey." },
      { t: "Module 2 · Sales & Service", d: "Customer handling, selling techniques, upselling and complaint resolution." },
      { t: "Module 3 · Store Operations", d: "Billing/POS, inventory basics, merchandising and stock handling." },
      { t: "Module 4 · Workplace Readiness", d: "Grooming, communication, soft skills and placement with retail chains." },
    ],
    audience: "School leavers and job-seekers who enjoy working with people and want a fast entry into retail, malls and showrooms.",
    salary: { min: "₹1.2 L", avg: "₹1.8 L", max: "₹3.0 L" },
    features: ["NSDC-aligned certification", "Practical store-floor training", "Job-ready in 4 months", "Retail-chain placement support"],
  },
  {
    slug: "voc-telecom",
    name: "Telecom Services",
    hrs: "6 mo", icon: "telecom", tag: "NSDC",
    desc: "Installation, handset repair and field support for the telecom sector.",
    longDesc: "An NSDC-aligned vocational programme covering the practical side of telecom — device handling, installation and field support. Designed to map directly to technician and field-support roles with telecom operators and service partners.",
    software: ["Handset Repair", "Installation", "Network Basics", "Field Support"],
    modules: [
      { t: "Module 1 · Telecom Basics", d: "How mobile networks work, devices, SIM and connectivity fundamentals." },
      { t: "Module 2 · Installation & Repair", d: "Device installation, handset diagnostics, basic repair and troubleshooting." },
      { t: "Module 3 · Field Support", d: "Customer-site service, fault handling and service documentation." },
      { t: "Module 4 · Workplace Readiness", d: "Customer communication, safety, soft skills and placement support." },
    ],
    audience: "Technically-minded youth seeking field technician, repair and customer-support roles in the telecom industry.",
    salary: { min: "₹1.3 L", avg: "₹1.9 L", max: "₹3.2 L" },
    features: ["NSDC-aligned certification", "Hands-on device training", "Job-ready in 6 months", "Telecom-sector placement support"],
  },
  {
    slug: "voc-automotive",
    name: "Automotive",
    hrs: "6 mo", icon: "automotive", tag: "NSDC",
    desc: "Vehicle service, repair and workshop skills for the automotive trade.",
    longDesc: "An NSDC-aligned vocational programme in automotive servicing. Learn engine, electrical and general service procedures on real vehicles — preparing you for service technician roles in workshops, dealerships and the growing EV ecosystem.",
    software: ["Engine Service", "Auto Electrical", "Diagnostics", "Workshop Tools"],
    modules: [
      { t: "Module 1 · Automotive Basics", d: "Vehicle systems, tools, workshop safety and service fundamentals." },
      { t: "Module 2 · Service & Repair", d: "Engine servicing, brakes, transmission basics and routine maintenance." },
      { t: "Module 3 · Auto Electrical", d: "Vehicle electrical systems, battery, wiring and basic diagnostics." },
      { t: "Module 4 · Workplace Readiness", d: "Service-centre conduct, soft skills and placement with workshops & dealers." },
    ],
    audience: "Hands-on youth who want a trade career in vehicle servicing, dealerships and the expanding electric-vehicle sector.",
    salary: { min: "₹1.3 L", avg: "₹2.0 L", max: "₹3.6 L" },
    features: ["NSDC-aligned certification", "Practical training on vehicles", "Job-ready in 6 months", "Workshop & dealer placement support"],
  },
  {
    slug: "voc-electronics",
    name: "Electronics",
    hrs: "6 mo", icon: "electronics", tag: "NSDC",
    desc: "Component assembly, soldering and appliance repair skills.",
    longDesc: "An NSDC-aligned vocational programme in electronics. Build practical skills in component identification, soldering, assembly and appliance repair — mapped to technician and assembly roles in electronics manufacturing and service.",
    software: ["Soldering", "PCB Assembly", "Component Testing", "Appliance Repair"],
    modules: [
      { t: "Module 1 · Electronics Basics", d: "Components, circuits, measurement tools and workshop safety." },
      { t: "Module 2 · Soldering & Assembly", d: "Soldering technique, PCB assembly and component-level handling." },
      { t: "Module 3 · Testing & Repair", d: "Fault finding, component testing and basic appliance repair." },
      { t: "Module 4 · Workplace Readiness", d: "Production-line discipline, soft skills and placement support." },
    ],
    audience: "Detail-oriented youth seeking assembly, testing and repair roles in electronics manufacturing and the service industry.",
    salary: { min: "₹1.2 L", avg: "₹1.8 L", max: "₹3.0 L" },
    features: ["NSDC-aligned certification", "Hands-on bench training", "Job-ready in 6 months", "Electronics-sector placement support"],
  },
];

// Unified lookup across all programme types for detail pages.
export type ProgramKind = "Certificate" | "Diploma" | "Vocational";
export type Program = {
  kind: ProgramKind;
  slug: string;
  name: string;
  fee?: string;
  hrs: string;
  tag: string;
  longDesc: string;
  software: string[];
  modules: { t: string; d: string }[];
  audience: string;
  salary: { min: string; avg: string; max: string };
  features: string[];
  n?: string;
};

export const COURSES_DATA_SCIENCE: CourseCert[] = [
  {
    slug: "data-analytics",
    name: "Data Analytics",
    fee: "₹35,000",
    hrs: "240 hrs",
    n: "6,100+",
    tag: "High Demand",
    thumb: "data-analytics",
    desc: "Turn raw data into business insights with Excel, SQL, Power BI, and Tableau.",
    longDesc: "Master data extraction, cleaning, analytical modeling, and executive dashboarding. This 240-hour intensive program covers advanced Excel, SQL query optimization, Power BI, and Tableau — empowering you to solve real-world business problems and communicate insights to leadership.",
    software: ["MS-Excel", "Advanced Excel", "SQL", "Power BI", "Tableau", "Python Basics", "DAX", "Data Modeling"],
    modules: [
      { t: "Module 1 · Excel & Advanced Analytics", d: "Data cleaning, VLOOKUP, INDEX/MATCH, Power Query, pivot tables, and dynamic dashboard creation." },
      { t: "Module 2 · SQL Database Management", d: "Relational database design, queries, inner/outer joins, aggregation, subqueries, and stored procedures." },
      { t: "Module 3 · Power BI & Dashboarding", d: "Data modeling, DAX calculations, interactive report building, and automated refresh workflows." },
      { t: "Module 4 · Tableau Data Visualization", d: "Visual analytics best practices, calculated fields, dashboard publishing, and executive storytelling." },
      { t: "Module 5 · Capstone Business Case Study", d: "End-to-end data analytics project using real industry datasets — from raw data to board presentation." },
      { t: "Module 6 · Placement & Resume Coaching", d: "Mock technical interviews, SQL coding tests, and 1:1 resume & portfolio review." },
    ],
    audience: "Graduates, business analysts, finance professionals, and anyone aiming to pivot into data-driven decision making.",
    salary: { min: "₹3.5 L", avg: "₹5.5 L", max: "₹10.0 L" },
    features: ["Hands-on dashboard portfolio", "Live industrial dataset projects", "1:1 mock interview support", "100% placement assistance"],
  },
  {
    slug: "business-analytics",
    name: "Business Analytics",
    fee: "₹38,000",
    hrs: "260 hrs",
    n: "4,800+",
    tag: "Corporate Preferred",
    thumb: "business-analytics",
    desc: "Drive strategic decisions with business intelligence, data storytelling, and agile product analytics.",
    longDesc: "Bridge the gap between raw data and executive strategy. A 260-hour program focusing on business metrics, financial analytics, SQL, Power BI, and Agile problem-solving frameworks to lead transformation across corporate verticals.",
    software: ["Power BI", "Tableau", "SQL", "Python", "Agile Methodologies", "Jira", "Excel", "Statistica"],
    modules: [
      { t: "Module 1 · Business Metrics & KPI Frameworks", d: "Cohort analysis, churn prediction, revenue metrics, and customer lifetime value (CLV) modeling." },
      { t: "Module 2 · SQL & Data Infrastructure", d: "Relational databases, data warehousing concepts, ETL pipelines, and business query logic." },
      { t: "Module 3 · Business Intelligence Tools", d: "Power BI & Tableau advanced visual storytelling, executive dashboards, and KPI tracking." },
      { t: "Module 4 · Agile & Product Analytics", d: "User journey mapping, A/B testing methodologies, sprint planning, and product growth frameworks." },
      { t: "Module 5 · Strategic Case Studies", d: "Real-world business analytics case studies across finance, retail, and tech domains." },
      { t: "Module 6 · Placement & Executive Coaching", d: "Case study interview preparation, consulting frameworks, and executive resume formatting." },
    ],
    audience: "Management graduates, project managers, and professionals seeking leadership roles in business intelligence and consulting.",
    salary: { min: "₹4.0 L", avg: "₹6.5 L", max: "₹12.0 L" },
    features: ["Agile & BI framework certification", "Real-world business case studies", "1:1 mentorship from industry leads", "100% placement support"],
  },
  {
    slug: "ai-ml",
    name: "AI & Machine Learning",
    fee: "₹45,000",
    hrs: "300 hrs",
    n: "3,900+",
    tag: "Cutting Edge",
    thumb: "ai-ml",
    desc: "Build intelligent systems with machine learning algorithms, Generative AI models, and Python.",
    longDesc: "Enter the world of Artificial Intelligence. 300 hours of practical training covering Python for AI, predictive modeling, machine learning algorithms, deep learning basics, and Generative AI prompt engineering & tool integration.",
    software: ["Python", "Scikit-Learn", "TensorFlow", "Generative AI Tools", "SQL", "Pandas", "NumPy", "Jupyter"],
    modules: [
      { t: "Module 1 · Python for Data Science & AI", d: "Data manipulation with Pandas & NumPy, matrix operations, and exploratory data analysis." },
      { t: "Module 2 · Supervised Machine Learning", d: "Linear/logistic regression, decision trees, random forests, SVM, and model evaluation metrics." },
      { t: "Module 3 · Unsupervised Learning & Clustering", d: "K-Means clustering, Principal Component Analysis (PCA), anomaly detection, and recommendation engines." },
      { t: "Module 4 · Deep Learning Foundations", d: "Neural networks, activation functions, computer vision, and Natural Language Processing (NLP) basics." },
      { t: "Module 5 · Generative AI & Prompt Engineering", d: "LLM API integration, prompt engineering techniques, fine-tuning workflows, and AI automation tools." },
      { t: "Module 6 · Industry AI Project & Placement", d: "Building and deploying an end-to-end predictive web application with interview preparation." },
    ],
    audience: "Engineers, computer science students, and software developers looking to specialize in AI and machine learning.",
    salary: { min: "₹4.5 L", avg: "₹7.5 L", max: "₹15.0 L" },
    features: ["Real-world AI model deployment", "Generative AI toolchain training", "LMS access & code repositories", "100% placement assistance"],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    fee: "₹25,000",
    hrs: "180 hrs",
    n: "8,500+",
    tag: "Popular",
    thumb: "digital-marketing",
    desc: "Master digital campaigns, SEO, Google Ads, social media marketing, and AI content tools.",
    longDesc: "Transform brands online with data-driven marketing. 180 hours covering search engine optimization (SEO), performance marketing, Google Ads, social media strategy, analytics, and Generative AI for content creation.",
    software: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "SEMrush", "Canva", "Generative AI Tools", "Mailchimp", "WordPress"],
    modules: [
      { t: "Module 1 · Digital Marketing & Branding", d: "Target audience identification, buyer personas, marketing funnel design, and brand messaging." },
      { t: "Module 2 · Search Engine Optimization (SEO)", d: "On-page, off-page, and technical SEO, keyword research, link building, and site audit tools." },
      { t: "Module 3 · Performance Marketing & Paid Ads", d: "Google Search & Display Ads, Meta Ad Manager campaigns, audience targeting, and budget optimization." },
      { t: "Module 4 · Social Media & Content Strategy", d: "Instagram, LinkedIn, YouTube content planning, viral marketing strategies, and AI content creation." },
      { t: "Module 5 · Analytics & Campaign ROI", d: "Google Analytics 4 (GA4) event tracking, conversion rate optimization (CRO), and reporting." },
      { t: "Module 6 · Portfolio Campaign & Placement", d: "Managing a live ad campaign budget, client pitch presentation, and placement assistance." },
    ],
    audience: "Entrepreneurs, marketing aspirants, freelancers, and communications graduates targeting digital growth roles.",
    salary: { min: "₹2.2 L", avg: "₹4.0 L", max: "₹8.0 L" },
    features: ["Live campaign budget practice", "Google & Meta certification prep", "AI-powered marketing tools", "100% placement support"],
  },
];

export const COURSES_DESIGN: CourseCert[] = [
  {
    slug: "graphics-design",
    name: "Graphics Design",
    fee: "₹26,000",
    hrs: "180 hrs",
    n: "9,200+",
    tag: "Creative Choice",
    thumb: "graphics-design",
    desc: "Create visual identity, print media, branding, and digital design with Adobe Creative Suite.",
    longDesc: "Master typography, color theory, layout design, and brand identity creation. 180 hours of hands-on training using Photoshop, Illustrator, InDesign, and CorelDRAW for print and digital publishing.",
    software: ["Photoshop", "Illustrator", "InDesign", "CorelDRAW", "Canva Pro", "Figma Basics"],
    modules: [
      { t: "Module 1 · Visual Design Principles", d: "Composition, grid layout, typography, color psychology, and visual hierarchy." },
      { t: "Module 2 · Adobe Photoshop Mastery", d: "Photo manipulation, retouching, digital art, poster design, and raster graphics." },
      { t: "Module 3 · Vector Graphics with Illustrator", d: "Logo design, icon design, vector illustration, branding packages, and scalable art." },
      { t: "Module 4 · Print & Editorial Layout (InDesign)", d: "Brochures, magazines, multi-page editorial design, and pre-press prep." },
      { t: "Module 5 · CorelDRAW & Commercial Print", d: "Offset printing standards, packaging design, vinyl cutting, and signages." },
      { t: "Module 6 · Portfolio Creation & Placement", d: "Building a professional Behance/Dribbble portfolio and mock creative interviews." },
    ],
    audience: "Creative individuals, fine art students, and aspiring graphic designers seeking industry studio careers.",
    salary: { min: "₹2.0 L", avg: "₹3.8 L", max: "₹7.5 L" },
    features: ["Studio workstation practice", "Professional portfolio building", "Pre-press & print lab visits", "100% placement assistance"],
  },
  {
    slug: "multimedia",
    name: "Multimedia & Interactive Media",
    fee: "₹32,000",
    hrs: "220 hrs",
    n: "5,400+",
    tag: "",
    thumb: "multimedia",
    desc: "Combine graphics, video editing, motion graphics, and audio production for digital media.",
    longDesc: "A complete multimedia production program. Learn video editing, visual effects, audio engineering, and interactive media design using Premiere Pro, After Effects, Photoshop, and Animate CC.",
    software: ["Photoshop", "Premiere Pro", "After Effects", "Animate CC", "CorelDRAW", "Illustrator", "Audition"],
    modules: [
      { t: "Module 1 · Digital Graphics & Image Processing", d: "Raster & vector image editing for media assets using Photoshop & Illustrator." },
      { t: "Module 2 · Non-Linear Video Editing", d: "Premiere Pro timeline editing, color grading, audio synchronization, and multi-cam editing." },
      { t: "Module 3 · Motion Graphics & VFX", d: "After Effects compositing, kinetic typography, chroma keying, and motion tracking." },
      { t: "Module 4 · Audio Editing & Sound Design", d: "Adobe Audition audio cleanup, voiceover recording, sound effects mixing, and mastering." },
      { t: "Module 5 · Interactive Vector Animation", d: "Animate CC interactive web banners, character animation, and vector graphics." },
      { t: "Module 6 · Showreel Project & Placement", d: "Producing a polished multimedia video showreel and placement interviews." },
    ],
    audience: "Aspiring video editors, content creators, media production assistants, and multimedia artists.",
    salary: { min: "₹2.5 L", avg: "₹4.5 L", max: "₹9.0 L" },
    features: ["High-spec editing suite labs", "Industry showreel creation", "Live production assignments", "100% placement support"],
  },
  {
    slug: "animation",
    name: "2D & 3D Animation",
    fee: "₹42,000",
    hrs: "300 hrs",
    n: "4,600+",
    tag: "High Creative Demand",
    thumb: "animation",
    desc: "2D & 3D animation pipeline — concept art, modeling, rigging, texturing, and rendering.",
    longDesc: "Bring imagination to life. 300 hours covering 2D character animation, 3D character modeling, rigging, texturing, lighting, and rendering across Maya, 3ds Max, Blender, and After Effects.",
    software: ["3D MAX", "Maya", "Blender", "After Effects", "ToonBoom", "Photoshop", "Premiere Pro"],
    modules: [
      { t: "Module 1 · 12 Principles of Animation & Art", d: "Storyboarding, character design, timing, squash and stretch, and 2D keyframing." },
      { t: "Module 2 · 3D Modeling Foundations", d: "Hard-surface and organic character modeling in Autodesk Maya and Blender." },
      { t: "Module 3 · Texturing & Shading", d: "UV unwrapping, PBR material creation, and texture painting in Photoshop/Substance." },
      { t: "Module 4 · Rigging & Character Animation", d: "Skeletal rigging, inverse kinematics (IK), skinning, and character walk cycles." },
      { t: "Module 5 · Lighting, Rendering & Compositing", d: "Arnold/V-Ray rendering, lighting setups, passes rendering, and After Effects compositing." },
      { t: "Module 6 · Animation Capstone Showreel", d: "Creating a complete animated short sequence for studio portfolio review." },
    ],
    audience: "Creative artists, gaming enthusiasts, and animation aspirants targeting studio animation roles.",
    salary: { min: "₹2.8 L", avg: "₹5.0 L", max: "₹10.0 L" },
    features: ["Dedicated 3D rendering workstation lab", "Studio pipeline simulation", "Showreel mentoring", "100% placement support"],
  },
  {
    slug: "interior-design",
    name: "Interior Design",
    fee: "₹36,000",
    hrs: "260 hrs",
    n: "6,800+",
    tag: "Popular",
    thumb: "interior-design",
    desc: "Design functional, aesthetic residential & commercial spaces with 3ds Max, SketchUp & V-Ray.",
    longDesc: "Transform spatial environments. 260 hours of practical training in spatial planning, materials selection, lighting design, 2D floor plans, and photo-realistic 3D interior renders using 3ds Max, SketchUp, and V-Ray.",
    software: ["3D MAX", "SketchUp", "V-Ray", "AutoCAD", "Photoshop", "Enscape"],
    modules: [
      { t: "Module 1 · Interior Design & Space Planning", d: "Ergonomics, space allocation, building codes, furniture layouts, and design styles." },
      { t: "Module 2 · 2D Architectural & Electrical Plans", d: "AutoCAD drafting for floor plans, false ceiling drawings, and electrical layouts." },
      { t: "Module 3 · 3D Modeling with SketchUp", d: "Rapid volumetric modeling, modular kitchen design, cabinetry, and custom decor." },
      { t: "Module 4 · Photorealistic Rendering (V-Ray / 3ds Max)", d: "Material mapping, realistic interior lighting, camera angles, and high-res rendering." },
      { t: "Module 5 · Materials, Budgeting & Supervision", d: "Fabrics, flooring, lighting fixtures, cost estimation, and site execution." },
      { t: "Module 6 · Interior Design Portfolio Deck", d: "Client presentation deck with 2D plans, 3D renders, and material boards." },
    ],
    audience: "Interior design students, architects, furniture designers, and creative space enthusiasts.",
    salary: { min: "₹2.5 L", avg: "₹4.8 L", max: "₹9.5 L" },
    features: ["Materials sample library access", "Photorealistic render labs", "Client presentation portfolio", "100% placement assistance"],
  },
  {
    slug: "photography",
    name: "Photography & Digital Editing",
    fee: "₹24,000",
    hrs: "160 hrs",
    n: "3,200+",
    tag: "",
    thumb: "photography",
    desc: "Master camera techniques, studio lighting, product & portrait photography, and Lightroom editing.",
    longDesc: "Capture stunning imagery and master post-processing. 160 hours covering manual exposure, studio strobe lighting, portraiture, commercial product photography, and advanced photo retouching in Photoshop and Lightroom.",
    software: ["Photoshop", "Lightroom Classic", "Premiere Pro", "Capture One Basics"],
    modules: [
      { t: "Module 1 · Camera Mechanics & Optics", d: "Aperture, shutter speed, ISO, depth of field, lens selection, and manual exposure." },
      { t: "Module 2 · Lighting Techniques", d: "Natural lighting, studio strobes, softboxes, reflectors, key & fill setups." },
      { t: "Module 3 · Commercial & Product Photography", d: "E-commerce tabletop photography, glare management, macro details, and glass lighting." },
      { t: "Module 4 · Portraiture & Event Photography", d: "Posing techniques, environmental portraits, event lighting, and candidate framing." },
      { t: "Module 5 · Post-Production & Retouching", d: "Lightroom cataloging, RAW processing, Photoshop frequency separation, and color grading." },
      { t: "Module 6 · Portfolio Exhibition & Pitch", d: "Commercial print & digital portfolio compilation with business pitch training." },
    ],
    audience: "Aspiring photographers, social media managers, and e-commerce content creators.",
    salary: { min: "₹2.0 L", avg: "₹3.8 L", max: "₹7.0 L" },
    features: ["Fully equipped lighting studio lab", "Outdoor field trips & shoots", "Portfolio development", "100% placement assistance"],
  },
  {
    slug: "fashion-design",
    name: "Fashion Design & Styling",
    fee: "₹30,000",
    hrs: "220 hrs",
    n: "7,900+",
    tag: "Studio Choice",
    thumb: "fashion-design",
    desc: "Fashion illustration, trend forecasting, flat sketches, and digital apparel presentation.",
    longDesc: "Combine fashion art with digital CAD. 220 hours covering fashion figure sketching, textile selection, digital garment illustration, mood board curation, and technical flat specs using Photoshop, Illustrator, and CorelDRAW.",
    software: ["CorelDRAW", "Photoshop", "Illustrator", "InDesign", "Digital Moodboards"],
    modules: [
      { t: "Module 1 · Fashion Illustration & Croquis", d: "Figure proportions, croquis sketching, garment draping, and fabric movement." },
      { t: "Module 2 · Textile Science & Color Forecasting", d: "Woven vs knit fabrics, print trends, seasonal color palettes, and swatch curation." },
      { t: "Module 3 · Digital Flat Sketches & Specs", d: "Adobe Illustrator technical flat drawings, seams, stitching details, and spec sheets." },
      { t: "Module 4 · Fabric Texture Mapping & Prints", d: "CorelDRAW & Photoshop repeat print design, motif creation, and fabric mapping." },
      { t: "Module 5 · Collection Design & Portfolio", d: "Curating a 5-outfit seasonal capsule collection with presentation boards." },
      { t: "Module 6 · Industry Placement & Hiring Intros", d: "Portfolio evaluation by fashion house recruiters and interview preparation." },
    ],
    audience: "Fashion design students, garment stylists, apparel merchandisers, and boutique founders.",
    salary: { min: "₹2.2 L", avg: "₹4.2 L", max: "₹8.5 L" },
    features: ["VIFT studio lab access", "Digital fashion CAD labs", "1:1 portfolio review", "100% placement support"],
  },
  {
    slug: "boutique-management",
    name: "Boutique Management",
    fee: "₹22,000",
    hrs: "150 hrs",
    n: "4,100+",
    tag: "Entrepreneurial",
    thumb: "boutique-management",
    desc: "Retail operations, fashion merchandising, inventory control, client styling, and e-commerce.",
    longDesc: "Launch and manage a profitable fashion boutique. 150 hours covering apparel sourcing, inventory budgeting, visual merchandising, client styling, social media selling, and retail store management.",
    software: ["Retail POS Software", "MS Excel", "Social Commerce Tools", "Canva"],
    modules: [
      { t: "Module 1 · Retail Store Operations", d: "Boutique layout design, display windows, customer flow, and store ambiance." },
      { t: "Module 2 · Apparel Sourcing & Stocking", d: "Wholesale sourcing, vendor negotiations, stock turn metrics, and pricing strategies." },
      { t: "Module 3 · Visual Merchandising & Styling", d: "Mannequin styling, collection layout, lighting design, and promotional displays." },
      { t: "Module 4 · Client Relations & Fitting", d: "Personal consultation, bespoke order tracking, fitting adjustments, and customer retention." },
      { t: "Module 5 · E-Commerce & Social Selling", d: "Setting up Instagram Shopping, WhatsApp Business cataloging, and targeted local ads." },
      { t: "Module 6 · Business Plan & Launch Prep", d: "Drafting a complete boutique business plan and financing proposal." },
    ],
    audience: "Aspiring fashion entrepreneurs, store managers, and boutique business owners.",
    salary: { min: "₹2.0 L", avg: "₹3.5 L", max: "₹7.0 L" },
    features: ["Retail store simulation labs", "Supplier network guidance", "Business launch coaching", "100% placement assistance"],
  },
];

export const COURSES_COMP_APP: CourseCert[] = [
  {
    slug: "dca",
    name: "DCA (Diploma in Computer Applications)",
    fee: "₹12,000",
    hrs: "120 hrs",
    n: "15,000+",
    tag: "Foundational",
    thumb: "dca",
    desc: "Essential computer fundamentals, MS Office suite, internet operations, and workplace typing.",
    longDesc: "The core computer literacy program for every workplace. 120 hours covering Windows OS, MS Word, MS Excel, PowerPoint, MS Access databases, internet security, and professional typing speed.",
    software: ["MS Word", "MS Excel", "MS PowerPoint", "MS Access", "Windows OS", "Typing Master"],
    modules: [
      { t: "Module 1 · Computer Fundamentals & OS", d: "Operating system navigation, file management, storage devices, and system maintenance." },
      { t: "Module 2 · MS Word Document Processing", d: "Formatting, table creation, mail merge, official letter drafting, and documentation." },
      { t: "Module 3 · MS Excel Spreadsheets", d: "Formulas, functions (SUM, AVERAGE, IF), charts, sorting, and data filtering." },
      { t: "Module 4 · MS PowerPoint Presentations", d: "Slide creation, animations, slide master, sound effects, and public presentation." },
      { t: "Module 5 · Database Basics with MS Access", d: "Table creation, field types, query building, data entry forms, and simple reports." },
      { t: "Module 6 · Internet, Email & Soft Skills", d: "Web browsing, email etiquette, cloud storage, workplace soft skills, and typing test." },
    ],
    audience: "Students, office assistants, job seekers, and beginners building essential computer proficiency.",
    salary: { min: "₹1.5 L", avg: "₹2.2 L", max: "₹3.5 L" },
    features: ["Government job eligibility friendly", "Daily lab typing sessions", "LMS access & study notes", "100% placement support"],
  },
  {
    slug: "tally",
    name: "Tally Prime & GST Accounting",
    fee: "₹14,000",
    hrs: "120 hrs",
    n: "18,000+",
    tag: "High Employment",
    thumb: "tally",
    desc: "Computerised accounting, GST calculation, e-way bills, TDS, and tally payroll management.",
    longDesc: "Become a certified accounting professional. 120 hours of hands-on practice in Tally Prime — covering voucher entry, inventory management, GST compliance, TDS/TCS calculation, banking reconciliation, and financial reports.",
    software: ["Tally Prime", "GST Portal", "MS Excel", "E-Way Bill System", "Income Tax Basics"],
    modules: [
      { t: "Module 1 · Financial Accounting Fundamentals", d: "Double-entry bookkeeping, journal entries, ledgers, trial balance, and debit/credit rules." },
      { t: "Module 2 · Tally Prime Setup & Vouchers", d: "Creating company master, ledger creation, sales, purchase, payment, and receipt vouchers." },
      { t: "Module 3 · Inventory & Order Management", d: "Stock items, units of measure, batch processing, Godown management, and purchase orders." },
      { t: "Module 4 · GST Compliance in Tally", d: "CGST/SGST/IGST setup, GSTR-1, GSTR-3B return filing generation, and e-invoicing." },
      { t: "Module 5 · TDS, Payroll & Banking", d: "Tax Deduction at Source (TDS), salary processing, pay slips, and bank reconciliation (BRS)." },
      { t: "Module 6 · Financial Reports & Placement", d: "Profit & Loss, Balance Sheet, audit trail checks, and CA firm placement interviews." },
    ],
    audience: "Commerce graduates, accountants, office clerks, and business owners managing accounts.",
    salary: { min: "₹1.8 L", avg: "₹2.8 L", max: "₹4.5 L" },
    features: ["Real CA firm case files", "GST portal practice", "Certified trainer support", "100% placement assistance"],
  },
  {
    slug: "adca",
    name: "ADCA (Advanced Diploma in Computer Applications)",
    fee: "₹20,000",
    hrs: "200 hrs",
    n: "14,000+",
    tag: "Comprehensive",
    thumb: "adca",
    desc: "Complete IT application diploma — office suite, Tally Prime, graphic tools, and web basics.",
    longDesc: "The ultimate multi-skill IT program. 200 hours combining office software, computerized accounting in Tally Prime, graphic design in Photoshop, web browsing, and IT support.",
    software: ["MS Office", "Tally Prime", "Photoshop", "HTML/CSS Basics", "Windows OS", "Typing"],
    modules: [
      { t: "Module 1 · Advanced Office Productivity", d: "Advanced Excel (VLOOKUP, INDEX/MATCH, Pivot tables), Word documentation, and PowerPoint." },
      { t: "Module 2 · Computerised Accounting (Tally)", d: "Ledger posting, GST voucher entry, invoicing, inventory tracking, and financial statements." },
      { t: "Module 3 · Graphic Design & Photo Editing", d: "Photoshop photo retouching, banner design, document formatting, and pre-press printing." },
      { t: "Module 4 · Web & Cloud Technologies", d: "HTML basics, web page creation, cloud storage management, and online security." },
      { t: "Module 5 · Hardware & System Maintenance", d: "Computer troubleshooting, OS installation, driver setup, and printer configuration." },
      { t: "Module 6 · Capstone Project & Placement", d: "Integrated office task simulation, project deck submission, and placement rounds." },
    ],
    audience: "10th/12th pass students and job seekers wanting a versatile multi-skilled computer diploma.",
    salary: { min: "₹1.8 L", avg: "₹2.6 L", max: "₹4.2 L" },
    features: ["Multi-discipline IT skill coverage", "Hands-on lab training", "Government job eligible", "100% placement support"],
  },
  {
    slug: "programming",
    name: "Programming Languages (C, C++, Java, Python)",
    fee: "₹24,000",
    hrs: "180 hrs",
    n: "11,000+",
    tag: "Software Foundation",
    thumb: "programming",
    desc: "Master logic building, OOPs concepts, data structures, and syntax across core languages.",
    longDesc: "Build a rock-solid foundation in software engineering. 180 hours covering procedural programming in C, object-oriented concepts in C++, enterprise applications in Java, and modern scripting in Python.",
    software: ["C", "C++", "Java", "Python", "VS Code", "GCC", "Eclipse", "Git"],
    modules: [
      { t: "Module 1 · Programming Logic & C", d: "Variables, data types, control structures, loops, functions, arrays, pointers, and memory." },
      { t: "Module 2 · Object-Oriented C++", d: "Classes, objects, inheritance, polymorphism, encapsulation, file handling, and STL." },
      { t: "Module 3 · Java Enterprise Programming", d: "JVM architecture, packages, interfaces, exception handling, multithreading, and collections." },
      { t: "Module 4 · Python Programming", d: "Syntax, modules, data structures (lists, tuples, dicts), file I/O, and scripting libraries." },
      { t: "Module 5 · Basic Data Structures", d: "Arrays, stacks, queues, linked lists, binary searching, and sorting algorithms." },
      { t: "Module 6 · Software Project & Placement", d: "Building desktop console applications and technical coding interview prep." },
    ],
    audience: "BCA, B.Tech, Diploma CSE/IT students, and coding enthusiasts building software careers.",
    salary: { min: "₹2.5 L", avg: "₹4.2 L", max: "₹8.0 L" },
    features: ["100+ coding exercises", "Data structures & problem solving", "LMS code repository", "100% placement assistance"],
  },
  {
    slug: "web-development",
    name: "Full Stack Web Development",
    fee: "₹32,000",
    hrs: "240 hrs",
    n: "9,800+",
    tag: "High Hiring",
    thumb: "web-development",
    desc: "Build modern web applications with HTML5, CSS3, JavaScript, React, Node.js, and MySQL.",
    longDesc: "Become a full-stack web developer. 240 hours covering responsive front-end design, JavaScript ES6+, React UI development, Node.js backend server architecture, REST APIs, and SQL databases.",
    software: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React", "Node.js", "Express", "MySQL", "Git"],
    modules: [
      { t: "Module 1 · Responsive Front-End", d: "HTML5 semantic tags, CSS3 Flexbox & Grid, media queries, Bootstrap, and UI layouts." },
      { t: "Module 2 · Modern JavaScript ES6+", d: "DOM manipulation, events, ES6+ features, fetch API, promises, and async/await." },
      { t: "Module 3 · React.js UI Development", d: "React components, props, state management, hooks (useState, useEffect), and routing." },
      { t: "Module 4 · Node.js & Express Backend", d: "Server creation, Express routing, RESTful API architecture, and middleware." },
      { t: "Module 5 · MySQL Database & CRUD", d: "Database schema design, SQL queries, table joins, and database connection with Node.js." },
      { t: "Module 6 · Full-Stack Project & Cloud", d: "Building and deploying a full-stack web app on Vercel/Render with GitHub portfolio." },
    ],
    audience: "Aspiring web developers, IT graduates, and software engineers targeting web development roles.",
    salary: { min: "₹3.0 L", avg: "₹5.2 L", max: "₹10.0 L" },
    features: ["Live hosted project deployment", "Git/GitHub portfolio build", "Code review sessions", "100% placement support"],
  },
];

export const COURSES_AUTOMATION: CourseCert[] = [
  {
    slug: "plc-automation",
    name: "PLC Programming & Industrial Automation",
    fee: "₹28,000",
    hrs: "180 hrs",
    n: "4,500+",
    tag: "Industrial Tech",
    thumb: "plc-automation",
    desc: "Ladder logic programming, PLC hardware configuration, sensor wiring, and HMI integration.",
    longDesc: "Master industrial control automation. 180 hours of practical lab work on Rockwell Allen-Bradley and Siemens PLC hardware — covering ladder logic, digital/analog I/O wiring, timer/counter logic, and HMI screen interface design.",
    software: ["RSLogix 5000", "TIA Portal", "FactoryTalk View", "Siemens S7-1200", "Ladder Logic"],
    modules: [
      { t: "Module 1 · Industrial Control Basics", d: "Control components: relays, contactors, push buttons, limit switches, and proximity sensors." },
      { t: "Module 2 · PLC Hardware & Architecture", d: "CPU modules, digital & analog I/O cards, power supply, and wiring schematics." },
      { t: "Module 3 · Ladder Logic Programming", d: "Bit instructions, timers, counters, math functions, compare instructions, and move logic." },
      { t: "Module 4 · Siemens & Rockwell Hardware Labs", d: "Hands-on programming using RSLogix 5000 and Siemens TIA Portal in live labs." },
      { t: "Module 5 · HMI Interfacing & Screens", d: "HMI tag creation, screen design, alarm indicators, and interactive button controls." },
      { t: "Module 6 · System Fault Diagnostics", d: "Industrial panel troubleshooting, forced I/O testing, and automation hiring interviews." },
    ],
    audience: "Electrical, Electronics, and Mechanical engineers targeting industrial automation & factory roles.",
    salary: { min: "₹2.5 L", avg: "₹4.8 L", max: "₹9.0 L" },
    features: ["Real industrial PLC panel lab", "Rockwell & Siemens hardware", "Troubleshooting practice", "100% placement assistance"],
  },
  {
    slug: "scada-systems",
    name: "SCADA Systems & Control",
    fee: "₹26,000",
    hrs: "160 hrs",
    n: "3,800+",
    tag: "",
    thumb: "scada-systems",
    desc: "Supervisory control, real-time data acquisition, alarm logging, and remote plant monitoring.",
    longDesc: "Control factory processes at scale. 160 hours covering SCADA software configuration, real-time animation, industrial communication protocols (Modbus, Profibus), historical trend logging, and SCADA-PLC integration.",
    software: ["InTouch Wonderware", "WinCC SCADA", "Modbus", "AC/DC Drives", "OPC Servers"],
    modules: [
      { t: "Module 1 · SCADA Architecture & Fundamentals", d: "Master station setup, Remote Terminal Units (RTUs), PLCs, and SCADA topology." },
      { t: "Module 2 · Graphic Animation & Mimics", d: "Creating plant mimic diagrams, fill animation, color changes, and slider controls." },
      { t: "Module 3 · Real-Time Tagging & Communication", d: "Tag dictionary creation, OPC server setup, and Modbus/Profibus device communication." },
      { t: "Module 4 · Alarm Management & Logging", d: "Real-time alarm display configuration, historical alarm logging, and event triggers." },
      { t: "Module 5 · Drive & Instrumentation Integration", d: "Interfacing VFDs (AC/DC drives), temperature controllers, and pressure transducers." },
      { t: "Module 6 · Plant Control Project", d: "Building a supervisory SCADA control system for a water treatment or manufacturing plant." },
    ],
    audience: "Electrical & Instrumentation engineers, plant operators, and automation technicians.",
    salary: { min: "₹2.6 L", avg: "₹5.0 L", max: "₹9.5 L" },
    features: ["Live SCADA software labs", "Plant simulation hardware", "1:1 technical interview prep", "100% placement support"],
  },
];

export const ALL_PROGRAMS: Program[] = [
  ...COURSES_CERT.map((c) => ({ ...c, kind: "Certificate" as const })),
  ...COURSES_DIP.map((c) => ({ ...c, kind: "Diploma" as const })),
  ...COURSES_VOC.map((c) => ({ ...c, kind: "Vocational" as const })),
  ...COURSES_DATA_SCIENCE.map((c) => ({ ...c, kind: "Certificate" as const })),
  ...COURSES_DESIGN.map((c) => ({ ...c, kind: "Certificate" as const })),
  ...COURSES_COMP_APP.map((c) => ({ ...c, kind: "Certificate" as const })),
  ...COURSES_AUTOMATION.map((c) => ({ ...c, kind: "Certificate" as const })),
];

export function getProgram(slug: string): Program | undefined {
  return ALL_PROGRAMS.find((p) => p.slug === slug);
}

// ════════════════════════════════════════════════════════════════════
//  New Course Categories (from feedback)
// ════════════════════════════════════════════════════════════════════

export type CourseCategory = {
  slug: string;
  name: string;
  icon: string;
  desc: string;
  tools: string[];
};

export const DATA_SCIENCE_COURSES: CourseCategory[] = [
  { slug: "data-analytics", name: "Data Analytics", icon: "analytics", desc: "Turn raw data into business insights with Excel, SQL and visualization tools.", tools: ["MS-Excel", "Advanced Excel", "SQL", "Power BI", "Tableau"] },
  { slug: "business-analytics", name: "Business Analytics", icon: "dashboard", desc: "Drive strategic decisions with data-driven analysis and agile methodologies.", tools: ["Power BI", "Tableau", "SQL", "Python", "Agile Methodologies"] },
  { slug: "ai-ml", name: "AI & Machine Learning", icon: "ai", desc: "Build intelligent systems with machine learning, generative AI and Python.", tools: ["Python", "Generative AI Tools", "SQL", "Power BI", "Tableau"] },
  { slug: "digital-marketing", name: "Digital Marketing", icon: "marketing", desc: "Master digital campaigns, SEO, social media marketing and analytics.", tools: ["Generative AI Tools", "Power BI", "MS-Excel", "Advanced Excel", "Agile Methodologies"] },
];

export const DESIGN_STUDIO_COURSES: CourseCategory[] = [
  { slug: "graphics-design", name: "Graphics Design", icon: "graphics", desc: "Create stunning visual content for print and digital media.", tools: ["Photoshop", "Illustrator", "InDesign", "CorelDRAW"] },
  { slug: "multimedia", name: "Multimedia", icon: "multimedia", desc: "Combine text, graphics, audio and video into interactive experiences.", tools: ["Photoshop", "Premiere Pro", "After Effects", "Animate CC", "CorelDRAW", "Illustrator"] },
  { slug: "animation", name: "Animation", icon: "animation", desc: "2D & 3D animation — from concept art to fully rendered sequences.", tools: ["Photoshop", "Premiere Pro", "After Effects", "Sound FX", "Animate CC", "ToonBoom", "3D MAX", "Maya", "CorelDRAW", "Illustrator", "InDesign", "Blender"] },
  { slug: "interior-design", name: "Interior Design", icon: "interior", desc: "Design functional, aesthetic interior spaces with modern tools.", tools: ["3D MAX", "SketchUp", "V-Ray", "AutoCAD", "Photoshop"] },
  { slug: "photography", name: "Photography", icon: "photography", desc: "Master camera technique, lighting, composition and post-production.", tools: ["Photoshop", "Premiere Pro", "After Effects"] },
  { slug: "fashion-design", name: "Fashion Design", icon: "fashion", desc: "From sketch to runway — digital fashion illustration and pattern making.", tools: ["CorelDRAW", "Photoshop", "Illustrator", "InDesign"] },
  { slug: "boutique-management", name: "Boutique Management", icon: "boutique", desc: "Running a boutique — merchandising, styling and fashion retail operations.", tools: ["Merchandising", "Styling", "Retail Operations"] },
];

// Computer Application short-term courses (Sana Ma'am's input).
export const COMPUTER_APPLICATION_SHORT: CourseCategory[] = [
  { slug: "dca", name: "DCA", icon: "desktop", desc: "Diploma in Computer Applications — core office productivity skills.", tools: ["Word", "Excel", "PowerPoint", "Access"] },
  { slug: "tally", name: "Tally", icon: "accounting", desc: "Computerised accounting with Tally Prime and GST compliance.", tools: ["Tally Prime", "GST"] },
  { slug: "adca", name: "ADCA", icon: "storage", desc: "Advanced Diploma in Computer Applications — office to design tools.", tools: ["MS Office", "Tally Prime", "Photoshop", "Typing"] },
  { slug: "programming", name: "Programming Languages", icon: "code", desc: "Foundation to advanced programming across the core languages.", tools: ["C", "C++", "Java", "Python"] },
  { slug: "web-development", name: "Web Development", icon: "web", desc: "Full-stack web development — front-end to server and database.", tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "Node.js", "MySQL", "PHP/Java"] },
];

// Automation specializations sit under the CAD umbrella (already delivered in
// depth inside the Electrical CAD certificate).
export const AUTOMATION_COURSES: CourseCategory[] = [
  { slug: "plc-automation", name: "PLC Programming", icon: "plc", desc: "Ladder logic, I/O configuration and industrial control system programming.", tools: ["Rockwell", "Siemens", "Ladder Logic", "HMI"] },
  { slug: "scada-systems", name: "SCADA Systems", icon: "scada", desc: "Supervisory control, real-time data acquisition and remote device visualization.", tools: ["SCADA", "AC/DC Drives", "Alarm Management"] },
];

// ── New 5-category course taxonomy (from HR restructuring blueprint) ──────────
// The six CAD certificates plus the CAD-based polytechnic diplomas.
export const CAD_DIPLOMAS: CourseDip[] = COURSES_DIP.filter(
  (c) => !["diploma-cse", "diploma-it"].includes(c.slug),
);
// Computer Application — the software/IT polytechnic diplomas (CSE + IT).
export const COMPUTER_APP_COURSES: CourseDip[] = COURSES_DIP.filter(
  (c) => ["diploma-cse", "diploma-it"].includes(c.slug),
);

// ════════════════════════════════════════════════════════════════════
//  Polytechnic / ITI College Directory
// ════════════════════════════════════════════════════════════════════

export type College = {
  /** URL segment for the campus landing page at /colleges/[slug]. */
  slug: string;
  name: string;
  aka?: string;
  district: string;
  state: string;
  type: "Polytechnic" | "ITI";
  image: string;
  /** One-line summary shown on directory cards and the landing page hero. */
  blurb: string;
  /**
   * The college's own website. Left empty until the official URLs are
   * confirmed — the UI only renders the outbound link when this is set, so an
   * unfilled entry degrades to the internal landing page rather than a dead
   * link.
   */
  website?: string;
  /**
   * Campus photo paths. Files are dropped into /public/centres later; missing
   * ones render as labelled placeholder tiles rather than broken images.
   */
  gallery: string[];
};

export const POLYTECHNIC_COLLEGES: College[] = [
  {
    slug: "polytechnic-sardhana",
    name: "Government Polytechnic College, Sardhana",
    district: "Meerut", state: "Uttar Pradesh", type: "Polytechnic",
    image: "/centres/polytechnic-sardhana.png",
    blurb: "A Government Polytechnic College in Sardhana, Meerut district, operated by Venture Skill India in PPP mode with the Government of Uttar Pradesh.",
    website: "",
    gallery: ["/centres/polytechnic-sardhana.png", "/centres/gallery/sardhana-1.png", "/centres/gallery/sardhana-2.png", "/centres/gallery/sardhana-3.png"],
  },
  {
    slug: "polytechnic-ghugulpur",
    name: "Government Polytechnic College, Ghugulpur",
    aka: "Government Polytechnic College, Balrampur",
    district: "Balrampur", state: "Uttar Pradesh", type: "Polytechnic",
    image: "/centres/polytechnic-ghugulpur.png",
    blurb: "A Government Polytechnic College at Ghugulpur in Balrampur district, operated by Venture Skill India in PPP mode with the Government of Uttar Pradesh.",
    website: "",
    gallery: ["/centres/polytechnic-ghugulpur.png", "/centres/gallery/ghugulpur-1.png", "/centres/gallery/ghugulpur-2.png", "/centres/gallery/ghugulpur-3.png"],
  },
  {
    slug: "polytechnic-atrauli",
    name: "Government Girls Polytechnic College, Atrauli",
    district: "Aligarh", state: "Uttar Pradesh", type: "Polytechnic",
    image: "/centres/polytechnic-atrauli.png",
    blurb: "A Government Girls Polytechnic College in Atrauli, Aligarh district, operated by Venture Skill India in PPP mode with the Government of Uttar Pradesh.",
    website: "",
    gallery: ["/centres/polytechnic-atrauli.png", "/centres/gallery/atrauli-1.png", "/centres/gallery/atrauli-2.png", "/centres/gallery/atrauli-3.png"],
  },
];

export const ITI_COLLEGES: College[] = [
  {
    slug: "iti-basantrai",
    name: "ITI College, Basantrai",
    district: "Godda", state: "Jharkhand", type: "ITI",
    image: "/centres/iti-basantrai.png",
    blurb: "An Industrial Training Institute at Basantrai in Godda district, Jharkhand, run by Venture Skill India.",
    website: "",
    gallery: ["/centres/iti-basantrai.png", "/centres/gallery/basantrai-1.png", "/centres/gallery/basantrai-2.png", "/centres/gallery/basantrai-3.png"],
  },
  {
    slug: "iti-saraikela",
    name: "ITI College, Saraikela",
    district: "Kharsawan", state: "Jharkhand", type: "ITI",
    image: "/centres/iti-saraikela.png",
    blurb: "An Industrial Training Institute at Saraikela in Kharsawan district, Jharkhand, run by Venture Skill India.",
    website: "",
    gallery: ["/centres/iti-saraikela.png", "/centres/gallery/saraikela-1.png", "/centres/gallery/saraikela-2.png", "/centres/gallery/saraikela-3.png"],
  },
];

/** Every campus in the directory — used for routing, sitemap and lookups. */
export const ALL_COLLEGES: College[] = [...POLYTECHNIC_COLLEGES, ...ITI_COLLEGES];

export function getCollege(slug: string): College | undefined {
  return ALL_COLLEGES.find((c) => c.slug === slug);
}

// ════════════════════════════════════════════════════════════════════
//  Services Page Data
// ════════════════════════════════════════════════════════════════════

export const EMPLOYMENT_SECTORS = [
  { name: "IT / ITeS", icon: "computer", image: "/images/voc-it.png", desc: "Software development, IT support, BPO and tech-enabled services." },
  { name: "Apparel & Textiles", icon: "textiles", image: "/images/voc-apparel.png", desc: "Garment manufacturing, quality, and fashion CAD roles." },
  { name: "Logistics & E-Commerce", icon: "logistics", image: "/images/voc-retail.png", desc: "Warehousing, fulfilment, supply-chain and last-mile delivery." },
  { name: "Automotive", icon: "automotive", image: "/images/voc-automotive.png", desc: "Vehicle manufacturing, servicing, EV assembly and maintenance." },
  { name: "Healthcare", icon: "healthcare", image: "/images/voc-healthcare.png", desc: "Hospital support, nursing assistance and patient care." },
];

export const EMERGING_TECH = [
  { name: "Drone Technology", icon: "drone", image: "/images/drone-lab.png", desc: "Unmanned aerial vehicle operation, maintenance and surveying applications." },
  { name: "Industrial Automation", icon: "automation", image: "/images/thumb-plc-automation.png", desc: "PLC, SCADA, robotics and smart manufacturing systems." },
  { name: "Electric Vehicle (EV)", icon: "ev", image: "/images/ev-lab.png", desc: "EV servicing, battery technology, charging infrastructure and assembly." },
];

// PPP & Workforce initiatives (Priyadarshan Sir's input)
export const SERVICES_PPP = [
  { name: "Transforming Public Education", icon: "government", image: "/centres/polytechnic-sardhana.png", desc: "Operating PPP-model Polytechnic and ITI institutions — modernizing government technical education with industry-grade curriculum, labs and placement delivery." },
  { name: "Workforce for Industries", icon: "industry", image: "/images/placements-drive.png", desc: "Sourcing, training and supplying job-ready workforce directly to manufacturing, service and infrastructure-sector industries at scale." },
  { name: "Empowering Government Schools", icon: "school", image: "/mandates/samagra-shiksha.png", desc: "Establishing vocational skill labs across 400+ government schools — embedding employable, hands-on skills into mainstream school education." },
];

export type GovtMandate = {
  slug: string;
  name: string;
  fullName: string;
  /** One-line summary shown in the mandate menu. */
  desc: string;
  /** Expanded copy for the detail panel. */
  longDesc: string;
  /** Placeholder path — drop the real photograph in /public/mandates/. */
  image: string;
  /** Renders the district-wise school table instead of a plain panel. */
  hasDistrictSheet?: boolean;
};

export const GOVT_MANDATES: GovtMandate[] = [
  {
    slug: "ddu-gky",
    name: "DDU-GKY Project",
    fullName: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana",
    desc: "Rural youth skill training and placement programme under the Ministry of Rural Development.",
    longDesc: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana is the Ministry of Rural Development's placement-linked skilling programme for rural youth. Venture Skill India runs DDU-GKY centres that recruit candidates from rural households, train them against National Skill Qualification Framework job roles, and carry them through to verified placement — with residential training, on-the-job support and post-placement tracking built into the delivery model.",
    image: "/mandates/ddu-gky.png",
  },
  {
    slug: "sjgky",
    name: "SJGKY Project",
    fullName: "Swarnajayanti Gram Swarozgar Yojana / State Skill Initiatives",
    desc: "State-level self-employment and skill-building initiatives for gram panchayat youth.",
    longDesc: "Swarnajayanti Gram Swarozgar Yojana and the state skill initiatives that followed it focus on self-employment at the gram panchayat level. Our delivery combines trade training with the enterprise basics a first-time earner needs — costing, credit linkage and market access — so that candidates who will not migrate for a job can still build an income where they live.",
    image: "/mandates/sjgky.png",
  },
  {
    slug: "birsa",
    name: "Birsa Scheme",
    fullName: "Jharkhand Skill Projects",
    desc: "Targeted tribal youth training and employment programmes across Jharkhand.",
    longDesc: "The Birsa scheme is Jharkhand's targeted skilling programme for tribal youth. Venture Skill India delivers training across districts in the state, mobilising candidates through panchayat and community networks, running trade training in local languages, and connecting graduates to employers inside and outside Jharkhand.",
    image: "/mandates/birsa.png",
  },
  {
    slug: "ddu-kk",
    name: "DDU-KK",
    fullName: "Deen Dayal Upadhyaya Kaushal Kendras",
    desc: "Multi-skill training centres under the National Skill Qualification Framework.",
    longDesc: "Deen Dayal Upadhyaya Kaushal Kendras are multi-skill centres delivering several NSQF-aligned trades under one roof. Each centre carries the lab infrastructure for its trade mix, assessment against national standards, and a placement cell — letting a single campus serve a district's demand across manufacturing, services and IT-enabled roles.",
    image: "/mandates/ddu-kk.png",
  },
  {
    slug: "samagra-shiksha",
    name: "Samagra Shiksha",
    fullName: "Samagra Shiksha School Project",
    desc: "Integrated school education programme with vocational and skill components.",
    longDesc: "Samagra Shiksha is the Government of India's integrated scheme for school education. Under it we place vocational trainers and build vocational labs inside government schools, embedding hands-on employable skills into mainstream schooling from the secondary stage onwards. The district-wise breakdown below lists the schools we cover under the programme.",
    image: "/mandates/samagra-shiksha.png",
    hasDistrictSheet: true,
  },
];

/**
 * District-wise school coverage under Samagra Shiksha.
 *
 * Awaiting the source sheet from Aryan — the table renders an "awaiting data"
 * state while this is empty, and fills in as soon as rows are added here.
 */
export const SAMAGRA_SHIKSHA_DISTRICTS: { district: string; state: string; schools: number }[] = [];

// Services page — six delivery verticals (final restructuring input).
export const SERVICES_VERTICALS = [
  { name: "Institution", icon: "school", desc: "CAD Centres, Hi-Tech Academy and VIFT — Venture Institute of Fashion Technology." },
  { name: "Education", icon: "education", desc: "PPP-mode Government Polytechnic colleges and ITI colleges." },
  { name: "Skill Development Programs", icon: "automation", desc: "Large-scale skill training under central and state government mandates." },
  { name: "School Initiatives / Projects", icon: "government", desc: "Vocational trainers and vocational labs across 400+ government schools." },
  { name: "Venture Institute Park", icon: "campus", desc: "Flagship high-tech campus at Ranchi Smart City, Dhurwa." },
  { name: "Infrastructure Management Service", icon: "lab", desc: "Lab supply and institutional infrastructure management." },
];

// ════════════════════════════════════════════════════════════════════
//  Infrastructure Page Data
// ════════════════════════════════════════════════════════════════════

export const INFRA_TABS = [
  { key: "institution", label: "Institution", desc: "Hi-Tech Academy, CAD Centres, VIFT (Venture Institute of Fashion Technology), PPP-mode Polytechnic colleges and ITI institutions." },
  { key: "central", label: "Central-Driven Initiatives", desc: "DDU-GKY programs and DDU-KK mega skill centres." },
  { key: "skill", label: "State Skill-Driven Initiatives", desc: "State-level operational delivery frameworks — UPSDM (Uttar Pradesh), JSDM (Jharkhand), BSDM (Bihar)." },
];

export const TRAINING_INSTITUTIONS: {
  type: string;
  name: string;
  count: number | null;
  state: string;
  desc: string;
}[] = [
  { type: "Mega Skill Centre", name: "Venture Mega Skill Centres", count: 6, state: "Jharkhand", desc: "Flagship multi-program skill hubs delivering CAD, IT, healthcare and vocational training at scale across Jharkhand." },
  { type: "Institute", name: "CAD Institute", count: null, state: "Multiple", desc: "Dedicated CAD training institutes spanning architecture, civil, mechanical and electrical engineering domains." },
  { type: "Institute", name: "Venture Institute of Fashion and Interior", count: null, state: "Multiple", desc: "All fashion and interior programmes under VIFT — from pattern making to digital fashion CAD." },
  { type: "Institute", name: "Computer Institute", count: null, state: "Multiple", desc: "Computer application, IT and software skilling institutes for job-ready digital careers." },
  { type: "DDU-GKY", name: "DDU-GKY Centres", count: 5, state: "All-over India", desc: "Rural youth skill training and placement centres under Deen Dayal Upadhyaya Grameen Kaushalya Yojana." },
  { type: "PPP", name: "Government Polytechnic Colleges", count: 3, state: "Uttar Pradesh", desc: "PPP-model polytechnics — Sardhana (Meerut), Ghugulpur (Balrampur) and Government Girls Polytechnic, Atrauli (Aligarh)." },
  { type: "Vocational", name: "Industrial Training Institutes (ITI)", count: 2, state: "Jharkhand", desc: "ITI College Basantrai (Godda) and ITI College Saraikela (Kharsawan)." },
  { type: "HQ", name: "Corporate Head Office", count: null, state: "Jharkhand", desc: "601, 6th Floor, Panchwati Plaza, Kutchery Road, Ranchi — executive and administrative hub." },
];

export const SMART_CITY_BLOCKS = [
  { block: 1, name: "Front Facade", desc: "Executive Office Space and modern Food & Beverage (F&B) / Canteen zones.", icon: "office" },
  { block: 2, name: "Middle Wing", desc: "Modernized Nursing College.", icon: "nursing" },
  { block: 3, name: "Rear Wing", desc: "Advanced Institutional Space, smart classrooms, and technical labs.", icon: "lab" },
  { block: 4, name: "Hostel Complex", desc: "On-campus residential housing space.", icon: "hostel" },
];

// ════════════════════════════════════════════════════════════════════
//  Work Abroad Page Data
// ════════════════════════════════════════════════════════════════════

export const INTL_CORRIDORS = [
  {
    region: "Middle East — Gulf Region",
    cities: ["Dubai", "Riyadh", "Abu Dhabi", "Doha"],
    desc: "Active employment drives across UAE & Saudi Arabia for qualified skilled professionals in hospitality, mega-construction projects, healthcare, and retail sectors.",
    icon: "🌍",
    flag: "🇦🇪 🇸🇦",
    tagline: "Tax-Free Income · Direct Sponsorship",
    image: "/images/corridor-middle-east.png",
    fallbackColor: "linear-gradient(135deg, #1B2D4F 0%, #0D1B2A 60%, #3B2D12 100%)",
    sectors: ["Construction & Civil Engineering", "Hospitality & Tourism", "Healthcare & Nursing", "Retail & Logistics"],
    perks: ["100% Tax-Free Salary", "Employer-paid Housing & Visa", "Annual Paid Flight Allowance"],
    statLabel: "Deployment Corridors",
    statValue: "Dubai & Riyadh Drives",
  },
  {
    region: "Europe — Germany",
    cities: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    desc: "German International Exchange Program — specialized language training, qualification recognition, and direct placement into the European healthcare and nursing sector.",
    icon: "🇩🇪",
    flag: "🇩🇪 🇪🇺",
    tagline: "EU Residency Pathway · Fast-Track Visa",
    image: "/images/work-abroad-germany.png",
    fallbackColor: "linear-gradient(135deg, #0A192F 0%, #172A45 60%, #003366 100%)",
    sectors: ["Geriatric & Clinical Nursing", "Hospital Patient Care", "Medical Technology", "Specialized Healthcare"],
    perks: ["Paid German Language Prep (A1, A2 → B1, B2)", "Recognized German Nursing License", "Permanent Residency Option"],
    statLabel: "Target Sector",
    statValue: "German Healthcare Network",
  },
];

// Step-by-step workflow for the German healthcare deployment program.
export const WORK_ABROAD_PROCESS = [
  { step: 1, title: "Registration & Eligibility", desc: "Profile assessment, document screening and eligibility check for the healthcare pathway to Germany.", icon: "registration" },
  { step: 2, title: "Language Training (A1, A2 → B1, B2)", desc: "Structured German language instruction — starting at A1 and A2, then progressing to B1 and B2 completion, the mandatory benchmark for healthcare roles.", icon: "language" },
  { step: 3, title: "Cultural Integration Program", desc: "Orientation on German workplace culture, patient-care etiquette and day-to-day life to ensure a smooth transition.", icon: "culture" },
  { step: 4, title: "Professional Nursing Certification", desc: "Recognition of nursing qualifications and bridging modules aligned to German healthcare standards.", icon: "certification" },
  { step: 5, title: "Visa Processing & Documentation", desc: "End-to-end visa filing, credential attestation and documentation support handled by our mobility cell.", icon: "visa" },
  { step: 6, title: "Deployment to Germany", desc: "Confirmed placement with a partner healthcare employer, relocation support and on-ground onboarding.", icon: "deployment" },
];

// Proof points for the homepage Work Abroad section.
export const WORK_ABROAD_HIGHLIGHTS = [
  { value: "2", label: "Global Corridors", sub: "Germany (healthcare) + active Gulf drives" },
  { value: "A1→B2", label: "German Language Training", sub: "A1, A2 then B1, B2 completion" },
  { value: "6-Step", label: "Guided Pathway", sub: "Registration to on-ground deployment" },
  { value: "100%", label: "End-to-End Mobility", sub: "Visa, credentials & relocation support" },
];

// ════════════════════════════════════════════════════════════════════
//  CSR Data & Impact Metrics
// ════════════════════════════════════════════════════════════════════

export const CSR_IMPACT_STATS = [
  { value: "15,000+", label: "Youth Skilled", sub: "Across 4 eastern & northern states" },
  { value: "85%", label: "Placement Rate", sub: "Verified wage employment & job roles" },
  { value: "100%", label: "Section 8 Compliant", sub: "Audited utilization & GST documentation" },
  { value: "6+", label: "High-Growth Sectors", sub: "EV, Healthcare, Garments, IT & Civil" },
];

export const CSR_SECTION135_STEPS = [
  {
    step: "01",
    title: "District Mobilization & Need Assessment",
    desc: "Grassroots outreach in Tier-2/3 & tribal districts to identify candidates with high learning potential and economic need.",
  },
  {
    step: "02",
    title: "NSDC & SSC Aligned Curriculum",
    desc: "Rigorous 3-to-6 month practical modules delivered in modern technical labs by industry-certified master trainers.",
  },
  {
    step: "03",
    title: "Practical Lab & Safety Certification",
    desc: "Third-party assessment and national skill credentialing recognized by leading pan-India corporate employers.",
  },
  {
    step: "04",
    title: "Corporate Placement & Job Integration",
    desc: "Direct hiring drives with our 40+ corporate partners ensuring wage employment and 12-month post-placement tracking.",
  },
  {
    step: "05",
    title: "Audited Section 8 Impact Report",
    desc: "Transparent utilization certificates, beneficiary tracking dashboards, and GST-compliant financial audit documentation.",
  },
];

export const CSR_PARTNERS = [
  {
    name: "Hero MotoCorp EV Skilling Alliance",
    partnerLogo: "/logos/tata.png",
    sector: "Electric Vehicles & Auto Service",
    location: "Haridwar & Ranchi Technical Hubs",
    metric: "500+ Technicians Trained",
    desc: "Deploying corporate CSR funds to establish specialized EV technician training modules, certifying rural youth for high-demand electric two-wheeler assembly and service network management.",
    img: "/images/csr/ev-workshop.jpg",
  },
  {
    name: "RKS Builders Construction Skilling",
    partnerLogo: "/logos/lt.svg",
    sector: "Civil Construction & Structural CAD",
    location: "Jharkhand & UP Project Sites",
    metric: "350+ Site Technicians Placed",
    desc: "Focused skill development for construction workers and diploma holders in modern structural drafting, surveying, and site safety management.",
    img: "/images/csr/construction.jpg",
  },
  {
    name: "Tata Electronics Manufacturing Alliance",
    partnerLogo: "/logos/tata.png",
    sector: "Electronics & Precision Assembly",
    location: "Hosur & Eastern Skill Corridors",
    metric: "620+ Women Technicians Skilled",
    desc: "Empowering young women from underserved rural communities with hands-on precision electronics assembly training and direct placement into manufacturing facilities.",
    img: "/images/csr/women-skilling.jpg",
  },
  {
    name: "Jupiter Hospitals Healthcare Alliance",
    partnerLogo: "/logos/jupiter-hospitals.png",
    sector: "Bedside Assistance & Nursing Support",
    location: "Ranchi & Regional Healthcare Centers",
    metric: "280+ Healthcare Assistants Placed",
    desc: "Channeling CSR investments into healthcare assistant certification, providing vital clinical support staff to hospitals and geriatric care units.",
    img: "/images/csr/nursing-skilling.jpg",
  },
];

export const CSR_ACTIVITIES = [
  {
    title: "Venture Sewa Foundation Independent Skills Drive",
    category: "Self-Funded Social Impact",
    location: "Godda & Santhal Pargana, Jharkhand",
    desc: "Our flagship self-funded initiative delivering fully subsidized computer literacy and CAD drafting programs to youth from remote tribal villages.",
    img: "/images/csr/training-camp.jpg",
    metric: "1,200+ Free Scholarships Granted",
  },
  {
    title: "Rural Youth Skilling & Guidance Camps",
    category: "Community Outreach",
    location: "Multi-District Mobile Camps",
    desc: "Multi-day intensive career counseling, technical aptitude assessments, and skill orientation workshops conducted directly inside rural community centers.",
    img: "/images/csr/community-drive.jpg",
    metric: "45+ Villages Reached",
  },
  {
    title: "Women's Economic Empowerment Cohorts",
    category: "Gender Equity Skilling",
    location: "Ranchi & Dhanbad Hubs",
    desc: "Comprehensive industrial garment manufacturing and fashion technology skilling batches for young women, fostering financial independence and micro-entrepreneurship.",
    img: "/images/csr/women-skilling.jpg",
    metric: "800+ Women Employed",
  },
];

export const CSR_GALLERY = [
  {
    id: "g1",
    title: "Rural Skill Mobilization Camp",
    caption: "Aptitude screening & career guidance for village youth",
    location: "Godda, Jharkhand",
    category: "rural",
    date: "March 2026",
    img: "/images/csr/training-camp.jpg",
  },
  {
    id: "g2",
    title: "National Skill Certification Convocation",
    caption: "Distributing NSDC-aligned credentials to successful trainees",
    location: "Ranchi, Jharkhand",
    category: "cert",
    date: "February 2026",
    img: "/images/csr/certification.jpg",
  },
  {
    id: "g3",
    title: "Women's Apparel Skilling Workshop",
    caption: "Industrial sewing and pattern making practical cohort",
    location: "Dhanbad, Jharkhand",
    category: "women",
    date: "January 2026",
    img: "/images/csr/women-skilling.jpg",
  },
  {
    id: "g4",
    title: "EV Battery & Assembly Lab",
    caption: "Hands-on diagnostic training on electric two-wheeler motors",
    location: "Ranchi Technical Hub",
    category: "ev",
    date: "April 2026",
    img: "/images/csr/ev-workshop.jpg",
  },
  {
    id: "g5",
    title: "Civil Construction & CAD Practicum",
    caption: "Site measurement and CAD blueprint interpretation training",
    location: "Jamshedpur Center",
    category: "construction",
    date: "December 2025",
    img: "/images/csr/construction.jpg",
  },
  {
    id: "g6",
    title: "Healthcare & Patient Care Assistant Lab",
    caption: "Practical nursing assistance and clinical care protocol training",
    location: "Ranchi Healthcare Unit",
    category: "healthcare",
    date: "May 2026",
    img: "/images/csr/nursing-skilling.jpg",
  },
  {
    id: "g7",
    title: "Foundation Community Awareness Drive",
    caption: "Skill awareness orientation for parents and rural leaders",
    location: "Deoghar, Jharkhand",
    category: "community",
    date: "November 2025",
    img: "/images/csr/community-drive.jpg",
  },
];

export const CSR_TESTIMONIALS = [
  {
    quote: "Before joining the VSI Hero EV batch, I had limited options in my village. The 3-month practical course changed everything. Today I work as a certified EV technician earning a steady salary.",
    name: "Ramesh Kumar Soren",
    role: "EV Service Technician, Hero Partner Center",
    location: "Native of Dumka, Jharkhand",
    batch: "EV CSR Cohort 2025",
    avatar: "/images/csr/ev-workshop.jpg",
  },
  {
    quote: "The apparel skilling initiative gave me both technical expertise and the confidence to support my family. Getting my official NSDC certificate was the proudest moment of my life.",
    name: "Sunita Devi",
    role: "Quality Inspector, Apparel Exports",
    location: "Native of Ranchi, Jharkhand",
    batch: "Women's Skilling Batch 2025",
    avatar: "/images/csr/women-skilling.jpg",
  },
];

// ════════════════════════════════════════════════════════════════════
//  About Page — Contact Channels
// ════════════════════════════════════════════════════════════════════

export const CONTACT_CHANNELS = [
  { dept: "Placement Cell", person: "Shubham", phone: "+91 9431103263", email: "PM@venturecad.co.in", icon: "placement" },
  { dept: "HR Department", person: "Aryan · HR Manager", phone: "+91 9431103263", email: "HR@venturecad.co.in", icon: "hr" },
  { dept: "Director & Executive Directors", phone: "+91 9431103263", email: "director@ventureskillindia.co.in", icon: "director" },
];

export const ACCREDITATIONS = [
  { name: "NSDC", fullName: "National Skill Development Corporation" },
  { name: "Autodesk", fullName: "Autodesk Certification Hub" },
  { name: "AICTE", fullName: "All India Council for Technical Education" },
  { name: "NASSCOM", fullName: "National Association of Software and Service Companies" },
  { name: "Skill India", fullName: "Skill India Mission" },
  { name: "ASDC", fullName: "Automotive Skills Development Council" },
];

// Sector Skill Council & state mission accreditations shown in the footer badge bar.
export const FOOTER_ACCREDITATIONS = [
  "NASSCOM",
  "NSDC",
  "AICTE",
  "Autodesk Certified",
  "ASDC",
  "UPSDM",
  "RJSD",
  "Skill India",
];

// ════════════════════════════════════════════════════════════════════
//  Resources Page Data
// ════════════════════════════════════════════════════════════════════

export const RESOURCE_TABS = [
  { key: "news", label: "News & Blogs", icon: "news" },
  { key: "ads", label: "Advertisements", icon: "ads" },
  { key: "recognition", label: "Recognition", icon: "recognition" },
  { key: "brochures", label: "Brochures", icon: "brochures" },
];

export const STATS = [
  { val: 25, sfx: "+", lbl: "Years" },
  { val: 45000, sfx: "+", lbl: "Placed" },
  { val: 6000, sfx: "+", lbl: "Annual Jobs" },
  { val: 50, sfx: "+", lbl: "Centres" },
];

// `img` points at a felicitation photo for each award. Drop matching files into
// /public/images/awards/ — the card falls back to a placeholder until then.
export const AWARDS = [
  {
    id: "skoch-2019",
    t: "Skoch Award",
    s: "Excellence in Skill Development",
    y: "2019",
    by: "National Body",
    presenter: "Skoch Group & Skill Development Council",
    location: "New Delhi",
    badge: "Highest National Honor",
    impactStat: "Ecosystem Impact",
    img: "/images/awards/skoch-award.jpg",
    desc: "Conferred nationally for sustained impact on India's skill development ecosystem, recognizing industry-standard technical training and job outcome excellence.",
  },
  {
    id: "best-placement-2019",
    t: "Best Placement Award",
    s: "Honoured by Union Minister Dharmendra Pradhan",
    y: "2019",
    by: "Govt. of India",
    presenter: "Shri Dharmendra Pradhan (Union Minister of MSDE)",
    location: "New Delhi",
    badge: "Govt. Recognition",
    impactStat: "10,000+ Placements",
    img: "/images/awards/best-placement-award.jpg",
    desc: "Shri Dharmendra Pradhan, Hon'ble Union Minister of Skill Development & Entrepreneurship, felicitates Venture Skill India for outstanding placement success rates.",
  },
  {
    id: "excellence-2022",
    t: "Excellence Award",
    s: "Tribal Placement · Cabinet Min. Arjun Munda",
    y: "2022",
    by: "Cabinet Minister",
    presenter: "Shri Arjun Munda (Union Cabinet Minister)",
    location: "Ranchi, Jharkhand",
    badge: "Social Impact",
    impactStat: "12 Tribal Districts",
    img: "/images/awards/excellence-award.jpg",
    desc: "Union Cabinet Minister Arjun Munda recognizes Venture Skill India's dedicated initiatives in empowering tribal youth with sustainable technical employment.",
  },
];

/**
 * `lat` / `lng` place each centre on the relief map (see components/IndiaMap).
 * City-centre coordinates, decimal degrees. They are projected onto the real
 * coastline rather than eyeballed, so an error here puts a pin in the wrong
 * district — check a new centre's coordinates before adding it.
 */
export const CENTERS: {
  city: string;
  state: string;
  addr: string;
  flagship?: boolean;
  kind?: string;
  labs: string[];
  lat: number;
  lng: number;
}[] = [
  { city: "Ranchi", state: "Jharkhand", addr: "601, 6th Floor, Panchwati Plaza, Kutchery Road, Ranchi – 834001", flagship: true, kind: "Corporate Head Office", labs: ["VIFT — Fashion & Interior", "EV Training", "Drone Tech", "CAD Labs"], lat: 23.34, lng: 85.31 },
  { city: "Godda", state: "Jharkhand", addr: "Godda DDU-KK Mega Skill Centre", kind: "DDU-KK Mega Skill", labs: ["Vocational Training", "Computer Application", "Healthcare"], lat: 24.83, lng: 87.21 },
  { city: "Kanke", state: "Jharkhand", addr: "Kanke DDU-KK Mega Skill Centre", kind: "DDU-KK Mega Skill", labs: ["Vocational Training", "Retail & Logistics", "Computer Application"], lat: 23.43, lng: 85.32 },
  { city: "Bokaro", state: "Jharkhand", addr: "Bokaro Skill Centre", kind: "Skill Centre", labs: ["Vocational Training", "Computer Application"], lat: 23.67, lng: 86.15 },
  { city: "Aligarh", state: "Uttar Pradesh", addr: "Aligarh DDU-GKY Skill Centre", kind: "DDU-GKY Skill Centre", labs: ["Apparel & Textiles", "Computer Application", "Retail"], lat: 27.90, lng: 78.06 },
  { city: "Balrampur", state: "Uttar Pradesh", addr: "Balrampur DDU-GKY Skill Centre", kind: "DDU-GKY Skill Centre", labs: ["Apparel & Textiles", "Computer Application", "Retail"], lat: 27.43, lng: 82.18 },
  { city: "Meerut", state: "Uttar Pradesh", addr: "Meerut DDU-GKY Skill Centre", kind: "DDU-GKY Skill Centre", labs: ["CAD Labs", "Electrical CAD", "Mechanical CAD"], lat: 28.98, lng: 77.71 },
];

// Leadership board — kept separate from teaching faculty.
export const LEADERSHIP = [
  { name: "Rajeev Singh", role: "Managing Director & CEO", cred: "25 years in Skill Development · Industry Veteran", accent: "#1A1A1A" },
  { name: "Priyadarshan Singh", role: "Executive Director", cred: "Public Education Transformation · PPP Polytechnic & ITI", accent: "#1A3A5A" },
  { name: "Pinki Singh", role: "Director", cred: "Institutional Governance · Programme Oversight", accent: "#4A2838" },
  { name: "Basant Singh", role: "Chief Operating Officer", cred: "Operations · Placement & Delivery", accent: "#2D4A3F" },
];

export const FACULTY = [
  { name: "Isha Kumari", role: "Academic Head", cred: "Curriculum Design · Industry-Aligned Programs", accent: "#4A3728" },
  { name: "Nausad Ahmed", role: "HOD · Electrical & Electronics", cred: "Industrial Automation Specialist · 15+ yrs experience", accent: "#2D4A3F" },
  { name: "Amzad Khan", role: "HOD · Fashion Design", cred: "Garment Technology · Pattern Making Expert", accent: "#4A2838" },
  { name: "Avinash Rathod", role: "IT Professor", cred: "Trained at Cisco · VMware Certified", accent: "#1A3A5A" },
  { name: "Shreya Kumari", role: "Professor · Electrical", cred: "Electrical CAD & Automation Specialist", accent: "#3A2A1A" },
];

export const NEWS = [
  { date: "2024", t: "EV Training Centre Inaugurated by JSDM", s: "Jharkhand Skill Development Mission inaugurates a state-of-the-art EV training facility at our Ranchi centre.", featured: true, img: "/images/ev-lab.png" },
  { date: "2023", t: "CM Hemant Soren Visits Drone Technology Lab", s: "Hon. Chief Minister tours VSI's drone technology infrastructure during state skill development showcase.", img: "/images/drone-lab.png" },
  { date: "2022", t: "Excellence Award for Tribal Student Placement", s: "Cabinet Minister Arjun Munda recognizes VSI's contribution to tribal youth employment.", img: "/images/awards/excellence-award.jpg" },
  { date: "2019", t: "Skoch Award · Excellence in Skill Development", s: "National recognition for sustained impact on India's skill development ecosystem.", img: "/images/awards/skoch-award.jpg" },
  { date: "2019", t: "Best Placement Award by Union Minister", s: "Dharmendra Pradhan, Minister of Skill Development & Entrepreneurship, honors VSI.", img: "/images/awards/best-placement-award.jpg" },
  { date: "2017", t: "Venture Mega Skill Centre Inaugurated", s: "Flagship multi-program centre opens in Ranchi, marking a major expansion.", img: "/images/award-ceremony.png" },
];

/**
 * Student stories.
 *
 * `slug` binds a story to the programme page it came out of — the detail page
 * shows only stories from its own programme, because a Civil CAD outcome under
 * an Architecture CAD heading is a claim about a course that never made it.
 * A story with no `slug` is site-wide only (homepage / placements carousel).
 *
 * `photo` is a portrait in /public/images/students; `employer` is a key into
 * EMPLOYER_MARKS, so the card can show where they landed in the company's own
 * artwork. Both are optional and both degrade: no photo falls back to a
 * monogram, no employer simply omits the mark. See the README in that folder
 * for the filenames the three stories below are waiting on.
 */
export type Testimonial = {
  q: string;
  name: string;
  course: string;
  placed: string;
  from: string;
  slug?: string;
  photo?: string;
  employer?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  { q: "Before VSI, I had no idea CAD was a career. Two years later I'm a junior designer at L&T in Hyderabad. The EV lab training put me ahead of every other candidate in the interview.", name: "Ritu Kumari", course: "Civil CAD · 2022 Batch", placed: "L&T, Hyderabad", from: "Godda, Jharkhand", slug: "civil-cad", photo: "/images/students/ritu-kumari.jpg", employer: "L&T" },
  { q: "The fashion lab here was better equipped than institutes in Patna or Kolkata. I didn't have to leave home to learn what I needed.", name: "Priya Soren", course: "Fashion CAD · 2023 Batch", placed: "Myntra, Bangalore", from: "Ranchi, Jharkhand", slug: "fashion-cad", photo: "/images/students/priya-soren.jpg", employer: "Myntra" },
  { q: "EV training gave me a skill almost nobody else had. That's exactly what got me the job at Tata Motors when they were hiring for their EV division.", name: "Amit Kumar", course: "Mechanical CAD · 2022 Batch", placed: "TATA Motors, Pune", from: "Godda, Jharkhand", slug: "mechanical-cad", photo: "/images/students/amit-kumar.jpg", employer: "TATA Motors" },
];

/**
 * Stories belonging to one programme. Returns empty for programmes we hold no
 * story for — Architecture CAD, Electrical CAD and GIS today — and the detail
 * page drops the section rather than borrowing another course's alumnus.
 */
export function courseTestimonials(slug: string): Testimonial[] {
  return TESTIMONIALS.filter((t) => t.slug === slug);
}

export const EMPLOYERS = ["TATA Motors", "Foxconn", "Wistron", "Reliance", "Yazaki", "Amazon", "Flipkart", "Blinkit", "Zepto", "Apna Mart", "Jupiter Hospitals", "HM Hospitals", "AIG Hospitals", "NU MED Super Speciality Hospitals", "2050 Healthcare", "S.P. Apparels", "Modenik Lifestyle", "Orient Craft", "Ayuda", "L&T", "Wipro", "Infosys", "Cognizant", "TCS", "HCL"];

// Sector-specific grouping for the recruiter page
export const RECRUITER_SECTORS = [
  { sector: "Automotive & Manufacturing", companies: ["TATA Motors", "Foxconn", "Wistron", "Reliance", "Yazaki"] },
  { sector: "Logistics & E-Commerce", companies: ["Amazon", "Flipkart", "Blinkit", "Zepto", "Apna Mart"] },
  { sector: "Healthcare Ecosystems", companies: ["Jupiter Hospitals", "HM Hospitals", "AIG Hospitals", "NU MED Super Speciality Hospitals", "2050 Healthcare"] },
  { sector: "Apparel & Textiles", companies: ["S.P. Apparels", "Modenik Lifestyle", "Orient Craft", "Ayuda"] },
];

// Counselling enquiry dropdown — deliberately limited to the five course
// headers used in the site header, with CAD collapsed to a single option.
export const COUNSELING_COURSE_OPTIONS = [
  { value: "cad", key: "tabCAD" },
  { value: "computer-application", key: "tabCompApp" },
  { value: "data-science", key: "tabDataBA" },
  { value: "design", key: "tabDesign" },
  { value: "vocational", key: "tabVoc" },
];

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "courses", label: "Courses" },
  { id: "about", label: "About" },
  { id: "centers", label: "Centres" },
  { id: "placements", label: "Placements" },
  { id: "news", label: "News" },
  { id: "contact", label: "Contact" },
];

export const CREDS = ["NASSCOM", "NSDC Aligned", "AICTE Recognized", "Autodesk Certified", "Skill India Partner"];

export const MILESTONES = [
  { y: "2001", t: "Foundation", d: "Venture Skill India — previously known as Venture Technologies — founded in Ranchi with a single CAD lab and a vision: world-class skill training in Eastern India." },
  { y: "2015", t: "NSDC Partnership", d: "VSI becomes an NSDC partner — the first organisation in Jharkhand to do so." },
  { y: "2017", t: "Mega Skill Centre", d: "Venture Mega Skill Centre inaugurated in Ranchi — the flagship multi-program facility." },
  { y: "2019", t: "National Recognition", d: "Skoch Award and Best Placement Award (by Union Min. Dharmendra Pradhan) — twin recognitions in one year." },
  { y: "2022", t: "Tribal Impact", d: "Excellence Award by Cabinet Min. Arjun Munda for outstanding tribal student placement record." },
  { y: "2023", t: "AICTE Recognition", d: "Polytechnic diploma programs receive AICTE recognition, expanding our reach into formal technical education." },
  { y: "2023", t: "EV + Drone Era", d: "EV Training Centre inaugurated by JSDM; Drone Lab visited by CM Hemant Soren. Future-tech infrastructure." },
  { y: "2024", t: "50+ Centres", d: "National footprint reaches 50 centres across Jharkhand, UP, and beyond." },
];

// i18n translations
export const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    // Hero
    heroTag: "25 years · India's Career Transformation Partner",
    heroTitle1: "Bridging the Skill Gap,",
    heroTitle2: "Empowering",
    heroTitle3: "Careers.",
    heroTitle4: "",
    heroDesc: "Transforming potential into professional excellence through industry-mapped training and global placement ecosystems.",
    // CTAs
    exploreCourses: "Explore Courses",
    freeCounseling: "Book Counseling",
    enquireNow: "Enquire →",
    viewProgram: "View Program",
    bookCounseling: "Book Counseling →",
    downloadBrochure: "Download Brochure",
    whatsappNow: "WhatsApp Now",
    getCallback: "Get Callback",
    readMore: "Read More",
    callUs: "Call",
    getDirections: "Get Directions",
    submit: "Submit · Get Free Counseling",
    talkB2B: "Talk to Our B2B Team",
    needHelp: "Need help choosing?",
    notSure: "Not sure which course is right for you?",
    counselingSub: "Free counseling · 30-minute response · No obligation",
    // Section labels
    ourPrograms: "Our Programs.",
    infrastructure: "Infrastructure",
    labsTitle: "Labs no competitor can match.",
    labsDesc: "EV Training Centre — inaugurated by JSDM. Drone lab visited by CM Hemant Soren. Autodesk-authorized workstations. These are verifiable facts.",
    recognizedTitle: "Recognized at every level.",
    recognizedDesc: "Union ministers. State government. National bodies. The recognition is real and publicly verifiable.",
    ctaTitle: "Start your career conversation today.",
    ctaDesc: "Free. 30-min response. No pressure. Ranchi-based since 2001.",
    // Tabs
    tabCertificate: "CAD Engineering",
    tabDiploma: "Data Science",
    tabVocational: "Design Studio",
    tabAll: "All Programs",
    // Nav
    navHome: "Home",
    navCourses: "Courses",
    navServices: "Services",
    navRecruiters: "Recruiters",
    navResources: "Resources",
    navInfrastructure: "Infrastructure",
    navAbout: "About",
    navWorkAbroad: "Work Abroad",
    navCSR: "CSR",
    navCenters: "Centres",
    navPlacements: "Placements",
    navNews: "News",
    navContact: "Contact",
    // Course category tabs (5-category taxonomy)
    tabCAD: "CAD Courses",
    tabCompApp: "Computer Application",
    tabDataBA: "Data Science & BA",
    tabDesign: "Design Courses",
    tabVoc: "Free Vocational",
    tabPolyITI: "Polytechnic / ITI",
    // Form
    yourName: "Your name",
    phoneNumber: "Phone number",
    yourEmail: "Email",
    selectCourse: "Select course interest",
    selectCentre: "Preferred centre...",
    tellUs: "Tell us a bit about yourself and what you're hoping to achieve...",
    // Page heroes
    coursesEyebrow: "All Programs",
    coursesTitle1: "Pick the path that",
    coursesTitle2: "builds your career.",
    coursesHeroDesc: "Government-recognized certificate, diploma, and vocational programs. Real curriculum. Real placement support. 45,000+ students already placed.",
    aboutEyebrow: "Our Story",
    aboutTitle1: "25 Years of Building",
    aboutTitle2: "India's Workforce.",
    aboutHeroDesc: "Bridging the skill gap through employability, professional upskilling, and career-readiness. That's been the mission since 2001.",
    placementsEyebrow: "Placements & Recruiters",
    placementsTitle1: "45,000+ placed.",
    placementsTitle2: "Verifiable outcomes.",
    placementsHeroDesc: "6,000+ jobs secured per year. Median CTC of ₹3.0–₹4.0 LPA. 45,000+ students deployed across formal workforce sectors.",
    newsEyebrow: "Latest Updates",
    newsTitle1: "News &",
    newsTitle2: "Recognition.",
    contactEyebrow: "Get in Touch",
    contactTitle1: "Let's talk about",
    contactTitle2: "your career path.",
    contactHeroDesc: "Free counseling session. No pressure. Just clarity on the right course for where you want to go.",
    centersEyebrow: "Infrastructure",
    centersTitle1: "Labs & Infrastructure.",
    centersTitle2: "Built for excellence.",
    centersHeroDesc: "From our flagship Ranchi Smart City campus to government polytechnics and ITI centres — industry-grade labs across India.",
    // New page heroes
    servicesEyebrow: "Our Services",
    servicesTitle1: "Skill Initiatives &",
    servicesTitle2: "Government Mandates.",
    servicesHeroDesc: "Large-scale capacity-building projects across B2G and institutional frameworks. Driving employability through public and private sector mandates.",
    resourcesEyebrow: "Knowledge Hub",
    resourcesTitle1: "Resources &",
    resourcesTitle2: "Updates.",
    resourcesHeroDesc: "News, blogs, accreditations, and downloadable brochures — everything you need in one place.",
    workAbroadEyebrow: "Global Mobility",
    workAbroadTitle1: "Work Abroad.",
    workAbroadTitle2: "Global career pathways.",
    workAbroadHeroDesc: "International placement corridors — Middle East employment drives and European healthcare exchange programs.",
    csrEyebrow: "Corporate Social Responsibility",
    csrTitle1: "Skilling with",
    csrTitle2: "social purpose.",
    csrHeroDesc: "Section 8-compliant CSR through corporate alliances, self-funded Venture Sewa Foundation programs, and community skilling across rural and tribal India.",
    // Courses page sections
    certSectionTitle: "Certificate Courses",
    certSectionSub: "Industry-aligned · 200–320 hours · Certificate of completion",
    dipSectionTitle: "Polytechnic Diploma",
    dipSectionSub: "3-year AICTE-recognized diplomas · Full curriculum",
    vocSectionTitle: "Vocational Programs",
    vocSectionSub: "Short-duration · NSDC-aligned · Job-ready in months",
    whatsappShort: "WhatsApp",
    // Course detail page
    statFee: "Programme Fee",
    statDuration: "Duration",
    statTrained: "Trained",
    statRecognition: "Recognition",
    statAvgSalary: "Avg. Salary",
    applyNow: "Apply Now",
    downloadSyllabus: "Download Syllabus",
    whatsappEnquiry: "WhatsApp Enquiry",
    dToolsEyebrow: "Skills & Tools",
    dToolsTitle: "What you'll master",
    dCurriculumEyebrow: "Programme Structure",
    dCurriculumTitle: "What you'll learn",
    dIncludedEyebrow: "What's Included",
    dIncludedTitle: "Why this programme works",
    dWhoEyebrow: "Who Should Join",
    dWhoTitle: "Built for you if…",
    dOutcomesEyebrow: "Career Outcomes",
    dOutcomesTitle: "Where this can take you",
    dOutcomesDesc: "Our alumni work at L&T, TATA Motors, Wipro, Cognizant and dozens of other top employers across India. Here's the kind of salary range graduates see.",
    salaryEntry: "Entry-level",
    salaryAvg: "Average",
    salaryTop: "Top earners",
    dCtaTitle: "Ready to take the next step?",
    dRelatedEyebrow: "Also Explore",
    dRelatedTitle: "Related programmes",
  },
  hi: {
    heroTag: "25 साल · भारत का करियर ट्रांसफ़ॉर्मेशन पार्टनर",
    heroTitle1: "कौशल की खाई पाटना,",
    heroTitle2: "करियर को",
    heroTitle3: "सशक्त बनाना।",
    heroTitle4: "",
    heroDesc: "उद्योग-मैप्ड प्रशिक्षण और वैश्विक प्लेसमेंट इकोसिस्टम के ज़रिए संभावनाओं को पेशेवर उत्कृष्टता में बदलना।",
    exploreCourses: "कोर्स देखें",
    freeCounseling: "परामर्श बुक करें",
    enquireNow: "पूछताछ →",
    viewProgram: "प्रोग्राम देखें",
    bookCounseling: "परामर्श बुक करें →",
    downloadBrochure: "ब्रोशर डाउनलोड करें",
    whatsappNow: "WhatsApp करें",
    getCallback: "कॉलबैक पाएं",
    readMore: "और पढ़ें",
    callUs: "कॉल करें",
    getDirections: "दिशा-निर्देश",
    submit: "सबमिट · मुफ्त परामर्श पाएं",
    talkB2B: "हमारी B2B टीम से बात करें",
    needHelp: "चुनने में मदद चाहिए?",
    notSure: "तय नहीं कर पा रहे कौन-सा कोर्स सही है?",
    counselingSub: "मुफ्त परामर्श · 30 मिनट में जवाब · कोई शर्त नहीं",
    ourPrograms: "हमारे कार्यक्रम।",
    infrastructure: "बुनियादी ढांचा",
    labsTitle: "ऐसी लैब जो कोई प्रतिस्पर्धी नहीं दे सकता।",
    labsDesc: "EV प्रशिक्षण केंद्र — JSDM द्वारा उद्घाटित। ड्रोन लैब — CM हेमंत सोरेन द्वारा दौरा किया गया। ऑटोडेस्क-अधिकृत वर्कस्टेशन। ये सत्यापन योग्य तथ्य हैं।",
    recognizedTitle: "हर स्तर पर मान्यता प्राप्त।",
    recognizedDesc: "केंद्रीय मंत्री। राज्य सरकार। राष्ट्रीय निकाय। मान्यता वास्तविक और सार्वजनिक रूप से सत्यापन योग्य है।",
    ctaTitle: "आज ही अपनी करियर बातचीत शुरू करें।",
    ctaDesc: "मुफ्त। 30 मिनट में जवाब। कोई दबाव नहीं। 2001 से रांची में।",
    tabCertificate: "CAD इंजीनियरिंग",
    tabDiploma: "डेटा साइंस",
    tabVocational: "डिज़ाइन स्टूडियो",
    tabAll: "सभी कार्यक्रम",
    navHome: "होम",
    navCourses: "कोर्स",
    navServices: "सेवाएं",
    navRecruiters: "रिक्रूटर्स",
    navResources: "संसाधन",
    navInfrastructure: "बुनियादी ढांचा",
    navAbout: "हमारे बारे में",
    navWorkAbroad: "विदेश में काम",
    navCSR: "CSR",
    navCenters: "केंद्र",
    navPlacements: "प्लेसमेंट",
    navNews: "समाचार",
    navContact: "संपर्क",
    // Course category tabs (5-category taxonomy)
    tabCAD: "CAD कोर्स",
    tabCompApp: "कंप्यूटर एप्लिकेशन",
    tabDataBA: "डेटा साइंस और BA",
    tabDesign: "डिज़ाइन कोर्स",
    tabVoc: "मुफ्त व्यावसायिक",
    tabPolyITI: "पॉलिटेक्निक / ITI",
    yourName: "आपका नाम",
    phoneNumber: "फ़ोन नंबर",
    yourEmail: "ईमेल",
    selectCourse: "कोर्स चुनें",
    selectCentre: "पसंदीदा केंद्र...",
    tellUs: "अपने बारे में और क्या हासिल करना चाहते हैं — हमें बताइए...",
    coursesEyebrow: "सभी कार्यक्रम",
    coursesTitle1: "वह रास्ता चुनें जो",
    coursesTitle2: "आपका करियर बनाए।",
    coursesHeroDesc: "सरकारी-मान्यता प्राप्त सर्टिफिकेट, डिप्लोमा और व्यावसायिक कार्यक्रम। असली पाठ्यक्रम। असली प्लेसमेंट सहायता। 45,000+ छात्र प्लेस्ड।",
    aboutEyebrow: "हमारी कहानी",
    aboutTitle1: "25 साल से बना रहे हैं",
    aboutTitle2: "भारत का कार्यबल।",
    aboutHeroDesc: "रोज़गार योग्यता, पेशेवर कौशल उन्नयन और करियर-तत्परता के माध्यम से कौशल अंतर को पाटना। 2001 से यही मिशन है।",
    placementsEyebrow: "प्लेसमेंट और रिक्रूटर्स",
    placementsTitle1: "45,000+ प्लेस्ड।",
    placementsTitle2: "सत्यापनयोग्य परिणाम।",
    placementsHeroDesc: "हर साल 6,000+ नौकरियां। औसत CTC ₹3.0-₹4.0 LPA। 45,000+ छात्र औपचारिक कार्यबल में तैनात।",
    newsEyebrow: "ताज़ा अपडेट",
    newsTitle1: "समाचार और",
    newsTitle2: "मान्यता।",
    contactEyebrow: "संपर्क करें",
    contactTitle1: "आइए बात करते हैं",
    contactTitle2: "आपके करियर पथ की।",
    contactHeroDesc: "मुफ्त परामर्श सत्र। कोई दबाव नहीं। बस यह स्पष्टता कि आपके लक्ष्य के लिए कौन-सा कोर्स सही है।",
    centersEyebrow: "बुनियादी ढांचा",
    centersTitle1: "लैब और इन्फ्रास्ट्रक्चर।",
    centersTitle2: "उत्कृष्टता के लिए निर्मित।",
    centersHeroDesc: "रांची स्मार्ट सिटी कैम्पस से लेकर सरकारी पॉलिटेक्निक और ITI केंद्रों तक — पूरे भारत में इंडस्ट्री-ग्रेड लैब।",
    servicesEyebrow: "हमारी सेवाएं",
    servicesTitle1: "कौशल पहल और",
    servicesTitle2: "सरकारी परियोजनाएं।",
    servicesHeroDesc: "B2G और संस्थागत ढांचे में बड़े पैमाने पर क्षमता निर्माण परियोजनाएं।",
    resourcesEyebrow: "ज्ञान केंद्र",
    resourcesTitle1: "संसाधन और",
    resourcesTitle2: "अपडेट।",
    resourcesHeroDesc: "समाचार, ब्लॉग, मान्यताएं और डाउनलोड करने योग्य ब्रोशर — सब कुछ एक ही जगह।",
    workAbroadEyebrow: "वैश्विक गतिशीलता",
    workAbroadTitle1: "विदेश में काम।",
    workAbroadTitle2: "वैश्विक करियर पथ।",
    workAbroadHeroDesc: "अंतरराष्ट्रीय प्लेसमेंट गलियारे — मध्य पूर्व रोज़गार अभियान और यूरोपीय स्वास्थ्य सेवा विनिमय कार्यक्रम।",
    csrEyebrow: "कॉर्पोरेट सामाजिक उत्तरदायित्व",
    csrTitle1: "सामाजिक उद्देश्य के साथ",
    csrTitle2: "कौशल निर्माण।",
    csrHeroDesc: "धारा 8-अनुरूप CSR — कॉर्पोरेट गठबंधन, स्व-वित्तपोषित वेंचर सेवा फाउंडेशन कार्यक्रम और ग्रामीण व आदिवासी भारत में सामुदायिक कौशल।",
    // Courses page sections
    certSectionTitle: "सर्टिफिकेट कोर्स",
    certSectionSub: "इंडस्ट्री-अलाइंड · 200–320 घंटे · कोर्स पूरा होने का प्रमाणपत्र",
    dipSectionTitle: "पॉलिटेक्निक डिप्लोमा",
    dipSectionSub: "3-वर्षीय AICTE-मान्यता प्राप्त डिप्लोमा · पूर्ण पाठ्यक्रम",
    vocSectionTitle: "व्यावसायिक कार्यक्रम",
    vocSectionSub: "कम अवधि · NSDC-अलाइंड · कुछ ही महीनों में नौकरी के लिए तैयार",
    whatsappShort: "WhatsApp",
    // Course detail page
    statFee: "कोर्स फ़ीस",
    statDuration: "अवधि",
    statTrained: "प्रशिक्षित",
    statRecognition: "मान्यता",
    statAvgSalary: "औसत वेतन",
    applyNow: "अभी आवेदन करें",
    downloadSyllabus: "सिलेबस डाउनलोड करें",
    whatsappEnquiry: "WhatsApp पूछताछ",
    dToolsEyebrow: "कौशल और टूल्स",
    dToolsTitle: "आप जो सीखेंगे",
    dCurriculumEyebrow: "कार्यक्रम संरचना",
    dCurriculumTitle: "आप क्या सीखेंगे",
    dIncludedEyebrow: "क्या-क्या शामिल है",
    dIncludedTitle: "यह कार्यक्रम क्यों कारगर है",
    dWhoEyebrow: "किसे जुड़ना चाहिए",
    dWhoTitle: "यह आपके लिए है अगर…",
    dOutcomesEyebrow: "करियर परिणाम",
    dOutcomesTitle: "यह आपको कहाँ ले जा सकता है",
    dOutcomesDesc: "हमारे पूर्व छात्र L&T, TATA Motors, Wipro, Cognizant और भारत भर के दर्जनों शीर्ष नियोक्ताओं के साथ काम करते हैं। स्नातकों को मिलने वाली वेतन सीमा कुछ इस तरह है।",
    salaryEntry: "शुरुआती स्तर",
    salaryAvg: "औसत",
    salaryTop: "सर्वाधिक कमाई",
    dCtaTitle: "अगला कदम उठाने के लिए तैयार हैं?",
    dRelatedEyebrow: "यह भी देखें",
    dRelatedTitle: "संबंधित कार्यक्रम",
  },
};
