import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link, router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");

  return (
    <ScrollView className="flex-1 bg-white" contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex flex-col items-stretch justify-start p-6 pt-16">
        {/* Header Section */}
        <View className="flex flex-col items-start gap-2 pb-6">
          <TouchableOpacity onPress={() => router.back()} className="mb-4">
            <MaterialIcons name="arrow-back" size={24} color="#333333" />
          </TouchableOpacity>
          <Text className="text-3xl font-bold leading-tight text-charcoal">
            Forgot Password?
          </Text>
          <Text className="text-base font-normal leading-normal text-muted-foreground">
            Enter your email address and we'll send you a link to reset your password.
          </Text>
        </View>

        {/* Form Section */}
        <View className="flex flex-col gap-4">
          {/* Email Input */}
          <View className="flex flex-col min-w-40 flex-1">
            <Text className="text-sm font-medium leading-normal pb-2 text-charcoal">
              Email Address
            </Text>
            <TextInput
              className="w-full h-12 border border-input bg-white rounded-md px-4 text-base text-charcoal"
              placeholder="Enter your email address"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Send Reset Link Button */}
        <View className="pt-8 pb-6">
          <TouchableOpacity className="w-full h-12 bg-primary rounded-md justify-center items-center">
            <Text className="text-primary-foreground text-base font-bold leading-normal">
              Send Reset Link
            </Text>
          </TouchableOpacity>
        </View>

        {/* Back to Login Link */}
        <View className="flex w-full justify-center pt-4 pb-4">
          <Text className="text-muted-foreground text-base font-normal text-center">
            Remember your password?{" "}
            <Link href="/auth/login" asChild>
              <Text className="font-bold text-primary">Log In</Text>
            </Link>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
