import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {
  ApplicationProvider,
  Layout,
  Text,
  Icon,
  IconRegistry,
  Spinner,
} from '@ui-kitten/components';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const {Navigator, Screen} = createBottomTabNavigator();



const Header = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 0.3,
        borderColor: '#D0D0D0',
        elevation: 4,
        height: 72,
      }}>
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={styles.title}
        category="h1">
        {props.title}
      </Text>
      {props.children}
    </View>
  );
};


const Tab1Screen = () => {

  return (
    <>
      <Header title="Tab1"></Header>
      <ScrollView
        key="scrollview"
        removeClippedSubviews={true}
        style={styles.scrollBase}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View style={{height: '100%'}}>
            <View
              style={{
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Spinner size="medium" status="info" />
            </View>
        </View>
      </ScrollView>
    </>
  );
};

const Tab2Screen = () => {
  return (
    <>
      <Header title="Tab2">
      </Header>
      <ScrollView
        key="scrollview"
        removeClippedSubviews={true}
        style={styles.scrollBase}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View style={{height: '100%'}}>
            <View
              style={{
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center',
                height: "100%"
              }}>
              <Spinner size="medium" status="info" />
            </View>
        </View>
      </ScrollView>
    </>
  );
};

const Tab3Screen = () => (
  <>
    <Header title="Tab3"></Header>
    <Text>build in progress</Text>
  </>
);


const TabNavigator = () => (
  <Navigator
    initialRouteName="Tab2"
    tabBarOptions={{
      labelStyle: {textTransform: 'uppercase'},
      activeTintColor: '#333',
      inactiveTintColor: '#333',
    }}>
    <Screen
      name="Tab1"
      component={Tab1Screen}
      options={{
        tabBarIcon: props => {
          let iconName = props.focused ? 'people' : 'people-outline';
          return (
            <Icon style={{width: 32, height: 32}} fill="#333" name={iconName} />
          );
        },
      }}
    />
    <Screen
      name="Tab2"
      component={Tab2Screen}
      options={{
        tabBarIcon: props => {
          let iconName = props.focused ? 'calendar' : 'calendar-outline';
          return (
            <Icon style={{width: 32, height: 32}} fill="#333" name={iconName} />
          );
        },
      }}
    />
    <Screen
      name="Tab3"
      component={Tab3Screen}
      options={{
        tabBarIcon: props => {
          let iconName = props.focused ? 'book' : 'book-outline';
          return (
            <Icon style={{width: 32, height: 32}} fill="#333" name={iconName} />
          );
        },
      }}
    />
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.container}>
            <AppNavigator />
        </Layout>
      </ApplicationProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollBase: {

  },
  scroll: {
    flexGrow: 1,
  },
  title: {
    fontWeight: 'bold',
    flexGrow: 1,
  },
});

export default App;
