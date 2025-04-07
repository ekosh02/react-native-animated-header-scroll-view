import React from 'react'
import { View } from 'react-native'
import { ContentViewProps } from './types'

const ContentView = ({ children, ...props }: ContentViewProps) => {
  return <View {...props}>{children}</View>
}

export default ContentView
