import { useState, useRef } from 'react'
import { Animated, LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'

const useAnimatedScrollView = () => {
  const [contentHeight, setContentHeight] = useState(0)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [isScrolledToHeaderEnd, setIsScrolledToHeaderEnd] = useState(false)

  const scrollY = useRef(new Animated.Value(0)).current

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollYValue = event.nativeEvent.contentOffset.y
    const reached = scrollYValue >= contentHeight - headerHeight
    setIsScrolledToHeaderEnd(reached)
    scrollY.setValue(scrollYValue)
  }

  const handleContentLayout = (event: LayoutChangeEvent) => {
    setContentHeight(event.nativeEvent.layout.height)
  }

  const handleHeaderLayout = (event: LayoutChangeEvent) => {
    setHeaderHeight(event.nativeEvent.layout.height)
  }

  return {
    scrollY,
    contentHeight,
    headerHeight,
    isScrolledToHeaderEnd,
    handleScroll,
    handleContentLayout,
    handleHeaderLayout,
  }
}

export default useAnimatedScrollView
