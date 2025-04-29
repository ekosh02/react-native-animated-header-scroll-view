import { useEffect, useRef } from 'react'
import { Animated } from 'react-native'
import { UseAnimatedProps } from './types'

const useAnimated = ({ isScrolledToHeaderEnd }: UseAnimatedProps) => {
  const opacityTopHeader = useRef(new Animated.Value(1)).current
  const opacityScrolledHeader = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacityTopHeader, {
      toValue: isScrolledToHeaderEnd ? 0 : 1,
      duration: 250,
      useNativeDriver: true,
    }).start()

    Animated.timing(opacityScrolledHeader, {
      toValue: isScrolledToHeaderEnd ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start()
  }, [isScrolledToHeaderEnd])

  return { opacityTopHeader, opacityScrolledHeader }
}

export default useAnimated
