const amountVar = '--confetti-amount';
const respectBordersVar = '--confetti-respect-borders';
const paddingVar = '--confetti-padding';
const baseDimentionsVar = '--confetti-dimentions';

class Random {
	static rangeRandom (range) {
		return Math.random() * range;
	}

	static wholeRandom (range) {
		return Math.floor(Random.rangeRandom(range));
	}

	static randSignRandom (range, bias) {
		if (bias)
			return Random.rangeRandom(range * 2) - range + bias;

		return Random.rangeRandom(range * 2) - range;
	}
}

function randomColor () {
	return `rgb(
    ${Random.wholeRandom(255)},
    ${Random.wholeRandom(255)},
    ${Random.wholeRandom(255)}
  )`;
}

function extractValue (str) {
	return str.match(/\d+/g)[0];
}
function extractValueMulti (str) {
	return str.split(' ')
		.filter(s => s)
		.map(val => extractValue(val));
}
class ConfettiPaint {
	static get inputProperties () { 
		return [
			amountVar,
			respectBordersVar,
			paddingVar,
			baseDimentionsVar
		]; 
	}

	paint (ctx, geom, props) {
		const amount = props.get(amountVar).value || 50;
		const respectBorders = props.get(respectBordersVar).value === 1 || true;
		const padding = parseInt(extractValue(props.get(paddingVar).toString())) || 0;
		const [baseWidth, baseHeight] = extractValueMulti(props.get(baseDimentionsVar).toString()).map(val => parseInt(val)) || [15, 35];

		for (let i = 0; i < amount; i++) {
			const color = randomColor();
			const scale = 1 + Random.randSignRandom(0.5);
			const [width, height] = [baseWidth * scale, baseHeight * scale];
			let [x, y] = [ 
				Random.rangeRandom(geom.width),
				Random.rangeRandom(geom.height)
			];
			const angle = Random.randSignRandom(3) * Math.PI / 180;

			if(respectBorders) { 
				x = Math.min(geom.width - width - padding, x);
				y = Math.min(geom.height - height - padding, y);
			}
      
			ctx.beginPath();

			ctx.translate((x + width)/2, (y + height)/2);
			ctx.rotate(angle);
			ctx.translate((x + width)/2 * -1, (y + height)/2 * -1);

			ctx.fillStyle = color;
			ctx.rect(x, y, width, height);
			ctx.fill();

			ctx.rotate(-angle);
		}
	}
}

// eslint-disable-next-line no-undef
registerPaint('confetti', ConfettiPaint);
