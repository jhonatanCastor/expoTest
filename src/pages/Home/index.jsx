import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Adicinais from '../../components/Adicinais';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/08/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix Camila Santos..',
    value: '2.000,90',
    date: '22/08/2022',
    type: 1 //receita
  },
  {
    id: 3,
    label: 'Salário',
    value: '8.000,00',
    date: '01/08/2022',
    type: 1
  },
  {
    id: 4,
    label: 'Boleto conta Netflix',
    value: '54,99',
    date: '17/08/2022',
    type: 0 //despesas
  },
  {
    id: 1,
    label: 'Boleto Mercado Central',
    value: '10,90',
    date: '17/08/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix Associação',
    value: '8.000,90',
    date: '22/08/2022',
    type: 1 //receita
  },

]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Jhonatan Castor"/>

      <Balance saldo="100.000,00" gastos="53.000,00"/>

      <Adicinais />

      <Text style={styles.title}>Ultimas movimentações</Text>

      <FlatList 
      style={styles.list}
      data={list}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({ item }) => <Moviments data={item}/> }
       />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
