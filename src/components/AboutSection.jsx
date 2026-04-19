export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8">
            Rooted in <span className="text-primary">Emotion Focused Therapy</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Founded by a Hong Kong psychologist, Emotion Little Stars transforms evidence-based therapeutic principles into a vibrant, accessible world for children aged 2-6. We believe that when children can name their feelings, they can manage them — and that's a superpower that lasts a lifetime.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Recognize what we feel inside</h3>
            <p className="text-muted-foreground leading-relaxed">Understanding and naming emotions is the first step to emotional intelligence.</p>
          </div>

          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Share feelings in healthy ways</h3>
            <p className="text-muted-foreground leading-relaxed">Expressing emotions safely builds confidence and stronger relationships.</p>
          </div>

          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Find calm and build resilience</h3>
            <p className="text-muted-foreground leading-relaxed">Managing emotions gives children tools to navigate life's challenges.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
