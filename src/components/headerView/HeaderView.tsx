import React from 'react'
import { View } from 'react-native'
import { HeaderViewProps } from './types'

const HeaderView = ({ children, ...props }: HeaderViewProps) => {
  return <View {...props}>{children}</View>
}

export default HeaderView
