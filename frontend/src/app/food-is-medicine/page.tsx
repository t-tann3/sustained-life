import { pageMetadata } from "@/lib/seo";
import {
  ButtonLink,
  Card,
  CheckList,
  Container,
  Eyebrow,
  Lead,
  Notice,
  PageHero,
  Section,
} from "@/components/ui";

export const metadata = pageMetadata({
  title: 'Food Is Medicine',
  description:
    'Learn how fresh fruits, vegetables, whole grains, beans, and other nutrient-dense foods can support overall health and well-being.',
  path: '/food-is-medicine',
});

const foods = [
  ["Vegetables", "Offer fiber and a wide range of vitamins and minerals. Try adding one extra color to lunch or dinner."],
  ["Fruits", "Provide natural sweetness, water, fiber, and nutrients. Fresh, frozen, or canned options can all fit."],
  ["Whole Grains", "Foods such as oats and brown rice offer fiber and steady nourishment."],
  ["Beans & Legumes", "Affordable sources of plant protein, fiber, and minerals that work in many meals."],
  ["Nuts & Seeds", "Small portions add healthy fats, protein, texture, and flavor."],
  ["Lean Proteins", "Fish, poultry, eggs, tofu, beans, and other options support growth and repair."],
  ["Healthy Fats", "Olive oil, avocado, nuts, seeds, and fish can be part of a balanced pattern."],
  ["Water", "Hydration supports everyday body functions. Keep water visible and easy to reach."],
];

const faqs = [
  [
    "Do I have to eat perfectly?",
    "No. Healthy patterns are built through flexible, consistent choices. Progress is more useful than perfection.",
  ],
  [
    "Can frozen and canned produce be nutritious?",
    "Yes. Frozen produce can be convenient and nutritious. Look for canned fruit packed in water or juice and vegetables with less sodium when possible.",
  ],
  [
    "What does nutrient-dense mean?",
    "Nutrient-dense foods provide useful nutrients relative to their calories. Examples include vegetables, fruits, beans, whole grains, nuts, seeds, eggs, fish, and plain dairy foods.",
  ],
  [
    "How can I eat well on a budget?",
    "Start with versatile staples such as oats, brown rice, beans, lentils, eggs, frozen vegetables, seasonal fruit, and canned fish. Plan meals around what you already have.",
  ],
  [
    "Is this medical advice?",
    "No. This content is general education. A qualified healthcare professional can help with individual needs.",
  ],
];

export default function FoodIsMedicinePage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Food Is Medicine" },
        ]}
        eyebrow="Practical nutrition education"
        title="Fresh choices can nourish a fuller life."
        lead="A balanced eating pattern rich in fruits, vegetables, whole grains, beans, nuts, seeds, and other nutrient-dense foods can support energy and overall well-being."
        actions={
          <>
            <ButtonLink href="#small-steps" variant="gold">
              Explore Healthy Living
            </ButtonLink>
            <ButtonLink href="/method" variant="outline-light">
              Learn the Method
            </ButtonLink>
          </>
        }
      />

      <Section>
        <Container narrow>
          <Eyebrow>What the phrase means</Eyebrow>
          <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark">
            Food is one important foundation of health.
          </h2>
          <Lead>
            “Food Is Medicine” recognizes that what we eat can contribute to how
            our bodies function and feel. Nutritious food supplies energy,
            fiber, vitamins, minerals, and other compounds the body uses every
            day.
          </Lead>
          <p className="mt-4">
            Food complements—not replaces—medical care. There is no perfect food
            or miracle diet, and individual needs vary.
          </p>
        </Container>
      </Section>

      <Section tint>
        <Container>
          <Eyebrow>The power of whole foods</Eyebrow>
          <h2 className="mb-8 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark">
            Build variety into your plate
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {foods.map(([title, body]) => (
              <Card key={title}>
                <h3 className="mb-2 font-display text-[1.45rem] text-forest-dark">
                  {title}
                </h3>
                <p className="mb-0">{body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="small-steps">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Eyebrow>Progress over perfection</Eyebrow>
              <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark">
                Small choices add up.
              </h2>
              <Lead>
                Choose one idea that feels realistic today. When it becomes
                familiar, try another.
              </Lead>
            </div>
            <CheckList
              items={[
                "Add one vegetable to a meal.",
                "Choose fruit for a snack.",
                "Keep a refillable water bottle nearby.",
                "Try one new vegetable this week.",
                "Choose whole grains when available.",
                "Plan one simple meal at home.",
                "Use frozen produce to save time and reduce waste.",
              ]}
            />
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <Eyebrow light>Healthy choices need healthy systems</Eyebrow>
          <h2 className="mb-8 font-display text-[clamp(2rem,4vw,3.5rem)] text-paper">
            Nutrition grows stronger in community.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-2 font-display text-[1.45rem] text-paper">Access</h3>
              <p className="text-[#e6eee9]">
                Pantries, farmers markets, gardens, and schools can bring
                nutritious choices closer.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-display text-[1.45rem] text-paper">Skills</h3>
              <p className="text-[#e6eee9]">
                Cooking classes and clear education can make unfamiliar
                ingredients feel possible.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-display text-[1.45rem] text-paper">
                Partnership
              </h3>
              <p className="text-[#e6eee9]">
                Healthcare, faith, and community organizations can connect people
                with supportive resources.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <Eyebrow>Common questions</Eyebrow>
          <h2 className="mb-6 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark">
            Food Is Medicine FAQs
          </h2>
          <div>
            {faqs.map(([question, answer]) => (
              <details
                key={question}
                className="border-t border-line last:border-b"
              >
                <summary className="cursor-pointer py-[1.15rem] pr-1 font-extrabold text-forest">
                  {question}
                </summary>
                <p className="m-0 px-1 pb-[1.1rem]">{answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section compact>
        <Container>
          <Notice>
            <strong>Educational disclaimer:</strong> This information is for
            educational purposes only and is not medical advice. It does not
            diagnose, treat, cure, or prevent any condition. Consult a qualified
            healthcare professional about diagnosis, treatment, medications,
            allergies, or individual nutrition needs.
          </Notice>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-[1.5rem] bg-[linear-gradient(120deg,var(--forest),var(--forest-dark))] p-[clamp(2rem,6vw,4rem)] text-white">
            <Eyebrow light>One meal at a time</Eyebrow>
            <h2 className="mb-3 font-display text-[clamp(2rem,4vw,3.2rem)] text-paper">
              Healthy choices can begin today.
            </h2>
            <p className="max-w-[46rem] text-[#e2eee8]">
              Explore practical resources, learn the Sustained Life Method, or
              invite us to support your community.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/resources" variant="gold">
                Explore Resources
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline-light">
                Partner With Us
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
