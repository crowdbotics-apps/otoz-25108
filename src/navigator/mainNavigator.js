import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import BlankScreen1216167Navigator from "../features/BlankScreen1216167/navigator"

/**
 * new navigators can be imported here
 */ import Homepage1216253 from "../features/Homepage1216253/navigator"
import SocialMediaLogin1216254 from "../features/SocialMediaLogin1216254/navigator"
import SocialMediaLogin1217198 from "../features/SocialMediaLogin1217198/navigator"
import YourOrderDetails1217199 from "../features/YourOrderDetails1217199/navigator"
import Frame71217234 from "../features/Frame71217234/navigator"

const AppNavigator = {
  Frame71217234: { screen: Frame71217234 },
  YourOrderDetails1217199: { screen: YourOrderDetails1217199 },
  SocialMediaLogin1217198: { screen: SocialMediaLogin1217198 },
  SocialMediaLogin1216254: { screen: SocialMediaLogin1216254 },
  Homepage1216253: { screen: Homepage1216253 },
  //@BlueprintNavigationInsertion
  BlankScreen1216167: { screen: BlankScreen1216167Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
