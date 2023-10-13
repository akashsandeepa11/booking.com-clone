import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SearchResults = ({ data, input, setInput }) => {
  const navigation = useNavigation();

  return (
    <View className="p-3">
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item.place.toLowerCase().includes(input.toLowerCase())) {
            if (input === "") {
              return null;
            }
            return (
              <Pressable
                onPress={() => {
                  setInput(item.place);
                  navigation.navigate("Home", { input: item.place });
                }}
                className="flex-row items-center my-3"
              >
                <View>
                  <Image
                    source={{ uri: item.placeImage }}
                    className="w-[70px] h-[70px]"
                  />
                </View>
                <View className="ml-3">
                  <Text className="text-[15px] font-semibold">
                    {item.place}
                  </Text>
                  <Text className="my-[3px]">{item.shortDescription}</Text>
                  <Text className=" text-gray-500">
                    {item.properties.length} Properties
                  </Text>
                </View>
              </Pressable>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchResults;
