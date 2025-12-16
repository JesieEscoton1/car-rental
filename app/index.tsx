import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="relative flex-1 w-full">
      {/* Background Image with Overlay */}
      <View className="absolute inset-0 z-0">
        <Image
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK2NY3FbXM4y2HF5GvPpv2lmZ1RegxfZj8Fb9pYjf0qgeIkihFGu0Nhb5tkY-fCFnzyYSqXBDjTWfyskNU1mk3ILlj446iEZ8yccmQUC8pJCL0D4oHBz1RWw7snYjFutdqcTihjRAjMismLH0BNBFJ2q_W7MM7qtILpzXI4y4jbXGb2Stzi3LWLqBFQ_WcOK5ZqbLCG4qYvXPLZVjujwZWSr1e1QWMR6kh5YfI4pFjnmxs93fN1CWa4035P6xRjd9ANqM7LYtwrWA4",
          }}
          style={StyleSheet.absoluteFillObject}
          contentFit="cover"
        />
        <View className="absolute inset-0 bg-forest-green/80" />
      </View>

      {/* Content */}
      <View className="relative z-10 flex-1 flex-col items-center justify-between w-full px-4 py-8">
        {/* Top Section - Icon and Heading */}
        <View className="flex-1 flex-col items-center justify-center">
          <View className="flex items-center justify-center mb-4">
            <MaterialIcons name="directions-car" size={72} color="#DDA74A" />
          </View>
          <Text className="text-white text-[28px] font-bold leading-tight text-center max-w-xs">
            Seamless rentals, endless roads.
          </Text>
        </View>

        {/* Bottom Section - Buttons */}
        <View className="w-full max-w-md">
          <View className="flex flex-col items-stretch gap-4 px-4 py-3">
            <Link href="/auth/register" asChild>
              <TouchableOpacity className="inline-flex items-center justify-center rounded-lg h-12 px-5 bg-ochre shadow-md active:opacity-90">
                <Text className="text-charcoal text-sm font-bold">Get Started</Text>
              </TouchableOpacity>
            </Link>
            
            <Link href="/auth/login" asChild>
              <TouchableOpacity className="inline-flex items-center justify-center rounded-lg border border-stone bg-transparent shadow-md h-12 px-5 active:opacity-90">
                <Text className="text-stone text-sm font-bold">Log In</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
