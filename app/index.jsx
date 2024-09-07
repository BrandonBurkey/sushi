import { SplashScreen, useRouter } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";
import images from "../constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import PrettyButton from "../components/PrettyButton"


SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [fontsLoaded, error] = useFonts({
    "Musashi": require('../assets/fonts/Musashi.ttf'),
    "Neothic": require('../assets/fonts/Neothic.ttf'),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  const router = useRouter(); // Moved to the top to avoid being called conditionally

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null

  return (
    <View className="flex-1 bg-primary">
      <ImageBackground source={images.japanesebg} className="w-full h-full" resizeMode="contain">
        <Image source={images.chopstix} resizeMethod="contain" className="w-[550] h-[775] -top-[100] absolute" />
        <SafeAreaView className="flex-1">
          <View className="flex-1 justify-start mt-4 ml-8">
            <Text className="font-neothic text-2xl text-white-100">SUSHIMAN</Text>
          </View>
          <View className="flex-1 justify-end ml-8 mr-8">
            <Text className="font-neothic text-4xl text-white-100">THE TASTE OF JAPANESE FOOD</Text>
            <Text className="text-base font-plight text-white-100 mt-6">Feel the taste of most populars Japanese foods from anywhere and anytime</Text>
            <View className="mt-6">
              <PrettyButton arrowShown={true} onPress={() => router.push('/home')} title="Get Started"/>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
