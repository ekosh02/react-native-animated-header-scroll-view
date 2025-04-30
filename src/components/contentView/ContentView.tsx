import { Animated } from 'react-native'
import { ContentViewProps } from './types'
import { useAnimated } from './hooks'

const ContentView = ({ scrollY, headerHeight, contentHeight, children, scaleMin, ...props }: ContentViewProps) => {
  const { animatedTransformStyle } = useAnimated({ contentHeight, headerHeight, scrollY, scaleMin })

  if (Boolean(children)) {
    return <Animated.View style={animatedTransformStyle} children={children} {...props} />
  }

  return <></>
}

export default ContentView
