import { View, StyleSheet, Image, StatusBar, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from './../assets/logo.png';


export default function Pagina({ children, footer, showLogoutButton, navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <View style={styles.topView}>
        <Image source={Logo} style={styles.logo}/>
        {showLogoutButton && (
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.logoutButton}>
            <Icon name="exit-to-app" size={25} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.middleView}>
        {children}
      </View>
      {footer && (
        <View style={styles.bottomView}></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  topView: {
    backgroundColor: 'lightgray',
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  middleView: {
    backgroundColor: 'white',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    backgroundColor: 'white',
    borderTopWidth:1, 
    width: '100%',
    height: '10%',
  },
  logo: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain', 
  },
  logoutButton: {
    padding: 10,
  },
});
