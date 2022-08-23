import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView 
} from "react-native";

import { AntDesign } from '@expo/vector-icons'
  
export default function Adicinais() {
    return(
        <ScrollView styl={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
              <AntDesign name="addfolder" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>Entradas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
              <AntDesign name="tagso" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>Compras</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
              <AntDesign name="creditcard" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>Carteira</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
              <AntDesign name="barcode" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>Compras</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
              <AntDesign name="setting" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>Config</Text>
          </TouchableOpacity>

           
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
              <AntDesign name="?" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>Ajuda</Text>
          </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
   container:{
    maxHeight: 0,
    marginBottom: 14,
    marginTop: 18,
   },
   actionButton:{
    alignItems:'center',
    marginRight: 32,
   },
   areaButton:{
    backgroundColor: '#ecf0f1',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
   },
   labelButton:{
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold'
   }
})