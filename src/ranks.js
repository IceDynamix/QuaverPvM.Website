const letterRanks = [
    { rank: "x", rating: 2400 },
    { rank: "u", rating: 2100 },
    { rank: "ss", rating: 1800 },
    { rank: "s+", rating: 1600 },
    { rank: "s", rating: 1400 },
    { rank: "s-", rating: 1200 },
    { rank: "a+", rating: 1100 },
    { rank: "a", rating: 1000 },
    { rank: "a-", rating: 900 },
    { rank: "b+", rating: 800 },
    { rank: "b", rating: 700 },
    { rank: "b-", rating: 650 },
    { rank: "c+", rating: 600 },
    { rank: "c", rating: 575 },
    { rank: "c-", rating: 550 },
    { rank: "d+", rating: 525 },
    { rank: "d", rating: 500 },
];

export function ratingToRank(rating) {
    for (const rank of letterRanks)
        if (rating >= rank.rating)
            return rank.rank;
    return "d";
}

export function rankToColor(rank) {
    switch (rank) {
        case "x":
            return "#F38BC6";
        case "u":
            return "#FFA8A8";
        case "ss":
            return "#FFC8A8";
        case "s+":
            return "#FFE093";
        case "s":
            return "#FFE6A8";
        case "s-":
            return "#FFECBC";
        case "a+":
            return "#B8FE68";
        case "a":
            return "#C8F98F";
        case "a-":
            return "#D3F8A9";
        case "b+":
            return "#8AC9E8";
        case "b":
            return "#9ACCE4";
        case "b-":
            return "#ABD1E4";
        case "c+":
            return "#D2AEE7";
        case "c":
            return "#CA9CE6";
        case "c-":
            return "#C78CEA";
        case "d+":
            return "#BD8EEB";
        case "d":
            return "#9C5BDA";
        default:
            return "#888888";
    }
}

export function qrToGlicko(qr) {
    qr = Math.max(0, qr);
    return 1.28 * qr * qr + 500;
}

export function glickoToQr(glicko) {
    return Math.sqrt(Math.max(0, glicko - 500) / 1.28);
}
