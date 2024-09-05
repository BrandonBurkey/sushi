import { SplashScreen, useRouter } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";
import images from "../constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [fontsLoaded, error] = useFonts({
    "Musashi": require('../assets/fonts/Musashi.ttf')
  });

  useEffect(() => {
    if(error) throw error; 

    if(fontsLoaded) SplashScreen.hideAsync(); 
  }, [fontsLoaded, error])

  if(!fontsLoaded && !error ) return null
    
  const router = useRouter();
  return (
      <View className="flex-1 justify-center items-center bg-primary">
        <ImageBackground source={images.japanesebg} className="w-full h-full" resizeMode="contain">
          <SafeAreaView>
            <View className="mx-8">
              <Text className="font-musashi text-3xl text-white">SUSHIMAN</Text>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
  );
}
