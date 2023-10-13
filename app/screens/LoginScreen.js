import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log("user credential", userCredential);
      const user = userCredential.user;
      console.log("User details", user);
    });
  };

  useEffect(() => {
    try {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          navigation.navigate("Main");
        }
      });hat
      return unsubscribe;
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white p-[10] items-center">
      <StatusBar/>
      <KeyboardAvoidingView>
        <View className="justify-center items-center mt-[100]">
          <Text className="text-[#003580] text-[17px] font-bold">Sign In</Text>
          <Text className="mt-[15] text-[18px] font-medium">
            Sign In to Your Account
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
        </View>

        <Pressable
          onPress={() => login()}
          className="w-[200] bg-[#003580] p-[15] rounded-[7px] mt-[50] mx-auto"
        >
          <Text className="text-center text-white text-[17px] font-bold">
            Login
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          className="mt-5"
        >
          <Text className=" text-center text-gray-600 text-[17px]">
            Don't have an account? Sign Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
