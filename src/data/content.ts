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
    software: ["AutoCAD Architecture", "Revit Architecture", "3ds Max", "SketchUp"],
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
    software: ["AutoCAD", "Revit", "STAAD Pro", "ETABS", "Oracle Primavera", "3ds Max", "Revit MEP", "BIM 360", "SketchUp", "MX Road"],
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
    software: ["Adobe Photoshop", "Adobe Illustrator", "CorelDRAW", "MS Office", "Paint Brush"],
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
    software: ["AutoCAD", "SolidWorks", "CATIA", "CREO (Pro/E)", "NX CAD", "ANSYS", "Inventor", "Revit MEP", "Oracle Primavera"],
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
    software: ["AutoCAD Electrical", "PLC programming environments", "SCADA platforms", "HMI tools"],
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
    software: ["ArcGIS", "AutoCAD Map", "AutoCAD Civil 3D"],
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
    hrs: "6 mo", icon: "💻", tag: "NSDC",
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
    hrs: "6 mo", icon: "🧵", tag: "NSDC",
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
    hrs: "6 mo", icon: "🏥", tag: "NSDC",
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
    hrs: "4 mo", icon: "🛍", tag: "NSDC",
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
    hrs: "6 mo", icon: "📡", tag: "NSDC",
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
    hrs: "6 mo", icon: "🚗", tag: "NSDC",
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
    hrs: "6 mo", icon: "🔌", tag: "NSDC",
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

export const ALL_PROGRAMS: Program[] = [
  ...COURSES_CERT.map((c) => ({ ...c, kind: "Certificate" as const })),
  ...COURSES_DIP.map((c) => ({ ...c, kind: "Diploma" as const })),
  ...COURSES_VOC.map((c) => ({ ...c, kind: "Vocational" as const })),
];

export function getProgram(slug: string): Program | undefined {
  return ALL_PROGRAMS.find((p) => p.slug === slug);
}

export const STATS = [
  { val: 23, sfx: "+", lbl: "Years" },
  { val: 15000, sfx: "+", lbl: "Empowered" },
  { val: 11000, sfx: "+", lbl: "Placed" },
  { val: 50, sfx: "+", lbl: "Centres" },
];

export const AWARDS = [
  { t: "Skoch Award", s: "Excellence in Skill Development", y: "2019", by: "National" },
  { t: "Best Placement Award", s: "By Union Minister Dharmendra Pradhan", y: "2019", by: "Govt. of India" },
  { t: "Excellence Award", s: "Tribal Placement · Cabinet Min. Arjun Munda", y: "2022", by: "Cabinet Minister" },
];

export const CENTERS = [
  { city: "Ranchi", state: "Jharkhand", addr: "601, 6th Floor, Panchwati Plaza, Kutchery Road, Ranchi – 834001", flagship: true, labs: ["EV Training", "Drone Tech", "CAD Labs", "Fashion Studio"] },
  { city: "Meerut", state: "Uttar Pradesh", addr: "Skill Centre, Meerut", labs: ["CAD Labs", "Electrical CAD", "Mechanical CAD"] },
  { city: "Godda", state: "Jharkhand", addr: "Skill Centre, Godda", labs: ["DDU-GKY Centre", "Tribal Skill Programme", "Vocational Training"] },
];

export const FACULTY = [
  { name: "Rajeev Kumar Singh", role: "Director & CEO", cred: "23 years in Skill Development · Industry Veteran", accent: "#1A1A1A" },
  { name: "Isha Kumari", role: "Academic Head", cred: "Curriculum Design · Industry-Aligned Programs", accent: "#4A3728" },
  { name: "Nausad Ahmed", role: "HOD · Electrical & Electronics", cred: "Industrial Automation Specialist · 15+ yrs experience", accent: "#2D4A3F" },
  { name: "Amzad Khan", role: "HOD · Fashion Design", cred: "Garment Technology · Pattern Making Expert", accent: "#4A2838" },
  { name: "Avinash Rathod", role: "IT Professor", cred: "Trained at Cisco · VMware Certified", accent: "#1A3A5A" },
  { name: "Shreya Kumari", role: "Professor · Electrical", cred: "Electrical CAD & Automation Specialist", accent: "#3A2A1A" },
];

export const NEWS = [
  { date: "2024", t: "EV Training Centre Inaugurated by JSDM", s: "Jharkhand Skill Development Mission inaugurates a state-of-the-art EV training facility at our Ranchi centre.", featured: true },
  { date: "2023", t: "CM Hemant Soren Visits Drone Technology Lab", s: "Hon. Chief Minister tours VSI's drone technology infrastructure during state skill development showcase." },
  { date: "2022", t: "Excellence Award for Tribal Student Placement", s: "Cabinet Minister Arjun Munda recognizes VSI's contribution to tribal youth employment." },
  { date: "2019", t: "Skoch Award · Excellence in Skill Development", s: "National recognition for sustained impact on India's skill development ecosystem." },
  { date: "2019", t: "Best Placement Award by Union Minister", s: "Dharmendra Pradhan, Minister of Skill Development & Entrepreneurship, honors VSI." },
  { date: "2017", t: "Venture Mega Skill Centre Inaugurated", s: "Flagship multi-program centre opens in Ranchi, marking a major expansion." },
];

export const TESTIMONIALS = [
  { q: "Before VSI, I had no idea CAD was a career. Two years later I'm a junior designer at L&T in Hyderabad. The EV lab training put me ahead of every other candidate in the interview.", name: "Ritu Kumari", course: "Civil CAD · 2022 Batch", placed: "L&T, Hyderabad", from: "Godda, Jharkhand" },
  { q: "The fashion lab here was better equipped than institutes in Patna or Kolkata. I didn't have to leave home to learn what I needed.", name: "Priya Soren", course: "Fashion CAD · 2023 Batch", placed: "Myntra, Bangalore", from: "Ranchi, Jharkhand" },
  { q: "EV training gave me a skill almost nobody else had. That's exactly what got me the job at Tata Motors when they were hiring for their EV division.", name: "Amit Kumar", course: "Mechanical CAD · 2022 Batch", placed: "TATA Motors, Pune", from: "Godda, Jharkhand" },
];

export const EMPLOYERS = ["L&T", "TATA Motors", "Myntra", "Wipro", "Infosys", "Maruti Suzuki", "Mahindra", "Cognizant", "TCS", "HCL", "Cummins", "BHEL"];

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "courses", label: "Courses" },
  { id: "about", label: "About" },
  { id: "centers", label: "Centres" },
  { id: "placements", label: "Placements" },
  { id: "news", label: "News" },
  { id: "contact", label: "Contact" },
];

export const CREDS = ["NSDC Aligned", "AICTE Recognized", "Autodesk Authorized", "Skill India Partner"];

export const MILESTONES = [
  { y: "2001", t: "Foundation", d: "Venture Skill India founded in Ranchi with a single CAD lab and a vision: world-class skill training in Eastern India." },
  { y: "2010", t: "AICTE Recognition", d: "Polytechnic diploma programs receive AICTE recognition, expanding our reach into formal technical education." },
  { y: "2017", t: "Mega Skill Centre", d: "Venture Mega Skill Centre inaugurated in Ranchi — the flagship multi-program facility." },
  { y: "2019", t: "National Recognition", d: "Skoch Award and Best Placement Award (by Union Min. Dharmendra Pradhan) — twin recognitions in one year." },
  { y: "2022", t: "Tribal Impact", d: "Excellence Award by Cabinet Min. Arjun Munda for outstanding tribal student placement record." },
  { y: "2023", t: "EV + Drone Era", d: "EV Training Centre inaugurated by JSDM; Drone Lab visited by CM Hemant Soren. Future-tech infrastructure." },
  { y: "2024", t: "50+ Centres", d: "National footprint reaches 50 centres across Jharkhand, UP, and beyond. 15,000+ students empowered." },
];

// i18n translations
export const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    // Hero
    heroTag: "23 years · Eastern India's most trusted",
    heroTitle1: "You Don't Have to",
    heroTitle2: "Leave Home to",
    heroTitle3: "Build a Real Career.",
    heroTitle4: "",
    heroDesc: "For 23 years, we've done one thing well — get people into jobs. The kind of training and labs most institutes can't offer, and support that doesn't stop at graduation. Come see for yourself.",
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
    tabCertificate: "Certificate",
    tabDiploma: "Diploma",
    tabVocational: "Vocational",
    tabAll: "All Programs",
    // Nav
    navHome: "Home",
    navCourses: "Courses",
    navAbout: "About",
    navCenters: "Centres",
    navPlacements: "Placements",
    navNews: "News",
    navContact: "Contact",
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
    coursesHeroDesc: "Government-recognized certificate, diploma, and vocational programs. Real curriculum. Real placement support. 11,000 students already placed.",
    aboutEyebrow: "Our Story",
    aboutTitle1: "23 Years of Building",
    aboutTitle2: "Eastern India's Workforce.",
    aboutHeroDesc: "We don't exist to be the biggest. We exist so that no student from Eastern India has to leave home to build a real career. That's been the mission since 2001.",
    placementsEyebrow: "Placement Record",
    placementsTitle1: "11,000+ placed.",
    placementsTitle2: "Verifiable outcomes.",
    placementsHeroDesc: "Not promises. Not projections. Actual students, actually placed, at companies you've heard of. Ask any of them.",
    newsEyebrow: "Latest Updates",
    newsTitle1: "News &",
    newsTitle2: "Recognition.",
    contactEyebrow: "Get in Touch",
    contactTitle1: "Let's talk about",
    contactTitle2: "your career path.",
    contactHeroDesc: "Free counseling session. No pressure. Just clarity on the right course for where you want to go.",
    centersEyebrow: "Our Presence",
    centersTitle1: "50+ Centres.",
    centersTitle2: "One standard.",
    centersHeroDesc: "From our flagship in Ranchi to rural training centres across Jharkhand and UP — same labs, same curriculum, same outcomes.",
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
    heroTag: "23 साल · पूर्वी भारत का सबसे भरोसेमंद संस्थान",
    heroTitle1: "असली करियर बनाने के लिए",
    heroTitle2: "घर छोड़ने की",
    heroTitle3: "ज़रूरत नहीं।",
    heroTitle4: "",
    heroDesc: "23 सालों से, हमने एक काम बख़ूबी किया है — लोगों को नौकरी दिलाना। ऐसी ट्रेनिंग और लैब्स जो ज़्यादातर संस्थान नहीं दे पाते, और ऐसा साथ जो ग्रेजुएशन के बाद भी नहीं छूटता। खुद आकर देखिए।",
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
    tabCertificate: "सर्टिफिकेट",
    tabDiploma: "डिप्लोमा",
    tabVocational: "व्यावसायिक",
    tabAll: "सभी कार्यक्रम",
    navHome: "होम",
    navCourses: "कोर्स",
    navAbout: "हमारे बारे में",
    navCenters: "केंद्र",
    navPlacements: "प्लेसमेंट",
    navNews: "समाचार",
    navContact: "संपर्क",
    yourName: "आपका नाम",
    phoneNumber: "फ़ोन नंबर",
    yourEmail: "ईमेल",
    selectCourse: "कोर्स चुनें",
    selectCentre: "पसंदीदा केंद्र...",
    tellUs: "अपने बारे में और क्या हासिल करना चाहते हैं — हमें बताइए...",
    coursesEyebrow: "सभी कार्यक्रम",
    coursesTitle1: "वह रास्ता चुनें जो",
    coursesTitle2: "आपका करियर बनाए।",
    coursesHeroDesc: "सरकारी-मान्यता प्राप्त सर्टिफिकेट, डिप्लोमा और व्यावसायिक कार्यक्रम। असली पाठ्यक्रम। असली प्लेसमेंट सहायता। 11,000 छात्र पहले से ही प्लेस्ड।",
    aboutEyebrow: "हमारी कहानी",
    aboutTitle1: "23 साल से बना रहे हैं",
    aboutTitle2: "पूर्वी भारत का कार्यबल।",
    aboutHeroDesc: "हम सबसे बड़े बनने के लिए नहीं हैं। हम इसलिए हैं ताकि पूर्वी भारत के किसी छात्र को असली करियर बनाने के लिए घर न छोड़ना पड़े। 2001 से यही मिशन है।",
    placementsEyebrow: "प्लेसमेंट रिकॉर्ड",
    placementsTitle1: "11,000+ प्लेस्ड।",
    placementsTitle2: "सत्यापनयोग्य परिणाम।",
    placementsHeroDesc: "वादे नहीं। अनुमान नहीं। असली छात्र, असली कंपनियों में प्लेस्ड। किसी से भी पूछिए।",
    newsEyebrow: "ताज़ा अपडेट",
    newsTitle1: "समाचार और",
    newsTitle2: "मान्यता।",
    contactEyebrow: "संपर्क करें",
    contactTitle1: "आइए बात करते हैं",
    contactTitle2: "आपके करियर पथ की।",
    contactHeroDesc: "मुफ्त परामर्श सत्र। कोई दबाव नहीं। बस यह स्पष्टता कि आपके लक्ष्य के लिए कौन-सा कोर्स सही है।",
    centersEyebrow: "हमारी मौजूदगी",
    centersTitle1: "50+ केंद्र।",
    centersTitle2: "एक ही मानक।",
    centersHeroDesc: "रांची स्थित प्रमुख केंद्र से लेकर झारखंड और UP के ग्रामीण प्रशिक्षण केंद्रों तक — वही लैब, वही पाठ्यक्रम, वही परिणाम।",
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
