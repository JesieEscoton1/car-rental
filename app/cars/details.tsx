import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function CarDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Sample car details
  const car = {
    id: id || "1",
    name: "Toyota Camry",
    type: "Sedan",
    price: 45,
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
    ],
    features: [
      { icon: "settings", label: "Automatic" },
      { icon: "people", label: "5 Seats" },
      { icon: "ac-unit", label: "AC" },
      { icon: "local-gas-station", label: "Fuel Efficient" },
      { icon: "luggage", label: "Large Trunk" },
      { icon: "security", label: "Safety Features" },
    ],
    description: "A reliable and comfortable sedan perfect for city driving and long trips. Equipped with modern amenities and safety features.",
    specifications: {
      engine: "2.5L 4-Cylinder",
      transmission: "Automatic",
      fuel: "Gasoline",
      mileage: "32 MPG",
      year: "2023",
    },
  };

  return (
    <ScrollView className="flex-1 bg-white pt-8">
      {/* Header */}
      <View className="absolute top-2 left-6 z-10">
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color="#333333" />
        </TouchableOpacity>
      </View>

      {/* Image Gallery */}
      <View className="relative pt-8">
        <Image
          source={{ uri: car.images[selectedImageIndex] }}
          className="w-full h-64"
          contentFit="cover"
        />
        <View className="absolute bottom-4 right-4 flex-row gap-2">
          {car.images.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedImageIndex(index)}
              className={`h-2 rounded-full ${
                index === selectedImageIndex ? "bg-white w-8" : "bg-white/50 w-2"
              }`}
            />
          ))}
        </View>
      </View>

      {/* Content */}
      <View className="p-6">
        {/* Title Section */}
        <View className="mb-4">
          <View className="flex-row items-start justify-between mb-2">
            <View className="flex-1">
              <Text className="text-2xl font-bold text-charcoal">{car.name}</Text>
              <Text className="text-base text-muted-foreground">{car.type}</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <MaterialIcons name="star" size={20} color="#DDA74A" />
              <Text className="text-base font-medium text-charcoal">{car.rating}</Text>
              <Text className="text-sm text-muted-foreground">({car.reviews})</Text>
            </View>
          </View>
          <View className="flex-row items-baseline gap-2">
            <Text className="text-3xl font-bold text-primary">${car.price}</Text>
            <Text className="text-base text-muted-foreground">per day</Text>
          </View>
        </View>

        {/* Features */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-charcoal mb-3">Features</Text>
          <View className="flex-row flex-wrap gap-3">
            {car.features.map((feature, index) => (
              <View key={index} className="flex-row items-center bg-gray-50 px-3 py-2 rounded-lg gap-2">
                <MaterialIcons name={feature.icon as any} size={18} color="#22574A" />
                <Text className="text-sm text-charcoal">{feature.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Description */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-charcoal mb-2">Description</Text>
          <Text className="text-base text-muted-foreground leading-6">{car.description}</Text>
        </View>

        {/* Specifications */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-charcoal mb-3">Specifications</Text>
          <View className="bg-gray-50 rounded-lg p-4">
            {Object.entries(car.specifications).map(([key, value]) => (
              <View key={key} className="flex-row justify-between py-2 border-b border-border last:border-0">
                <Text className="text-sm text-muted-foreground capitalize">{key}</Text>
                <Text className="text-sm font-medium text-charcoal">{value}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Bottom Action Bar */}
      <View className="border-t border-border bg-white p-6 pb-8">
        <TouchableOpacity
          onPress={() => router.push(`/booking/create-booking?carId=${car.id}`)}
          className="w-full h-12 bg-primary rounded-lg justify-center items-center">
          <Text className="text-primary-foreground text-base font-bold">Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

