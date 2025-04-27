import { useState, useRef, useEffect } from 'react'
import { Animated, LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native'
import { AnimatedScrollViewProps } from './types'
import { styles } from './styles'

const AnimatedScrollView = ({
  children,
  topHeaderComponent,
  scrolledHeaderComponent,
  contentView,
  ...props
}: AnimatedScrollViewProps) => {
  const [contentHeight, setContentHeight] = useState(0)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [isPeakContent, setIsPeakContent] = useState(false)

  const scrollY = useRef(new Animated.Value(0)).current

  const scale = scrollY.interpolate({
    inputRange: [0, contentHeight - headerHeight],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  })
  const translateY = scrollY.interpolate({
    inputRange: [0, contentHeight - headerHeight],
    outputRange: [0, -30],
    extrapolate: 'clamp',
  })

  const opacityTopHeader = useRef(new Animated.Value(1)).current
  const opacityScrolledHeader = useRef(new Animated.Value(0)).current

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollYValue = event?.nativeEvent?.contentOffset?.y
    const isPeakContent = scrollYValue >= contentHeight - headerHeight
    setIsPeakContent(isPeakContent)
    scrollY.setValue(scrollYValue)
  }

  const handleContentLayout = (event: LayoutChangeEvent) => setContentHeight(event?.nativeEvent?.layout?.height)
  const handleHeaderLayout = (event: LayoutChangeEvent) => setHeaderHeight(event?.nativeEvent?.layout?.height)

  useEffect(() => {
    Animated.timing(opacityTopHeader, {
      toValue: isPeakContent ? 0 : 1,
      duration: 250,
      useNativeDriver: true,
    }).start()

    Animated.timing(opacityScrolledHeader, {
      toValue: isPeakContent ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start()
  }, [isPeakContent])

  return (
    <>
      {Boolean(topHeaderComponent) && (
        <Animated.View style={[styles.topHeaderView, { opacity: opacityTopHeader }]} onLayout={handleHeaderLayout}>
          {topHeaderComponent}
        </Animated.View>
      )}
      {Boolean(scrolledHeaderComponent) && (
        <Animated.View style={[styles.scrolledHeaderView, { opacity: opacityScrolledHeader }]}>
          {scrolledHeaderComponent}
        </Animated.View>
      )}

      <ScrollView onScroll={handleScroll} scrollEventThrottle={16} {...props}>
        {Boolean(contentView) && (
          <Animated.View
            style={[
              {
                transform: [{ scale }, { translateY }],
              },
            ]}
            onLayout={handleContentLayout}
          >
            {contentView}
          </Animated.View>
        )}
        {children}
      </ScrollView>
    </>
  )
}

export default AnimatedScrollView
