import { useState } from 'react';

const faqItems = [
  {
    question: 'Who is this website for?',
    answer: 'The site supports children, families, teachers, school partners, and potential collaborators who want a clear overview of the project and its video content.',
  },
  {
    question: 'Can more videos be added later?',
    answer: 'Yes. The video section is modular, so you can expand it into a larger library, playlists, or category-based episodes without changing the design direction.',
  },
  {
    question: 'Can the feedback form connect to a real database?',
    answer: 'Yes. This front-end can later be connected to services such as Formspree, Airtable, Google Forms, or a custom backend endpoint.',
  },
  {
    question: 'Can this site include bilingual content?',
    answer: 'Yes. English and Chinese versions can be added with a language switch, translated content blocks, or parallel episode summaries.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Everything parents, educators, and partners need to know about Emotion Little Stars.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-border rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-display font-semibold text-foreground pr-4">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
