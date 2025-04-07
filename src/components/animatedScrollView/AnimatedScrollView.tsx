import React from 'react'
import { ScrollView, View } from 'react-native'
import { AnimatedScrollViewProps } from './types'
import { HeaderView, ContentView } from '@/components'

const AnimatedScrollView = ({ children, headerView, contentView, ...props }: AnimatedScrollViewProps) => {
  return (
    <View>
      {headerView && <HeaderView children={headerView} />}
      <ScrollView {...props}>
        {contentView && <ContentView children={contentView} />}
        {children}
      </ScrollView>
    </View>
  )
}

export default AnimatedScrollView
