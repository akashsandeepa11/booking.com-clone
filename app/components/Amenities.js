import { View, Text } from "react-native";
import React from "react";

const Amenities = () => {
  const services = [
    {
      id: "0",
      name: "room service",
    },
    {
      id: "2",
      name: "free wifi",
    },
    {
      id: "3",
      name: "Family rooms",
    },
    {
      id: "4",
      name: "Free Parking",
    },
    {
      id: "5",
      name: "swimming pool",
    },
    {
      id: "6",
      name: "Restaurant",
    },
    {
      id: "7",
      name: "Fitness center",
    },
  ];

  return (
    <View className="mt-[10] mx-1">
      <Text className=" font-medium text-md">Most Popular Facilities</Text>
      <View className="flex-row items-center flex-wrap">
        {services.map((item, index) => (
          <View
            key={index}
            className="bg-[#007FFF] m-[9] px-[10] py-[2] rounded-[25px]"
          >
            <Text className="items-center text-white">{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Amenities;
