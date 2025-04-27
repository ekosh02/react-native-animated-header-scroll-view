import { ReactNode } from 'react'
import { ScrollViewProps } from 'react-native'

export interface AnimatedScrollViewProps extends ScrollViewProps {
  topHeaderComponent?: ReactNode
  scrolledHeaderComponent?: ReactNode
  contentView?: ReactNode
}
