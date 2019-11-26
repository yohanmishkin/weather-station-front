const levenshteinWeather = function(searchString, potentialMatches) {
  let winner = potentialMatches.reduce(
    (currentWinner, potentialMatch) => {
      let score = distance(searchString.toLowerCase(), potentialMatch);
      if (score < currentWinner.score) {
        return { weather: potentialMatch, score };
      }
      return currentWinner;
    },
    { score: searchString.length }
  );

  return winner.weather;
};

const distance = function(stringA, stringB) {
  let t = [],
    u,
    i,
    j,
    m = stringA.length,
    n = stringB.length;
  if (!m) {
    return n;
  }
  if (!n) {
    return m;
  }
  for (j = 0; j <= n; j++) {
    t[j] = j;
  }
  for (i = 1; i <= m; i++) {
    for (u = [i], j = 1; j <= n; j++) {
      u[j] =
        stringA[i - 1] === stringB[j - 1]
          ? t[j - 1]
          : Math.min(t[j - 1], t[j], u[j - 1]) + 1;
    }
    t = u;
  }
  return u[n];
};

export default levenshteinWeather;
