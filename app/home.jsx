import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from "../constants/icons"

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
        <View className="mx-8">
            <View className="w-full h-12 flex-row items-center">
              <View className="w-[25%]">
                  <TouchableOpacity className="w-full h-full">
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
                  <TouchableOpacity className="w-full h-full">
                    <ImageBackground className="w-[80%] h-full" resizeMode="contain" source={icons.moji}>
                    </ImageBackground>
                  </TouchableOpacity>
              </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home
