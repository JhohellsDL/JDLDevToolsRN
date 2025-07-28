import { useCategories } from './hooks/useCategories';
import { useDesignTools } from './hooks/useDesignTools';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function ToolListScreen() {
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    error: categoriesError,
  } = useCategories();

  const {
    data: designTools,
    isLoading: isDesignToolsLoading,
    error: designToolsError,
  } = useDesignTools();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Mi Catálogo de Herramientas Dev</Text>

      {/* Render categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categorías</Text>
        {isCategoriesLoading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : categoriesError ? (
          <Text style={styles.errorText}>
            Error al cargar categorías: {categoriesError.message}
          </Text>
        ) : (
          <View>
            {categories &&
              categories.map(cat => (
                <Text key={cat.id} style={styles.itemText}>
                  {cat.icon} {cat.name} ({cat.subcategories.length}{' '}
                  subcategorías)
                </Text>
              ))}
          </View>
        )}
      </View>

      {/* Sección de Herramientas de Diseño */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Herramientas de Diseño (Ejemplo)
        </Text>
        {isDesignToolsLoading ? (
          <ActivityIndicator size="small" color="#00ff00" />
        ) : designToolsError ? (
          <Text style={styles.errorText}>
            Error al cargar herramientas de diseño:
            {designToolsError.message}
          </Text>
        ) : (
          <View>
            {designTools &&
              designTools.map(tool => (
                <View key={tool.id} style={styles.toolItem}>
                  <Text style={styles.toolName}>{tool.name}</Text>
                  <Text style={styles.toolDescription}>{tool.description}</Text>
                  <Text style={styles.toolUrl}>{tool.url}</Text>
                </View>
              ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#555',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 5,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#444',
  },
  toolItem: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  toolName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  toolDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  toolUrl: {
    fontSize: 12,
    color: '#007bff',
    marginTop: 2,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ToolListScreen;
