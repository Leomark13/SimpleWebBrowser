/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {WebView} from 'react-native-webview';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  // State to hold the URL entered by the user
  const [url, setURL] = useState('');

  // State to hold the URL for WebView
  const [webViewURL, setWebViewURL] = useState('');

  const handleTapGo = () => {
    console.log('URL', url);
    setWebViewURL(url);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Enter URL'  
          value={url}
          onChangeText={text => setURL(text.toLowerCase())}        
        />
        <Button
          title='GO'
          onPress={handleTapGo}
        />
      </View>

      <WebView
        style={styles.webView}
        source={{ uri: webViewURL }}
        />
    </SafeAreaView>
  );
}; 
  
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#a7d8fa'
  },
  input: {
    flex: 1,
  },
  webView: {
    flex: 1,
    width: '100%',
  }
});

export default App;
