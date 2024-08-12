import React from 'react'
import type {PropsWithChildren} from 'react'
import { NativeRouter, Route, Routes } from "react-router-native";
import LoadingStart from '../pages/loading/loadingStart';
import Loading from '../pages/loading/loading';
import LoadingEnd from '../pages/loading/loadingEnd';
// import LoadingApp from "../pages/loading/loadingApp";
import Register from '../pages/register/register';
import RegisterEmail from '../pages/register/email';
import RouterComponent from '../layout/router';
import RegisterVerify from '../pages/register/verify';
import RegisterVerifyConfirm from '../pages/register/verifyConfirm';
import CreateAccountInfo from '../pages/register/createAccountInfo';
import CreateDateofBirth from '../pages/register/createDateofBirth';
import CreateAccountLoading from '../pages/register/createAccountLoading';
import SelectAvatar from '../pages/register/selectAvatar';
import CreateEndLoading from '../pages/register/createEndLoading';
import BackLogin from '../pages/login/backLogin';
import WalletLogin from '../pages/login/walletLogin';
import ForgetAccount from '../pages/login/forgetAccount';
import ResetPassword from '../pages/login/resetPassword';
import ResetLoading from '../pages/login/resetLoading';
import Login from '../pages/login/login';
import Settings from '../pages/settings/settings';
import Preferences from '../pages/settings/preferences';
import PrivatePolicy from '../pages/settings/privatePolicy';
import Invite from '../pages/landing/invite';
import Main from '../pages/landing/main';
import Topics from '../pages/landing/topic';
import Notifications from '../pages/landing/notifications';
import MainSearch from '../pages/landing/search/mainSearch';
import SearchResultNone from '../pages/landing/search/searchResultNone';
import SpeechInput from '../pages/landing/search/speechInput';
import SortSearch from '../pages/landing/search/sortSearch';
import MemberSearch from '../pages/landing/search/memberSearch';
import Explorer from '../pages/landing/manage/explorer';
import ManageFriend from '../pages/landing/manage/manageFriend';
import QRProfile from '../pages/landing/manage/QRProfile';
import Scan from '../pages/landing/manage/scan';
import FriendProfile from '../pages/landing/profile/friendProfile';
import FriendSearch from '../pages/landing/profile/friendSearch';
import FriendSearchLoading from '../pages/landing/profile/friendSearchLoading';
import Account from '../pages/landing/profile/account';
import GroupAccount from '../pages/landing/profile/groupAccount';
import Documents from '../pages/landing/profile/documents';
import MediaView from '../pages/landing/profile/mediaView';
import Members from '../pages/landing/profile/members';
import NoChat from '../pages/landing/chat/noChat';
import Chats from '../pages/landing/chat/chats';
import Calling from '../pages/landing/chat/calling';
import GroupCall from '../pages/landing/chat/groupCall';
import GroupChat from '../pages/landing/chat/groupChat';
import ChatMore from '../pages/landing/chat/chatMore';
import ChatConversation from '../pages/landing/chat/chatConversation';
import ChatCalling from '../pages/landing/chat/chatCalling';
import NoCommunity from '../pages/landing/community/noCommunity';
import MainCommunity from '../pages/landing/community/mainCommunity';
import CommunityEmpty from '../pages/landing/community/communityEmpty';
import CommunitySearch from '../pages/landing/community/communitySearch';
import CreateCommunity from '../pages/landing/community/createCommunity';
import CommunityRegister from '../pages/landing/community/communityRegister';
import CommunityImgRegister from '../pages/landing/community/communityImgRegister';
import CommunityInfoRegister from '../pages/landing/community/communityInfoRegister';
import ChannelSetting from '../pages/landing/community/channelSetting';
import MemberPermission from '../pages/landing/community/memberPermission';
import MyCommunity from '../pages/landing/community/myCommunity';
import MainNFTs from '../pages/landing/marketPlace/mainNFTs';
import Ranking from '../pages/landing/marketPlace/ranking';
import Buy from '../pages/landing/marketPlace/buy';
import BuyConfirm from '../pages/landing/marketPlace/buyConfirm';
import NFTs from '../pages/landing/marketPlace/nfts';
import Tickets from '../pages/landing/marketPlace/tickets';
import CreateTickets from '../pages/landing/marketPlace/createTickets';
import Details from '../pages/landing/marketPlace/details';
import BuyLoading from '../pages/landing/marketPlace/buyLoading';
import Level1 from '../pages/avatar/level1';
import Level5 from '../pages/avatar/level5';
import Level5Lock from '../pages/avatar/level5Lock';
import Overview from '../pages/overview';
import HomeApp from './home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import UnmaskExample from './Verifycode';
const Stack = createNativeStackNavigator();


function StackRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name = 'Load'
        component = { LoadingStart }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Loading'
        component = { Loading }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'LoadingEnd'
        component = { LoadingEnd }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Register'
        component = { Register }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Email'
        component = { RegisterEmail }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Verify'
        component = { RegisterVerify }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'VerifyComplete'
        component = { RegisterVerifyConfirm }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'CreateAccountInfo'
        component = { CreateAccountInfo }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'CreateAccountLoading'
        component = { CreateAccountLoading }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'SelectAvatar'
        component = { SelectAvatar }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'CreateEndLoading'
        component = { CreateEndLoading }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'BackLogin'
        component = { BackLogin }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'ForgetAccount'
        component = { ForgetAccount }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'ResetPassword'
        component = { ResetPassword }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'ResetLoading'
        component = { ResetLoading }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Login'
        component = { Login }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Settings'
        component = { Settings }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Preferences'
        component = { Preferences }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'PrivatePolicy'
        component = { PrivatePolicy }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Main'
        component = { Main }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Topics'
        component = { Topics }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Notifications'
        component = { Notifications }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'MainSearch'
        component = { MainSearch }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'SearchResultNone'
        component = { SearchResultNone }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'SpeechInput'
        component = { SpeechInput }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'SortSearch'
        component = { SortSearch }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'MemberSearch'
        component = { MemberSearch }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Explorer'
        component = { Explorer }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'ManageFriend'
        component = { ManageFriend }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'QRProfile'
        component = { QRProfile }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Scan'
        component = { Scan }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'FriendProfile'
        component = { FriendProfile }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'FriendSearch'
        component = { FriendSearch }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'FriendSearchLoading'
        component = { FriendSearchLoading }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Account'
        component = { Account }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'GroupAccount'
        component = { GroupAccount }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Documents'
        component = { Documents }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'MediaView'
        component = { MediaView }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Members'
        component = { Members }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'NoChat'
        component = { NoChat }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Chats'
        component = { Chats }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'ChatMore'
        component = { ChatMore }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'ChatConversation'
        component = { ChatConversation }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Calling'
        component = { Calling }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'ChatCalling'
        component = { ChatCalling }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'MainCommunity'
        component = { MainCommunity }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'NoCommunity'
        component = { NoCommunity }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'CommunitySearch'
        component = { CommunitySearch }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'CreateCommunity'
        component = { CreateCommunity }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'CommunityRegister'
        component = { CommunityRegister }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'CommunityImgRegister'
        component = { CommunityImgRegister }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'CommunityInfoRegister'
        component = { CommunityInfoRegister }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'ChannelSetting'
        component = { ChannelSetting }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'MemberPermission'
        component = { MemberPermission }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'MyCommunity'
        component = { MyCommunity }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'MainNFTs'
        component = { MainNFTs }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Buy'
        component = { Buy }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'BuyConfirm'
        component = { BuyConfirm }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'BuyLoading'
        component = { BuyLoading }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Ranking'
        component = { Ranking }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'NFTs'
        component = { NFTs }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Tickets'
        component = { Tickets }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'CreateTickets'
        component = { CreateTickets }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Details'
        component = { Details }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Level1'
        component = { Level1 }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Level5'
        component = { Level5 }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Level5Lock'
        component = { Level5Lock }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Overview'
        component = { Overview }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'GroupCall'
        component = { GroupCall }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'GroupChat'
        component = { GroupChat }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'CreateDateofBirth'
        component = { CreateDateofBirth }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'CommunityEmpty'
        component = { CommunityEmpty }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name = 'Invite'
        component = { Invite }
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}


export default StackRouter;