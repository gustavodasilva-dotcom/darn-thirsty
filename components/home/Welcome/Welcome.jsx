import { useState } from 'react';
import {
	FlatList,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const drinkTypes = ['Beers', 'Wines', 'Distilled', 'Cocktail'];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
	 const router = useRouter();
  const [activeDrinkType, setActiveDrinkType] = useState('Beers');

	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello, Gustavo</Text>
				<Text style={styles.welcomeMessage}>The place to find your drinks</Text>
			</View>

			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={styles.searchInput}
						value={searchTerm}
						onChangeText={(text) => setSearchTerm(text)}
						placeholder='What is your taste today?'
					/>
				</View>
				<TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
					<Image
						source={icons.search}
						resizeMode='contain'
						style={styles.searchBtnImage}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.tabsContainer}>
				<FlatList
					data={drinkTypes}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.tab(activeDrinkType, item)}
							onPress={() => {
								setActiveDrinkType(item);
								router.push(`/search/${item}`);
							}}
						>
							<Text style={styles.tabText(activeDrinkType, item)}>
								{item}
							</Text>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item}
					contentContainerStyle={{ columnGap: SIZES.small }}
					horizontal
				/>
			</View>
		</View>
	);
}

export default Welcome;