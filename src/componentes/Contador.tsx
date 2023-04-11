import React, { useState } from "react";
import { Text, Button } from "react-native";
import padrao from "../estilo/padrao";

export default (props : any) => {
    
    let [numero, setNumero] = useState( props.valorInicial )
    
    const somar = ()=> setNumero( numero++ )
    const diminuir = ()=> setNumero( numero-- )

    return (
        <>
            <Text> { numero }</Text>
            <Button title="+" onPress={ somar } />
            <Button title="-" onPress={ diminuir } />
        </>
    )
}