import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function BookingDetailsScreen() {
  const { id } = useLocalSearchParams();

  // Sample booking details
  const booking = {
    id: id || "1",
    carName: "Toyota Camry",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400",
    bookingNumber: "BK-2024-001",
    pickupDate: "Jan 15, 2024",
    pickupTime: "10:00 AM",
    returnDate: "Jan 18, 2024",
    returnTime: "10:00 AM",
    pickupLocation: "123 Main St, Downtown",
    returnLocation: "123 Main St, Downtown",
    total: 135,
    tax: 13.5,
    subtotal: 121.5,
    status: "confirmed",
    paymentMethod: "Credit Card ending in 1234",
  };

  return (
    <ScrollView className="flex-1 bg-white pt-6">
      {/* Header */}
      <View className="absolute top-2 left-4 z-10">
        <TouchableOpacity
          onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color="#333333" />
        </TouchableOpacity>
      </View>

      {/* Car Image */}
      <Image
        source={{ uri: booking.image }}
        className="w-full h-64"
        contentFit="cover"
      />

      <View className="p-6">
        {/* Booking Header */}
        <View className="mb-6 pt-6">
          <Text className="text-2xl font-bold text-charcoal mb-2">{booking.carName}</Text>
          <Text className="text-sm text-muted-foreground mb-3">
            Booking #{booking.bookingNumber}
          </Text>
          <View className="flex-row items-center">
            <View className="bg-green-100 px-3 py-1 rounded">
              <Text className="text-green-700 text-sm font-medium capitalize">
                {booking.status}
              </Text>
            </View>
          </View>
        </View>

        {/* Dates & Times */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-charcoal mb-3">Dates & Times</Text>
          <View className="bg-gray-50 rounded-lg p-4 gap-4">
            <View>
              <Text className="text-xs text-muted-foreground mb-1">Pickup</Text>
              <View className="flex-row items-center gap-2">
                <MaterialIcons name="calendar-today" size={16} color="#22574A" />
                <Text className="text-base font-medium text-charcoal">
                  {booking.pickupDate} at {booking.pickupTime}
                </Text>
              </View>
              <Text className="text-sm text-muted-foreground ml-6 mt-1">
                {booking.pickupLocation}
              </Text>
            </View>
            <View>
              <Text className="text-xs text-muted-foreground mb-1">Return</Text>
              <View className="flex-row items-center gap-2">
                <MaterialIcons name="calendar-today" size={16} color="#22574A" />
                <Text className="text-base font-medium text-charcoal">
                  {booking.returnDate} at {booking.returnTime}
                </Text>
              </View>
              <Text className="text-sm text-muted-foreground ml-6 mt-1">
                {booking.returnLocation}
              </Text>
            </View>
          </View>
        </View>

        {/* Payment Details */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-charcoal mb-3">Payment Details</Text>
          <View className="bg-gray-50 rounded-lg p-4">
            <View className="flex-row justify-between py-2">
              <Text className="text-sm text-muted-foreground">Subtotal</Text>
              <Text className="text-sm font-medium text-charcoal">${booking.subtotal}</Text>
            </View>
            <View className="flex-row justify-between py-2">
              <Text className="text-sm text-muted-foreground">Tax</Text>
              <Text className="text-sm font-medium text-charcoal">${booking.tax}</Text>
            </View>
            <View className="border-t border-border pt-2 mt-2">
              <View className="flex-row justify-between">
                <Text className="text-base font-bold text-charcoal">Total</Text>
                <Text className="text-base font-bold text-primary">${booking.total}</Text>
              </View>
            </View>
            <View className="mt-3 pt-3 border-t border-border">
              <Text className="text-xs text-muted-foreground mb-1">Payment Method</Text>
              <Text className="text-sm font-medium text-charcoal">{booking.paymentMethod}</Text>
            </View>
          </View>
        </View>

        {/* Actions */}
        <View className="gap-3">
          <TouchableOpacity className="w-full h-12 bg-primary rounded-lg justify-center items-center">
            <Text className="text-primary-foreground text-base font-bold">Download Receipt</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-full h-12 border border-input rounded-lg justify-center items-center">
            <Text className="text-charcoal text-base font-medium">Cancel Booking</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

