import { Text, View } from 'react-native';

import styles from './drinkabout.style';

const DrinkAbout = ({ title, paragraphs }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.headText}>{title}</Text>
			<View style={styles.contentBox}>
				{paragraphs.map((text, index) => (
					<Text
						key={index}
						style={styles.contentText}
					>
						{text}
					</Text>
				))}
			</View>
		</View>
	);
}

export default DrinkAbout;