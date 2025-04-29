import { ReactNode } from 'react'
import { ViewProps } from 'react-native'

export interface HeaderViewProps extends ViewProps {
  topHeaderComponent?: ReactNode
  scrolledHeaderComponent?: ReactNode
  isScrolledToHeaderEnd: boolean
  onHeaderLayout: ViewProps['onLayout']
}
