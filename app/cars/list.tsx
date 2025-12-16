import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CarsListScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample car data
  const cars = [
    {
      id: 1,
      name: "Toyota Camry",
      type: "Sedan",
      price: 45,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400",
      features: ["Automatic", "5 Seats", "AC"],
    },
    {
      id: 2,
      name: "Honda CR-V",
      type: "SUV",
      price: 65,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=400",
      features: ["Automatic", "7 Seats", "AC", "GPS"],
    },
    {
      id: 3,
      name: "BMW 3 Series",
      type: "Luxury",
      price: 95,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400",
      features: ["Automatic", "5 Seats", "Premium"],
    },
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-white pt-12 pb-4 px-6 border-b border-border">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-xl font-bold text-charcoal">Available Carsdd</Text>
          <Link href="/cars/filters" asChild>
            <TouchableOpacity>
              <MaterialIcons name="tune" size={24} color="#333333" />
            </TouchableOpacity>
          </Link>
        </View>
        
        {/* Search Bar */}
        <View className="flex-row items-center bg-gray-50 rounded-lg px-4 h-12 border border-input">
          <MaterialIcons name="search" size={20} color="#6B7280" />
          <TextInput
            className="flex-1 ml-2 text-base text-charcoal"
            placeholder="Search cars..."
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Map View Toggle */}
      <View className="px-6 py-3 bg-gray-50 border-b border-border">
        <Link href="/cars/map-view" asChild>
          <TouchableOpacity className="flex-row items-center justify-center gap-2">
            <MaterialIcons name="map" size={20} color="#22574A" />
            <Text className="text-primary font-medium">View on Map</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Cars List */}
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, gap: 16 }}
        renderItem={({ item }) => (
          <Link href={`/cars/details?id=${item.id}`} asChild>
            <TouchableOpacity className="bg-white rounded-lg border border-border overflow-hidden shadow-sm">
              <Image
                source={{ uri: item.image }}
                className="w-full h-48"
                contentFit="cover"
              />
              <View className="p-4">
                <View className="flex-row items-start justify-between mb-2">
                  <View className="flex-1">
                    <Text className="text-lg font-bold text-charcoal">{item.name}</Text>
                    <Text className="text-sm text-muted-foreground">{item.type}</Text>
                  </View>
                  <View className="flex-row items-center gap-1">
                    <MaterialIcons name="star" size={16} color="#DDA74A" />
                    <Text className="text-sm font-medium text-charcoal">{item.rating}</Text>
                  </View>
                </View>
                
                <View className="flex-row flex-wrap gap-2 mb-3">
                  {item.features.map((feature, index) => (
                    <View key={index} className="bg-gray-100 px-2 py-1 rounded">
                      <Text className="text-xs text-muted-foreground">{feature}</Text>
                    </View>
                  ))}
                </View>
                
                <View className="flex-row items-center justify-between">
                  <View>
                    <Text className="text-2xl font-bold text-primary">${item.price}</Text>
                    <Text className="text-xs text-muted-foreground">per day</Text>
                  </View>
                  <TouchableOpacity className="bg-primary px-4 py-2 rounded-lg">
                    <Text className="text-primary-foreground font-medium">View Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

