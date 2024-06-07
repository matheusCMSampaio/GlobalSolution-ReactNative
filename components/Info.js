import { Image, ScrollView, Text, StyleSheet } from 'react-native';
import Pagina from './Pagina';
import { useNavigation } from '@react-navigation/native';

export default function Info() {
    const navigation = useNavigation();
  return (
    <Pagina footer={false} showLogoutButton={true} navigation={navigation}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies facilisis condimentum. Nunc tempor consequat erat, nec placerat turpis efficitur id. Nullam non iaculis massa. Aliquam sed quam nec orci maximus vulputate. Nulla elit erat, porttitor et purus et, tempor egestas arcu. Quisque finibus diam et nisi ultrices aliquet. Cras ut urna quam. Nullam vulputate fermentum ante hendrerit lacinia. Quisque dictum facilisis orci, eu rutrum massa commodo nec. Curabitur a nulla in ipsum venenatis lobortis. Nam non maximus nisl, vel ultricies leo. Sed egestas suscipit iaculis.

          Praesent eleifend semper sapien at faucibus. Etiam pellentesque velit eget ipsum laoreet, in rutrum ligula gravida. Curabitur quis tristique purus, ut euismod urna. Quisque hendrerit nisl tortor, eget varius diam feugiat vitae. In imperdiet, justo vel vulputate faucibus, neque turpis sodales neque, et euismod libero lorem vitae sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dapibus nisl diam, vel ullamcorper ipsum imperdiet id. Mauris sit amet enim neque. Morbi sollicitudin vitae nibh ut pellentesque. Praesent sit amet mattis diam. Cras rutrum at nulla eu feugiat. Donec ut ligula mauris. Pellentesque ullamcorper porta sodales.

          Sed sed consectetur ex. Nam vitae velit vel orci tincidunt consequat nec id ligula. Nam eu nisl nibh. Donec sem arcu, dapibus nec tellus at, varius varius est. In vitae magna orci. Aenean venenatis hendrerit tortor, non dapibus mi venenatis scelerisque. Aenean commodo risus quis erat dapibus, vitae porta justo vulputate. Nunc et orci efficitur, porta elit vitae, fermentum orci. Donec rutrum egestas vulputate. Pellentesque vel lectus justo. Vivamus ut dignissim purus. Sed sapien ipsum, eleifend nec eleifend scelerisque, venenatis vitae urna. Aliquam in ipsum ut felis cursus vestibulum. Sed nec viverra sem, at ultrices purus.

          Etiam volutpat molestie pharetra. Maecenas varius mauris eros, ac iaculis metus lacinia et. Vestibulum dapibus pulvinar nibh non scelerisque. Duis luctus facilisis nibh, eget venenatis sapien mollis sit amet. Cras rhoncus nunc sed dolor cursus semper. Nam id semper nisi. Curabitur at sollicitudin justo. Aliquam erat volutpat. Ut mollis, dolor eu posuere finibus, mauris magna vulputate turpis, in posuere arcu lorem eget elit. In placerat metus at felis luctus consectetur eu sed dolor. Quisque pulvinar justo libero, vel tempor dolor porttitor non. Fusce cursus vestibulum velit, in ullamcorper leo congue et.

          Morbi congue semper euismod. Vivamus leo mi, posuere eu nulla a, blandit tempus mauris. Mauris nulla mi, accumsan at dapibus eget, viverra non nulla. Quisque in cursus risus, suscipit pellentesque ex. Etiam tincidunt mi quis semper ultrices. In at magna quis ex mollis porta ut a sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In tempus pulvinar vulputate. Mauris vel venenatis erat, a laoreet nunc. In feugiat lacinia arcu porta auctor.
        </Text>
      </ScrollView>
    </Pagina>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 80, 
  },
  text: {
    paddingHorizontal: 16,
    paddingTop: 16,
    lineHeight: 20,
  },
});
