import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export default function PaymentMethodsScreen() {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "card",
      last4: "1234",
      brand: "Visa",
      expiryDate: "12/25",
      isDefault: true,
    },
    {
      id: 2,
      type: "card",
      last4: "5678",
      brand: "Mastercard",
      expiryDate: "06/26",
      isDefault: false,
    },
  ]);

  const setAsDefault = (id: number) => {
    setPaymentMethods((methods) => 
      methods.map((method) => ({      
        ...method,
        isDefault: method.id === id,
      }))
    );
  };

  const deleteMethod = (id: number) => {
    setPaymentMethods((methods) => methods.filter((method) => method.id !== id));
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-white pt-12 pb-4 px-6 border-b border-border">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={24} color="#333333" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-charcoal">Payment Methods</Text>
          <TouchableOpacity>
            <MaterialIcons name="add" size={24} color="#22574A" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Payment Methods List */}
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, gap: 12 }}
        renderItem={({ item }) => (
          <View className="bg-white rounded-lg border border-border p-4">
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-row items-center gap-3">
                <MaterialIcons name="credit-card" size={24} color="#22574A" />
                <View>
                  <Text className="text-base font-bold text-charcoal">
                    {item.brand} •••• {item.last4}
                  </Text>
                  <Text className="text-sm text-muted-foreground">
                    Expires {item.expiryDate}
                  </Text>
                </View>
              </View>
              {item.isDefault && (
                <View className="bg-primary px-2 py-1 rounded">
                  <Text className="text-primary-foreground text-xs font-medium">Default</Text>
                </View>
              )}
            </View>
            <View className="flex-row gap-3">
              {!item.isDefault && (
                <TouchableOpacity
                  onPress={() => setAsDefault(item.id)}
                  className="flex-1 h-10 border border-input rounded-lg justify-center items-center">
                  <Text className="text-charcoal text-sm font-medium">Set as Default</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                onPress={() => deleteMethod(item.id)}
                className="flex-1 h-10 border border-brand-red rounded-lg justify-center items-center">
                <Text className="text-brand-red text-sm font-medium">Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center py-20">
            <MaterialIcons name="credit-card" size={48} color="#D1D5DB" />
            <Text className="text-muted-foreground text-base mt-4">
              No payment methods added
            </Text>
          </View>
        }
      />

      {/* Add Payment Method Button */}
      <View className="border-t border-border bg-white p-6 pb-8">
        <TouchableOpacity className="w-full h-12 bg-primary rounded-lg justify-center items-center">
          <View className="flex-row items-center gap-2">
            <MaterialIcons name="add" size={20} color="#FFFFFF" />
            <Text className="text-primary-foreground text-base font-bold">
              Add Payment Method
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

