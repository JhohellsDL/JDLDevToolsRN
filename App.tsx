import React from 'react';
import { QueryClientProvider } from './src/providers/QueryClientProvider';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import ToolListScreen from './src/ToolListScreen';



function App() {
  return (
    <QueryClientProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ToolListScreen />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: StatusBar.currentHeight || 0,
  },
});

export default App;
