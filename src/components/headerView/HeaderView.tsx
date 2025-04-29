import { Animated } from 'react-native'
import { styles } from './styles'
import { HeaderViewProps } from './types'
import { useAnimated } from './hooks'

const HeaderView = ({
  topHeaderComponent,
  scrolledHeaderComponent,
  isScrolledToHeaderEnd,
  onHeaderLayout,
  ...props
}: HeaderViewProps) => {
  const { opacityTopHeader, opacityScrolledHeader } = useAnimated({ isScrolledToHeaderEnd })

  return (
    <>
      {Boolean(topHeaderComponent) && (
        <Animated.View style={[styles.topHeaderView, { opacity: opacityTopHeader }]} onLayout={onHeaderLayout}>
          {topHeaderComponent}
        </Animated.View>
      )}
      {Boolean(scrolledHeaderComponent) && (
        <Animated.View style={[styles.scrolledHeaderView, { opacity: opacityScrolledHeader }]} {...props}>
          {scrolledHeaderComponent}
        </Animated.View>
      )}
    </>
  )
}

export default HeaderView
