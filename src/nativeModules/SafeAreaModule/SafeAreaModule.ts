import { NativeModules } from 'react-native'

export const getSafeAreaInsets = async () => {
  try {
    const insets = await NativeModules.SafeAreaModule.getSafeAreaInsets()
    return insets
  } catch (error) {
    console.error(error)
    throw error
  }
}
