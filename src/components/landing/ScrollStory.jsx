import { ReactLenis } from 'lenis/react'
import './ScrollStory.css'

function ScrollStory() {
  return (
    <ReactLenis root>
      <main className="scroll-story">

        <section className="scroll-panel panel-dark">
          <div className="grid-background"></div>

          <div className="panel-content">
            <p className="eyebrow">01 / BUILD</p>

            <h1>
              Your café.
              <br />
              <span>Your numbers.</span>
            </h1>

            <p className="panel-description">
              Tell Brewlytics everything about your café —
              from rent and staff to your menu, equipment,
              operating hours and expected customers.
            </p>
          </div>
        </section>

        <section className="scroll-panel panel-light">
          <div className="grid-background light-grid"></div>

          <div className="panel-content">
            <p className="eyebrow">02 / ANALYZE</p>

            <h1>
              We crunch
              <br />
              <span>the numbers.</span>
            </h1>

            <p className="panel-description">
              Your costs, pricing, location, competition
              and expected demand come together to create
              a complete picture of your café.
            </p>
          </div>
        </section>

        <section className="scroll-panel panel-coffee">
          <div className="grid-background"></div>

          <div className="panel-content">
            <p className="eyebrow">03 / KNOW</p>

            <h1>
              Know before
              <br />
              <span>you brew.</span>
            </h1>

            <p className="panel-description">
              Get your profitability score, projected revenue,
              break-even period, risks and actionable
              recommendations.
            </p>

            <button className="story-button">
              Analyze My Café →
            </button>
          </div>
        </section>

      </main>
    </ReactLenis>
  )
}

export default ScrollStory