export interface SiteConfig {
  name: string;
  domain: string;
  url: string;
  description: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId?: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
}

export const siteConfig: SiteConfig = {
  name: "Le Guide Guadeloupe — Communes, Plages, Patrimoine & Conseils Locaux",
  domain: "leguideguadeloupe.com",
  url: "https://leguideguadeloupe.com",
  description: "Le guide indépendant de référence de la Guadeloupe : exploration des 32 communes de Grande-Terre, Basse-Terre et des îles, plages préservées, cascades et gastronomie créole.",
  repo: "jc842/leguideguadeloupe",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-quartiere",
    fontFamily: "Geist, sans-serif",
    colorScheme: "slate-minimal",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "107",
    containerId: "3Jk5GcF6",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 674, format: "mobileBanner" },
      inContent: { zoneId: 673, format: "mediumRectangle" },
      header: { zoneId: 672, format: "leaderboard" },
      halfPage: { zoneId: 670, format: "halfPage" },
      largeRectangle: { zoneId: 671, format: "largeRectangle" },
      skyscraper: { zoneId: 675, format: "skyscraper" },
    },
  },

  legal: {
    editor: "Éditeur indépendant",
    address: "Guadeloupe / France",
    contactEmail: "contact@leguideguadeloupe.com",
    hostName: "Cloudflare Pages & Hetzner",
    hostAddress: "Union Européenne",
  },
};
