import { View, Text, Pressable } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import React from "react";

const Header = () => {
  return (
    <View className="bg-[#003580] h-[65] flex-row items-center justify-around ">
      <Pressable className=" flex-row items-center border-[1px] border-white p-2  rounded-[25px]">
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text className="text-white ml-2 text-[13px] font-bold">Stays</Text>
      </Pressable>
      <Pressable className=" flex-row items-center  p-2 rounded-[25px]">
        <Ionicons name="ios-airplane-outline" size={24} color="white" />
        <Text className="text-white ml-2 text-[13px] font-bold">Flights</Text>
      </Pressable>
      <Pressable className=" flex-row items-center  p-2 rounded-[25px]">
        <Ionicons name="car-outline" size={24} color="white" />
        <Text className="text-white ml-2 text-[13px] font-bold">
          Car Rental
        </Text>
      </Pressable>
      <Pressable className=" flex-row items-center  p-2 rounded-[25px]">
        <Fontisto name="uber" size={24} color="white" />
        <Text className="text-white ml-2 text-[13px] font-bold">Taxi</Text>
      </Pressable>
    </View>
  );
};

export default Header;
