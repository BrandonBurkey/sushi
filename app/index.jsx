import { useRouter } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";
import images from "../constants/images";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  return (
      <View className="flex-1 justify-center items-center bg-primary">
        <ImageBackground source={images.japanesebg} className="w-full h-full" resizeMode="contain">
          <SafeAreaView>
            <View className="mx-8">
              <Text className="text-lg font-bold text-white">SUSHIMAN</Text>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
  );
}
