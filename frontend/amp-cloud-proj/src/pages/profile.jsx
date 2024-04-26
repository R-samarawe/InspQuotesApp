import React from "react";
import {
  Grid,
  View,
  Image,
  Divider,
  ScrollView,
  Button,
} from "@aws-amplify/ui-react";

import { Link } from "react-router-dom";

import profileImage from "../images/photo.jpg";
import Form from "./form";
import QuotesList from "./quotesList";

//const { tokens } = useTheme();

/*
<Grid templateColumns="1fr 1fr" templateRows="10rem 10rem 10rem">
      <View columnSpan={2} style={{ backgroundColor: "red" }}>
        A
      </View>
      <View rowSpan={2} style={{ backgroundColor: "black" }}>
        B
      </View>
      <View style={{ backgroundColor: "Blue" }}>C</View>
      <View style={{ backgroundColor: "yellow" }}>D</View>
    </Grid>
*/

function Profile() {
  return (
    <Grid templateColumns="0.85fr 1fr 1fr" templateRows="630px">
      <View style={{ backgroundColor: "black" }}>
        <Image alt="profile" src={profileImage} height="630px" />
      </View>

      <View>

        <Grid templateColumns="1fr 1fr" templateRows="30px">
          <View>
            <h1 style={{ paddingLeft: "30px", width: "20px" }}>Profile</h1>
          </View>
          <View>
            <Link to="/" >
              <Button variation="primary" style={{ marginTop: "30px" , marginLeft : "50px" }}>View Home</Button>
            </Link>
          </View>
        </Grid>

        <br></br>
        <br></br>
        <br></br>

        <Grid
          templateColumns="0.1fr 0.35fr 1fr"
          templateRows="30px 30px 30px 30px"
        >
          <View></View>
          <View>Email :</View>
          <View>hdhd@gmail.com</View>
          <View></View>
          <View>Name :</View>
          <View></View>
          <View></View>
          <View>Priority Area :</View>
          <View></View>
          <View></View>
          <View></View>
          <View></View>
        </Grid>
        <br></br>

        <Divider />

        <Form />
      </View>
      <View style={{ backgroundColor: "#f4db87" }}>
        <h1 style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          List of Quotes
        </h1>
        <ScrollView height="500px" width="100%" style={{ paddingLeft: "30px" }}>
          {<QuotesList />}
        </ScrollView>
      </View>
    </Grid>
  );
}

export default Profile;
