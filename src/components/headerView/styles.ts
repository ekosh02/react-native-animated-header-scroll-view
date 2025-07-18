import { DynamicStylesProps } from './types'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  topHeaderView: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },
  scrolledHeaderView: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },
})

export const getDynamicStyles = ({
  top,
  opacityTopHeader,
  opacityScrolledHeader,
  headerBackgroundColor,
}: DynamicStylesProps) => {
  return StyleSheet.create({
    topHeaderView: { opacity: opacityTopHeader, paddingTop: top },
    scrolledHeaderView: { opacity: opacityScrolledHeader },
    scrolledHeaderInsideView: { paddingTop: top, backgroundColor: headerBackgroundColor },
  })
}
