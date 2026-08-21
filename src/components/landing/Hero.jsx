import './Hero.css'

function Hero() {
  return (
    <section className="hero-section">

      <div className="hero-grid"></div>
      <div className="hero-glow"></div>

      <div className="hero-content">

        <p className="hero-eyebrow">
          CAFÉ BUSINESS INTELLIGENCE
        </p>

        <h1>
          Know before
          <br />
          <span>you brew.</span>
        </h1>

        <p className="hero-description">
          Build your café on paper before you build it in real life.
          Analyze your rent, staff, menu, equipment, location,
          competition and operating costs — all in one place.
        </p>

        <div className="hero-actions">

          <button className="hero-primary">
            Analyze My Café
            <span>→</span>
          </button>

          <button className="hero-secondary">
            Explore Brewlytics
            <span>↓</span>
          </button>

        </div>

      </div>

      <div className="hero-visual">

        <div className="visual-card main-card">

          <div className="card-header">
            <span>CAFÉ VIABILITY</span>
            <span className="status-dot"></span>
          </div>

          <div className="score">
            <strong>82</strong>
            <span>/100</span>
          </div>

          <p className="score-label">
            HIGH POTENTIAL
          </p>

          <div className="score-bar">
            <div className="score-progress"></div>
          </div>

          <div className="mini-stats">

            <div>
              <span>Profit Probability</span>
              <strong>82%</strong>
            </div>

            <div>
              <span>Monthly Profit</span>
              <strong>₹2.5L</strong>
            </div>

            <div>
              <span>Break-even</span>
              <strong>10.8 mo</strong>
            </div>

          </div>

        </div>

        <div className="floating-card revenue-card">
          <span>PROJECTED REVENUE</span>
          <strong>₹12.8L</strong>
          <small>per month</small>
        </div>

        <div className="floating-card growth-card">
          <span>MARKET</span>
          <strong>Healthy</strong>
          <small>Medium competition</small>
        </div>

      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  )
}

export default Hero