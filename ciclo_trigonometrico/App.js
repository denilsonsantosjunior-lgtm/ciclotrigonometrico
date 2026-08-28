import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from './styles'; // Importando o CSS separado!

const VALORES_NOTAVEIS = {
  0:   { sen: "0",      cos: "1",       tan: "0" },
  30:  { sen: "1/2",    cos: "√3/2",    tan: "√3/3" },
  45:  { sen: "√2/2",   cos: "√2/2",    tan: "1" },
  60:  { sen: "√3/2",   cos: "1/2",     tan: "√3" },
  90:  { sen: "1",      cos: "0",       tan: "Indefinida" },
  180: { sen: "0",      cos: "-1",      tan: "0" },
  270: { sen: "-1",     cos: "0",       tan: "Indefinida" },
  360: { sen: "0",      cos: "1",       tan: "0" }
};

const API_URL = "https://didactic-invention-7vg976jpjrq6hxvvx-3000.app.github.dev";

export default function App() {
  const [angulo, setAngulo] = useState(0);

  // Lógica dos Ângulos Notáveis (Agora posicionada corretamente dentro do componente!)
  const anguloArredondado = Math.round(angulo);
  const ehNotavel = VALORES_NOTAVEIS[anguloArredondado];

  const stringSeno = ehNotavel ? ehNotavel.sen : Math.sin(angulo * Math.PI / 180).toFixed(4);
  const stringCosseno = ehNotavel ? ehNotavel.cos : Math.cos(angulo * Math.PI / 180).toFixed(4);
  const stringTangente = ehNotavel ? ehNotavel.tan : (anguloArredondado % 180 === 90 ? "Indefinida" : Math.tan(angulo * Math.PI / 180).toFixed(4));

  const salvarDadosNoBanco = async (anguloSalvar) => {
    const rad = (anguloSalvar * Math.PI) / 180;
    const s = Math.sin(rad).toFixed(3);
    const c = Math.cos(rad).toFixed(3);

    try {
      const resposta = await fetch(`${API_URL}/api/historico`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          angulo: Math.round(anguloSalvar),
          seno: parseFloat(s),
          cosseno: parseFloat(c)
        }),
      });

      if (resposta.ok) {
        console.log(`Ângulo ${Math.round(anguloSalvar)}° gravado com sucesso!`);
      }
    } catch (error) {
      console.log("Não foi possível conectar ao backend. Verifique se a porta 3000 está Pública.");
    }
  };

  const raio = 125; 
  const radiano = (angulo * Math.PI) / 180;
  const pontoX = raio * Math.cos(radiano);
  const pontoY = -raio * Math.sin(radiano);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📐 Ciclo Trigonométrico</Text>
      <Text style={styles.angleDisplay}>Ângulo: {anguloArredondado}°</Text>

      {/* Área do Gráfico */}
      <View style={styles.graphicArea}>
        <View style={styles.circle}>
          <View style={styles.axisY} />
          <View style={styles.axisX} />
          <View style={[styles.movingPoint, { transform: [{ translateX: pontoX }, { translateY: pontoY }] }]} />
        </View>
      </View>

      {/* Barra de Arrastar (Slider) */}
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Arraste para mudar o ângulo:</Text>
        <Slider
          style={{ width: 300, height: 40 }}
          minimumValue={0}
          maximumValue={360}
          minimumTrackTintColor="#4da6ff"
          maximumTrackTintColor="#888"
          thumbTintColor="#ffcc00"
          value={angulo}
          onValueChange={(valor) => setAngulo(valor)}
          onSlidingComplete={(valor) => salvarDadosNoBanco(valor)}
        />
      </View>

      {/* PARTE 3: Botões Rápidos de Ângulos Notáveis */}
      <View style={styles.buttonsContainer}>
        {[30, 45, 60, 90, 180, 270].map((valor) => (
          <TouchableOpacity 
            key={valor} 
            style={styles.shortcutButton}
            onPress={() => {
              setAngulo(valor);
              salvarDadosNoBanco(valor); // Já salva no banco de dados direto ao clicar!
            }}
          >
            <Text style={styles.shortcutButtonText}>{valor}°</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* PARTE 3: Painel de Resultados */}
      <View style={styles.resultsPanel}>
        <Text style={styles.resultsTitle}>Valores do Ângulo:</Text>
        <Text style={styles.resultText}>Seno (Eixo Y): <Text style={styles.valueSeno}>{stringSeno}</Text></Text>
        <Text style={styles.resultText}>Cosseno (Eixo X): <Text style={styles.valueCosseno}>{stringCosseno}</Text></Text>
        <Text style={styles.resultText}>Tangente: <Text style={styles.valueTangente}>{stringTangente}</Text></Text>
      </View>
    </View>
  );
}