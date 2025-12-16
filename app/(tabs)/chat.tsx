import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Support Team",
      lastMessage: "How can I help you today?",
      time: "2m ago",
      unread: 2,
      avatar: null,
    },
    {
      id: 2,
      name: "Booking Support",
      lastMessage: "Your booking has been confirmed",
      time: "1h ago",
      unread: 0,
      avatar: null,
    },
  ]);

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-primary pt-12 pb-4 px-6 border-b border-primary/20">
        <View className="flex-row items-center justify-between">
          <Text className="text-2xl font-bold text-primary-foreground">Chat</Text>
          <TouchableOpacity>
            <MaterialIcons name="add-comment" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View className="px-6 py-4 bg-white border-b border-border">
        <View className="flex-row items-center bg-gray-50 rounded-lg px-4 h-12 border border-input">
          <MaterialIcons name="search" size={20} color="#6B7280" />
          <TextInput
            className="flex-1 ml-2 text-base text-charcoal"
            placeholder="Search conversations..."
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

      {/* Messages List */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, gap: 12 }}
        renderItem={({ item }) => (
          <TouchableOpacity className="bg-white rounded-lg border border-border p-4">
            <View className="flex-row items-start gap-3">
              <View className="w-12 h-12 bg-primary/20 rounded-full items-center justify-center">
                <MaterialIcons name="person" size={24} color="#22574A" />
              </View>
              <View className="flex-1">
                <View className="flex-row items-center justify-between mb-1">
                  <Text className="text-base font-bold text-charcoal">{item.name}</Text>
                  <Text className="text-xs text-muted-foreground">{item.time}</Text>
                </View>
                <View className="flex-row items-center justify-between">
                  <Text className="text-sm text-muted-foreground flex-1" numberOfLines={1}>
                    {item.lastMessage}
                  </Text>
                  {item.unread > 0 && (
                    <View className="bg-primary rounded-full px-2 py-1 min-w-[20px] items-center">
                      <Text className="text-primary-foreground text-xs font-bold">
                        {item.unread}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center py-20">
            <MaterialIcons name="chat-bubble-outline" size={48} color="#D1D5DB" />
            <Text className="text-muted-foreground text-base mt-4">No messages yet</Text>
            <Text className="text-muted-foreground text-sm mt-2 text-center">
              Start a conversation with our support team
            </Text>
          </View>
        }
      />
    </View>
  );
}

