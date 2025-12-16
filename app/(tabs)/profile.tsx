import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  // Sample user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (234) 567-8900",
    avatar: null,
  };

  const menuItems = [
    { icon: "person", label: "Edit Profile", href: "/profile/edit-profile" },
    { icon: "payment", label: "Payment Methods", href: "/profile/payment-methods" },
    { icon: "receipt", label: "Receipts", href: "/profile/receipts" },
    { icon: "history", label: "Booking History", href: "/booking/booking-history" },
    { icon: "settings", label: "Settings", href: "#" },
    { icon: "help", label: "Help & Support", href: "#" },
    { icon: "logout", label: "Log Out", href: "/auth/login", isDestructive: true },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-primary pt-12 pb-8 px-6">
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-2xl font-bold text-primary-foreground">Profile</Text>
          <TouchableOpacity>
            <MaterialIcons name="settings" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* User Info */}
        <View className="flex-row items-center gap-4">
          <View className="w-20 h-20 bg-primary-foreground/20 rounded-full items-center justify-center">
            <MaterialIcons name="person" size={40} color="#FFFFFF" />
          </View>
          <View className="flex-1">
            <Text className="text-xl font-bold text-primary-foreground mb-1">
              {user.name}
            </Text>
            <Text className="text-sm text-primary-foreground/80">{user.email}</Text>
            <Text className="text-sm text-primary-foreground/80">{user.phone}</Text>
          </View>
        </View>
      </View>

      {/* Menu Items */}
      <View className="px-6 py-4">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href as any} asChild>
            <TouchableOpacity
              className={`flex-row items-center py-4 border-b border-border ${
                item.isDestructive ? "border-0" : ""
              }`}>
              <MaterialIcons
                name={item.icon as any}
                size={24}
                color={item.isDestructive ? "#E65C5C" : "#333333"}
              />
              <Text
                className={`ml-4 text-base font-medium flex-1 ${
                  item.isDestructive ? "text-brand-red" : "text-charcoal"
                }`}>
                {item.label}
              </Text>
              {!item.isDestructive && (
                <MaterialIcons name="chevron-right" size={20} color="#6B7280" />
              )}
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}
