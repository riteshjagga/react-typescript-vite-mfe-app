import * as ArrayHelper from '../ArrayHelper/ArrayHelper';

export function cssTokenManager(initialCssToken: string) {
  const cssTokens = [initialCssToken];

  const tokenManager = {
    add(cssToken: string) {
      cssTokens.push(cssToken);

      return tokenManager;
    },
    getClasses() {
      const filteredCssTokens = ArrayHelper.removeFalseyValues(cssTokens);

      return filteredCssTokens.join(' ');
    },
  };

  return tokenManager;
}
