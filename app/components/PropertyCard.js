import { View, Text, Pressable, Image, Dimensions } from "react-native";
import React from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PropertyCard = ({
  rooms,
  children,
  adults,
  selectedDate,
  property,
  availableRooms,
}) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();

  // console.log(availableRooms);

  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("Info", {
            name: property.name,
            rating: property.rating,
            oldPrice: property.oldPrice,
            newPrice: property.newPrice,
            photos: property.photos,
            availableRoom: availableRooms,
            adults: adults,
            children: children,
            rooms: rooms,
            selectedDate: selectedDate,
          })
        }
        className="m-[15px] flex-row bg-white"
      >
        <View>
          <Image
            style={{ height: height / 4, width: width - 280 }}
            source={{ uri: property.image }}
          />
        </View>
        <View className="px-3 py-1">
          <View className="flex-row items-center justify-between">
            <Text className="w-[200]">{property.name}</Text>
            <Feather name="heart" size={24} color="red" />
          </View>

          <View className="flex-row items-center gap-[6] mt-[1]">
            <MaterialIcons name="stars" size={24} color="green" />
            <Text>{property.rating}</Text>
            <View className="bg-[#6CB4EE] rounded-[5px] w-[100] py-[3px]">
              <Text className="text-center text-white text-md">
                Genius Level
              </Text>
            </View>
          </View>

          <Text className="w-[210] mt-[3] text-[13px] text-gray-500 font-medium">
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>

          <Text className="mt-[1] text-[13px] font-medium">
            Price for 1 night and {adults} adults
          </Text>

          <View className="mt-[1] flex-row items-center gap-3">
            <Text className="text-red-600 text-[17px] line-through">
              {property.oldPrice * adults}
            </Text>
            <Text className="text-[17px]">Rs {property.newPrice * adults}</Text>
          </View>

          <View className="mt-[1]">
            <Text className="text-[13px] text-gray-500">Deluxe Room</Text>
            <Text className="text-[13px] text-gray-500">
              Hotel Room : 1 bed
            </Text>
          </View>

          <View className="bg-[#6082B6] py-[1] rounded-[5px] mt-[1] w-[150] px-[4px]">
            <Text className="text-center text-white text-xs">
              Limited time deal
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;
