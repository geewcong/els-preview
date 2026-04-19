export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <svg className="w-5 h-5 text-primary fill-primary" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span className="font-display font-bold text-lg text-foreground">Emotion Little Stars</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Nurturing emotional intelligence in early childhood through the power of play and storytelling.
        </p>
      </div>
    </footer>
  );
}
