import {
	Image,
	View,
	Text,
	TouchableOpacity
} from 'react-native';

import styles from './classicdrinkcard.style';

const ClassicDrinkCard = ({ item, handleNavigate }) => {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={handleNavigate}
		>
			<TouchableOpacity style={styles.imageContainer}>
				<Image
					source={{ uri: item.image }}
					resizeMode='contain'
					style={styles.image}
				/>
			</TouchableOpacity>
			<View style={styles.textContainer}>
				<Text
					style={styles.drinkName}
					numberOfLines={1}
				>
					{item.name}
				</Text>
				<Text style={styles.drinkType}>{item.type.name}</Text>
			</View>
		</TouchableOpacity>
	);
}

export default ClassicDrinkCard;