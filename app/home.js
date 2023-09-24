import { useState } from 'react';
import {
	Text,
	View,
	ScrollView,
	SafeAreaView
} from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES, icons } from '../constants';
import {
  ClassicDrinks,
	PopularDrinks,
	ScreenHeaderButton,
	Welcome
} from '../components';

const Home = () => {
	const router = useRouter();

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderButton iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderButton iconUrl={icons.userIcon} dimension='100%' />
          ),
          headerTitle: ''
        }}
      />
			<ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            
          />
          <PopularDrinks />
          <ClassicDrinks />
        </View>
      </ScrollView>
		</SafeAreaView>
	);
}

export default Home;