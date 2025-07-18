import { ReactNode } from 'react'
import { ColorValue, ViewProps, ViewStyle } from 'react-native'

export interface HeaderViewProps extends ViewProps {
  topHeaderComponent?: ReactNode
  scrolledHeaderComponent?: ReactNode
  isScrolledToHeaderEnd: boolean
  headerBackgroundColor?: ColorValue
  useSafeArea?: boolean
  onHeaderLayout: ViewProps['onLayout']
}

export type DynamicStylesProps = {
  top: number
  opacityTopHeader: ViewStyle['opacity']
  opacityScrolledHeader: ViewStyle['opacity']
  headerBackgroundColor: HeaderViewProps['headerBackgroundColor']
}
