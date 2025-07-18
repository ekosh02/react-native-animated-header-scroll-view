import { Animated, View } from 'react-native'
import { getDynamicStyles, styles } from './styles'
import { HeaderViewProps } from './types'
import { useAnimated } from './hooks'
import { useOptionalSafeAreaInsets } from '../../hooks'

const HeaderView = ({
  topHeaderComponent,
  scrolledHeaderComponent,
  isScrolledToHeaderEnd,
  headerBackgroundColor,
  useSafeArea = false,
  onHeaderLayout,
}: HeaderViewProps) => {
  const { top } = useOptionalSafeAreaInsets(useSafeArea)

  const { opacityTopHeader, opacityScrolledHeader } = useAnimated({ isScrolledToHeaderEnd })

  const dynamicStyles = getDynamicStyles({
    top,
    opacityTopHeader,
    opacityScrolledHeader,
    headerBackgroundColor,
  })

  return (
    <>
      {Boolean(topHeaderComponent) && (
        <Animated.View style={[styles.topHeaderView, dynamicStyles.topHeaderView]} onLayout={onHeaderLayout}>
          {topHeaderComponent}
        </Animated.View>
      )}
      {Boolean(scrolledHeaderComponent) && (
        <Animated.View style={[styles.scrolledHeaderView, dynamicStyles.scrolledHeaderView]}>
          <View style={dynamicStyles.scrolledHeaderInsideView}>{scrolledHeaderComponent}</View>
        </Animated.View>
      )}
    </>
  )
}

export default HeaderView
