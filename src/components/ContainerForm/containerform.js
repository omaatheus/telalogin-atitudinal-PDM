import { 
    View, 
    Pressable, 
    Text, 
} from 'react-native'
import { englishEua } from '../../constants/i18n/english.js'
import { portugueseBr } from '../../constants/i18n/portuguese.js'
import { styles } from '../../constants/styles.js'

export default function ContainerForm() {
    return (
        <View style={styles.containerForm}>
        <Text style={styles.hello}>{englishEua.hello}</Text>
        <Text style={styles.texto}>{englishEua.texto}</Text>

        <View style={styles.botaologin}>
          <Pressable>
            <Text style={styles.textbotao}>{englishEua.textbotao}</Text>
          </Pressable>
        </View>
      </View>
    )
}