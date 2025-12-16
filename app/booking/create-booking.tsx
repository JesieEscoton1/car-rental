import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CreateBookingScreen() {
  const { carId } = useLocalSearchParams();
  const [pickupDate, setPickupDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date(Date.now() + 86400000));
  const [pickupDateText, setPickupDateText] = useState(pickupDate.toLocaleDateString());
  const [returnDateText, setReturnDateText] = useState(returnDate.toLocaleDateString());
  const [pickupLocation, setPickupLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");

  const calculateDays = () => {
    const diffTime = Math.abs(returnDate.getTime() - pickupDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
  };

  const days = calculateDays();
  const dailyRate = 45;
  const total = days * dailyRate;

  const handleDateInput = (text: string, isPickup: boolean) => {
    if (isPickup) {
      setPickupDateText(text);
      const date = new Date(text);
      if (!isNaN(date.getTime())) {
        setPickupDate(date);
      }
    } else {
      setReturnDateText(text);
      const date = new Date(text);
      if (!isNaN(date.getTime())) {
        setReturnDate(date);
      }
    }
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 pt-4" contentContainerStyle={{ padding: 24, gap: 24 }}>
        {/* Header */}
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={24} color="#333333" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-charcoal">Create Booking</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Pickup Date */}
        <View>
          <Text className="text-sm font-medium text-charcoal mb-2">Pickup Date</Text>
          <TextInput
            className="w-full h-12 border border-input bg-white rounded-md px-4 text-base text-charcoal"
            placeholder="MM/DD/YYYY"
            placeholderTextColor="#9CA3AF"
            value={pickupDateText}
            onChangeText={(text) => handleDateInput(text, true)}
          />
          {Platform.OS === "ios" && (
            <Text className="text-xs text-muted-foreground mt-1">
              For date picker, install: npm install @react-native-community/datetimepicker
            </Text>
          )}
        </View>

        {/* Return Date */}
        <View>
          <Text className="text-sm font-medium text-charcoal mb-2">Return Date</Text>
          <TextInput
            className="w-full h-12 border border-input bg-white rounded-md px-4 text-base text-charcoal"
            placeholder="MM/DD/YYYY"
            placeholderTextColor="#9CA3AF"
            value={returnDateText}
            onChangeText={(text) => handleDateInput(text, false)}
          />
        </View>

        {/* Pickup Location */}
        <View>
          <Text className="text-sm font-medium text-charcoal mb-2">Pickup Location</Text>
          <TextInput
            className="w-full h-12 border border-input bg-white rounded-md px-4 text-base text-charcoal"
            placeholder="Enter pickup location"
            placeholderTextColor="#9CA3AF"
            value={pickupLocation}
            onChangeText={setPickupLocation}
          />
        </View>

        {/* Return Location */}
        <View>
          <Text className="text-sm font-medium text-charcoal mb-2">Return Location</Text>
          <TextInput
            className="w-full h-12 border border-input bg-white rounded-md px-4 text-base text-charcoal"
            placeholder="Enter return location"
            placeholderTextColor="#9CA3AF"
            value={returnLocation}
            onChangeText={setReturnLocation}
          />
        </View>

        {/* Summary */}
        <View className="bg-gray-50 rounded-lg p-4">
          <Text className="text-lg font-bold text-charcoal mb-3">Booking Summary</Text>
          <View className="flex-row justify-between py-2">
            <Text className="text-sm text-muted-foreground">Daily Rate</Text>
            <Text className="text-sm font-medium text-charcoal">${dailyRate}</Text>
          </View>
          <View className="flex-row justify-between py-2">
            <Text className="text-sm text-muted-foreground">Days</Text>
            <Text className="text-sm font-medium text-charcoal">{days} days</Text>
          </View>
          <View className="border-t border-border pt-2 mt-2">
            <View className="flex-row justify-between">
              <Text className="text-base font-bold text-charcoal">Total</Text>
              <Text className="text-base font-bold text-primary">${total}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View className="border-t border-border bg-white p-6 pb-8">
        <TouchableOpacity
          onPress={() => router.push(`/booking/booking-summary?carId=${carId}&total=${total}&days=${days}`)}
          className="w-full h-12 bg-primary rounded-lg justify-center items-center">
          <Text className="text-primary-foreground text-base font-bold">Continue to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
