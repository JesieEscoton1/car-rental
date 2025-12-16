import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function MapViewScreen() {
  // Sample locations
  const locations = [
    {
      id: 1,
      name: "Downtown Location",
      address: "123 Main St, Downtown",
      availableCars: 12,
    },
    {
      id: 2,
      name: "Airport Location",
      address: "456 Airport Blvd",
      availableCars: 8,
    },
    {
      id: 3,
      name: "Shopping Mall",
      address: "789 Mall Drive",
      availableCars: 5,
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-white pt-12 pb-4 px-6 border-b border-border">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={24} color="#333333" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-charcoal">Map View</Text>
          <View style={{ width: 24 }} />
        </View>
      </View>

      {/* Map Placeholder */}
      <View className="flex-1 bg-gray-100 items-center justify-center">
        <MaterialIcons name="map" size={64} color="#D1D5DB" />
        <Text className="text-muted-foreground text-base mt-4">
          Map view requires react-native-maps package
        </Text>
        <Text className="text-muted-foreground text-sm mt-2">
          Install: npm install react-native-maps
        </Text>
      </View>

      {/* Locations List */}
      <ScrollView className="max-h-64 border-t border-border">
        {locations.map((location) => (
          <TouchableOpacity
            key={location.id}
            onPress={() => setSelectedLocation(location)}
            className={`p-4 border-b border-border ${
              selectedLocation.id === location.id ? "bg-primary/10" : "bg-white"
            }`}>
            <View className="flex-row items-start justify-between">
              <View className="flex-1">
                <Text className="text-base font-bold text-charcoal mb-1">
                  {location.name}
                </Text>
                <Text className="text-sm text-muted-foreground mb-2">
                  {location.address}
                </Text>
                <View className="flex-row items-center gap-2">
                  <MaterialIcons name="directions-car" size={16} color="#22574A" />
                  <Text className="text-sm text-muted-foreground">
                    {location.availableCars} cars available
                  </Text>
                </View>
              </View>
              {selectedLocation.id === location.id && (
                <MaterialIcons name="check-circle" size={24} color="#22574A" />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Action Bar */}
      <View className="bg-white border-t border-border p-6 pb-8">
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/cars")}
          className="w-full h-12 bg-primary rounded-lg justify-center items-center">
          <Text className="text-primary-foreground text-base font-bold">View Cars</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
