import { useSafeAreaInsets } from 'react-native-safe-area-context'

const useOptionalSafeAreaInsets = (enabled: boolean) => {
  return enabled ? useSafeAreaInsets() : { top: 0, bottom: 0, left: 0, right: 0 }
}

export default useOptionalSafeAreaInsets
