const data = [
	{
		id: 1,
		name: 'Gin & Tonic',
		image: 'https://i2.wp.com/dishesdelish.com/wp-content/uploads/2017/09/Gin-and-Tonic-Cocktail-square-1.jpg',
		type: {
			id: 1,
			name: 'Cocktail'
		}
	},
	{
		id: 2,
		name: 'White Russian',
		image: 'https://hips.hearstapps.com/hmg-prod/images/delish-190816-white-russian-0119-landscape-pf-1568744178.jpg?crop=0.670xw:1.00xh;0.240xw,0&resize=1200:*',
		type: {
			id: 1,
			name: 'Cocktail'
		}
	},
	{
		id: 3,
		name: 'Aviation',
		image: 'https://hips.hearstapps.com/hmg-prod/images/210715-delish-seo-recipes-aviation-cocktail-horizontal-0240-eb-1627487362.jpg?crop=0.577xw:0.863xh;0.200xw,0.115xh&resize=1200:*',
		type: {
			id: 1,
			name: 'Cocktail'
		}
	},
	{
		id: 4,
		name: 'Vieux Carré',
		image: 'https://www.liquor.com/thmb/3CjRa0o2hDkPoSGERsC6zfUqmIs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__01__22125120__vieux-carre-720x720-recipe-a46b6cb491104bb99bebcc1284efdc05.jpg',
		type: {
			id: 1,
			name: 'Cocktail'
		}
	},
	{
		id: 5,
		name: 'Aperol Spritz',
		image: 'https://www.acouplecooks.com/wp-content/uploads/2020/05/Aperol-Spritz-020.jpg',
		type: {
			id: 1,
			name: 'Cocktail'
		}
	},
	{
		id: 6,
		name: 'Moscow Mule',
		image: 'https://www.liquor.com/thmb/zLQlZDdAdFZChTkVsNNF-yfm3q4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg',
		type: {
			id: 1,
			name: 'Cocktail'
		},
		about: [
			'The Moscow Mule is a classic vodka-based cocktail that is popular for good reason: It’s delicious, refreshing and a snap to make. Just speaking the drink’s name conjures images of the ice-cold copper mug that is the de rigueur vessel for the Moscow Mule.',
			'The simple cocktail combines vodka with ginger beer and lime. It’s a no-tools-required drink that is built right in the mug. Of course, while said mug is always preferred for serving, it’s not essential and shouldn’t deter you from making a Moscow Mule. The drink tastes great no matter the receptacle. So if a highball glass or rocks glass is all you have on hand, don’t fret.',
			'Any high-quality vodka will work nicely in the mule, but now is not the time to experiment with subpar ginger beer. You want a top-notch option that comes from a bottle, not a soda gun, and offers enough spicy bite to complement the liquor and lime. Put the components together, and it’s hard to think of a more restorative choice on a hot summer day.',
			'The Moscow Mule is a mid-century classic that was born in 1941 and helped contribute to vodka’s rise in America. As the legend goes, it was concocted by two men. John Martin needed to sell Smirnoff vodka, a new and generally unknown spirit at the time that his distribution company had recently purchased. Another man, bar owner Jack Morgan, needed to deplete the stash of ginger beer taking up space at his Cock ‘n’ Bull pub. They decided to combine the two ingredients with a little lime, and the rest is history. Well, minus the mug. No one’s quite sure where that came from, but there are reports of a third party at that meeting with a fortuitous supply of copper mugs. Regardless of how the drink was invented, the easygoing combination of vodka, spicy ginger and tart lime—all packaged neatly in an eye-catching mug—was a hit. More than a quarter century later, the Moscow Mule remains a hit.',
			'This recipe brings the legendary drink up to date while remaining true to its refreshing roots. At its core, the Moscow Mule is deceptively simple and incredibly easy to mix, perfect for any season.'
		],
		recipe: {
			ingredients: [
				'2 ounces vodka',
				'1/2 ounce lime juice, freshly squeezed',
				'3 ounces ginger beer, chilled',
				'Garnish: lime wheel'
			],
			steps: [
				'Fill a Moscow Mule mug (or highball glass) with ice, then add the vodka and lime juice.',
				'Top with the ginger beer.',
				'Garnish with a lime wheel.'
			]
		}
	},
	{
		id: 7,
		name: 'Grasshopper',
		image: 'https://www.acouplecooks.com/wp-content/uploads/2021/02/Grasshopper-Drink-002s.jpg',
		type: {
			id: 1,
			name: 'Cocktail'
		}
	},
	{
		id: 8,
		name: 'Gimlet',
		image: 'https://www.liquor.com/thmb/05j0hV6YaJB9D2Vo_7xbFHgF-Q8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Gimlet-1500x1500-hero-7af9450103b9437d8d5b7206a6ddfe43.jpg',
		type: {
			id: 1,
			name: 'Cocktail'
		}
	},
	{
		id: 9,
		name: 'Negroni',
		image: 'https://assets.bonappetit.com/photos/626710f327b006dd474788c9/1:1/w_3118,h_3118,c_limit/0425-negroni-recipe.jpg',
		type: {
			id: 1,
			name: 'Cocktail'
		}
	},
	{
		id: 10,
		name: 'Gold Rush',
		image: 'https://vinepair.com/wp-content/uploads/2021/11/goldrush_card.jpg',
		type: {
			id: 1,
			name: 'Cocktail'
		}
	},
	{
		id: 11,
		name: 'Penicillin',
		image: 'https://www.liquor.com/thmb/FsPcbBZ5fnQy3mWgZ-xDPqxeS0Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/penicillin-720x720-primary-8157bd54c63948c4b5a3ad5b3986965a.jpg',
		type: {
			id: 1,
			name: 'Cocktail'
		}
	},
	{
		id: 12,
		name: 'Paper Plane',
		image: 'https://kitchenswagger.com/wp-content/uploads/2019/09/paper-plane-2.jpg',
		type: {
			id: 1,
			name: 'Cocktail'
		}
	}
];

export default data;