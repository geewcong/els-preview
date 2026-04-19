export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-16 sm:pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img src="./hero-bg.png" alt="" className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex flex-col items-start gap-5 sm:gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
            <svg className="w-4 h-4 fill-primary flex-shrink-0" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Nurturing emotional intelligence
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground">
            Helping little hearts feel <span className="text-primary">seen</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
            Join our adorable jungle animals on a journey to understand, express, and manage emotions safely. Created by psychologists, loved by children.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto">
            <a href="#videos" className="rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg font-bold bg-primary text-white shadow-lg shadow-primary/20 hover:scale-105 transition-transform text-center">
              Watch Videos 
            </a>
            <a href="#about" className="rounded-full px-6 sm:px-8 py-3 text-base sm:text-lg font-bold bg-secondary text-white shadow-lg shadow-secondary/20 hover:scale-105 transition-transform text-center">
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image placeholder - right side */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <img src="./hedgehog.png" alt="Hedgehog character" className="w-full rounded-3xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
