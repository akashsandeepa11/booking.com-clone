import { View, Text } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import Amenities from "../components/Amenities";

const RoomsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Available Rooms",
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

  const [selected, setSelected] = useState([]);

  return (
    <>
      <ScrollView>
        {route.params.rooms.map((item, index) => (
          <Pressable className="m-[10] bg-white p-[10]" key={index}>
            <View className="flex-row items-center justify-between">
              <Text className="text-[#007FFF] text-[17px] font-bold">
                {item.name}
              </Text>
              <AntDesign name="infocirlceo" size={24} color="#007FFF" />
            </View>
            <Text className="font-medium mt-[3]">Pay at the property</Text>
            <Text className="font-medium text-green-700 mt-[3]">
              Free cancellation available
            </Text>
            <View className="flex-row items-center mt-[3]">
              <Text className="text-red-600 text-[18px] line-through mr-2 ">
                Rs {route.params.oldPrice * route.params.adults}
              </Text>
              <Text className="text-[18px]">
                Rs {route.params.newPrice * route.params.adults}
              </Text>
            </View>

            <Amenities />

            {selected.includes(item.name) ? (
              <Pressable className="border-[#007FFF] bg-[#F0F8FF] border-[2px] p-[10] rounded-[5px] mt-[10] flex-row items-center">
                <View className="flex-1 items-center">
                  <Text className=" flex-1 font-bold text-[#007FFF] text-[16px]">
                    SELECTED
                  </Text>
                </View>
                <AntDesign
                  onPress={() => setSelected([])}
                  name="closecircle"
                  size={24}
                  color="red"
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSelected(item.name)}
                className="border-[#007FFF] border-[2px] p-[10] rounded-[5px] mt-[10]  items-center"
              >
                <Text className=" text-center font-bold text-[#007FFF] text-[16px] ">
                  SELECT
                </Text>
              </Pressable>
            )}
          </Pressable>
        ))}
      </ScrollView>
      {selected.length > 0 && (
        <Pressable
          onPress={() => {
            navigation.navigate("User", {
              rooms: route.params.availableRoom,
              oldPrice: route.params.oldPrice,
              newPrice: route.params.newPrice,
              name: route.params.name,
              children: route.params.children,
              adults: route.params.adults,
              rating: route.params.rating,
              startDate: route.params.startDate,
              endDate: route.params.endDate,
            });
          }}
          className="bg-[#007FFF] p-2 mb-[30] rounded-[3px] mx-[15]"
        >
          <Text className="text-center text-white font-bold">Reserve</Text>
        </Pressable>
      )}
    </>
  );
};

export default RoomsScreen;
