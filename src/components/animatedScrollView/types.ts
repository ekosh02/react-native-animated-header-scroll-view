import { ReactNode } from 'react'
import { ScrollViewProps } from 'react-native'

export interface AnimatedScrollViewProps extends ScrollViewProps {
  /**
   * Component displayed as the main header before scrolling.
   *
   * @example
   * topHeaderComponent={<Text>Top Header</Text>}
   */
  topHeaderComponent?: ReactNode

  /**
   * Component displayed as the header after scrolling past a threshold.
   *
   * @example
   * scrolledHeaderComponent={<Text>Scrolled Header</Text>}
   */
  scrolledHeaderComponent?: ReactNode

  /**
   * Component displayed inside the content view that will be animated with scaling and translation effects.
   *
   * @example
   * contentView={<Text>Animated Content</Text>}
   */
  contentView?: ReactNode

  /**
   * Regular static content inside the ScrollView.
   *
   * @example
   * <View><Text>Static Content</Text></View>
   */
  children?: ReactNode
}
