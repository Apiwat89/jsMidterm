// Apiwat Ketsawong

function digitalClock(sec) {
    const h = Math.floor((sec / 3600) % 24);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;

    const formatH = String(h).padStart(2,'0');
    const formatM = m < 10 ? '0' + m : m;
    const formatS = String(s).padStart(2,'0');

    return `${formatH}:${formatM}:${formatS}`;
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));