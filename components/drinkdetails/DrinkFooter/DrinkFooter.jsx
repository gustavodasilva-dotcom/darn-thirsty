import {
	Image,
	Linking,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import styles from './drinkfooter.style';
import { icons } from '../../../constants';

const DrinkFooter = ({ url }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.likeBtn}>
				<Image
					source={icons.heartOutline}
					resizeMode='contain'
					style={styles.likeBtnImage}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buyBtn}
				onPress={() => Linking.openURL(url)}
			>
				<Text style={styles.buyBtnText}>Buy ingredients</Text>
			</TouchableOpacity>
		</View>
	);
}

export default DrinkFooter;