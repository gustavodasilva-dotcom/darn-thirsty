import { useCallback, useState } from 'react';
import {
	ActivityIndicator,
	Image,
	RefreshControl,
	SafeAreaView,
	ScrollView,
	Text,
	View
} from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';

import { COLORS, icons, SIZES } from '../../constants';
import {
	DrinkAbout,
	DrinkDisplay,
	DrinkFooter,
	DrinkRecipe,
	DrinkTabs,
	ScreenHeaderButton
} from '../../components';

import data from './drink-details.data';

const tabs = ['Recipe', 'About', 'Reviews'];

const DrinkDetails = () => {
	const params = useSearchParams();
	const router = useRouter();
	const isLoading = false;
	const error = false;

	const [refreshing, setRefreshing] = useState(false);
	const [activeTab, setActiveTab] = useState(tabs[0]);

	const onRefresh = () => {};

	const displayTabContent = () => {
		switch (activeTab) {
			case tabs[0]:
				return <DrinkRecipe
					title={tabs[0]}
					recipe={data[params.id - 1].recipe}
				/>;
			case tabs[1]:
				return <DrinkAbout
					title={tabs[1]}
					paragraphs={data[params.id - 1].about}
				/>;
			case tabs[2]:
				break;
			default:
				break;
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerBackVisible: false,
					headerLeft: () => (
						<ScreenHeaderButton
							iconUrl={icons.left}
							dimension='60%'
							handlePress={() => router.back()}
						/>
					),
					headerRight: () => (
						<ScreenHeaderButton
							iconUrl={icons.share}
							dimension='60%'
						/>
					),
					headerTitle: ''
				}}
			/>
			<>
				<ScrollView
					showsVerticalScrollIndicator={false}
					refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
				>
					{isLoading ? (
						<ActivityIndicator size='large' colors={COLORS.primary} />
					) : error ? (
						<Text>Something went wrong</Text>
					) : (
						<View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
							<DrinkDisplay item={data[params.id - 1]} />
							<DrinkTabs
								tabs={tabs}
								activeTab={activeTab}
								setActiveTab={setActiveTab}
							/>
							{displayTabContent()}
						</View>
					)}
				</ScrollView>
				<DrinkFooter />
			</>
		</SafeAreaView>
	);
}

export default DrinkDetails;