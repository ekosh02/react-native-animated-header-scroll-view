import { HeaderViewProps } from '../headerView/types'
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
   * contentComponent={<Text>Animated Content</Text>}
   */
  contentComponent?: ReactNode

  /**
   * Regular static content inside the ScrollView.
   *
   * @example
   * <View><Text>Static Content</Text></View>
   */
  children?: ReactNode

  /**
   * Controls how much the `contentView` shrinks during scroll animation.
   *
   * @default 0.7
   *
   * @example
   * Shrink contentView to 80% of its size when scrolled
   * scaleMin={0.8}
   */
  scaleMin?: number

  /**
   * Background color for the `scrolledHeaderComponent`.
   *
   * Typically used to match the background when the header becomes sticky.
   *
   * @example
   * headerBackgroundColor="#ffffff"
   */
  headerBackgroundColor?: HeaderViewProps['headerBackgroundColor']

  /**
   * Enables or disables usage of safe area insets (e.g. for iPhone notch).
   *
   * If `true`, padding will be added to the top of the header using `useSafeAreaInsets()`.
   * If `false` or not set, no safe area will be applied.
   *
   * @default false
   *
   * @example
   * useSafeArea={true}
   */
  useSafeArea?: HeaderViewProps['useSafeArea']
}
