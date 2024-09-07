import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from "../constants/icons"
import images from "../constants/images"
import PrettyButton from "../components/PrettyButton"

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
        <View className="mx-8">
            <View className="w-full h-12 flex-row items-center">
              <View className="w-[25%]">
                  <TouchableOpacity activeOpacity={0.7} className="w-full h-full">
                    <ImageBackground className="w-[55%] h-full" resizeMode="contain" source={icons.hamburger}>
                      <View className="w-full h-full"/>
                    </ImageBackground>
                  </TouchableOpacity>
              </View>

              <View className="w-[50%] flex-row items-center justify-center">
                <Image source={icons.pin} className="w-5 h-5 mr-2"/>
                <Text>Tokyo</Text>
              </View>

              <View className="w-[60%] items-end">
                  <TouchableOpacity activeOpacity={0.7} className="w-full h-full">
                    <ImageBackground className="w-[80%] h-full" resizeMode="contain" source={icons.moji}>
                    </ImageBackground>
                  </TouchableOpacity>
              </View>
            </View>
            
            <View className="mt-6">
              <TouchableOpacity activeOpacity={0.7} className="flex-row w-full h-28">
                <View className="w-[60%] bg-primary rounded-l-3xl pl-5 pt-5">
                  <Text className="text-white-100 text-xl font-psemibold">Get 30% Promo</Text>
                  <PrettyButton title={"Buy Food"} containerStyles={'h-10 mt-2 w-[80%]'}/>
                  
                </View>
                <View className="w-[40%] bg-primary rounded-r-3xl overflow-hidden">
                  <Image source={images.shrimps} className="w-full h-full object-contain ml-6" />
                </View>
              </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home
