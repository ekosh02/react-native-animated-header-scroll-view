import { AnimatedScrollViewProps } from './types'
import HeaderView from '../headerView'
import ContentView from '../contentView'
import { useAnimatedScrollView } from './hooks'
import { ScrollView } from 'react-native'

const AnimatedScrollView = ({
  children,
  topHeaderComponent,
  scrolledHeaderComponent,
  contentView,
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
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16} {...props}>
        <ContentView
          children={contentView}
          scrollY={scrollY}
          headerHeight={headerHeight}
          onLayout={handleContentLayout}
          contentHeight={contentHeight}
        />
        {children}
      </ScrollView>
    </>
  )
}

export default AnimatedScrollView
