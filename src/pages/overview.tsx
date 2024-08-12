import React, { useState, useEffect, useRef } from 'react'
import {
    ImageBackground, 
    View, 
    Text, 
    StatusBar, 
    StyleSheet, 
    Image,
    SafeAreaView,
    ScrollView,
    TouchableOpacity, 
    useWindowDimensions,
    Modal,
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import { ArcSegment } from 'react-native-svg-charts';
import Svg, { Path, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { SegmentedArc } from '@shipt/segmented-arc-for-react-native';
import CustomButton from "../../components/customButton"
import CustomRoundedButton from "../../components/customRoundedButton"
import LinearGradient from 'react-native-linear-gradient';
import CustomImageButton from '../../components/customImageButton'
import CustomInputBox from "../../components/customInputBox";
import CustomSwitchButton from "../../components/customSwitchButton"; 
import CustomSettingButton from "../../components/customSettingButton"; 
// import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 5;

const Settings = ({ navigation }) => {
    const [chartArray, setChart] = useState([
        {
            name: 'Date',
            value: ['APR 23', 'APR 23', 'APR 23', 'APR 23', 'APR 23', 'APR 23']
        },
        {
            name: 'Sales',
            value: ['25 ETH', '25 ETH', '25 ETH', '25 ETH', '25 ETH', '25 ETH']
        },
        {
            name: 'Volume',
            value: ['25 ETH', '25 ETH', '25 ETH', '25 ETH', '25 ETH', '25 ETH']
        },
        {
            name: 'Growth',
            value: ['25.23%', '25.23%', '25.23%', '25.23%', '25.23%', '25.23%']
        },
        {
            name: 'Price',
            value: ['25 SOL', '25 SOL', '25 SOL', '25 SOL', '25 SOL', '25 SOL']
        },
    ]);
    const segments = [
      {
        filledColor: '#53FAFB',
        emptyColor: '#68686822'
      }
    ];
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor="transparent"/>
            <View>
                <View style = {styles.header}>
                    <TouchableOpacity 
                        style = {styles.prevButton}
                        onPress = {() => 
                            navigation.goBack()
                        }
                    >
                        <Svg width={vw(5)} height={vw(5)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M12.5 5L7.5 10L12.5 15" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>

                    </TouchableOpacity>
                    <Text style = {styles.mainTitle}>
                        Overview
                    </Text>
                    <Text styles= {{width: vw(9), height: '100%'}}>&nbsp;&nbsp;&nbsp;</Text>
                </View>
                <ScrollView style = {styles.body}>
                    <View style = {styles.card}>
                        <View style ={styles.cardHeader}>
                            <Text style = {[styles.mainTitle, {fontSize: vw(4.2)}]}>
                                Insights
                            </Text>
                            <Svg width={vw(1.4)} height={vw(5.3)} viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Circle cx="2.51181" cy="17.0116" r="1.98837" transform="rotate(-90 2.51181 17.0116)" fill="#949494"/>
                                <Circle cx="2.51181" cy="9.50003" r="1.98837" transform="rotate(-90 2.51181 9.50003)" fill="#949494"/>
                                <Circle cx="2.51181" cy="1.98831" r="1.98837" transform="rotate(-90 2.51181 1.98831)" fill="#949494"/>
                            </Svg>
                        </View>
                        <View style = {styles.cardBody}>
                            <View style = {styles.chart}>
                                <Svg width={vw(11.4)} height={vw(10.6)} viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Path d="M39.6175 20.2025H25.5641C24.9499 20.2025 24.4492 20.7032 24.4492 21.3172C24.4492 21.63 24.5821 21.9118 24.7894 22.115L34.6852 32.0108C34.8885 32.2298 35.1821 32.3669 35.5029 32.3669C35.89 32.3669 36.2302 32.1713 36.4297 31.874C38.8213 29.0979 40.3738 25.5849 40.6935 21.7175C40.7045 21.584 40.7324 21.4511 40.7324 21.3171C40.7325 20.7032 40.2356 20.2025 39.6175 20.2025Z" fill="#50FFFF"/>
                                    <Path d="M21.3198 0C20.7056 0.00375494 20.209 0.500659 20.209 1.11472V16.7329C20.209 17.351 20.7056 17.8516 21.3198 17.8516H36.942C37.5562 17.8516 38.0567 17.351 38.0567 16.7329C37.5051 7.74469 30.312 0.551601 21.3198 0Z" fill="#50FFFF"/>
                                    <Path d="M29.9058 31.0994L18.3829 19.5765C18.1874 19.377 18.0701 19.0993 18.0701 18.7981L18.066 2.5227C18.066 1.90864 17.5694 1.41187 16.9552 1.41187C7.59523 1.98299 0.183105 9.75872 0.183105 19.2597C0.183105 29.136 8.18989 37.1465 18.066 37.1465C22.5719 37.1465 26.6867 35.4803 29.8315 32.7304C30.0741 32.5269 30.2266 32.222 30.2266 31.8817C30.2266 31.5804 30.1052 31.3027 29.9058 31.0994Z" fill="#50FFFF"/>
                                </Svg>
                                <View style = {{flexDirection: 'column', justifyContent: 'space-around'}}>
                                    <Text style = {styles.mainTitle}>
                                        Insights
                                    </Text>
                                    <Text style = {[styles.mainTitle, {fontSize: vw(2.8)}]}>
                                        Balance Trends
                                    </Text>
                                </View>
                            </View>
                            <View style = {{height: vw(10.6), borderWidth: vw(0.15), borderColor: '#53FAFB'}}/>
                            <View style = {styles.sol}>
                                <Text style = {[styles.mainTitle, {fontFamily: 'TT Firs Neue Trial DemiBold'}]}>
                                    87, 9 SOL
                                </Text>
                                <Text style = {[styles.mainTitle, {fontSize: vw(2.8), color: '#53FAFB'}]}>
                                    +4.3% 
                                    <Text style = {[styles.mainTitle, {fontSize: vw(2.8)}]}>
                                        vs last week
                                    </Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.card}>
                        <View style ={styles.cardHeader}>
                            <Text style = {[styles.mainTitle, {fontSize: vw(4.2)}]}>
                                Sales report
                            </Text>
                            <Svg width={vw(1.4)} height={vw(5.3)} viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Circle cx="2.51181" cy="17.0116" r="1.98837" transform="rotate(-90 2.51181 17.0116)" fill="#949494"/>
                                <Circle cx="2.51181" cy="9.50003" r="1.98837" transform="rotate(-90 2.51181 9.50003)" fill="#949494"/>
                                <Circle cx="2.51181" cy="1.98831" r="1.98837" transform="rotate(-90 2.51181 1.98831)" fill="#949494"/>
                            </Svg>
                        </View>
                        <View style = {[styles.cardBody, {height: vw(105), flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: vw(5)}]}>
                            <View style= {styles.topList}>
                                <View style = {styles.dayBtn}>
                                    <Text style = {[styles.mainTitle, {fontSize: vw(4.2), marginRight: vw(2)}]}>
                                        Daily
                                    </Text>
                                    <Svg width={vw(5.6)} height={vw(5.6)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M5 7.5L10 12.5L15 7.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </Svg>
                                </View>
                                    <Text style = {[styles.text, {width: vw(19.7)}]}>
                                        Jun 21, 2023
                                    </Text>
                            </View>
                            <ImageBackground source={require('../../assets/images/chart.png')}
                                style = {styles.graph}
                            >
                                <View style = {{position: 'absolute', flexDirection: 'row', alignItems: 'center', bottom: vw(29.4), left: vw(60.3), width: vw(22.5), justifyContent: 'space-between'}}>
                                    <Svg width={vw(2)} height={vw(2.2)} viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <Path d="M0.676269 4L6.69833 0.535898L6.69833 7.4641L0.676269 4Z" fill="#50FFFF"/>
                                    </Svg>
                                    <View style = {styles.solBtn}>
                                        <Text style = {styles.btnText}>
                                            5.2 SOL
                                        </Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            <View style = {styles.chartVal}>
                                {
                                    chartArray.map((item, index) =>
                                        <View key = {index} style = {styles.items}>
                                            <Text style = {[styles.text, {color: 'grey',fontSize: vw(3.3), marginBottom: vw(2.2)}]}>
                                                {item.name}
                                            </Text>
                                            <View style = {styles.itemValue}>
                                                {
                                                    item.value?.map((i, idx) => 
                                                        <View key = {idx} style = {styles.values}>
                                                            {item.name === 'Growth' && 
                                                                <Svg width={vw(1.7)} height={vw(1.7)} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <Path d="M3.24153 0.758479C3.10813 0.625088 2.89186 0.625088 2.75847 0.758479L0.584737 2.93222C0.451345 3.06561 0.451346 3.28188 0.584737 3.41527C0.718128 3.54866 0.934398 3.54866 1.06779 3.41527L3 1.48306L4.93221 3.41527C5.0656 3.54866 5.28187 3.54866 5.41526 3.41527C5.54865 3.28188 5.54865 3.06561 5.41526 2.93222L3.24153 0.758479ZM3.34157 5.78198L3.34157 1.00001L2.65843 1.00001L2.65843 5.78198L3.34157 5.78198Z" fill="#4DE265"/>
                                                                </Svg>
                                                            }
                                                            <Text style = {[styles.text, {marginLeft: item.name === 'Growth' ? vw(1) : 0}]}>
                                                                {i}
                                                            </Text>
                                                        </View>
                                                    )
                                                }
                                            </View>
                                        </View>
                                    )
                                }
                            </View>
                        </View>
                        <View style = {[styles.cardBody, {marginTop: vw(6.92), height: vw(31.94)}]}>
                            <View style = {[styles.chart, {width: vw(29.25)}]}>
                                <View style = {{flexDirection: 'column', justifyContent: 'space-between', height: vw(22.2)}}>
                                    <Text style = {[styles.text, {color: 'grey',fontSize: vw(3.3)}]}>
                                        Sales/month
                                    </Text>
                                    <Text style = {[styles.mainTitle, {fontFamily: 'TT Firs Neue Trial DemiBold', marginTop: vw(0)}]}>
                                        133 units
                                    </Text>
                                    <View style = {styles.proBtn}>
                                        <Svg width={vw(2.2)} height={vw(2.2)} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M3.69723 7.35355C3.89249 7.54882 4.20907 7.54882 4.40433 7.35355L7.58632 4.17157C7.78158 3.97631 7.78158 3.65973 7.58632 3.46447C7.39105 3.2692 7.07447 3.2692 6.87921 3.46447L4.05078 6.29289L1.22235 3.46447C1.02709 3.2692 0.71051 3.2692 0.515247 3.46447C0.319985 3.65973 0.319985 3.97631 0.515247 4.17157L3.69723 7.35355ZM4.55078 7L4.55078 2.18557e-08L3.55078 -2.18557e-08L3.55078 7L4.55078 7Z" fill="#FF5C5C"/>
                                        </Svg>
                                        <Text style = {[styles.mainTitle, {fontSize: vw(3.3)}]}>
                                            23.24%
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style = {[styles.sol, {alignItems:'center',justifyContent: 'center', marginRight: vw(5)}]}>
                                <Image source = {require('../../assets/images/downVector.png')}
                                    style = {{width: vw(38.7), height: vw(15.6)}}
                                />
                            </View>
                        </View>
                    </View>
                    <View style = {styles.card}>
                        <View style ={styles.cardHeader}>
                            <Text style = {[styles.mainTitle, {fontSize: vw(4.2)}]}>
                                Revenue
                            </Text>
                            <Svg width={vw(1.4)} height={vw(5.3)} viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Circle cx="2.51181" cy="17.0116" r="1.98837" transform="rotate(-90 2.51181 17.0116)" fill="#949494"/>
                                <Circle cx="2.51181" cy="9.50003" r="1.98837" transform="rotate(-90 2.51181 9.50003)" fill="#949494"/>
                                <Circle cx="2.51181" cy="1.98831" r="1.98837" transform="rotate(-90 2.51181 1.98831)" fill="#949494"/>
                            </Svg>
                        </View>
                        <View style = {[styles.cardBody, { height: vw(31.94)}]}>
                            <View style = {[styles.chart, {width: vw(29.25)}]}>
                                <View style = {{flexDirection: 'column', justifyContent: 'space-between', height: vw(22.2)}}>
                                    <Text style = {[styles.text, {color: 'grey',fontSize: vw(3.3)}]}>
                                        Revenue/month
                                    </Text>
                                    <Text style = {[styles.mainTitle, {fontFamily: 'TT Firs Neue Trial DemiBold', marginTop: vw(0)}]}>
                                        23K SOL
                                    </Text>
                                    <View style = {[styles.proBtn, {backgroundColor: '#53FAFB20'}]}>
                                        <Svg width={vw(2.2)} height={vw(2.2)} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M4.40433 0.646447C4.20907 0.451184 3.89249 0.451184 3.69723 0.646447L0.515248 3.82843C0.319985 4.02369 0.319985 4.34027 0.515247 4.53553C0.71051 4.7308 1.02709 4.7308 1.22235 4.53553L4.05078 1.70711L6.87921 4.53553C7.07447 4.7308 7.39105 4.7308 7.58632 4.53553C7.78158 4.34027 7.78158 4.02369 7.58632 3.82843L4.40433 0.646447ZM4.55078 8L4.55078 1L3.55078 1L3.55078 8L4.55078 8Z" fill="#50FFFF"/>
                                        </Svg>
                                        <Text style = {[styles.mainTitle, {fontSize: vw(3.3)}]}>
                                            23.24%
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style = {[styles.sol, {alignItems:'center',justifyContent: 'center', marginRight: vw(5)}]}>
                                <Image source = {require('../../assets/images/upVector.png')}
                                    style = {{width: vw(38.7), height: vw(15.6)}}
                                />
                            </View>
                        </View>
                    </View>
                    <View style = {styles.card}>
                        <View style ={[styles.cardHeader, {marginBottom: vw(9.1)}]}>
                            <Text style = {[styles.mainTitle, {fontSize: vw(4.2)}]}>
                                Balance
                            </Text>
                            <Svg width={vw(1.4)} height={vw(5.3)} viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Circle cx="2.51181" cy="17.0116" r="1.98837" transform="rotate(-90 2.51181 17.0116)" fill="#949494"/>
                                <Circle cx="2.51181" cy="9.50003" r="1.98837" transform="rotate(-90 2.51181 9.50003)" fill="#949494"/>
                                <Circle cx="2.51181" cy="1.98831" r="1.98837" transform="rotate(-90 2.51181 1.98831)" fill="#949494"/>
                            </Svg>
                        </View>
                        <View style = {[styles.cardBody, { height: vw(65.83), flexDirection: 'column'}]}>
                            <Text style = {[styles.text, {fontSize: vw(5.6), width: vw(80), marginTop: vw(3)}]}>
                                Balance: 125 235 SOL
                            </Text>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: vw(0)}}>
                                <SegmentedArc 
                                    segments={segments} 
                                    fillValue={50} 
                                    isAnimated={true} 
                                    animationDelay={1000} 
                                    filledArcWidth = {vw(6.4)}
                                    emptyArcWidth = {vw(6.4)}
                                    capInnerColor = {'transparent'}
                                    capOuterColor = {'transparent'}
                                    showArcRanges = {true}
                                    style={{ borderRadius: 10 }} 
                                />
                                <View style = {{position: 'absolute', bottom: vw(0.5)}}>
                                    <Text style = {[styles.mainTitle, {fontFamily: 'TT Firs Neue Trial DemiBold', fontSize: vw(6.92)}]}>
                                        50%
                                    </Text>
                                    <Text style = {[styles.text, {color: 'grey', textAlign:'center'}]}>
                                        growth
                                    </Text>
                                </View>
                            </View>
                            <View style = {styles.footer}>
                                <Text style = {[styles.mainTitle, {fontFamily: 'TT Firs Neue Trial DemiBold', fontSize: vw(3.6)}]}>
                                    update
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: '100%',
        backgroundColor: '#131313',
        flexDirection: 'column',
    },
    header: {
        position: 'absolute',
        width: vw(100),
        height: vw(23.3),
        paddingTop: vw(17.8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: vw(5),
        paddingRight: vw(5)
    },
    mainTitle: {
        fontFamily: 'TT Firs Neue Trial Medium',
        color: 'white',
        fontSize: vw(5)
    },
    body: {
        width: vw(100),
        marginTop: vw(29.44),
        marginBottom: vw(5),
        paddingLeft: vw(5),
        paddingRight: vw(5)
    },
    card: {
        // height: vw(34.17),
        flexDirection: 'column',
        marginTop: vw(9.1)
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: vw(5.3)
    },
    cardBody: {
        backgroundColor: '#212121',
        height: vw(23.3),
        borderRadius: vw(5.6),
        borderWidth: vw(0.3),
        borderColor: '#323232',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    chart: {
        width: vw(37.8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    sol: {
        width: vw(30),
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    topList: {
        width: vw(80),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: vw(3.6)
    },
    dayBtn: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'TT Firs Neue Trial Regular',
        color: 'white',
        fontSize: vw(2.2)
    },
    graph: {
        width: vw(90),
        height: vw(33.3),
        position: 'relative',
    },
    solBtn: {
        width: vw(20),
        height: vw(6.9),
        borderRadius: vw(5),
        backgroundColor: '#53FAFB',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontFamily: 'Poppins-SemiBold',
        color: 'black',
        fontSize: vw(4.2)
    },
    chartVal: {
        marginTop: vw(6.4),
        width: vw(80),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemValue: {
        height: vw(38.3),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    values: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    proBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: vw(20.6),
        height: vw(6.7),
        backgroundColor: '#FF535335',
        borderRadius: vw(5)
    },
    footer: {
        width: vw(58),
        height: vw(12),
        borderRadius: vw(3),
        backgroundColor: '#00000025',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Settings;