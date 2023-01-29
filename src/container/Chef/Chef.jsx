import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import { motion } from "framer-motion";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.8 }}
      className="app__wrapper_img app__wrapper_img-reverse"
    >
      <img src={images.chef} alt="chef_image" />
    </motion.div>

    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.8 }}
      className="app__wrapper_info"
    >
      <SubHeading title="Chef's word" />
      <motion.h1
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="headtext__cormorant"
      >
        What we belive in
      </motion.h1>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="app__chef-content"
      >
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="app__chef-content_quote"
        >
          <img src={images.quote} alt="quote_image" />
          <motion.p
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
            className="p__opensans"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </motion.p>
        </motion.div>
        <motion.p
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="p__opensans"
        >
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.{" "}
        </motion.p>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="app__chef-sign"
      >
        <motion.p
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
        >
          Kevin Luo
        </motion.p>
        <motion.p
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="p__opensans"
          alt="sign_image"
        >
          Chef & Founder
        </motion.p>
        <img src={images.sign} alt="sign_image" />
      </motion.div>
    </motion.div>
  </div>
);

export default Chef;
