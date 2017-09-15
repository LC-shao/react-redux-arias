import color from 'color';


export const addPrimaryColor = (primaryColor) => (
	{
		primaryOne: color(primaryColor).fade(0.1),
		primaryTwo: color(primaryColor).fade(0.2),
		primaryThree: color(primaryColor).fade(0.3),
		primaryFour: color(primaryColor).fade(0.4),
		primaryFive: color(primaryColor).fade(0.5),
		primarySix: color(primaryColor).fade(0.6),
		primarySeven: color(primaryColor).fade(0.7),
		primaryEight: color(primaryColor).fade(0.8),
		primaryNine: color(primaryColor).fade(0.9),
	}
);