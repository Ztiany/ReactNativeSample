/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/00_boilerplate/App.tsx';
import HelloWorldApp from './src/01-helloworld/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HelloWorldApp);
