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

  static random () {
    return Math.random();
  }
}

function randomColor () {
  return `rgb(
    ${Random.wholeRandom(255)},
    ${Random.wholeRandom(255)},
    ${Random.wholeRandom(255)}
  )`
}

class CheckerPaint {
  paint(ctx, geom, styleMap) {
    const [width, height] = [15, 35];
    const amount = 100;
    const respectBorders = true;
    const padding = 0;

    for (let i = 0; i < amount; i++) {
      const color = randomColor();
      // const margin = Random.wholeRandom(100);
      // const angle = Random.randSignRandom(1.5) * Math.PI / 180;
      // const scale = 1 + Random.randSignRandom(0.05);
      let [x, y] = [ 
        Random.rangeRandom(geom.width),
        Random.rangeRandom(geom.height)
      ];

      if(respectBorders) {
        x = Math.min(geom.width - width - padding, x);

        y = Math.min(geom.height - height - padding, y);
      }
      
      ctx.beginPath();

      // ctx.rotate(angle);
      // ctx.scale(1, scale);
      ctx.fillStyle = color;
      ctx.rect(x, y, width, height);
      ctx.fill();
    }
  }
}

registerPaint("confetti", CheckerPaint);
