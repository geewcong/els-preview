export default function VideosSection() {
  return (
    <section id="videos" className="py-16 sm:py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Watch & Learn <span className="text-primary">Together</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Emotion Little Stars
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            New episodes added regularly. Subscribe so you never miss a story from the jungle garden.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <a
            href="https://www.youtube.com/@emotionlittlestars"
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-foreground/5 relative group"
          >
            {/* YouTube Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Placeholder bg */}
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <p className="text-muted-foreground font-medium text-lg">Visit our YouTube Channel</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
