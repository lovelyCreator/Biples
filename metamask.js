import MetaMaskSDK from '@metamask/sdk';
import { Linking } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

const MMSDK = new MetaMaskSDK({
  openDeeplink: (link) => {
    Linking.openURL(link);
  },
  timer: BackgroundTimer,
  dappMetadata: {
    name: 'My Dapp',
    url: 'https://mydapp.com',
  },
});

const connectToMetaMask = async () => {
  const ethereum = MMSDK.getProvider();
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  // Handle the connected accounts
};