import { webdevIcon, uiuxIcon, wpdevIcon, logoDesignIcon, ebrandz, gnc, siws, bitshala, kulfi, resumet, tailor } from "../assets";

export const services = [
    {
        title: 'Web Development',
        icon: webdevIcon
    },
    {
        title: 'UI/UX Development',
        icon: uiuxIcon
    },
    {
        title: 'WordPress Design',
        icon: wpdevIcon
    },
    {
        title: 'Logo Design',
        icon: logoDesignIcon
    }
];

export const experiences = [
    {
        id: 1,
        title: "PHP Developer",
        company_name: "Ebrandz LLP",
        location: "Mumbai, Maharashtra, IN",
        icon: ebrandz,
        iconBg: "#f3f3f3",
        date: "Aug 2023 - Present",
        points: [
            "Experience developing REST applications on modern MVC PHP frameworks such as CodeIgniter 4 and Laravel 10.",
            "Experience with system documentation or the ability to help document specialists in developing systems documentation.",
            "Experience with REST APIs with a basic understanding of object-oriented programming (OOP) design patterns.",
            "Working on all-in-one marketplaces dashboard.",
            "Working experience with JIRA and Bitbucket (as well as the Git code repository, including code-reviewing tools."
        ],
    },
    {
        id: 2,
        title: "Jr. Web Developer",
        company_name: "Ebrandz LLP",
        location: "Mumbai, Maharashtra, IN",
        icon: ebrandz,
        iconBg: "#f3f3f3",
        date: "Sept 2022 - July 2023",
        points: [
            "Developing and designing websites on WordPress and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility."
        ],
    },
];

export const educations = [
    {
        id: 1,
        degree: "Master of Science in Information Technology",
        institute_detail: "Guru Nanak College of Arts, Science & Commerece, Sion, IN",
        icon: gnc,
        iconBg: "#f3f3f3",
        date: "Sept 2021 - June 2023",
        points: [],
    },
    {
        id: 2,
        degree: "Bachelor of Science in Computer Science",
        institute_detail: "South Indian Welfare Society(S.I.W.S), Wadala, IN",
        icon: siws,
        iconBg: "#f3f3f3",
        date: "Aug 2018 - Apr 2021",
        points: [
            "CGPA: 8.14/10"
        ],
    },
];

export const projects = [
    {
        name: "BitShala",
        description:
            `BitShala is the student communities website that provides a one-stop platform for students to learn new skills, network with peers, apply for internships & jobs and grow as an individual. `,
        tags: ["react", "html", "css", "javascript", "express", "mongodb"],
        image: bitshala,
        source_code_link: "",
        live_link: "https://bitshala.in",
    },
    {
        name: "Resumet",
        description:
            `Resume Analyzer is a system for determining whether a candidate is qualified for a role based on
        his or her education, experience, skills, and other information captured on their resume.`,
        tags: ["python", "mysql", "streamlit"],
        image: resumet,
        source_code_link: "https://github.com/JameelShaikh32/Resume-Analyzer",
        live_link: "",
    },
    {
        name: "Agarwal Kulfi Roll",
        description:
            "A landing page for a Kulfi and Ice-Cream Shop",
        tags: ["html", "css", "javascript", "bootstrap"],
        image: kulfi,
        source_code_link: "https://github.com/JameelShaikh32/Kulfi-Shop-Website",
        live_link: "https://jameelshaikh32.github.io/kulfi/",
    },
    {
        name: "Tailor Shop Management System",
        description:
            `A software for tailors to maintain their customers details, 
        measurements, etc digitally. And this software has online payment 
        feature i.e., integrated with 'PayUmoney'.`,
        tags: ["java", "mysql", "html", "css"],
        image: tailor,
        source_code_link: "https://github.com/JameelShaikh32/TailorShop-Management-System",
        live_link: "",
    },
];