import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function FiltersScreen() {
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const carTypes = ["Sedan", "SUV", "Luxury", "Sports", "Convertible", "Truck"];
  const priceRanges = [
    { label: "Under $30", value: "0-30" },
    { label: "$30 - $50", value: "30-50" },
    { label: "$50 - $80", value: "50-80" },
    { label: "$80+", value: "80+" },
  ];
  const features = ["AC", "GPS", "Bluetooth", "USB Charging", "Backup Camera", "Sunroof"];

  const toggleType = (type: string) => {
    setSelectedType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
  };

  const clearFilters = () => {
    setSelectedType([]);
    setSelectedPriceRange("");
    setSelectedFeatures([]);
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-white pt-12 pb-4 px-6 border-b border-border">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={24} color="#333333" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-charcoal">Filters</Text>
          <TouchableOpacity onPress={clearFilters}>
            <Text className="text-primary font-medium">Clear</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1" contentContainerStyle={{ padding: 24, gap: 24 }}>
        {/* Car Type */}
        <View>
          <Text className="text-lg font-bold text-charcoal mb-3">Car Type</Text>
          <View className="flex-row flex-wrap gap-2">
            {carTypes.map((type) => (
              <TouchableOpacity
                key={type}
                onPress={() => toggleType(type)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedType.includes(type)
                    ? "bg-primary border-primary"
                    : "bg-white border-input"
                }`}>
                <Text
                  className={`text-sm font-medium ${
                    selectedType.includes(type) ? "text-primary-foreground" : "text-charcoal"
                  }`}>
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Price Range */}
        <View>
          <Text className="text-lg font-bold text-charcoal mb-3">Price Range</Text>
          <View className="flex-row flex-wrap gap-2">
            {priceRanges.map((range) => (
              <TouchableOpacity
                key={range.value}
                onPress={() => setSelectedPriceRange(range.value)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedPriceRange === range.value
                    ? "bg-primary border-primary"
                    : "bg-white border-input"
                }`}>
                <Text
                  className={`text-sm font-medium ${
                    selectedPriceRange === range.value
                      ? "text-primary-foreground"
                      : "text-charcoal"
                  }`}>
                  {range.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Features */}
        <View>
          <Text className="text-lg font-bold text-charcoal mb-3">Features</Text>
          <View className="flex-row flex-wrap gap-2">
            {features.map((feature) => (
              <TouchableOpacity
                key={feature}
                onPress={() => toggleFeature(feature)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedFeatures.includes(feature)
                    ? "bg-primary border-primary"
                    : "bg-white border-input"
                }`}>
                <Text
                  className={`text-sm font-medium ${
                    selectedFeatures.includes(feature)
                      ? "text-primary-foreground"
                      : "text-charcoal"
                  }`}>
                  {feature}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View className="border-t border-border bg-white p-6 pb-8">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-full h-12 bg-primary rounded-lg justify-center items-center">
          <Text className="text-primary-foreground text-base font-bold">Apply Filters</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

