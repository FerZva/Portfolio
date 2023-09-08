import { motion } from 'framer-motion';
import { fadeIn } from "./variants";
import img1 from "../assets/EasyBank.jpg";
import img2 from "../assets/Calculator.jpg";
import img3 from "../assets/Countries-API.jpg";
import img4 from "../assets/Ecomerce.jpg";
import img5 from "../assets/Tic-tac-toe.jpg";
import img6 from "../assets/Space.jpg";

const worksData = [
  {
    image: img1,
    title: "Easybank",
    previewWebsiteLink: "https://clinquant-lamington-8be0c2.netlify.app",
  },
  {
    image: img2,
    title: "Calculator",
    previewWebsiteLink: "https://symphonious-beijinho-596fe5.netlify.app",
  },
  {
    image: img3,
    title: "Countries",
    previewWebsiteLink: "",
  },
  {
    image: img4,
    title: "Ecommerce",
    previewWebsiteLink: "",
  },
  {
    image: img5,
    title: "Tic-Tac-Toe",
    previewWebsiteLink: "",
  },
  {
    image: img6,
    title: "Space",
    previewWebsiteLink: "",
  },
];

const Works = () => {
  return (
    <section className="Container_works-section" id="4">
      <motion.div
       variants={fadeIn('up', 0.3)} 
       initial="hidden" 
       whileInView={'show'} 
       viewport={{once: false, amount: 0.7}}  
      >
      <h2 className="Container_works-section_title">
        Here are some of my projects
      </h2>
      <p className='Container_works-section_description'>
        Here you will find a selection of projects I have worked on, showcasing my ability to create interactive and visually appealing web experiences. Each project has benn carefully developed, combining my passion for design and programming to deliver modern and effecient solutions. Through these works, I am to demonstrate my ability to translate creative ideas into clean and functional code, providing results that exceed expectations.
      </p>
      </motion.div>
      <motion.div
       variants={fadeIn('up', 0.4)} 
       initial="hidden" 
       whileInView={'show'} 
       viewport={{once: false, amount: 0.7}}   
       className="Container_works-section_projects"
      >
        {worksData.map((workData, index) => {
          const { image, title, previewWebsiteLink } = workData;
          return (
            <div className="Container_works-section_projects_item" key={index}>
              <img
                src={image}
                className="Container_works-section_projects_item_img"
                alt=""
              />
              <p className="Container_works-section_projects_item_title">
                {title}
              </p>
              <button className='Container_works-section_projects_item_button'>
                <a href={previewWebsiteLink} target='_blank'>
                  View live website
                </a>
              </button>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Works;
