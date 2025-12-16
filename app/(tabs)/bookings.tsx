import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export default function BookingsTab() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  // Sample bookings
  const upcomingBookings = [
    {
      id: 1,
      carName: "Toyota Camry",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400",
      pickupDate: "Jan 15, 2024",
      returnDate: "Jan 18, 2024",
      total: 135,
      status: "confirmed",
    },
    {
      id: 2,
      carName: "Honda CR-V",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=400",
      pickupDate: "Feb 1, 2024",
      returnDate: "Feb 5, 2024",
      total: 260,
      status: "confirmed",
    },
  ];

  const pastBookings = [
    {
      id: 3,
      carName: "BMW 3 Series",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400",       
      pickupDate: "Dec 10, 2023",
      returnDate: "Dec 12, 2023",
      total: 190,
      status: "completed",
    },
    {
      id: 4,
      carName: "Toyota Camry",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400",
      pickupDate: "Nov 20, 2023",
      returnDate: "Nov 22, 2023",
      total: 90,
      status: "completed",
    },
  ];

  const bookings = activeTab === "upcoming" ? upcomingBookings : pastBookings;

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-white pt-12 pb-4 px-6 border-b border-border">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-xl font-bold text-charcoal">My Bookings</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Tabs */}
        <View className="flex-row bg-gray-100 rounded-lg p-1">
          <TouchableOpacity
            onPress={() => setActiveTab("upcoming")}
            className={`flex-1 py-2 rounded-md ${
              activeTab === "upcoming" ? "bg-primary" : "bg-transparent"
            }`}>
            <Text
              className={`text-center text-sm font-medium ${
                activeTab === "upcoming" ? "text-primary-foreground" : "text-muted-foreground"
              }`}>
              Upcoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("past")}
            className={`flex-1 py-2 rounded-md ${
              activeTab === "past" ? "bg-primary" : "bg-transparent"
            }`}>
            <Text
              className={`text-center text-sm font-medium ${
                activeTab === "past" ? "text-primary-foreground" : "text-muted-foreground"
              }`}>
              Past
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bookings List */}
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, gap: 16 }}
        renderItem={({ item }) => (
          <Link href={`/booking/booking-details?id=${item.id}`} asChild>
            <TouchableOpacity className="bg-white rounded-lg border border-border overflow-hidden shadow-sm">
              <View className="flex-row p-4">
                <Image
                  source={{ uri: item.image }}
                  className="w-24 h-24 rounded-lg"
                  contentFit="cover"
                />
                <View className="flex-1 ml-4 justify-between">
                  <View>
                    <Text className="text-lg font-bold text-charcoal mb-1">{item.carName}</Text>
                    <View className="flex-row items-center gap-2 mb-1">
                      <MaterialIcons name="calendar-today" size={14} color="#6B7280" />
                      <Text className="text-xs text-muted-foreground">
                        {item.pickupDate} - {item.returnDate}
                      </Text>
                    </View>
                    <View className="flex-row items-center gap-2">
                      <View
                        className={`px-2 py-1 rounded ${
                          item.status === "confirmed"
                            ? "bg-green-100"
                            : "bg-gray-100"
                        }`}>
                        <Text
                          className={`text-xs font-medium ${
                            item.status === "confirmed"
                              ? "text-green-700"
                              : "text-muted-foreground"
                          }`}>
                          {item.status === "confirmed" ? "Confirmed" : "Completed"}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View className="flex-row items-center justify-between mt-2">
                    <Text className="text-lg font-bold text-primary">${item.total}</Text>
                    <MaterialIcons name="chevron-right" size={20} color="#6B7280" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        )}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center py-20">
            <MaterialIcons name="inbox" size={48} color="#D1D5DB" />
            <Text className="text-muted-foreground text-base mt-4">
              No {activeTab === "upcoming" ? "upcoming" : "past"} bookings
            </Text>
          </View>
        }
      />
    </View>
  );
}
