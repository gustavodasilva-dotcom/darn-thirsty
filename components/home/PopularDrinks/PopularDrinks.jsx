import { useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './populardrinks.style';
import { COLORS, SIZES } from '../../../constants';
import PopularDrinkCard from '../../common/cards/PopularDrinkCard';

import data from './populardrinks.data';

const PopularDrinks = () => {
	const router = useRouter();
	const isLoading = false;
	const error = false;

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Popular drinks</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>Show all</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.cardsContainer}>
				{isLoading ? (
					<ActivityIndicator size='large' colors={COLORS.primary} />
				) : error ? (
					<Text>Something went wrong</Text>
				) : (
					<FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularDrinkCard
              	item={item}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
				)}
			</View>
		</View>
	);
}

export default PopularDrinks;