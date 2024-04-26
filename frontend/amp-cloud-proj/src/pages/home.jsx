import React from "react";

import { Link } from "react-router-dom";

import { Button, Heading, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import streetImage from "../images/street2.jpg";
import borderImage from "../images/border.png";

const divStyle = {
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${streetImage})`,
  backgroundSize: "cover",
  margin: "0px",
  padding: "0px",
};

const HeadingStyle = {
  color: "white",
  fontSize: "100px",
};

const LinkStyle = {
  marginLeft: "1200px",
};

const QuoteContent = {
  height: "70%",
  width: "70%",
  marginLeft: "15%",
  marginRight: "15%",
  backgroundImage: `url(${borderImage})`,
  backgroundSize: "cover",
};

function Home() {
  return (
    <View className="Home" padding="0" style={divStyle}>
      <Heading>
        <i>
          <b style={HeadingStyle}> Quotes</b>
        </i>
      </Heading>
      <div style={LinkStyle}>
        <Link to="/profile">
          <Button variation="primary">View Profile</Button>
        </Link>
      </div>
      <View style={QuoteContent}>
        <div style={{width : "80%", alignContent: "center", color: "white", paddingTop: "20%" , paddingLeft : "20%" , fontSize: "30px"  }}>
            <i style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
            “Nature has given us all the pieces required to achieve exceptional
          wellness and health, but has left it to us to put these pieces
          together.” —Diane McLaren
            </i>
          
        </div>
      </View>
    </View>
  );
}

export default Home;
