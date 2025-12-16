import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link, router } from "expo-router";
import { useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RegisterScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const insets = useSafeAreaInsets();

  const handleSignUp = () => {
    // TODO: Add actual registration logic here
    // For now, redirect to tabs after registration
    router.replace("/(tabs)/" as any);
  };

  return ( 
    <KeyboardAvoidingView 
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}>
      <ScrollView 
        ref={scrollViewRef}
        className="flex-1" 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 250 }}
        nestedScrollEnabled={true}>
        <View className="flex-grow px-6 pt-8">
          {/* Header Section */}
          <View className="pt-8 pb-4">
            <Text className="text-charcoal text-3xl font-bold text-left tracking-tight">
              Create an account
            </Text>
            <Text className="text-muted-foreground text-sm pb-4 pt-1">
              Enter your information to create an account
            </Text>
          </View>

          {/* Social Login Buttons */}
          <View className="flex flex-col gap-3">
            <TouchableOpacity className="flex min-w-[84px] w-full items-center justify-center rounded-md h-11 px-5 bg-white border border-input flex-row gap-2 active:bg-gray-50">
              <FontAwesome5
                name="google"
                size={20}
                color="#4285F4"
                brand
              />
              <Text className="text-charcoal text-sm font-medium leading-normal">
                Sign Up with Google
              </Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View className="flex items-center gap-4 py-4 flex-row">
            <View className="flex-1 h-px bg-border" />
            <Text className="text-muted-foreground text-xs font-normal leading-normal text-center uppercase">
              Or continue with
            </Text>
            <View className="flex-1 h-px bg-border" />
          </View>

          {/* Form Fields */}
          <View className="flex flex-col gap-4">
            {/* Full Name */}
            <View className="flex flex-col w-full">
              <Text className="text-charcoal text-sm font-medium leading-normal pb-2">
                Full Name
              </Text>
              <TextInput
                className="w-full h-11 border border-input bg-white rounded-md px-3 text-sm text-charcoal"
                placeholder="John Doe"
                placeholderTextColor="#9CA3AF"
                value={fullName}
                onChangeText={setFullName}
                autoCapitalize="words"
              />
            </View>

            {/* Email */}
            <View className="flex flex-col w-full">
              <Text className="text-charcoal text-sm font-medium leading-normal pb-2">
                Email
              </Text>
              <TextInput
                className="w-full h-11 border border-input bg-white rounded-md px-3 text-sm text-charcoal"
                placeholder="you@example.com"
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Phone Number */}
            <View className="flex flex-col w-full">
              <Text className="text-charcoal text-sm font-medium leading-normal pb-2">
                Phone Number
              </Text>
              <TextInput
                className="w-full h-11 border border-input bg-white rounded-md px-3 text-sm text-charcoal"
                placeholder="(123) 456-7890"
                placeholderTextColor="#9CA3AF"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
              />
            </View>

            {/* Password */}
            <View className="flex flex-col w-full">
              <Text className="text-charcoal text-sm font-medium leading-normal pb-2">
                Password
              </Text>
              <TextInput
                className="w-full h-11 border border-input bg-white rounded-md px-3 text-sm text-charcoal"
                placeholder="Enter your password"
                placeholderTextColor="#9CA3AF"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                autoCapitalize="none"
                autoComplete="off"
                clearButtonMode="never"
                textContentType="none"
                passwordRules=""
                onFocus={() => {
                  setTimeout(() => {
                    scrollViewRef.current?.scrollToEnd({ animated: true });
                  }, 100);
                }}
              />
            </View>

            {/* Confirm Password */}
            <View className="flex flex-col w-full">
              <Text className="text-charcoal text-sm font-medium leading-normal pb-2">
                Confirm Password
              </Text>
              <TextInput
                className="w-full h-11 border border-input bg-white rounded-md px-3 text-sm text-charcoal"
                placeholder="Confirm your password"
                placeholderTextColor="#9CA3AF"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
                autoCapitalize="none"
                autoComplete="off"
                clearButtonMode="never"               
                textContentType="none" 
                passwordRules=""
                onFocus={() => {
                  setTimeout(() => {
                    scrollViewRef.current?.scrollToEnd({ animated: true });
                  }, 100);
                }}
              />
            </View>
          </View>

          {/* Terms & Conditions */}
          <View className="flex items-start gap-3 pt-4 pb-2 flex-row">
            <TouchableOpacity
              onPress={() => setAgreeToTerms(!agreeToTerms)}
              className={`h-4 w-4 rounded border border-input mt-0.5 justify-center items-center ${
                agreeToTerms ? "bg-primary border-primary" : "bg-white border-input"
              }`}>
              {agreeToTerms && (
                <MaterialIcons name="check" size={12} color="#FFFFFF" />
              )}
            </TouchableOpacity>
            <Text className="text-muted-foreground text-sm flex-1 leading-5">  
              By signing up, you agree to our{" "}
              <Text className="font-medium text-primary">Terms & Conditions</Text> and{" "}
              <Text className="font-medium text-primary">Privacy Policy</Text>.          
            </Text> 
          </View>   
        </View>
      </ScrollView>

      {/* Sticky Bottom Section */}
      <View 
        className="absolute bottom-0 left-0 right-0 bg-white border-t border-border pt-4 px-4"
        style={{ paddingBottom: Math.max(insets.bottom, 16) }}>
        <View className="flex flex-col items-center gap-3">
          <TouchableOpacity
            onPress={handleSignUp}
            className="flex w-full max-w-[480px] items-center justify-center rounded-md h-11 px-5 bg-primary active:opacity-90">
            <Text className="text-white text-sm font-medium">
              Sign Up
            </Text>
          </TouchableOpacity>
          <Text className="text-center text-sm text-muted-foreground pb-1">
            Already have an account?{" "}
            <Link href="/auth/login" asChild>
              <Text className="font-medium text-primary">Log In</Text>
            </Link>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
