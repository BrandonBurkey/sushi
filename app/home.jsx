import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from "../constants/icons"

const home = () => {
  return (
    <SafeAreaView className="flex-1">
        <View className="items-center justify-center mx-8">
            <View className="w-full h-12 flex-row">
              <View className="flex-1">
                  <TouchableOpacity className="w-full h-full">
                    <ImageBackground className="w-[55%] h-full" resizeMode="contain" source={icons.hamburger}>
                    <View className="w-full h-full"/>
                  </ImageBackground>
                  </TouchableOpacity>
              </View>
              <View className="flex-1 bg-green-500">
              </View>
              <View className="flex-1 bg-blue-500">
              </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default home