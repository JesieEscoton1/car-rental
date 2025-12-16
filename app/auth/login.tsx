import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link, router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: Add actual authentication logic here
    // For now, redirect to tabs after login
    router.replace("/(tabs)/" as any);
  };

  return (
    <ScrollView className="flex-1 bg-white" contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex flex-col items-stretch justify-start p-6 pt-16">
        {/* Header Section */}
        <View className="flex flex-col items-start gap-2 pb-6">
          <Text className="text-3xl font-bold leading-tight text-charcoal">
            Welcome Back
          </Text>
          <Text className="text-base font-normal leading-normal text-muted-foreground">
            Log in to continue your journey.
          </Text>
        </View>

        {/* Form Section */}
        <View className="flex flex-col gap-4">
          {/* Email/Phone Input */}
          <View className="flex flex-col min-w-40 flex-1">
            <Text className="text-sm font-medium leading-normal pb-2 text-charcoal">
              Email or Phone Number
            </Text>
            <TextInput
              className="w-full h-12 border border-input bg-white rounded-md px-4 text-base text-charcoal"
              placeholder="Enter your email or phone number"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View className="flex flex-col min-w-40 flex-1">
            <View className="flex justify-between items-center pb-2 flex-row">
              <Text className="text-sm font-medium leading-normal text-charcoal">
                Password
              </Text>
              <Link href="/auth/forgot-password" asChild>
                <TouchableOpacity>
                  <Text className="text-accent text-sm font-medium leading-normal">
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
            <TextInput
              className="w-full h-12 border border-input bg-white rounded-md px-4 text-base text-charcoal"
              placeholder="Enter your password"
              placeholderTextColor="#9CA3AF"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              autoCapitalize="none"
              autoComplete="off"
              clearButtonMode="never"
              textContentType="oneTimeCode"
              importantForAutofill="no"
              passwordRules=""
            />
          </View>
        </View>

        {/* Log In Button */}
        <View className="pt-8 pb-6">
          <TouchableOpacity
            onPress={handleLogin}
            className="w-full h-12 bg-primary rounded-md justify-center items-center">
            <Text className="text-primary-foreground text-base font-bold leading-normal">
              Log In
            </Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View className="flex items-center gap-4 py-2 flex-row">
          <View className="flex-1 h-px bg-border" />
          <Text className="text-muted-foreground text-sm font-normal">
            or continue with
          </Text>
          <View className="flex-1 h-px bg-border" />
        </View>

        {/* Social Login Buttons */}
        <View className="flex flex-col gap-4 pt-6">
          <TouchableOpacity className="h-12 w-full border border-input rounded-md bg-white flex-row items-center justify-center gap-3">
            <FontAwesome5
              name="google"
              size={20}
              color="#4285F4"
              brand
            />
            <Text className="text-base font-medium text-charcoal">
              Log In with Google
            </Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Link */}
        <View className="flex w-full justify-center pt-8 pb-4">
          <Text className="text-muted-foreground text-base font-normal text-center">
            Don't have an account?{" "}
            <Link href="/auth/register" asChild>
              <Text className="font-bold text-primary">Sign Up</Text>
            </Link>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
