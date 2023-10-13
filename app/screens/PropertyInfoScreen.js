import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { pixelNormalize } from "../components/Normalize";
import { MaterialIcons } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

const PropertyInfoScreen = () => {
  const route = useRoute({});
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
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

  const difference = route.params.oldPrice - route.params.newPrice;
  const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;

  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable className=" flex-row flex-wrap m-[10]">
          {route.params.photos.slice(0, 5).map((photo) => (
            <View key={photo.id} style={{ margin: 4, alignItems: "center" }}>
              <Image
                style={{
                  width: pixelNormalize(107),
                  height: pixelNormalize(80),
                  borderRadius: pixelNormalize(4),
                }}
                source={{ uri: photo.image }}
              />
            </View>
          ))}
          <Pressable className="items-center justify-center">
            <Text className="text-center ml-5">Show More</Text>
          </Pressable>
        </Pressable>

        <Text className="text-[25px] font-bold mx-3">{route.params.name}</Text>

        <View className="mx-3 mt-[10] flex-row justify-between items-center">
          <View>
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

          <View className="bg-[#17B169] px-[6] py-[4] rounded-[6px]">
            <Text className="text-white text-[13px]">Travel sustainable</Text>
          </View>
        </View>

        <Text className="border-[#E0E0E0] border-[3px] h-[1px] mt-[10]" />

        <Text className="mx-3 mt-[10]">{`Price for 1 night, ${route.params.adults} Adults`}</Text>
        <View className="flex-row items-center mx-3 mt-[3]">
          <Text className="text-red-600 text-[18px] line-through mr-2">
            Rs {route.params.oldPrice * route.params.adults}
          </Text>
          <Text className="text-[18px]">
            Rs {route.params.newPrice * route.params.adults}
          </Text>
        </View>
        <View className=" bg-green-700 mt-[3] rounded-[6px] w-[90] mx-3 p-[3]">
          <Text className="text-[15px] text-white ml-1">
            ${offerPrice.toFixed(0)}% Off
          </Text>
        </View>

        <Text className="border-[#E0E0E0] border-[3px] h-[1px] mt-[10]" />

        <View className="flex-row mt-[10] mx-3 ">
          <View>
            <Text className=" font-medium text-md">Check In</Text>
            <Text className=" font-medium text-md text-[#007FFF]">
              2023/03/18
            </Text>
          </View>
          <View className="ml-[50]">
            <Text className=" font-medium text-md">Check In</Text>
            <Text className=" font-medium text-md text-[#007FFF]">
              2023/03/18
            </Text>
          </View>
        </View>
        <Text className=" font-medium text-md mt-[10] mx-3">
          Rooms and guests
        </Text>
        <Text className=" font-medium text-md text-[#007FFF] mx-3">{`1 rooms ${route.params.adults} adults ${route.params.children} children`}</Text>

        <Text className="border-[#E0E0E0] border-[3px] h-[1px] mt-[10]" />

        <Amenities className="mb-[100px]" />
        <View className="mb-[100px]"></View>
      </ScrollView>
      {/* Select button */}
      <Pressable
        onPress={() =>
          navigation.navigate("Rooms", {
            rooms: route.params.availableRoom,
            oldPrice: route.params.oldPrice,
            newPrice: route.params.newPrice,
            name: route.params.name,
            children: route.params.children,
            adults: route.params.adults,
            rating: route.params.rating,
            startDate: route.params.selectedDate.startDate,
            endDate: route.params.selectedDate.endDate,
          })
        }
        className=" absolute  bottom-[0] bg-[#003580] p-[20] w-screen items-center"
      >
        <Text className="items-center text-white font-bold text-[17px]">
          Select Availability
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PropertyInfoScreen;
