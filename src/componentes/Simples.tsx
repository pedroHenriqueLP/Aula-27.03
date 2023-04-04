import React from "react";
import { Text } from "react-native";
import padrao from "../estilo/padrao";
import Frag from "./Frag";

export default (props: any) => 
   <Frag style={padrao.ex}>Arrow 1: {props.texto} </Frag>