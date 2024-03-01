import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default LocationPermit = () => {
  return (
    <View style={{ alignItems: "center", height: "100%" }}>
      <Text style={{ marginTop: "25%", fontSize: 20, fontWeight: "bold" }}>
        Explore Restaurant nearby
      </Text>
      <Image style={{ marginTop: "100%"}} source={require("./../assets/pana.png")} />
      <Text style={{ width: "90%", fontSize: 12, marginVertical: 20, textAlign: "center" }}>
        By granting permissions you can search for restaurants around you and
        recieve more accurate delivery
      </Text>
      <TouchableOpacity
        style={{
          width: "90%",
          height: 60,
          backgroundColor: "red",
          borderRadius: 9,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 800, color: "white" }}>
          Grant Permission
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// const styles = StyleSheet.create({
//   gpText: {
//     fontSize: 20,
//     fontWeight: 800,
//     color: "white",
//   },
// });
