Pod::Spec.new do |s|
    s.name             = '@ekosh02/react-native-animated-header-scroll-view'
    s.version          = '1.1.0'
    s.summary          = 'Lightweight React Native ScrollView with animated header. No reanimated or gesture-handler required.'
    s.description      = 'This is a React Native module that provides a scrollable view with an animated header, no need for reanimated or gesture-handler.'
    s.homepage         = 'https://github.com/ekosh02/react-native-animated-header-scroll-view'
    s.license          = { :type => 'ISC', :file => 'LICENSE' }
    s.author           = { 'Yeldos Turapbayev' => 'polumontum@gmail.com' }
    s.source           = { :git => 'https://github.com/ekosh02/react-native-animated-header-scroll-view.git', :tag => s.version.to_s }
    s.platform         = :ios, '10.0'
    s.source_files     = 'ios/**/*.{h,m}'
    s.requires_arc     = true
    s.dependency 'React', '>= 0.70.0'
  end
  