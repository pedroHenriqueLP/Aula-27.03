import React from "react";
import { Text } from "react-native";
import padrao from "../../estilo/padrao";
import Membro from "./Membro";


export default (props: any) => {
    return(
        <>
            <Text style={padrao.txtG}>Membros da Família</Text>
            {props.children}
        </>
    )
}