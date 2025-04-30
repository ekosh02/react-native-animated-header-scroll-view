import { Animated, ViewProps } from 'react-native'

export interface ContentViewProps extends ViewProps {
  contentHeight: number
  headerHeight: number
  scrollY: Animated.Value
  scaleMin?: number
}
