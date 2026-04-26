/**
 * Numbers of decimal digits to round to
 */
const scale = 3;

/**
 *
 *
 * Rules:
 * #1 = 150 pts
 * #2–10 = 100 pts
 * #11–50 = 50 pts
 * #51+ = 30 pts
 */
export function score(rank, percent, minPercent) {
    // optional cutoff rules (keep or remove if you want)
    if (rank > 150) return 0;
    if (rank > 75 && percent < 100) return 0;

    let score = 0;

    // tier system
    if (rank === 1) {
        score = 150;
    } else if (rank <= 10) {
        score = 100;
    } else if (rank <= 50) {
        score = 50;
    } else {
        score = 30;
    }


    if (percent < 100) {
        score *= 0.3; // heavy penalty for incomplete runs
    }

    return round(Math.max(score, 0));
}

/**
 * Rounds numbers to fixed precision
 */
export function round(num) {
    if (!('' + num).includes('e')) {
        return +(Math.round(num + 'e+' + scale) + 'e-' + scale);
    } else {
        var arr = ('' + num).split('e');
        var sig = '';
        if (+arr[1] + scale > 0) {
            sig = '+';
        }
        return +(
            Math.round(+arr[0] + 'e' + sig + (+arr[1] + scale)) +
            'e-' +
            scale
        );
    }
}
