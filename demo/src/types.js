const amountVar = '--confetti-amount';
const respectBordersVar = '--confetti-respect-borders';
const paddingVar = '--confetti-padding';
const baseDimentionsVar = '--confetti-dimentions';

window.CSS.registerProperty({
	name: amountVar,
	syntax: '<integer>',
	inherits: false,
	initialValue: 50
});

window.CSS.registerProperty({
	name: respectBordersVar,
	syntax: '<integer>',
	inherits: false,
	initialValue: 0
});
 
window.CSS.registerProperty({
	name: paddingVar,
	syntax: '<length>',
	inherits: false,
	initialValue: '0px'
});
window.CSS.registerProperty({
	name: baseDimentionsVar,
	syntax: '<length>+',
	inherits: false,
	initialValue: '35px 15px'
});
