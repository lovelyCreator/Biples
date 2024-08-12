import React from 'react';
import {
    // ImageBackground, 
    View, 
    Text, 
    // StatusBar, 
    StyleSheet, 
    // Image,
    // SafeAreaView,
    // ScrollView,
    // PanResponder,
    // TouchableOpacity, 
    // FlatList
} from 'react-native'
// import LoadingStart from './src/pages/loading/loadingStart';
// import Loading from './src/pages/loading/loading';
// import LoadingEnd from './src/pages/loading/loadingEnd';
// import Register from './src/pages/register/register';
// import RegisterEmail from './src/pages/register/email';
// import RouterComponent from './src/layout/router';
// import RegisterVerify from "./src/pages/register/verify";
// import RegisterVerifyConfirm from "./src/pages/register/verifyConfirm";
// import CreateAccountInfo from "./src/pages/register/createAccountInfo";
// import SelectAvatar from "./src/pages/register/selectAvatar";
// import CreateEndLoading from './src/pages/register/createEndLoading';
// import BackLogin from './src/pages/login/backLogin';
// import WalletLogin from './src/pages/login/walletLogin';
// import ForgetAccount from './src/pages/login/forgetAccount';
// import ResetPassword from './src/pages/login/resetPassword';
// import ResetLoading from './src/pages/login/resetLoading';
// import Login from './src/pages/login/login';
// import Settings from './src/pages/settings/settings';
// import Preferences from './src/pages/settings/preferences';
// import PrivatePolicy from './src/pages/settings/privatePolicy';
// import Main from "./src/pages/landing/main";
// import Topics from "./src/pages/landing/topic";
// import Notifications from "./src/pages/landing/notifications";
// import MainSearch from "./src/pages/landing/search/mainSearch";
// import SearchResultNone from "./src/pages/landing/search/searchResultNone";
// import SpeechInput from "./src/pages/landing/search/speechInput";
// import SortSearch from "./src/pages/landing/search/sortSearch";
// import MemberSearch from "./src/pages/landing/search/memberSearch";
// import Explorer from './src/pages/landing/manage/explorer';
// import ManageFriend from "./src/pages/landing/manage/manageFriend";
// import QRProfile from "./src/pages/landing/manage/QRProfile";
// import Scan from "./src/pages/landing/manage/scan";
// import FriendProfile from "./src/pages/landing/profile/friendProfile";
// import FriendSearch from "./src/pages/landing/profile/friendSearch";
// import FriendSearchLoading from "./src/pages/landing/profile/friendSearchLoading";
// import Account from "./src/pages/landing/profile/account";
// import GroupAccount from "./src/pages/landing/profile/groupAccount";
// import Documents from "./src/pages/landing/profile/documents";
// import MediaView from "./src/pages/landing/profile/mediaView";
// import Members from "./src/pages/landing/profile/members";
// import NoChat from "./src/pages/landing/chat/noChat";
// import Chats from "./src/pages/landing/chat/chats";
// import ChatMore from "./src/pages/landing/chat/chatMore";
// import ChatCalling from "./src/pages/landing/chat/chatCalling";
// import Calling from "./src/pages/landing/chat/calling";
// import GroupCall from "./src/pages/landing/chat/groupCall";
// import GroupChat from "./src/pages/landing/chat/groupChat";
// import MainCommunity from "./src/pages/landing/community/mainCommunity";
// import CommunitySearch from "./src/pages/landing/community/communitySearch";
// import CreateCommunity from "./src/pages/landing/community/createCommunity";
// import CommunityRegister from "./src/pages/landing/community/communityRegister";
// import CommunityImgRegister from "./src/pages/landing/community/communityImgRegister";
// import CommunityInfoRegister from "./src/pages/landing/community/communityInfoRegister";
// import ChannelSetting from "./src/pages/landing/community/channelSetting";
// import MemberPermission from "./src/pages/landing/community/memberPermission";
// import MyCommunity from "./src/pages/landing/community/myCommunity";
// import MainNFTs from "./src/pages/landing/marketPlace/mainNFTs";
// import Buy from "./src/pages/landing/marketPlace/buy";
// import BuyConfirm from "./src/pages/landing/marketPlace/buyConfirm";
// import BuyLoading from "./src/pages/landing/marketPlace/buyLoading";
// import Ranking from "./src/pages/landing/marketPlace/ranking";
// import NFTs from "./src/pages/landing/marketPlace/nfts";
// import Tickets from "./src/pages/landing/marketPlace/tickets";
// import CreateTickets from "./src/pages/landing/marketPlace/createTickets";
// import ChatConversation from "./src/pages/landing/chat/chatConversation";
// import Details from "./src/pages/landing/marketPlace/details";
// import Level1 from "./src/pages/avatar/level1";
// import Level5 from "./src/pages/avatar/level5";
// import Level5Lock from "./src/pages/avatar/level5Lock";
// import Overview from "./src/pages/overview";
import StackRouter from './src/router/router';
import {NavigationContainer} from '@react-navigation/native';
// import Font from './font';
// import ProgressBar from './drag'
// import Item from './animation'
// import Home from './blur'
// import ChatMore from './src/pages/landing/chat/chatMore';
import DraggableModal from './smothModal'
// const Stack = createNativeStackNavigator();


function App() {
  return (
      <NavigationContainer style = {styles.container}>
          <StackRouter/>
      </NavigationContainer>
    
    // <View style={styles.container}>
    //   <DraggableModal/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  }
});

export default App;