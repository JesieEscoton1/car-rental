import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  // Sample featured cars
  const featuredCars = [
    {
      id: 1,
      name: "Toyota Camry",
      type: "Sedan",
      price: 45,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400",
    },
    {
      id: 2,
      name: "Honda CR-V",
      type: "SUV",
      price: 65,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400",
    },
    {
      id: 3,
      name: "BMW 3 Series",
      type: "Luxury",
      price: 95,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-primary pt-12 pb-6 px-6">
        <View className="flex-row items-center justify-between mb-4">
          <View>
            <Text className="text-white text-sm font-normal">Welcome back,</Text>
            <Text className="text-white text-2xl font-bold">John Doe</Text>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="notifications-none" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <Link href={"/(tabs)/cars" as any} asChild>
          <TouchableOpacity className="flex-row items-center bg-white/20 rounded-lg px-4 h-12 border border-white/30">
            <MaterialIcons name="search" size={20} color="#FFFFFF" />
            <Text className="flex-1 ml-2 text-base text-white/90">Search cars...</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Quick Actions */}
      <View className="px-6 py-4 bg-white">
        <Text className="text-lg font-bold text-charcoal mb-3">Quick Actions</Text>
        <View className="flex-row gap-3">
          <Link href={"/(tabs)/cars" as any} asChild>
            <TouchableOpacity className="flex-1 bg-gray-50 rounded-lg p-4 items-center border border-border">
              <MaterialIcons name="directions-car" size={32} color="#22574A" />
              <Text className="text-sm font-medium text-charcoal mt-2">Browse Cars</Text>
            </TouchableOpacity>
          </Link>
          <Link href={"/(tabs)/bookings" as any} asChild>
            <TouchableOpacity className="flex-1 bg-gray-50 rounded-lg p-4 items-center border border-border">
              <MaterialIcons name="calendar-today" size={32} color="#22574A" />
              <Text className="text-sm font-medium text-charcoal mt-2">My Bookings</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/cars/map-view" asChild>
            <TouchableOpacity className="flex-1 bg-gray-50 rounded-lg p-4 items-center border border-border">
              <MaterialIcons name="map" size={32} color="#22574A" />
              <Text className="text-sm font-medium text-charcoal mt-2">Find Nearby</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      {/* Featured Cars */}
      <View className="px-6 py-4">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-lg font-bold text-charcoal">Featured Cars</Text>
          <Link href={"/(tabs)/cars" as any} asChild>
            <TouchableOpacity>
              <Text className="text-primary font-medium">See All</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="gap-4">
          {featuredCars.map((car) => (
            <Link key={car.id} href={`/cars/details?id=${car.id}`} asChild>
              <TouchableOpacity className="w-64 bg-white rounded-lg border border-border overflow-hidden shadow-sm mr-4">
                <Image
                  source={{ uri: car.image }}
                  style={{ width: '100%', height: 100 }}
                  contentFit="cover"
                  transition={200}
                />
                <View className="p-4">
                  <View className="flex-row items-start justify-between mb-2">
                    <View className="flex-1">
                      <Text className="text-base font-bold text-charcoal">{car.name}</Text>
                      <Text className="text-sm text-muted-foreground">{car.type}</Text>
                    </View>
                    <View className="flex-row items-center gap-1">
                      <MaterialIcons name="star" size={14} color="#DDA74A" />
                      <Text className="text-xs font-medium text-charcoal">{car.rating}</Text>
                    </View>
                  </View>
                  <View className="flex-row items-center justify-between">
                    <View>
                      <Text className="text-xl font-bold text-primary">${car.price}</Text>
                      <Text className="text-xs text-muted-foreground">per day</Text>
                    </View>
                    <TouchableOpacity className="bg-primary px-3 py-2 rounded-lg">
                      <Text className="text-primary-foreground text-xs font-medium">Book Now</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>
          ))}
        </ScrollView>
      </View>

      {/* Recent Bookings */}
      <View className="px-6 py-4">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-lg font-bold text-charcoal">Recent Bookings</Text>
          <Link href={"/(tabs)/bookings" as any} asChild>
            <TouchableOpacity>
              <Text className="text-primary font-medium">View All</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <View className="bg-gray-50 rounded-lg p-4 border border-border">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-base font-bold text-charcoal">Toyota Camry</Text>
            <View className="bg-green-100 px-2 py-1 rounded">
              <Text className="text-green-700 text-xs font-medium">Active</Text>
            </View>
          </View>
          <Text className="text-sm text-muted-foreground mb-3">Jan 15 - Jan 18, 2024</Text>
          <Link href="/booking/booking-details?id=1" asChild>
            <TouchableOpacity className="bg-primary rounded-lg py-2">
              <Text className="text-primary-foreground text-sm font-medium text-center">
                View Details
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}

