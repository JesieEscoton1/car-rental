import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useRef } from "react";
import "./global.css";

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Only redirect on initial app mount/refresh, not on subsequent navigations
    if (isInitialMount.current) {
      isInitialMount.current = false;
      
      // On app start/refresh, if we're at tabs, redirect to index
      if (segments[0] === "(tabs)") {
        router.replace("/");
      }
    }
  }, [router, segments]);

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="auth/login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="auth/register"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="auth/forgot-password"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="cars/list"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="cars/details"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="cars/filters"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="cars/map-view"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="booking/create-booking"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="booking/booking-summary"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="booking/booking-history"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="booking/booking-details"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profile/edit-profile"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profile/payment-methods"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profile/receipts"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}