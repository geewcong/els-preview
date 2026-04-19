const characters = [
  {
    name: 'Hedgehog',
    emoji: '🦔',
    image: './hedgehog.png',
    beLike: 'Sensitivity & Empathy',
    catchphrase: "Sorry, I messed up again…",
    description: "Sensitive, anxious, and self‑reflective. Always worries about how others see them and tends to overthink every decision. Often feels they've done something wrong even when they haven't.",
    strength: "Deeply empathetic; can sense when others are hurting and offer quiet comfort. Thoughtful and kind‑hearted.",
    challenge: "Overly self‑blaming; hides when feeling criticized or overwhelmed; easily trapped in cycles of guilt and worry.",
    innerWorld: "Wants to be accepted but fears being judged. Constantly questions self‑worth, believing love must be earned through perfection.",
  },
  {
    name: 'Cheetah',
    emoji: '🐆',
    image: './cheetah.png',
    beLike: 'Drive & Should',
    catchphrase: "You should listen to what I say — or there'll be consequences.",
    description: "Driven, controlling, and full of nervous energy. Always telling others what they should or shouldn't do, believing strict discipline equals love and safety. Speaks quickly, acts decisively, and expects immediate results.",
    strength: "Highly motivated, protective, and responsible. Keeps the group active, focused, and goal‑oriented.",
    challenge: "Overly critical and overbearing; struggles to express softness or accept mistakes — in herself or others.",
    innerWorld: "Pushes out of love but fears losing control. Her strictness hides anxiety and exhaustion, and her need to fix others comes from fearing she has failed them.",
  },
  {
    name: 'Badger',
    emoji: '🦡',
    image: './badger.png',
    beLike: 'Courage & Pride',
    catchphrase: "Don't tell me what to do — I'm right!",
    description: "Strong‑headed, blunt, and easily triggered. Believes being right equals being respected. Anger becomes a wall that protects a fragile sense of pride.",
    strength: "Brave, outspoken, and fiercely loyal; stands up quickly for what seems unjust.",
    challenge: "Blames others easily; struggles to admit mistakes; often uses aggression to mask insecurity.",
    innerWorld: "Desperately fears losing control or appearing weak. The more he tries to dominate, the less peace he feels inside.",
  },
  {
    name: 'Sloth',
    emoji: '🦥',
    image: './sloth.png',
    beLike: 'Stillness & Sadness',
    catchphrase: "What's the point… it'll never change.",
    description: "Slow, gloomy, and withdrawn. Lives in a fog of fatigue and low motivation. Finds comfort in stillness but often feels detached from life.",
    strength: "Gentle, deeply empathetic observer. Teaches others patience and quiet acceptance.",
    challenge: "Avoids action and responsibility; easily drifts into helplessness or self‑pity.",
    innerWorld: "Wants to feel alive but fears disappointment. Feels safer expecting nothing than risking hope again.",
  },
  {
    name: 'Owl',
    emoji: '🦉',
    image: './owl.png',
    beLike: 'Wisdom & Insight',
    catchphrase: "Let's breathe. I understand your feeling.",
    description: "Thoughtful, calm, and insightful. Observes others closely, then speaks with precision and compassion. Prefers reflection to reaction.",
    strength: "Mediates conflicts with clarity and warmth; helps others recognize and name their deeper feelings.",
    challenge: "Over‑analyzes situations; sometimes too detached from emotions.",
    innerWorld: "Struggles to balance intellect and emotion — staying wise yet connected. Fears that showing his own feelings might cloud his guidance but slowly learns vulnerability deepens wisdom.",
  },
];

export default function CharactersSection() {
  return (
    <section id="characters" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Every feeling has a <span className="text-primary">friendly face</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Which one are you feeling today?
          </p>
        </div>

        {/* Character Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {characters.map((char) => (
            <div key={char.name} className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow group">
              <div className="aspect-square overflow-hidden bg-muted">
                <img src={char.image} alt={char.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{char.emoji}</span>
                  <h3 className="font-display text-xl font-bold text-foreground">{char.name}</h3>
                </div>
                <p className="text-sm font-medium text-primary mb-3">{char.beLike}</p>
                <p className="text-muted-foreground text-sm italic mb-3">"{char.catchphrase}"</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{char.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
