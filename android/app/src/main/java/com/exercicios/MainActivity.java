package com.exercicios;

import com.facebook.react.ReactActivity;

/*
  Implementado para habilitar o navigation 5.0
  https://medium.com/@alexb72/how-to-create-a-drawer-navigator-in-react-native-using-react-navigation-5-3b14b2286db3
*/
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "exercicios";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
          return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
