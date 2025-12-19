import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function EditProfileScreen() {
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("+1 (234) 567-8900");
  const [address, setAddress] = useState("123 Main St, City, State 12345");

  return (
    <ScrollView className="flex-1 bg-white" contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex flex-col items-stretch justify-start p-6 pt-12">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={24} color="#333333" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-charcoal">Edit Profile</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Avatar Section */}
        <View className="items-center mb-6">
          <View className="w-24 h-24 bg-gray-200 rounded-full items-center justify-center mb-3">
            <MaterialIcons name="person" size={48} color="#6B7280" />
          </View>
          <TouchableOpacity>
            <Text className="text-primary font-medium">Change Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View className="flex flex-col gap-4">
          {/* Full Name */}
          <View className="flex flex-col w-full">
            <Text className="text-charcoal text-sm font-medium leading-normal pb-2">
              Full Name
            </Text>
            <TextInput
              className="w-full h-12 border border-input bg-white rounded-md px-4 text-base text-charcoal"
              placeholder="Enter your full name"
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
              className="w-full h-12 border border-input bg-white rounded-md px-4 text-base text-charcoal"
              placeholder="Enter your email"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Phone */}
          <View className="flex flex-col w-full">
            <Text className="text-charcoal text-sm font-medium leading-normal pb-2">
              Phone Number
            </Text>
            <TextInput
              className="w-full h-12 border border-input bg-white rounded-md px-4 text-base text-charcoal"
              placeholder="Enter your phone number"
              placeholderTextColor="#9CA3AF"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
          </View>

          {/* Address */}
          <View className="flex flex-col w-full">
            <Text className="text-charcoal text-sm font-medium leading-normal pb-2">
              Address
            </Text>
            <TextInput
              className="w-full h-12 border border-input bg-white rounded-md px-4 text-base text-charcoal"
              placeholder="Enter your address"
              placeholderTextColor="#9CA3AF"
              value={address}
              onChangeText={setAddress}
              multiline={false}
            />
          </View>
        </View>

        {/* Save Button */}
        <View className="pt-8 pb-6">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-full h-12 bg-primary rounded-md justify-center items-center">
            <Text className="text-primary-foreground text-base font-bold leading-normal">
              Save Changes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

