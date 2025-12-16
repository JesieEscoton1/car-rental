import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function BookingSummaryScreen() {
  const { carId, total, days } = useLocalSearchParams();
  const [selectedPayment, setSelectedPayment] = useState("card");

  const paymentMethods = [
    { id: "card", label: "Credit/Debit Card", icon: "credit-card" },
    { id: "paypal", label: "PayPal", icon: "account-balance-wallet" },
    { id: "apple", label: "Apple Pay", icon: "phone-iphone" },
  ];

  // Sample car data
  const car = {
    name: "Toyota Camry",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400",
    price: 45,
  };

  return (
    <ScrollView className="flex-1 bg-white pt-6">
      <View className="p-6">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={24} color="#333333" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-charcoal">Booking Summary</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Car Info */}
        <View className="bg-gray-50 rounded-lg p-4 mb-6">
          <View className="flex-row gap-4">
            <Image
              source={{ uri: car.image }}
              className="w-24 h-24 rounded-lg"
              contentFit="cover"
            />
            <View className="flex-1 justify-center">
              <Text className="text-lg font-bold text-charcoal mb-1">{car.name}</Text>
              <Text className="text-sm text-muted-foreground">{days} days rental</Text>
              <Text className="text-base font-medium text-primary mt-1">${total}</Text>
            </View>
          </View>
        </View>

        {/* Booking Details */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-charcoal mb-3">Booking Details</Text>
          <View className="bg-gray-50 rounded-lg p-4 gap-3">
            <View className="flex-row justify-between">
              <Text className="text-sm text-muted-foreground">Pickup Date</Text>
              <Text className="text-sm font-medium text-charcoal">Jan 15, 2024</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-sm text-muted-foreground">Return Date</Text>
              <Text className="text-sm font-medium text-charcoal">Jan 18, 2024</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-sm text-muted-foreground">Pickup Location</Text>
              <Text className="text-sm font-medium text-charcoal">Downtown</Text>
            </View>
          </View>
        </View>

        {/* Payment Method */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-charcoal mb-3">Payment Method</Text>
          <View className="gap-2">
            {paymentMethods.map((method) => (
              <TouchableOpacity
                key={method.id}
                onPress={() => setSelectedPayment(method.id)}
                className={`flex-row items-center p-4 rounded-lg border ${
                  selectedPayment === method.id
                    ? "bg-primary/10 border-primary"
                    : "bg-white border-input"
                }`}>
                <MaterialIcons
                  name={method.icon as any}
                  size={24}
                  color={selectedPayment === method.id ? "#22574A" : "#6B7280"}
                />
                <Text
                  className={`ml-3 text-base font-medium ${
                    selectedPayment === method.id ? "text-primary" : "text-charcoal"
                  }`}>
                  {method.label}
                </Text>
                {selectedPayment === method.id && (
                  <MaterialIcons name="check-circle" size={20} color="#22574A" className="ml-auto" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Price Breakdown */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-charcoal mb-3">Price Breakdown</Text>
          <View className="bg-gray-50 rounded-lg p-4">
            <View className="flex-row justify-between py-2">
              <Text className="text-sm text-muted-foreground">Subtotal</Text>
              <Text className="text-sm font-medium text-charcoal">${total}</Text>
            </View>
            <View className="flex-row justify-between py-2">
              <Text className="text-sm text-muted-foreground">Tax</Text>
              <Text className="text-sm font-medium text-charcoal">${(parseFloat(total as string) * 0.1).toFixed(2)}</Text>
            </View>
            <View className="border-t border-border pt-2 mt-2">
              <View className="flex-row justify-between">
                <Text className="text-base font-bold text-charcoal">Total</Text>
                <Text className="text-base font-bold text-primary">
                  ${(parseFloat(total as string) * 1.1).toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom Action Bar */}
      <View className="border-t border-border bg-white p-6 pb-8">
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/bookings")}
          className="w-full h-12 bg-primary rounded-lg justify-center items-center">
          <Text className="text-primary-foreground text-base font-bold">Confirm Booking</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

