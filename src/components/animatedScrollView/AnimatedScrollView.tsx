import { AnimatedScrollViewProps } from './types'
import HeaderView from '../headerView'
import ContentView from '../contentView'
import { useAnimatedScrollView } from './hooks'
import { ScrollView } from 'react-native'
import { SCROLL_EVENT_THROTTLE } from './constants'

const AnimatedScrollView = ({
  children,
  topHeaderComponent,
  scrolledHeaderComponent,
  contentView,
  scaleMin,
  ...props
}: AnimatedScrollViewProps) => {
  const {
    scrollY,
    contentHeight,
    headerHeight,
    isScrolledToHeaderEnd,
    handleScroll,
    handleContentLayout,
    handleHeaderLayout,
  } = useAnimatedScrollView()

  return (
    <>
      <HeaderView
        topHeaderComponent={topHeaderComponent}
        scrolledHeaderComponent={scrolledHeaderComponent}
        isScrolledToHeaderEnd={isScrolledToHeaderEnd}
        onHeaderLayout={handleHeaderLayout}
      />
      <ScrollView onScroll={handleScroll} scrollEventThrottle={SCROLL_EVENT_THROTTLE} {...props}>
        <ContentView
          children={contentView}
          scrollY={scrollY}
          headerHeight={headerHeight}
          onLayout={handleContentLayout}
          contentHeight={contentHeight}
          scaleMin={scaleMin}
        />
        {children}
      </ScrollView>
    </>
  )
}

export default AnimatedScrollView
