import React, { useState, useEffect } from "react";

import { Grid, View, Button } from "@aws-amplify/ui-react";




const Form = () => {
  const [name, setName] = useState("");
  const [priorityArea, setPriorityArea] = useState("");

  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriorityAreaChange = (e) => {
    setPriorityArea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email: "hdhd@gmail.com", name, priorityArea });
  };

  return (
    <div>
      <h1 style={{ paddingLeft: "30px" }}> Update Profile</h1>

      <Grid
        templateColumns="0.1fr 0.35fr 1fr"
        templateRows="30px 20px 30px 20px 30px 20px 30px"
      >
        <View></View>
        <View>Email :</View>
        <View>
          <input type="email" value="hdhd@gmail.com" readOnly />
        </View>

        <View></View>
        <View></View>
        <View></View>

        <View></View>
        <View>Name :</View>
        <View>
          <input type="text" value={name} onChange={handleNameChange} />
        </View>

        <View></View>
        <View></View>
        <View></View>

        <View></View>
        <View>Priority Area :</View>
        <View>
          <select value={priorityArea} onChange={handlePriorityAreaChange}>
            <option value="">Select Priority Area</option>
            <option value="area1">KINDNESS</option>
            <option value="area2">GIVING</option>
            <option value="area3">FORGIVENESS</option>
          </select>
        </View>

        <View></View>
        <View></View>
        <View></View>

        <View></View>
        <View></View>
        <View>
          <Button variation="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </View>
      </Grid>

      

    </div>
  );
};

export default Form;
