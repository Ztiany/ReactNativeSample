import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

type GreetingProps = {
  name: string;
};

const Greeting = ({name}: GreetingProps) => {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
        margin: 10,
      }}>
      <Text>Hello, {name}!</Text>
    </View>
  );
};

const HelloWorldApp = () => {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Greeting name="World" />
      <Greeting name="React" />
      <Text>You clicked {count} times!</Text>
      <Button title={'Click me!'} onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default HelloWorldApp;
