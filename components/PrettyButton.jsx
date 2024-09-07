import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import icons from "../constants/icons"

const PrettyButton = ({ title, onPress, containerStyles, arrowShown = false }) => {
  return (
    <TouchableOpacity
      className={`w-full h-16 bg-white-20 rounded-full items-center justify-center ${containerStyles}`}
      onPress={onPress}
    >
      <View className="flex-row justify-center items-center">
        <Text className="text-white-100 text-base">{title}</Text>
        {arrowShown && (
          <Image
            source={icons.arrow}
            className="h-4 w-4 ml-2"
            resizeMethod="contain"
          />
        )}
      </View>
    </TouchableOpacity>
  )
}

export default PrettyButton;
