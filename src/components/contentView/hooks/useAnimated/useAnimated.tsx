import { ViewProps } from 'react-native'
import { UseAnimatedProps } from './types'
import {
  SCALE_DEFAULT,
  SCALE_MAX,
  SCALE_MIN,
  SCROLL_END,
  SCROLL_PULL_DISTANCE,
  SCROLL_START,
  TRANSLATE_Y_DEFAULT,
  TRANSLATE_Y_PULL,
  TRANSLATE_Y_SCROLL,
} from './constants'

const useAnimated = ({ contentHeight, headerHeight, scrollY, scaleMin = SCALE_MIN }: UseAnimatedProps) => {
  const maxScroll = Math.max(SCROLL_END, contentHeight - headerHeight)

  const scale = scrollY.interpolate({
    inputRange: [SCROLL_PULL_DISTANCE, SCROLL_START, maxScroll],
    outputRange: [SCALE_MAX, SCALE_DEFAULT, scaleMin],
    extrapolateLeft: 'extend',
    extrapolateRight: 'clamp',
  })

  const translateY = scrollY.interpolate({
    inputRange: [SCROLL_PULL_DISTANCE, SCROLL_START, maxScroll],
    outputRange: [TRANSLATE_Y_PULL, TRANSLATE_Y_DEFAULT, TRANSLATE_Y_SCROLL],
    extrapolate: 'clamp',
  })

  const animatedTransformStyle: ViewProps['style'] = {
    transform: [{ scale }, { translateY }],
  }

  return { animatedTransformStyle }
}

export default useAnimated
