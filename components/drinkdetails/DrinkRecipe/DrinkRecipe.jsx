import { Text, View } from 'react-native';

import styles from './drinkrecipe.style';

const DrinkRecipe = ({ title, recipe }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<View style={styles.recipeContainer}>
				{recipe.ingredients.map((ingredient, index) => (
					<View
						key={index}
						style={styles.recipeWrapper}
					>
						<View style={styles.ingredientDot} />
						<Text style={styles.recipeText}>{ingredient}</Text>
					</View>
				))}
			</View>
			<View style={styles.recipeContainer}>
				{recipe.steps.map((step, index) => (
					<View
						key={index}
						style={styles.recipeWrapper}
					>
						<Text style={styles.stepIndicator}>{index + 1}</Text>
						<Text style={styles.recipeText}>{step}</Text>
					</View>
				))}
			</View>
		</View>
	);
}

export default DrinkRecipe;