const EARLY_PATTERNS = [
  [],
  [["red", 12, 0.18]],
  [["blue", 8, 0.18], ["red", 8, 0.14]],
  [["green", 8, 0.16], ["blue", 10, 0.12]],
  [["yellow", 10, 0.12], ["green", 10, 0.10]],
  [["pink", 10, 0.11], ["yellow", 8, 0.10]],
  [["zebra", 6, 0.16], ["pink", 8, 0.09]],
  [["rainbow", 5, 0.20], ["zebra", 10, 0.10]],
  [["ceramic", 4, 0.26], ["rainbow", 10, 0.08]],
  [["metal", 4, 0.30], ["ceramic", 6, 0.18]],
  [["prism", 3, 0.36], ["metal", 8, 0.12]]
];

function packageEntry(type, count, spacing, modifiers = {}) {
  return {
    type,
    count,
    spacing,
    ...modifiers
  };
}

function clonePackages(packages) {
  return packages.map(
    ([type, count, spacing, modifiers]) =>
      packageEntry(
        type,
        count,
        spacing,
        modifiers || {}
      )
  );
}

function buildTemplate(round) {
  const era = Math.min(
    10,
    Math.max(
      1,
      Math.floor((round - 1) / 10) + 1
    )
  );

  if (round <= 10) {
    const source = EARLY_PATTERNS[
      Math.min(
        round,
        EARLY_PATTERNS.length - 1
      )
    ];

    return clonePackages(source);
  }

  const packages = [];

  const counts = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0,
    pink: 0,
    zebra: 0,
    rainbow: 0,
    ceramic: 0,
    metal: 0,
    prism: 0,
    blimp: 0,
    fortBlimp: 0,
    dreadBlimp: 0
  };

  counts.red = 6 + era * 2;
  counts.blue = 7 + era * 2;
  counts.green = 8 + era * 2;
  counts.yellow = 8 + era * 2;
  counts.pink = 8 + era * 3;

  if (era >= 2) {
    counts.zebra = 4 + era * 2;
  }

  if (era >= 3) {
    counts.rainbow = 4 + era * 2;
    counts.metal = 3 + era;
  }

  if (era >= 4) {
    counts.ceramic = 2 + Math.floor(era / 2);
  }

  if (era >= 5) {
    counts.prism = 2 + Math.floor(era / 2);
    counts.blimp = Math.max(
      1,
      Math.floor(round / 18)
    );
  }

  if (era >= 7) {
    counts.fortBlimp =
      Math.max(
        1,
        Math.floor(round / 30)
      );
  }

  if (era >= 9) {
    counts.dreadBlimp =
      Math.max(
        1,
        Math.floor(round / 50)
      );
  }

  const order = [
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "zebra",
    "rainbow",
    "metal",
    "ceramic",
    "prism",
    "blimp",
    "fortBlimp",
    "dreadBlimp"
  ];

  for (const type of order) {
    if (counts[type] <= 0) {
      continue;
    }

    const spacing =
      Math.max(
        0.055,
        0.19 - era * 0.012
      );

    const modifiers = {};

    if (
      round >= 24 &&
      type !== "red" &&
      (round + type.length) % 4 === 0
    ) {
      modifiers.camo = true;
    }

    if (
      round >= 30 &&
      ["pink", "zebra", "rainbow", "ceramic", "metal"].includes(type) &&
      (round + type.length) % 5 === 0
    ) {
      modifiers.regrow = true;
    }

    if (
      round >= 25 &&
      ["ceramic", "metal", "prism", "blimp", "fortBlimp", "dreadBlimp"].includes(type) &&
      (round + type.length) % 3 === 0
    ) {
      modifiers.fortified = true;
    }

    packages.push(
      packageEntry(
        type,
        counts[type],
        spacing,
        modifiers
      )
    );
  }

  return packages;
}

const SPECIAL_ROUNDS = new Map([
  [15, [
    packageEntry("yellow", 22, 0.075),
    packageEntry("pink", 15, 0.065)
  ]],
  [25, [
    packageEntry("zebra", 18, 0.08, { camo: true }),
    packageEntry("rainbow", 12, 0.10)
  ]],
  [35, [
    packageEntry("ceramic", 16, 0.13, { fortified: true }),
    packageEntry("metal", 10, 0.10, { camo: true })
  ]],
  [50, [
    packageEntry("blimp", 4, 0.55, { fortified: true }),
    packageEntry("ceramic", 25, 0.07)
  ]],
  [60, [
    packageEntry("fortBlimp", 4, 0.62, { fortified: true }),
    packageEntry("rainbow", 35, 0.055, { camo: true })
  ]],
  [70, [
    packageEntry("dreadBlimp", 2, 0.75, { fortified: true }),
    packageEntry("fortBlimp", 6, 0.46, { camo: true, fortified: true })
  ]],
  [75, [
    packageEntry("prism", 24, 0.075, { camo: true, fortified: true }),
    packageEntry("ceramic", 36, 0.055, { regrow: true })
  ]],
  [90, [
    packageEntry("dreadBlimp", 6, 0.55, { fortified: true, camo: true }),
    packageEntry("blimp", 20, 0.09, { regrow: true })
  ]],
  [95, [
    packageEntry("fortBlimp", 18, 0.27, { fortified: true, camo: true }),
    packageEntry("dreadBlimp", 8, 0.48, { fortified: true })
  ]],
  [100, [
    packageEntry("bossTitan", 1, 0.9, { fortified: true, camo: true }),
    packageEntry("dreadBlimp", 12, 0.42, { fortified: true }),
    packageEntry("fortBlimp", 16, 0.24, { fortified: true })
  ]]
]);

export function getCampaignRound(round) {
  const special = SPECIAL_ROUNDS.get(round);

  if (special) {
    return clonePackages(
      special.map(
        (entry) => [
          entry.type,
          entry.count,
          entry.spacing,
          {
            camo: entry.camo,
            regrow: entry.regrow,
            fortified: entry.fortified
          }
        ]
      )
    );
  }

  return buildTemplate(round);
}

export function hasFixedRound(round) {
  return round >= 1 && round <= 100;
}

export const FIXED_ROUND_COUNT = 100;