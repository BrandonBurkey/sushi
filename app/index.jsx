import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-base">Edit app/index.tsx to edit this screen.</Text>
      <Text className="text-lg font-bold" onPress={() => router.push("home")}>home</Text>
    </View>
  );
}
