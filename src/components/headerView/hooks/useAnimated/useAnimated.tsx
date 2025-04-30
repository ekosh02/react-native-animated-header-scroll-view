import { useEffect, useRef } from 'react'
import { Animated } from 'react-native'
import { UseAnimatedProps } from './types'
import { DURATION } from './constants'

const useAnimated = ({ isScrolledToHeaderEnd }: UseAnimatedProps) => {
  const opacityTopHeader = useRef(new Animated.Value(1)).current
  const opacityScrolledHeader = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const topHeaderToValue = isScrolledToHeaderEnd ? 0 : 1
    const scrolledHeaderToValue = isScrolledToHeaderEnd ? 1 : 0

    Animated.timing(opacityTopHeader, {
      toValue: topHeaderToValue,
      duration: DURATION,
      useNativeDriver: true,
    }).start()

    Animated.timing(opacityScrolledHeader, {
      toValue: scrolledHeaderToValue,
      duration: DURATION,
      useNativeDriver: true,
    }).start()
  }, [isScrolledToHeaderEnd])

  return { opacityTopHeader, opacityScrolledHeader }
}

export default useAnimated
