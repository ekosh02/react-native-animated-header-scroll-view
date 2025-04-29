import { ViewProps } from 'react-native'
import { UseAnimatedProps } from './types'

const useAnimated = ({ contentHeight, headerHeight, scrollY }: UseAnimatedProps) => {
  const scale = scrollY.interpolate({
    inputRange: [0, contentHeight - headerHeight],
    outputRange: [1, 0.7],
    extrapolate: 'clamp',
  })

  const translateY = scrollY.interpolate({
    inputRange: [0, contentHeight - headerHeight],
    outputRange: [0, -30],
    extrapolate: 'clamp',
  })

  const animatedTransformStyle: ViewProps['style'] = {
    transform: [{ scale }, { translateY }],
  }

  return { animatedTransformStyle }
}

export default useAnimated
