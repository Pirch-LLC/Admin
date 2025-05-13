export const GRADE_OPTIONS = [
  { label: "Pre -K", value: "Pre -K" },
  { label: "1st", value: "1st" },
  { label: "2nd", value: "2nd" },
  { label: "3rd", value: "3rd" },
  { label: "4th", value: "4" },
  { label: "5th", value: "5" },
  { label: "6th", value: "6" },
  { label: "7th", value: "7" },
  { label: "8th", value: "8" },
  { label: "9th", value: "9" },
  { label: "10th", value: "10" },
  { label: "11th", value: "11" },
  { label: "12th", value: "12" },
];

export const LEARNING_STYLE_OPTIONS = [
  "Visual (Sees it to get it)",
  "Auditory (Hears it to learn it)",
  "Kinesthetic (Moves to learn)",
  "Reading/Writing (Loves books + written words)",
  "Logical/Mathematical (Thinks in patterns)",
  "Social (Learns with others)",
  "Solitary (Needs space to think)",
  "Creative/Expressive (Thinks outside the box)",
  "Nature-Based (Learns through the world around them)",
  "Mixed / I’m Not Sure",
].map((label) => ({ label, value: label }));

export const TIME_COMMITMENT_OPTIONS = [
  "30 minutes/day",
  "1 hour/day",
  "2 hours/day",
  "Open-ended",
].map((label) => ({ label, value: label }));

export const STYLE_OPTIONS = [
  "Nature-Based",
  "Historical / Time Travel",
  "Scientific & Exploratory",
  "Artistic & Creative",
  "Literature-Rich",
  "Seasonal / Holiday",
  "Real-World & Practical",
  "Wonder-Filled & Magical",
  "Adventure / Survivalist",
  "Calm & Reflective",
  "Cultural & Global",
  "Tech-Enhanced",
  "Playful & Silly",
  "Structured & Academic",
  "Project-Based",
].map((label) => ({ label, value: label }));

export const MATERIALS_OPTIONS = [
  "Printable worksheets",
  "Project-based prompts",
  "Outdoor activities",
  "Journal pages",
  "Reading passages",
  "Discussion questions",
  "Recipes",
  "Real-life scenarios",
  "Minimal screen time",
  "Links to videos",
].map((label) => ({ label, value: label }));

export const READING_LEVEL_OPTIONS = [
  "Not sure / Use age as guide",
  "Early Reader",
  "On Grade Level",
  "Above Grade Level",
  "Below Grade Level",
  "Use Lexile Range",
].map((label) => ({ label, value: label }));

export const SUBJECT_OPTIONS = [
  "Reading",
  "Writing",
  "Vocabulary",
  "Math",
  "Science",
  "Social Studies",
  "Art",
  "Music",
  "Movement/PE",
  "SEL (Social-Emotional Learning)",
].map((label) => ({ label, value: label }));

export const ENHANCER_OPTIONS = [
  { label: "Include weekly vocabulary list", key: "vocabulary" },
  { label: "Include project presentation idea", key: "presentation" },
  { label: "Include final quiz or review game", key: "quiz" },
  { label: "Include supply checklist", key: "checklist" },
  {
    label: "Include printable lesson plan sheet for parent",
    key: "lesson plan",
  },
  { label: "Save to child profile", key: "child profile" },
  { label: "Include weekly rhythm planner", key: "rhythm" },
  { label: "Modify for sibling: Age", key: "sibling: Age" },
];

export const TIME_OPTIONS = [
  { label: "Morning Block", value: "morning_block" },
  { label: "Afternoon Activity", value: "afternoon_activity" },
  { label: "Custom Time", value: "custom_time" },
];

export const LENGTH_OPTIONS = [
  { label: "30 mins", value: "0.5-hour" },
  { label: "1 hour", value: "1-hour" },
  { label: "1.5 hours", value: "1.5-hour" },
  { label: "2 hours", value: "2-hour" },
  { label: "3 hours", value: "3-hour" },
  { label: "4 hours", value: "4-hour" },
  { label: "6 hours", value: "6-hour" },
  { label: "8 hours", value: "8-hour" },
];

export const TOPIC_OPTIONS = [
  { label: "Numbers", value: "numbers" },
  { label: "Operations", value: "operations" },
  { label: "Measurement", value: "measurement" },
  { label: "Data Analysis", value: "data-analysis" },
  { label: "Patterns", value: "patterns" },
  { label: "Problem Solving", value: "problem-solving" },
  { label: "Critical Thinking", value: "critical-thinking" },
];

export const AGE_OPTIONS = [
  { label: "3-5 years", value: "3-5" },
  { label: "6-8 years", value: "6-8" },
  { label: "9-11 years", value: "9-11" },
  { label: "12-14 years", value: "12-14" },
  { label: "15-18 years", value: "15-18" },
  { label: "18+ years", value: "18-plus" },
];
