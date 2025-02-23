import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, width: '80%', marginBottom: 10, borderRadius: 5 },
  weatherBox: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    margin: 10,
    alignItems: 'center',
  },
  city: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  temp: {
    fontSize: 50,
    fontWeight: '600',
    color: '#FBC02D',
    marginBottom: 8,
  },
  feelsLikeText: {
    fontSize: 16,
    marginBottom: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  minTemp: {
    fontSize: 16,
    color: '#2196F3',
  },
  maxTemp: {
    fontSize: 16,
    color: '#F44336',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 20,
  },

});

export default styles;
