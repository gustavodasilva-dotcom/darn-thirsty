import { Image, Text, View } from 'react-native';

import styles from './drinkdisplay.style';

const DrinkDisplay = ({ item }) => {
	const { name, image } = item;

	return (
		<View style={styles.container}>
			<View style={styles.drinkImageBox}>
				<Image
					source={{ uri: image }}
					style={styles.drinkImage}
				/>
			</View>
			<View style={styles.drinkNameBox}>
				<Text style={styles.drinkName}>{name}</Text>
			</View>
		</View>
	);
}

export default DrinkDisplay;