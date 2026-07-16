import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { coloresEstado } from "../constants/estaciones";

export function TarjetaEstacionDetalle({
  nombreEstacion,
  estado,
  latencia,
  satelites,
  disponibilidad,
  estadoTexto,
}) {
  return (
    <View style={styles.tarjeta}>
      <View style={styles.tarjetaHeader}>
        <View
          style={[
            styles.iconoEstacion,
            { backgroundColor: coloresEstado[estado] || "#808080" },
          ]}
        >
          <Ionicons name="wifi" size={22} color="#fff" />
        </View>

        <View style={styles.tarjetaHeaderTexto}>
          <Text style={styles.tarjetaTitulo}>{nombreEstacion}</Text>
          <View
            style={[
              styles.badgeEstado,
              { backgroundColor: `${coloresEstado[estado] || "#808080"}33` },
            ]}
          >
            <Text
              style={[
                styles.badgeEstadoTexto,
                { color: coloresEstado[estado] || "#808080" },
              ]}
            >
              {estado}
            </Text>
          </View>
        </View>

        <Ionicons name="star-outline" size={22} color="#1a1a2e" />
      </View>

      <View style={styles.statsFila}>
        <View style={styles.statItem}>
          <Ionicons name="time-outline" size={20} color="#1e3a8a" />
          <Text style={styles.statLabel}>Latencia</Text>
          <Text style={styles.statValor}>{latencia}</Text>
        </View>

        <View style={styles.statDivisor} />

        <View style={styles.statItem}>
          <MaterialCommunityIcons
            name="satellite-variant"
            size={20}
            color="#1e3a8a"
          />
          <Text style={styles.statLabel}>Satélites visibles</Text>
          <Text style={styles.statValor}>{satelites}</Text>
        </View>

        <View style={styles.statDivisor} />

        <View style={styles.statItem}>
          <Ionicons name="bar-chart-outline" size={20} color="#1e3a8a" />
          <Text style={styles.statLabel}>Disponibilidad</Text>
          <Text style={styles.statValor}>{disponibilidad}</Text>
        </View>

        <View style={styles.statDivisor} />

        <View style={styles.statItem}>
          <Ionicons name="pulse-outline" size={20} color="#1e3a8a" />
          <Text style={styles.statLabel}>Estado</Text>
          <Text style={styles.statValor}>{estadoTexto}</Text>
        </View>
      </View>

      <View style={styles.botonVerDetalle}>
        <Text style={styles.botonVerDetalleTexto}>Ver detalle</Text>
        <Ionicons name="chevron-forward" size={20} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    paddingHorizontal: 18,
    paddingBottom: 18,
  },
  tarjetaHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  iconoEstacion: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  tarjetaHeaderTexto: {
    flex: 1,
  },
  tarjetaTitulo: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  badgeEstado: {
    alignSelf: "flex-start",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 4,
  },
  badgeEstadoTexto: {
    fontSize: 12,
    fontWeight: "600",
  },
  statsFila: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 14,
    paddingVertical: 14,
    marginBottom: 16,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statDivisor: {
    width: 1,
    backgroundColor: "#e5e7eb",
  },
  statLabel: {
    fontSize: 11,
    color: "#6b7280",
    marginTop: 6,
    textAlign: "center",
  },
  statValor: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
    marginTop: 2,
  },
  botonVerDetalle: {
    flexDirection: "row",
    backgroundColor: "#1e3a8a",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  botonVerDetalleTexto: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
    marginRight: 6,
  },
});
