export const JOB_CATEGORIES = ["basic", "advanced", "special"] as const;
export type JobCategory = (typeof JOB_CATEGORIES)[number];

export type Job = {
  id: string;
  name: string;
  longName: string;
  category: JobCategory;
};

export const JOB_MAX_LEVELS: Record<JobCategory, number> = {
  basic: 55,
  advanced: 90,
  special: 90,
} as const;

export type CharacterLevel = {
  jobId: string;
  level: number;
};

export type Character = {
  id: number;
  name: string;
  levels: CharacterLevel[];
};

export const JOBS: Job[] = [
  // 基本職
  { id: "1", name: "戦", longName: "戦士", category: "basic" },
  { id: "2", name: "魔", longName: "魔法使い", category: "basic" },
  { id: "3", name: "僧", longName: "僧侶", category: "basic" },
  { id: "4", name: "武", longName: "武闘家", category: "basic" },
  { id: "5", name: "盗", longName: "盗賊", category: "basic" },
  { id: "6", name: "踊", longName: "踊り子", category: "basic" },
  { id: "7", name: "遊", longName: "遊び人", category: "basic" },
  // 上級職
  { id: "8", name: "バ", longName: "バトルマスター", category: "advanced" },
  { id: "9", name: "賢", longName: "賢者", category: "advanced" },
  { id: "10", name: "レ", longName: "レンジャー", category: "advanced" },
  { id: "11", name: "魔", longName: "魔法戦士", category: "advanced" },
  { id: "12", name: "パ", longName: "パラディン", category: "advanced" },
  { id: "13", name: "ス", longName: "スーパースター", category: "advanced" },
  { id: "14", name: "海", longName: "海賊", category: "advanced" },
  { id: "15", name: "ま", longName: "まものマスター", category: "advanced" },
  // 特級職
  { id: "16", name: "ゴ", longName: "ゴッドハンド", category: "special" },
  { id: "17", name: "魔", longName: "大魔道士", category: "special" },
  { id: "18", name: "神", longName: "大神官", category: "special" },
  { id: "19", name: "ニ", longName: "ニンジャ", category: "special" },
  { id: "20", name: "剣", longName: "魔剣士", category: "special" },
  { id: "21", name: "守", longName: "守り人", category: "special" },
  { id: "22", name: "ド", longName: "ドラゴン", category: "special" },
  { id: "23", name: "天", longName: "天地雷鳴士", category: "special" },
  { id: "24", name: "マ", longName: "魔人", category: "special" },
];
