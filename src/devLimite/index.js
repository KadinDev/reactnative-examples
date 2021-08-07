import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import {
    Container,
    Header,
    Title,
    ContainerMoney,
    MyLimited,
    LimitedDisponivel,
    ContainerSlider,
    Values,
    ValorMinimum,
    ValorMaximum,
    SliderContainer,
} from './styles';

export function DevLimite(){
  
    const [valor, setValor] = useState(5000);
    const fatura = 2000;

    const [input, setInput] = useState(0);

    function currencyFormat(limite){
        return `R$ ${limite.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`
    };

    function aumento(){
        alert(`Pedido de aumento com o valor de: R$ ${valor.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} foi enviado, por favor aguarde! `)
    }

    const resultado = valor - fatura;

    return(
        <Container>
            <Header>
                <Title> Ajuste de Limite </Title>
            </Header>
            
            <ContainerMoney>
                
                <MyLimited
                > { currencyFormat(valor) } </MyLimited>
                
                <LimitedDisponivel> 
                    { currencyFormat(resultado) } disponível para uso 
                </LimitedDisponivel>
                
                <ContainerSlider>

                    <Values>

                        <ValorMinimum> 300 </ValorMinimum>
                        <ValorMaximum> 10.000 </ValorMaximum>
                    
                    </Values>

                    <SliderContainer
                        minimumValue={300}
                        maximumValue={10000}
                        value={valor}
                        onValueChange={ (valorSelecionado) => setValor(valorSelecionado)  }
                        step={1}
                        minimumTrackTintColor='#999'
                        maximumTrackTintColor='green'
                        thumbTintColor="#green"

                        
                    />
                </ContainerSlider>
                
                
                
            
            </ContainerMoney>
            
            <TouchableOpacity 
                onPress={aumento}
                style={{
                    position: 'absolute',
                    bottom: 80,
                    backgroundColor: "green",
                    padding: 10,
                    borderRadius: 50,
                    width: 80,
                    height: 80,
                    alignItems: 'center',
                    justifyContent: 'center',
                
            }} activeOpacity={0.8}>
                <Text style={{
                    color: '#fff',
                    fontSize: 40
                }}>+</Text>
            </TouchableOpacity>
            <Text style={{
                color: '#777',
                position: 'absolute',
                bottom: 30,
                fontSize: 16,
                lineHeight: 18,
                textAlign: 'center',
                fontWeight: 'bold'
            }}> pedir {'\n'} aumento </Text>

        </Container>
    )
}
