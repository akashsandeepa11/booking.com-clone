import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BookingScreen = () => {
  const navigation = useNavigation();
  const bookings = useSelector((store) => store.booking.booking);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking",
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

  return (
    <ScrollView className="mt-2">
      {bookings.length > 0 &&
        bookings.map((item) => (
          <Pressable className="mx-[15] mt-[10] justify-between bg-white p-3 rounded-[6px]">
            <Text className="text-[25px] font-bold">{item.name}</Text>
            <View className=" flex-row items-center gap-[6] mt-[3]">
              <MaterialIcons name="stars" size={24} color="green" />
              <Text>{item.rating}</Text>
              <View className="bg-[#003580] py-[3] rounded-[5px] w-[100]">
                <Text className="text-center text-white text-[15]">
                  Genius Level
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
    </ScrollView>
  );
};

export default BookingScreen;
