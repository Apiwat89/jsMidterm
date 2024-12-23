// Apiwat Ketsawong

function bomb(sensors) {
    const area = 51;
    const speedOfsound = 0.343;

    const positions = sensors.map(sensor => {
        const positionX = sensor[0] % area;
        const positionY = sensor[1] % area;
        const distance = sensor[2] * speedOfsound;
        return { positionX, positionY, distance };
    });

    const circle1 = { h: positions[0].positionX, k: positions[0].positionY, r: positions[0].distance };
    const circle2 = { h: positions[1].positionX, k: positions[1].positionY, r: positions[1].distance };
    const circle3 = { h: positions[2].positionX, k: positions[2].positionY, r: positions[2].distance };

    const a11 = 2 * (circle2.h - circle1.h);
    const a12 = 2 * (circle2.k - circle1.k);
    const b1 = circle2.r**2 - circle1.r**2 - circle2.h**2 + circle1.h**2 - circle2.k**2 + circle1.k**2;

    const a21 = 2 * (circle3.h - circle2.h); 
    const a22 = 2 * (circle3.k - circle2.k);
    const b2 = circle3.r**2 - circle2.r**2 - circle3.h**2 + circle2.h**2 - circle3.k**2 + circle2.k**2;

    const det = a11 * a22 - a12 * a21;
    const detX = b1 * a22 - a12 * b2; 
    const detY = a11 * b2 - b1 * a21;

    if (det === 0) throw "Unable to calculate intersection point";

    const intersection_X = Math.abs(Math.round(detX / det));
    const intersection_Y = Math.abs(Math.round(detY / det));
    return [intersection_X, intersection_Y];
}

console.log(bomb([[0, 0, 72.886], [0, 50, 72.886], [25, 25, 72.886]]));
console.log(bomb([[0, 50, 145.773], [50, 50, 206.154], [50, 0, 145.773]]));
console.log(bomb([[5, 8, 48.872], [12, 21, 35.107], [24, 20, 22.203]]));
console.log(bomb([[18, 42, 35.558], [39, 16, 106.004], [7, 24, 32.202]]));