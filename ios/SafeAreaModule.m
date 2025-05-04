#import "SafeAreaModule.h"
#import <React/RCTUtils.h>

@implementation SafeAreaModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getSafeAreaInsets:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  UIWindow *keyWindow = [UIApplication sharedApplication].windows.firstObject;
  if (@available(iOS 13.0, *)) {
      for (UIWindowScene *windowScene in [UIApplication sharedApplication]
               .connectedScenes) {
          if (windowScene.activationState ==
              UISceneActivationStateForegroundActive) {
              for (UIWindow *window in windowScene.windows) {
                  if (window.isKeyWindow) {
                      keyWindow = window;
                      break;
                  }
              }
          }
      }
  }

  if (keyWindow == nil) {
    reject(@"no_window", @"Cannot find key window", nil);
    return;
  }

  UIEdgeInsets insets = keyWindow.safeAreaInsets;

  NSDictionary *result = @{
    @"top": @(insets.top),
    @"bottom": @(insets.bottom),
    @"left": @(insets.left),
    @"right": @(insets.right)
  };

  resolve(result);
}

