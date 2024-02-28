import LocationPermit from "./components/LocationPermit"

export default function App() {
  return (
    <LocationPermit name="LocationPermit" component={LocationPermit} option={{ headerShown: false }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
