import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { savedPlaces } from "../store/reducers/SavedReducer";

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Confirmation",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        justifyContent: "space-around",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 80,
        shadowColor: "transparent",
      },
      headerTitleAlign: "center",
    });
  });

  const dispatch = useDispatch();

  const confirmBooking = () => {
    dispatch(savedPlaces(route.params));
    navigation.navigate("Main");
  };

  return (
    <View className="bg-white m-3">
      <View className="mx-[15] mt-[10] flex-row justify-between items-center ">
        <View className="flex-[3]">
          <Text className="text-[25px] font-bold">{route.params.name}</Text>
          <View className=" flex-row items-center gap-[6] mt-[3]">
            <MaterialIcons name="stars" size={24} color="green" />
            <Text>{route.params.rating}</Text>
            <View className="bg-[#003580] py-[3] rounded-[5px] w-[100]">
              <Text className="text-center text-white text-[15]">
                Genius Level
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-[2] bg-[#17B169] px-[6] py-[4] rounded-[6px]">
          <Text className="text-white text-[13px]">Travel sustainable</Text>
        </View>
      </View>

      <View className="flex-row mt-[10] mx-3 ">
        <View>
          <Text className=" font-medium text-md">Check In</Text>
          <Text className=" font-medium text-md text-[#007FFF]">
            {route.params.startDate}
          </Text>
        </View>
        <View className="ml-[50]">
          <Text className=" font-medium text-md">Check In</Text>
          <Text className=" font-medium text-md text-[#007FFF]">
            {route.params.endDate}
          </Text>
        </View>
      </View>
      <Text className=" font-medium text-md mt-[10] mx-3">
        Rooms and guests
      </Text>
      <Text className=" font-medium text-md text-[#007FFF] mx-3">{`1 rooms ${route.params.adults} adults ${route.params.children} children`}</Text>

      <Pressable
        onPress={() => confirmBooking()}
        className="mt-[10] mx-3 bg-[#003580] w-[120] p-[5] mb-5 rounded-[4px]"
      >
        <Text className="text-white font-bold text-center">Book Now</Text>
      </Pressable>
    </View>
  );
};

export default ConfirmationScreen;
