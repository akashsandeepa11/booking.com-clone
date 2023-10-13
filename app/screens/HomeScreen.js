import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  Button,
  Image,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Header from "../components/Header";
import DatePicker from "react-native-date-ranges";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
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
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{
            marginRight: 12,
          }}
        />
      ),
    });
  });

  customButton = (onConfirm) => (
    <Button
      onPress={onConfirm}
      style={{
        container: { width: "80%", marginHorizontal: "3%" },
        text: { fontSize: 20 },
      }}
      primary
      title={"Submit"}
    />
  );

  const searchPlaces = (place) => {
    if (!route.params || !selectedDate) {
      Alert.alert("Invalid Details", "Please enter all the details", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",    
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    if (route.params && selectedDate) {
      navigation.navigate("Places", {
        rooms: rooms,
        adults: adults,
        children: children,
        selectedDate: selectedDate,
        place: place,
      });
    }
  };

  return (
    <View>
      <StatusBar />
      <View>
        {/* <View className=" flex-row bg-[#003580] h-[70] items-center justify-around">
          <Text className=" text-center justify-around text-white text-[20px] font-bold">
            Booking.com
          </Text>
          <Ionicons
            name="notifications-outline"
            size={24}
            color="white"
            style={{
              marginRight: 12,
            }}
          />
        </View> */}
        <Header />
        <ScrollView>
          <View className=" m-5 border-[#FFC72C] border-[4px] rounded-[6px] ">
            {/* Destination */}
            <Pressable
              onPress={() => navigation.navigate("Search")}
              className="flex-row items-center gap-[10px] px-[10px] py-[2px] border-[#FFC72C] border-b-[3px] m-0 pb-[13px]"
            >
              <Feather name="search" size={20} color="black" />
              <Text className="text-gray-500">
                {route.params ? route.params.input : "Enter your Destination"}
              </Text>
            </Pressable>

            {/* Selected Dates */}
            <Pressable className="flex-row items-center gap-[10px] px-[10px] py-[2px] border-[#FFC72C] border-b-[3px] m-0 py pb-[13px]">
              <Feather name="calendar" size={20} color="black" />
              <DatePicker
                style={{
                  width: 350,
                  height: 45,
                  borderWidth: 0,
                  borderColor: "white",
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                  headerStyle: {
                    backgroundColor: "#003580",
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                  },
                }}
                selectBgcolor="#0047AB"
                allowFontScaling={false}
                placeholder={"Select your Dates"}
                mode={"range"}
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDate(startDate, endDate)
                }
              />
            </Pressable>

            {/* Rooms and Gusts */}
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              className="flex-row items-center gap-[10px] px-[10px] py-[2px] border-[#FFC72C] border-b-[3px] m-0 pb-[13px]"
            >
              <Ionicons name="person-outline" size={20} color="black" />
              <Text className=" text-red-600">
                {`${rooms} room . ${adults} adults . ${children} children`}
              </Text>
            </Pressable>

            {/* Search Butten */}
            <Pressable
              onPress={() => searchPlaces(route?.params)}
              className="flex-row gap-[10px] items-center px-[10px] py-[2px] m-0 pb-[13px] bg-[#2A52BE] justify-center"
            >
              <Text className="text-white text-lg font-bold">Search</Text>
            </Pressable>
          </View>

          {/* Lower content */}
          <Text className="mx-5 font-semibold text-lg">
            Travel more spend less
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable className="w-[200] h-[150] mt-3 bg-[#003580] rounded-xl p-5 ml-5">
              <Text className=" text-[15px] font-bold text-white">Genius</Text>
              <Text className=" text-[15px]  text-white">
                You are ate genuis level in our loyalty program
              </Text>
            </Pressable>
            <Pressable className="w-[200] h-[150] mt-3 bg-white rounded-xl p-5 ml-5 border">
              <Text className=" text-[15px] font-bold ">10% Discounts</Text>
              <Text className=" text-[15px]  ">
                Enjoy Discounts at participating at properties wordwide
              </Text>
            </Pressable>
            <Pressable className="w-[200] h-[150] mt-3 bg-white rounded-xl p-5 mx-5 border">
              <Text className=" text-[15px] font-bold ">15% Discounts</Text>
              <Text className=" text-[15px]  ">
                Complete 5 stays to unlock level 2
              </Text>
            </Pressable>
          </ScrollView>
          <Pressable
            style={{
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 200, height: 50, resizeMode: "cover" }}
              source={{
                uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
              }}
            />
          </Pressable>
        </ScrollView>
      </View>

      {/* Bottom Modal */}
      <BottomModal
        swipeThreshold={200}
        onDropBackPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                color: "white",
                backgroundColor: "#003580",
              }}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        modalAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        onTouchOutside={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
      >
        <ModalContent className="w-screen h-[310]">
          <View className="flex-row items-center justify-between my-4">
            <Text className="text-md font-bold">Rooms</Text>
            <View className=" flex-row border-gray-600 border-[1px] rounded-md items-center ">
              <Pressable
                onPress={() => setRooms(Math.max(1, rooms - 1))}
                className=" w-14 h-12 items-center justify-center active:bg-blue-100 "
              >
                <AntDesign name="minus" size={24} color="black" />
              </Pressable>
              <Text className="text-md mx-3">{rooms}</Text>
              <Pressable
                onPress={() => setRooms((c) => c + 1)}
                className=" w-14 h-12 items-center justify-center active:bg-blue-100"
              >
                <Ionicons name="add-outline" size={24} color="black" />
              </Pressable>
            </View>
          </View>
          <View className="flex-row items-center justify-between my-4">
            <Text className="text-md font-bold">Adults</Text>
            <View className=" flex-row border-gray-600 border-[1px] rounded-md items-center ">
              <Pressable
                onPress={() => setAdults(Math.max(1, adults - 1))}
                className=" w-14 h-12 items-center justify-center active:bg-blue-100 "
              >
                <AntDesign name="minus" size={24} color="black" />
              </Pressable>
              <Text className="text-md mx-3">{adults}</Text>
              <Pressable
                onPress={() => setAdults((c) => c + 1)}
                className=" w-14 h-12 items-center justify-center active:bg-blue-100"
              >
                <Ionicons name="add-outline" size={24} color="black" />
              </Pressable>
            </View>
          </View>
          <View className="flex-row items-center justify-between my-4">
            <Text className="text-md font-bold">Children</Text>
            <View className=" flex-row border-gray-600 border-[1px] rounded-md items-center ">
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                className=" w-14 h-12 items-center justify-center active:bg-blue-100 "
              >
                <AntDesign name="minus" size={24} color="black" />
              </Pressable>
              <Text className="text-md mx-3">{children}</Text>
              <Pressable
                onPress={() => setChildren((c) => c + 1)}
                className=" w-14 h-12 items-center justify-center active:bg-blue-100"
              >
                <Ionicons name="add-outline" size={24} color="black" />
              </Pressable>
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default HomeScreen;
