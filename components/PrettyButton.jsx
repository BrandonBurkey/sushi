import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import icons from "../constants/icons"

const PrettyButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      className="w-full h-16 bg-white-20 rounded-full items-center justify-center"
      onPress={onPress}
    >
      <View className="flex-row justify-center items-center">
       <Text className="text-white-100 text-base">{title}</Text>
       <Image
        source={icons.arrow}
        className="h-4 w-4 ml-2"
        resizeMethod='contain'
      />
      </View>
    </TouchableOpacity>
  )
}

export default PrettyButton;