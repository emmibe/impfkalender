import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import stikoImg from "./stiko-img.png";
import uebersichtImg from "./uebersicht-img.png";

const MotionCard = motion(Card);

const HomePageCardElement = ({ extraInfo = "---",
                         name = "---",
                         description = "---",
                         link = "---"}) => {

  //whileTap={{scale:0.9}}
  return (
    <Link to={link} style={{textDecoration: 'none'}}>
      <MotionCard whileHover={{scale:1.1}} className="text-center text-dark"
                  style={{ width: '30rem', height: '20rem', backgroundColor: '#0d6efd', backgroundImage:
                      'linear-gradient(135deg, #94bcf7 40%, #b6cef2 70%)', borderRadius: '25px', cursor: "pointer" }} >
        <Card.Body>
          <Card.Title style={{fontSize: '30px'}}>{name}</Card.Title>
          <Card.Img src={link === "/stiko-empfehlungen" ? stikoImg : uebersichtImg} alt='Bild kann nicht angezeigt werden!'
                    style={{borderRadius: '50%', width: '250px'}}/>
          <Card.Text>{description}</Card.Text>
            {/*<Button variant="outline-light text-white">Öffnen</Button>*/}
        </Card.Body>
      </MotionCard>
    </Link>
  );
};

export default HomePageCardElement;

