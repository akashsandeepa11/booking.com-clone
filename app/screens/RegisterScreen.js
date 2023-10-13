import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const register = () => {
    if (email === "" || password === "" || phone === "") {
      Alert.alert("Invalid Details", "Please enter all the credentials", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        const user = userCredentials._tokenResponse.email;
        const uid = auth.currentUser.uid;

        setDoc(doc(db, "user", `${uid}`), {
          email: user,
          phone: phone,
        });
      }
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-[10] items-center">
      <StatusBar backgroundColor="red" animated={true} />
      <KeyboardAvoidingView>
        <View className="justify-center items-center mt-[100]">
          <Text className="text-[#003580] text-[17px] font-bold">Register</Text>
          <Text className="mt-[15] text-[18px] font-medium">
            Create an Account
          </Text>
        </View>

        <View className="mt-[50]">
          <View>
            <Text className="text-[18px] font-medium text-gray-500">Email</Text>

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="enter your email"
              placeholderTextColor={"black"}
              className="border-b border-b-gray-400 my-[7] w-[300] text-[18px]"
            />
          </View>

          <View>
            <Text className="text-[18px] font-medium text-gray-500 mt-[15]">
              Password
            </Text>

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="enter your Password"
              placeholderTextColor={"black"}
              className="border-b border-b-gray-400 my-[7] w-[300] text-[18px]"
            />
          </View>

          <View>
            <Text className="text-[18px] font-medium text-gray-500 mt-[15]">
              Phone No
            </Text>

            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="enter your Phone No"
              placeholderTextColor={"black"}
              className="border-b border-b-gray-400 my-[7] w-[300] text-[18px]"
            />
          </View>
        </View>

        <Pressable
          onPress={() => register()}
          className="w-[200] bg-[#003580] p-[15] rounded-[7px] mt-[50] mx-auto"
        >
          <Text className="text-center text-white text-[17px] font-bold">
            Register
          </Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack()} className="mt-5">
          <Text className=" text-center text-gray-600 text-[17px]">
            Already have an account? Sign In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
