import { StyleSheet, View, Text, FlatList } from 'react-native'

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Movements from '../../components/Movements'
import Actions from '../../components/Actions'

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix cliente',
    value: '700,90',
    date: '10/09/2022',
    type: 1 //entrada
  },
  {
    id: 3,
    label: 'Salário',
    value: '2.300,90',
    date: '07/09/2022',
    type: 1 //entrada
  }
]



export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="João Lucas"/>
      <Balance saldo="9.250,00" gastos="-590,00"/>
      
      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => 
          <Movements data={item}/>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 18, 
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
})