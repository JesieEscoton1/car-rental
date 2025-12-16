import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export default function ReceiptsScreen() {
  // Sample receipts
  const receipts = [
    {
      id: 1,
      bookingNumber: "BK-2024-001",
      carName: "Toyota Camry",
      date: "Jan 15, 2024",
      amount: 135,
      status: "paid",
    },
    {
      id: 2,
      bookingNumber: "BK-2023-045",
      carName: "BMW 3 Series",
      date: "Dec 10, 2023",
      amount: 190,
      status: "paid",
    },
    {
      id: 3,
      bookingNumber: "BK-2023-038",
      carName: "Honda CR-V",
      date: "Nov 20, 2023",
      amount: 260,
      status: "paid",
    },
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-white pt-12 pb-4 px-6 border-b border-border">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={24} color="#333333" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-charcoal">Receipts</Text>
          <View style={{ width: 24 }} />
        </View>
      </View>

      {/* Receipts List */}
      <FlatList
        data={receipts}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, gap: 12 }}
        renderItem={({ item }) => (
          <TouchableOpacity className="bg-white rounded-lg border border-border p-4">
            <View className="flex-row items-start justify-between mb-3">
              <View className="flex-1">
                <Text className="text-base font-bold text-charcoal mb-1">{item.carName}</Text>
                <Text className="text-sm text-muted-foreground mb-1">
                  {item.bookingNumber}
                </Text>
                <Text className="text-xs text-muted-foreground">{item.date}</Text>
              </View>
              <View className="items-end">
                <Text className="text-lg font-bold text-primary mb-1">${item.amount}</Text>  
                <View className="bg-green-100 px-2 py-1 rounded"> 
                  <Text className="text-green-700 text-xs font-medium capitalize">
                    {item.status}
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex-row gap-2 pt-3 border-t border-border">
              <TouchableOpacity className="flex-1 h-10 border border-input rounded-lg justify-center items-center">
                <View className="flex-row items-center gap-2">
                  <MaterialIcons name="download" size={16} color="#333333" />
                  <Text className="text-charcoal text-sm font-medium">Download</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 h-10 border border-primary rounded-lg justify-center items-center">
                <View className="flex-row items-center gap-2">
                  <MaterialIcons name="visibility" size={16} color="#22574A" />
                  <Text className="text-primary text-sm font-medium">View</Text>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center py-20">
            <MaterialIcons name="receipt" size={48} color="#D1D5DB" />
            <Text className="text-muted-foreground text-base mt-4">No receipts found</Text>
          </View>
        }
      />
    </View>
  );
}

