import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron
  .configure({
      hostname: '192.168.88.166',
    })
  .useReactNative()
  // .use(reactotronRedux())
  .connect();
  tron.clear();

  console.tron = tron;

}
