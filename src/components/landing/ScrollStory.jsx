import './ScrollStory.css'

function ScrollStory() {
  return (
    <section className="scroll-story">

      {/* =========================
          01 — BUILD
      ========================== */}

      <section className="scroll-panel panel-build">

        <div className="grid-background"></div>

        <div className="story-content">

          <div className="story-copy">

            <p className="eyebrow">
              01 / BUILD
            </p>

            <h2>
              Your café.
              <br />
              <span>Your numbers.</span>
            </h2>

            <p className="story-description">
              Tell Brewlytics everything about the café
              you're planning — from location and rent
              to staff, tables, menu and operating hours.
            </p>

          </div>

          <div className="input-cards">

            <div className="input-card card-location">
              <span>LOCATION</span>
              <strong>Indiranagar</strong>
              <small>Bengaluru</small>
            </div>

            <div className="input-card card-rent">
              <span>MONTHLY RENT</span>
              <strong>₹1,20,000</strong>
            </div>

            <div className="input-card card-staff">
              <span>STAFF</span>
              <strong>7 members</strong>
            </div>

            <div className="input-card card-tables">
              <span>TABLES</span>
              <strong>18</strong>
            </div>

            <div className="input-card card-hours">
              <span>OPENING HOURS</span>
              <strong>8 AM — 11 PM</strong>
            </div>

            <div className="input-card card-menu">
              <span>AVG. MENU PRICE</span>
              <strong>₹420</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          02 — ANALYZE
      ========================== */}

      <section className="scroll-panel panel-analyze">

        <div className="grid-background light-grid"></div>

        <div className="story-content analyze-content">

          <div className="story-copy">

            <p className="eyebrow">
              02 / ANALYZE
            </p>

            <h2>
              We crunch
              <br />
              <span>the numbers.</span>
            </h2>

            <p className="story-description">
              Your café data becomes a complete financial
              picture — revenue, costs, competition,
              break-even and profitability.
            </p>

          </div>

          <div className="analysis-dashboard">

            <div className="revenue-box">
              <span>PROJECTED MONTHLY REVENUE</span>
              <strong>₹7.36L</strong>
              <small>
                Based on expected customers & menu pricing
              </small>
            </div>

            <div className="analysis-grid">

              <div className="analysis-card">
                <span>MONTHLY COST</span>
                <strong>₹4.82L</strong>
              </div>

              <div className="analysis-card">
                <span>AVG. TICKET</span>
                <strong>₹420</strong>
              </div>

              <div className="analysis-card">
                <span>COMPETITION</span>
                <strong>Moderate</strong>
              </div>

              <div className="analysis-card">
                <span>BREAK-EVEN</span>
                <strong>10.8 mo</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          03 — VERDICT
      ========================== */}

      <section className="scroll-panel panel-verdict">

        <div className="grid-background"></div>

        <div className="verdict-content">

          <div>

            <p className="eyebrow">
              03 / VERDICT
            </p>

            <h2>
              So, are we
              <br />
              <span>locking it?</span>
            </h2>

            <p className="verdict-message">
              Turn your café plan into a data-backed decision.
            </p>

            <button className="verdict-button">
              Analyze My Café
              <span>→</span>
            </button>

          </div>

          <div className="verdict-card">

            <div className="verdict-header">
              <span>CAFÉ VIABILITY SCORE</span>
              <span className="verdict-dot"></span>
            </div>

            <div className="verdict-score">
              <strong>82</strong>
              <span>/100</span>
            </div>

            <p className="verdict-label">
              HIGH POTENTIAL
            </p>

            <div className="verdict-bar">
              <div></div>
            </div>

            <div className="verdict-stats">

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

              <div>
                <span>Competition</span>
                <strong>Moderate</strong>
              </div>

            </div>

          </div>

        </div>

      </section>

    </section>
  )
}

export default ScrollStory