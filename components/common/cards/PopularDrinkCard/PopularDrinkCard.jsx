import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import styles from './populardrinkcard.style';

const PopularDrinkCard = ({ item, selectedDrink, handleCardPress }) => {
	return (
		<TouchableOpacity
			style={styles.container(selectedDrink, item)}
			onPress={() => handleCardPress(item)}
		>
			<TouchableOpacity style={styles.imageContainer(selectedDrink, item)}>
				<Image
					source={{ uri: item.image }}
					resizeMode='contain'
					style={styles.image}
				/>
			</TouchableOpacity>
			<Text
				style={styles.drinkType}
				numberOfLines={1}
			>
				{item.type.name}
			</Text>
			<View style={styles.infoContainer}>
				<Text
					style={styles.drinkName(selectedDrink, item)}
					numberOfLines={1}
				>
					{item.name}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

export default PopularDrinkCard;