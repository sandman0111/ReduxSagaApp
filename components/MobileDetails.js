import React, { useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { BuyMobile, BuyLaptop, getAllUsers } from "../redux/action";

const MobileDetails = (props) => {
  useEffect(() => {
    props.getAllUsers();
  }, []);
  //  const dispatch = useDispatch();
  // const state = useSelector(state=> state.numOfLaptops)
  console.log("propssandeep................", props.users);
  return (
    <View style={{ flex: 1, justifyContent: "center", margin: 10 }}>
      <View style={{ flex: 0.5, justifyContent: "center" }}>
        <View>
          <Text style={{ fontSize: 18 }}>
            No of Laptops : {props.numOfLaptops}
          </Text>
          <Button
            title="Buy Laptop"
            onPress={() => props.BuyLaptop()}
            color="green"
          />
          {/* <Button title="Buy Laptop" onPress={()=>dispatch({type: 'BUY_LAPTOP'})} /> */}
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18 }}>
            No of Mobiles : {props.numofMobiles}
          </Text>
          <Button
            title="Buy Mobile"
            onPress={() => props.BuyMobile()}
            color="black"
          />
          {/* <Button title="Buy Laptop" onPress={()=>dispatch({type: 'BUY_LAPTOP'})} /> */}
        </View>
        <View style={{ justifyContent: "center", marginTop: 20 }}>
          <Text style={{ fontSize: 18 }}>
            {" "}
            User Size : {props.users.length}
          </Text>
          <Button
            title="GET USERS"
            // onPress={() => props.getAllUsers()}
            color="red"
          />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfLaptops: state.LatopReducer.numOfLaptops,
    numofMobiles: state.MobileReducer.numofMobiles,
    users: state.usersReducer.users,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     BuyLaptop: () => dispatch({ type: "BUY_LAPTOP" }),
//     BuyMobile: () => dispatch({ type: "BUY_MOBILE" }),
//     fetchUsers: () => dispatch({ type: "FETCH_USERS_REQUEST" }),
//   };
// };

// another way of writing mapdispatchtoProps
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      BuyLaptop,
      BuyMobile,
      getAllUsers,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileDetails);
