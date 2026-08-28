import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#f9f9f9',
    marginBottom: 5,
  },
  angleDisplay: {
    fontSize: 22,
    fontWeight: '600',
    color: '#ffcc00',
    marginBottom: 20,
  },
  graphicArea: {
    width: 300,
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    borderWidth: 3,
    borderColor: '#4da6ff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  axisX: {
    width: '100%',
    height: 2,
    backgroundColor: '#ff4d4d',
    position: 'absolute',
  },
  axisY: {
    width: 2,
    height: '100%',
    backgroundColor: '#4dff4d',
    position: 'absolute',
  },
  movingPoint: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#ffcc00',
    position: 'absolute',
    elevation: 5,
  },
  sliderContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  sliderLabel: {
    color: '#aaa',
    marginBottom: 5,
    fontSize: 14,
  },
  // Estilos novos para a Parte 3 (Ângulos Notáveis)
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginVertical: 20,
    maxWidth: 320,
  },
  shortcutButton: {
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ffcc00',
  },
  shortcutButtonText: {
    color: '#ffcc00',
    fontWeight: 'bold',
    fontSize: 14,
  },
  resultsPanel: {
    backgroundColor: '#1A1A1A',
    padding: 15,
    borderRadius: 12,
    width: 300,
    borderWidth: 1,
    borderColor: '#333',
  },
  resultsTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  resultText: {
    color: '#bbb',
    fontSize: 14,
    marginVertical: 2,
  },
  valueSeno: {
    color: '#4dff4d',
    fontWeight: 'bold',
  },
  valueCosseno: {
    color: '#ff4d4d',
    fontWeight: 'bold',
  },
  valueTangente: {
    color: '#ffcc00',
    fontWeight: 'bold',
  },
});