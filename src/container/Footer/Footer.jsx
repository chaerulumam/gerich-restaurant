import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.8 }}
      className="app__footer-links"
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="app__footer-links_contact"
      >
        <motion.h1
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="app__footer-headtext"
        >
          Contact Us
        </motion.h1>
        <motion.p
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="p__opensans"
        >
          Tangerang, Banten, 15710, Indonesia
        </motion.p>
        <motion.p
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="p__opensans"
        >
          +62 813-1174-5927
        </motion.p>
        <motion.p
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="p__opensans"
        >
          022-000988
        </motion.p>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="app__footer-links_logo"
      >
        <img src={images.gericht} alt="footer_logo" />
        <motion.p
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="p__opensans"
        >
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </motion.p>
        <img
          src={images.spoon}
          alt="img_spoom"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="app__footer-links_icons"
        >
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </motion.div>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="app__footer-links_work"
      >
        <motion.h1
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="app__footer-headtext"
        >
          Working Hours
        </motion.h1>
        <motion.p
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="p__opensans"
        >
          Monday-Friday
        </motion.p>
        <motion.p
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="p__opensans"
        >
          08:00 am - 12:00 am
        </motion.p>
        <motion.p
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="p__opensans"
        >
          Saturday-Sunday
        </motion.p>
        <motion.p
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="p__opensans"
        >
          07:00 am - 11:00 pm
        </motion.p>
      </motion.div>
    </motion.div>

    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.8 }}
      className="footer_copyright"
    >
      <p className="p__opensans">2023 JAMET. All Rights reserved</p>
    </motion.div>
  </div>
);

export default Footer;
