import React from "react";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";

import { motion } from "framer-motion";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#dcca87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.8 }}
      className="app__wrapper_info"
    >
      <SubHeading color="#fff" title="Awards & recognition" />
      <motion.h1
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="headtext__cormorant"
      >
        Our Laurels
      </motion.h1>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="app__laurels_awards"
      >
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </motion.div>
    </motion.div>

    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.8 }}
      className="app__wrapper_img"
    >
      <img src={images.laurels} alt="laurels_img" />
    </motion.div>
  </div>
);

export default Laurels;
