import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "blue", flex: 1 }}>

      <View style={{ backgroundColor: "red", height: 150, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30 }}>Röd</Text>
      </View>



      <View style={{ height: 150, flexDirection: "row" }}>

        <View style={{ backgroundColor: "green", flex: 1, alignItems: "flex-start" }}>
          <Text style={{ fontSize: 30 }}>Grön</Text>
        </View>
        <View style={{ backgroundColor: "yellow", flex: 1 }}>
          <Text style={{ fontSize: 30 }}>Gul</Text>
        </View>

      </View>



      <View style={{ height: 100, flexDirection: "row" }}>

        <View style={{ backgroundColor: "red", flex: 80, justifyContent: "center", alignItems: "center" }} />
        <Text style={{ fontSize: 30 }}></Text><View>
        </View>

        <View style={{ backgroundColor: "black", flex: 20, justifyContent: "center", alignItems: "center" }} />


      </View>

      <View style={{ flex: 1 }} />

      <View style={{ backgroundColor: "orange", height: 40, alignItems: "flex-end" }}>
        <Text style={{ fontSize: 30 }}>Orange</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
