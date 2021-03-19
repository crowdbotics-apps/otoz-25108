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

const AppNavigator = {
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
