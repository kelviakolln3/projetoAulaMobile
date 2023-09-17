/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const window = useWindowDimensions();
  const [text, onChangeText] = React.useState('Digite qualquer coisa');
  return (
    <View style={[styles.sectionContainer, { height: window.height }]}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: isDarkMode ? '#A9A9A9' : Colors.light,
            borderColor: isDarkMode ? '#363636' : '#A9A9A9',
            textDecorationColor: isDarkMode ? '#000000' : '#FFFFFF',
          },
        ]}
        keyboardType='email-address'
      />
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: isDarkMode ? '#A9A9A9' : Colors.light,
            borderColor: isDarkMode ? '#363636' : '#A9A9A9',
            textDecorationColor: isDarkMode ? '#000000' : '#FFFFFF',
          },
        ]}
        keyboardType='default'
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={() => Alert.alert('Redirecionar para a proxíma página')}>
        <Text style={styles.text}>{'Entrar'}</Text>
      </Pressable>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Login" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 32,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  sectionTitle: {
    fontSize: 35,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    alignContent: 'center',
    height: 50,
    width: 350,
    margin: 10,
    padding: 2,
    borderRadius: 5,
    borderWidth: 3,
    textDecorationLine: "none",
    textDecorationStyle: "solid",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#841584',
  },
});

export default App;
