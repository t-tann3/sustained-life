export type NewsletterEdition = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  topics: string[];
  body: string[];
};

export const newsletters: NewsletterEdition[] = [
  {
    slug: "small-steps-toward-nourishment",
    title: "Small Steps Toward Nourishment",
    summary:
      "A gentle reminder that lasting change begins with one realistic choice—and the community that makes it possible.",
    publishedAt: "2026-07-15",
    topics: ["Food Is Medicine", "Healthy habits"],
    body: [
      "Welcome to the Sustained Life newsletter. Each edition shares practical ideas for nourishing food, dignity-centered support, and healthier community systems.",
      "This month, we are focusing on progress over perfection. One vegetable added to a familiar meal, one refillable water bottle kept nearby, or one conversation with a neighbor can open a pathway.",
      "If you serve through a pantry, church, school, or clinic, consider one small change that makes a nourishing choice easier for the people you walk with.",
      "Thank you for being part of a community committed to care that lasts.",
    ],
  },
  {
    slug: "healthy-pantry-healthy-community",
    title: "Healthy Pantry, Healthy Community",
    summary:
      "How dignity, choice, and practical nutrition education can strengthen food assistance settings.",
    publishedAt: "2026-05-20",
    topics: ["Healthy Pantry", "Community partnership"],
    body: [
      "Food assistance is vital—and it becomes even more powerful when paired with education, respect, and partnership.",
      "A Healthy Pantry approach invites people to choose, learn, and feel welcomed. Clear labeling, nutrient-dense staples, and simple recipes can help families turn food into nourishment.",
      "Sustained Life continues to collaborate with community partners so healthier choices are not only available, but understandable and achievable.",
      "If your organization is exploring a Healthy Pantry initiative, we welcome a conversation.",
    ],
  },
  {
    slug: "hunger-has-no-face",
    title: "Hunger Has No Face",
    summary:
      "Reflections on dignity, listening, and why every community must see the human realities of food insecurity.",
    publishedAt: "2026-03-10",
    topics: ["Advocacy", "Dignity"],
    body: [
      "Hunger rarely looks the way we expect. It can hide behind busy schedules, quiet pride, or the hard work of providing for others.",
      "When we listen first, we protect dignity. When we collaborate across pantries, healthcare, faith communities, and civic partners, we build systems that last longer than a single meal.",
      "This edition invites you to notice the people and partnerships already present in your community—and to take one next step with them.",
      "Together, we can help more people find a credible pathway to thrive.",
    ],
  },
];

export function getNewsletters() {
  return [...newsletters].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );
}

export function getNewsletter(slug: string) {
  return newsletters.find((item) => item.slug === slug) ?? null;
}

export function formatNewsletterDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));
}
