import { View, Text, Alert } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";

const UserScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "User Details",
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

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();

  const finalStep = () => {
    if (!firstName || !lastName || !email || !phoneNo) {
      Alert.alert("Invalid Details", "Please enter all the details", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    if (firstName && lastName && email && phoneNo) {
      navigation.navigate("Confirmations", {
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
    }
  };

  return (
    <>
      <View className="p-4 flex-1">
        <Text className="text-md font-bold text-gray-500 mt-2">First name</Text>
        <TextInput
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          className="border-gray-500 border-2 p-[7] mt-2"
        />
        <Text className="text-md font-bold text-gray-500 mt-2">Last name</Text>
        <TextInput
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          className="border-gray-500 border-2 p-[7] mt-2"
        />
        <Text className="text-md font-bold text-gray-500 mt-2">Email</Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          className="border-gray-500 border-2 p-[7] mt-2"
        />
        <Text className="text-md font-bold text-gray-500 mt-2">Phone No</Text>
        <TextInput
          value={phoneNo}
          onChangeText={(text) => setPhoneNo(text)}
          className="border-gray-500 border-2 p-[7] mt-2"
        />
      </View>
      <Pressable className="bg-white mb-[20] p-3 flex-row justify-between items-center">
        <View>
          <View className="flex-row items-center mt-[3]">
            <Text className="text-red-600 text-[18px] line-through mr-2 ">
              Rs {route.params.oldPrice * route.params.adults}
            </Text>
            <Text className="text-[18px]">
              Rs {route.params.newPrice * route.params.adults}
            </Text>
          </View>
          <Text>
            You Saved {route.params.oldPrice - route.params.newPrice} rupees
          </Text>
        </View>
        <Pressable
          onPress={() => finalStep()}
          className="bg-[#007FFF] p-[10] rounded-[5px]"
        >
          <Text className="text-white font-bold items-center">Final Step</Text>
        </Pressable>
      </Pressable>
    </>
  );
};

export default UserScreen;
