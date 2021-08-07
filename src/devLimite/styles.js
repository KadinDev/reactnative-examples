import styled from 'styled-components/native';

import Slider from '@react-native-community/slider';


import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
    background-color: #FFF;
    flex: 1;
    align-items: center;
    width: 100%;
`
export const Header = styled.View`
    height: ${RFPercentage(5)}px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const Title = styled.Text`
    color: #111;
    opacity: 0.8;
    font-size: ${RFValue(22)}px;
    font-weight: bold;
`

export const ContainerMoney = styled.View`
    width: 100%;
    padding: 20px;
    margin-top: ${RFValue(50)}px;
`;

export const MyLimited = styled.Text`
    text-align: center;
    font-size: ${RFValue(30)}px;
    font-weight: bold;
    border-bottom-width: 2px;
    border-color: #e2e2e2;
    margin-bottom: ${RFValue(20)}px;
`;

export const LimitedDisponivel = styled.Text`
    text-align: center;
    font-size: ${RFValue(18)}px;
    font-weight: bold;
    color: green;
    opacity: 0.8;
    margin-bottom: ${RFValue(80)}px;
`;

export const ContainerSlider = styled.View`
    margin: 0 auto;
    width: ${RFPercentage(50)}px;
`;

export const Values = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${RFValue(5)}px;
`;

export const ValorMinimum = styled.Text`
    color: #999;
    font-weight: bold;
    font-size: ${RFValue(18)}px;
    margin-left: 10px;
`;

export const ValorMaximum = styled.Text`
    color: #999;
    font-weight: bold;
    font-size: ${RFValue(18)}px;
    margin-right: 10px;
`;

export const SliderContainer = styled(Slider)`
    border-radius: 5px;
    height: 6px;
    width: 100%;
    margin-top: ${RFValue(10)}px;
`

