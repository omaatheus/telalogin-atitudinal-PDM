import { StatusBar } from 'expo-status-bar';
import { 
  ImageBackground, 
} from 'react-native';
import { styles } from '../planets/src/constants/styles.js';
import { planetinhas } from './src/assets/images.jsx';
import ContainerForm from './src/components/TopArea/containerform.js';

export default function App() {
  return (
    <ImageBackground source={planetinhas} style={styles.container}>
      <StatusBar style="light" />
      <ContainerForm />
    </ImageBackground>
    
  );
}

