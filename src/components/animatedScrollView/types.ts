import { ReactNode } from 'react'
import { ScrollViewProps } from 'react-native'

export interface AnimatedScrollViewProps extends ScrollViewProps {
  headerView?: ReactNode
  contentView?: ReactNode
}
