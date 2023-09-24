import {
	ActivityIndicator,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './classicdrinks.style';
import { COLORS, SIZES } from '../../../constants';
import ClassicDrinkCard from '../../common/cards/ClassicDrinkCard';

import data from './classicdrinks.data';

const ClassicDrinks = () => {
	const router = useRouter();
	const isLoading = false;
	const error = false;

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Classic Drinks</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>Show all</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.cardContainer}>
				{isLoading ? (
					<ActivityIndicator size='large' colors={COLORS.primary} />
				) : error ? (
					<Text>Something went wrong</Text>
				) : (
					data?.map((drink, index) => (
						<ClassicDrinkCard
							key={index}
							item={drink}
							handleNavigate={() => router.push(`/drink-details/${drink.id}`)}
						/>
					))
				)}
			</View>
		</View>
	);
}

export default ClassicDrinks;