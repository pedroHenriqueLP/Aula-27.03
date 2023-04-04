import React from "react";
import { Text } from "react-native";
import padrao from "../estilo/padrao";

function getParImpar(num: any){
    
    /* OUTRO MÉTODO
    if (num % 2 == 0){
        return <Text style={padrao.ex}>PAR</Text>
    }else{
        return <Text style={padrao.ex}>ÍMPAR</Text>
    }*/

    const resultado = num % 2 == 0 ? 'PAR' : 'ÍMPAR'
    return <Text style={padrao.ex}>{resultado}</Text>
}


export default (props: any) => (
    <>
        {
            getParImpar(props.numero)

            /* OUTRO MÉTODO
            props.numero % 2 == 0   
            ? <Text>PAR</Text>
            : <Text>ÍMPAR</Text> */
        }
    </>
)