/**
 * Sample population series inspired by ABS national accounts patterns.
 * Figures are rounded portfolio sample data for exploration — not an official ABS extract.
 */

export type NationalPoint = {
  year: number;
  population: number;
  growthRate: number;
};

export type StateGrowth = {
  state: string;
  code: string;
  population2024: number;
  growth202324: number;
  shareOfNationalGrowth: number;
};

export type LgaGrowth = {
  lga: string;
  state: string;
  growth202324: number;
  population2024: number;
  region: "Metro" | "Regional";
};

export const DATA_NOTE =
  "Sample data shaped like ABS ERP patterns for portfolio exploration. Not an official ABS download.";

export const nationalTrend: NationalPoint[] = [
  { year: 2004, population: 20_111_300, growthRate: 1.16 },
  { year: 2005, population: 20_394_800, growthRate: 1.41 },
  { year: 2006, population: 20_697_900, growthRate: 1.49 },
  { year: 2007, population: 21_072_500, growthRate: 1.81 },
  { year: 2008, population: 21_475_400, growthRate: 1.91 },
  { year: 2009, population: 21_875_500, growthRate: 1.86 },
  { year: 2010, population: 22_184_900, growthRate: 1.41 },
  { year: 2011, population: 22_340_000, growthRate: 0.7 },
  { year: 2012, population: 22_728_000, growthRate: 1.74 },
  { year: 2013, population: 23_126_000, growthRate: 1.75 },
  { year: 2014, population: 23_475_000, growthRate: 1.51 },
  { year: 2015, population: 23_816_000, growthRate: 1.45 },
  { year: 2016, population: 24_190_900, growthRate: 1.57 },
  { year: 2017, population: 24_598_900, growthRate: 1.69 },
  { year: 2018, population: 24_982_700, growthRate: 1.56 },
  { year: 2019, population: 25_365_700, growthRate: 1.53 },
  { year: 2020, population: 25_694_400, growthRate: 1.3 },
  { year: 2021, population: 25_685_400, growthRate: -0.04 },
  { year: 2022, population: 26_014_400, growthRate: 1.28 },
  { year: 2023, population: 26_638_500, growthRate: 2.4 },
  { year: 2024, population: 27_204_800, growthRate: 2.13 },
];

export const stateGrowth: StateGrowth[] = [
  {
    state: "New South Wales",
    code: "NSW",
    population2024: 8_480_000,
    growth202324: 1.8,
    shareOfNationalGrowth: 27,
  },
  {
    state: "Victoria",
    code: "VIC",
    population2024: 6_980_000,
    growth202324: 2.4,
    shareOfNationalGrowth: 29,
  },
  {
    state: "Queensland",
    code: "QLD",
    population2024: 5_560_000,
    growth202324: 2.5,
    shareOfNationalGrowth: 24,
  },
  {
    state: "Western Australia",
    code: "WA",
    population2024: 2_950_000,
    growth202324: 2.7,
    shareOfNationalGrowth: 12,
  },
  {
    state: "South Australia",
    code: "SA",
    population2024: 1_870_000,
    growth202324: 1.5,
    shareOfNationalGrowth: 4,
  },
  {
    state: "Tasmania",
    code: "TAS",
    population2024: 575_000,
    growth202324: 0.6,
    shareOfNationalGrowth: 1,
  },
  {
    state: "Australian Capital Territory",
    code: "ACT",
    population2024: 473_000,
    growth202324: 1.9,
    shareOfNationalGrowth: 2,
  },
  {
    state: "Northern Territory",
    code: "NT",
    population2024: 255_000,
    growth202324: 0.9,
    shareOfNationalGrowth: 1,
  },
];

export const topLgas: LgaGrowth[] = [
  {
    lga: "Wyndham",
    state: "VIC",
    growth202324: 5.8,
    population2024: 322_000,
    region: "Metro",
  },
  {
    lga: "Melton",
    state: "VIC",
    growth202324: 5.4,
    population2024: 205_000,
    region: "Metro",
  },
  {
    lga: "Ipswich",
    state: "QLD",
    growth202324: 4.9,
    population2024: 248_000,
    region: "Metro",
  },
  {
    lga: "Casey",
    state: "VIC",
    growth202324: 4.1,
    population2024: 392_000,
    region: "Metro",
  },
  {
    lga: "Blacktown",
    state: "NSW",
    growth202324: 3.6,
    population2024: 420_000,
    region: "Metro",
  },
  {
    lga: "Moreton Bay",
    state: "QLD",
    growth202324: 3.4,
    population2024: 510_000,
    region: "Metro",
  },
  {
    lga: "Swan",
    state: "WA",
    growth202324: 3.3,
    population2024: 168_000,
    region: "Metro",
  },
  {
    lga: "Sunshine Coast",
    state: "QLD",
    growth202324: 3.1,
    population2024: 365_000,
    region: "Regional",
  },
  {
    lga: "Camden",
    state: "NSW",
    growth202324: 3.0,
    population2024: 135_000,
    region: "Metro",
  },
  {
    lga: "Fraser Coast",
    state: "QLD",
    growth202324: 2.8,
    population2024: 118_000,
    region: "Regional",
  },
  {
    lga: "Greater Geelong",
    state: "VIC",
    growth202324: 2.6,
    population2024: 282_000,
    region: "Regional",
  },
  {
    lga: "Wanneroo",
    state: "WA",
    growth202324: 2.5,
    population2024: 225_000,
    region: "Metro",
  },
];

export const storyBeats = {
  headlineGrowth: "2.13%",
  reboundYears: "2023–24",
  covidDipYear: 2021,
  latestPopulation: "27.2M",
  topGrowthShareStates: "VIC, NSW, and QLD",
} as const;

export function formatPopulation(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}k`;
  return String(n);
}

export function getInsights(filter: "All" | "Metro" | "Regional" = "All") {
  const lgas =
    filter === "All" ? topLgas : topLgas.filter((row) => row.region === filter);
  const peak = [...nationalTrend].sort((a, b) => b.growthRate - a.growthRate)[0];
  const covid = nationalTrend.find((d) => d.year === storyBeats.covidDipYear)!;
  const latest = nationalTrend[nationalTrend.length - 1]!;
  const fastestState = [...stateGrowth].sort(
    (a, b) => b.growth202324 - a.growth202324,
  )[0]!;

  return {
    lgas,
    peak,
    covid,
    latest,
    fastestState,
    metroShare: Math.round(
      (topLgas.filter((l) => l.region === "Metro").length / topLgas.length) *
        100,
    ),
  };
}
