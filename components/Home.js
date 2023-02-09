import React from "react";
import { Button, Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18 }}>HOME SCREEN</Text>
      <Button
        color="green"
        title="Go to Next Page"
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate("MobileDetails")}
      />
    </View>
  );
};

export default Home;
