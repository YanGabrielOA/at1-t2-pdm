import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const pizzaData = [
  {
    id: '1',
    nome: 'Mamamia Clássica',
    descricao: 'Molho artesanal, mussarela fresca, manjericão italiano',
    valor: 'R$ 49,90',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KFDZkjY8zVpr1ftr2n7Rm_OLf0Eq3inoxw&s'
  },
  {
    id: '2',
    nome: 'Calabresa Premium',
    descricao: 'Calabresa especial, cebola dourada, orégano e azeitonas',
    valor: 'R$ 56,90',
    imagem: 'https://i.metroimg.com/FzSfQUACvU44tyzUcF9ebwZfAkDbgr6Rp1M_JwJvvDo/w:1200/q:85/f:webp/plain/2021/07/13144404/Pizza-Calabresa-Picante-Massa-de-Pizza-com-Cachaca-e-Mel-1.jpg'
  },
  {
    id: '3',
    nome: 'Quattro Mamamia',
    descricao: 'Mussarela, gorgonzola, parmesão e provolone cremoso',
    valor: 'R$ 62,90',
    imagem: 'https://blog.pizzaprime.com.br/wp-content/uploads/2018/12/img-4.jpg'
  },
  {
    id: '4',
    nome: 'Portuguesa da Casa',
    descricao: 'Presunto, ovos, cebola, ervilhas e azeitonas',
    valor: 'R$ 57,90',
    imagem: 'https://receitasde.com.br/wp-content/uploads/2024/07/Pizza-Portuguesa.jpg'
  },
  {
    id: '5',
    nome: 'ChocoMia',
    descricao: 'Chocolate cremoso, morangos frescos e toque de leite condensado',
    valor: 'R$ 45,90',
    imagem: 'https://img.freepik.com/fotos-premium/pizza-de-chocolate-brasileira-doce-pizzaxa_253722-110.jpg?semt=ais_hybrid&w=740&q=80'
  }
];

function renderItem({ item }) {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imagem }} style={styles.pizzaImage} resizeMode="cover" />

      <View style={styles.infoContainer}>
        <Text style={styles.nomeText}>{item.nome}</Text>
        <Text style={styles.descricaoText}>{item.descricao}</Text>
        <Text style={styles.valorText}>{item.valor}</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => console.log(`Adicionado: ${item.nome}`)}
        >
          <Text style={styles.botaoTexto}>Adicionar à Sacola</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ListHeader() {
  return (
    <View>
      <View style={styles.welcomeSection}>
        <View style={styles.welcomeContent}>
          <Text style={styles.welcomeTitle}>Bem-vindo ao Menu Mamamia</Text>
          <Text style={styles.welcomeSubtitle}>Sabores Mamamia</Text>
        </View>
        <View style={styles.logoBackground}>
          <Image
            source={require('@/assets/images/logopizzaria.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
      </View>

      <Text style={styles.menuTitle}>Nossas Pizzas</Text>
    </View>
  );
}

export default function PizzariaScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/logopizzaria.png')}
          style={styles.logoImageHeader}
        />
        <Text style={styles.subLogoText}>PIZZA & RESTAURANTE</Text>
      </View>

      <FlatList
        data={pizzaData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lista}
        ListHeaderComponent={ListHeader}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF4DF', // Tom creme mais suave e moderno
    paddingTop: StatusBar.currentHeight || 0,
  },

  /* ---------------- HEADER ---------------- */
  header: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 26,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFD9A3',
    shadowColor: '#FF9E00',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },

  logoImageHeader: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },

  subLogoText: {
    fontSize: 13,
    color: '#FF8C00',
    letterSpacing: 5,
    marginTop: 6,
    fontWeight: '600',
  },

  /* ---------------- WELCOME CARD ---------------- */
  welcomeSection: {
    backgroundColor: '#FF8A00',
    margin: 20,
    marginBottom: 10,
    borderRadius: 22,
    padding: 26,
    height: 155,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#FF8C00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 10,
    elevation: 5,
  },

  welcomeContent: {
    zIndex: 2,
    position: 'relative',
  },

  welcomeTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 4,
  },

  welcomeSubtitle: {
    fontSize: 15,
    color: '#FFEAC7',
    fontWeight: '600',
    opacity: 0.9,
  },

  logoBackground: {
    position: 'absolute',
    top: -10,
    right: -10,
    zIndex: 1,
    width: 150,
    height: 150,
  },

  logoImage: {
    width: '100%',
    height: '100%',
    opacity: 0.10,
  },

  /* ---------------- LIST TITLE ---------------- */
  menuTitle: {
    fontSize: 27,
    fontWeight: '900',
    color: '#FF7B00',
    textAlign: 'center',
    marginBottom: 18,
    marginTop: 20,
    letterSpacing: 1,
  },

  lista: {
    paddingBottom: 50,
  },

  /* ---------------- CARD ---------------- */
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    marginHorizontal: 20,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FFE0B5',
    shadowColor: '#FF8C00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.20,
    shadowRadius: 7,
    elevation: 4,
  },

  pizzaImage: {
    width: '100%',
    height: 200,
  },

  infoContainer: {
    padding: 20,
  },

  nomeText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FF7B00',
    marginBottom: 6,
  },

  descricaoText: {
    fontSize: 14,
    color: '#5A5A5A',
    marginBottom: 14,
    lineHeight: 20,
  },

  valorText: {
    fontSize: 19,
    fontWeight: '900',
    color: '#FF7B00',
    marginBottom: 20,
  },

  /* ---------------- BUTTON ---------------- */
  botao: {
    backgroundColor: '#FF9900',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF7B00',
    shadowColor: '#FF7B00',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});
