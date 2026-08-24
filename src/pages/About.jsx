import { motion } from 'motion/react'
import './About.css'

import Navbar from '../components/landing/Navbar'


const cafeInputs = [
  {
    number: '01',
    title: 'Location',
    description: 'Where you want to brew.',
    className: 'input-card-location',
  },
  {
    number: '02',
    title: 'Café Setup',
    description: 'Size, format & hours.',
    className: 'input-card-setup',
  },
  {
    number: '03',
    title: 'Staff',
    description: 'People & payroll.',
    className: 'input-card-staff',
  },
  {
    number: '04',
    title: 'Menu',
    description: 'What you sell & charge.',
    className: 'input-card-menu',
  },
  {
    number: '05',
    title: 'Equipment',
    description: 'What it takes to operate.',
    className: 'input-card-equipment',
  },
  {
    number: '06',
    title: 'Operating Costs',
    description: 'Your recurring expenses.',
    className: 'input-card-costs',
  },
  {
    number: '07',
    title: 'Market',
    description: 'Demand & competition.',
    className: 'input-card-market',
  },
]


const resultCards = [
  {
    label: 'REVENUE',
    value: '₹7.36L',
    className: 'result-revenue',
  },
  {
    label: 'MONTHLY COSTS',
    value: '₹4.82L',
    className: 'result-cost',
  },
  {
    label: 'MONTHLY PROFIT',
    value: '₹2.54L',
    className: 'result-profit',
  },
  {
    label: 'BREAK-EVEN',
    value: '10.8 mo',
    className: 'result-breakeven',
  },
  {
    label: 'COMPETITION',
    value: 'Moderate',
    className: 'result-competition',
  },
  {
    label: 'VIABILITY',
    value: '82 / 100',
    className: 'result-score',
  },
]


const steps = [
  {
    number: '01',
    title: 'Tell us about your café',
    description:
      'Start with the idea you have in your head — where it will be, what kind of café you want to build and how you expect it to operate.',
  },
  {
    number: '02',
    title: 'Build the business picture',
    description:
      'Add your setup, staff, menu, equipment and recurring operating costs.',
  },
  {
    number: '03',
    title: 'Bring in the market',
    description:
      'Location-level information helps us estimate rent, demand and competitive pressure.',
  },
  {
    number: '04',
    title: 'Get the numbers',
    description:
      'Brewlytics combines your inputs and the underlying data to estimate revenue, costs, profit and break-even.',
  },
]


function About() {

  const goToAnalyze = () => {
    window.location.hash = 'analyze'
  }


  return (
    <main className="about-page">

      <Navbar />


      {/* =========================
          HERO
      ========================== */}

      <section className="about-hero">

        <motion.p
          className="about-eyebrow"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          ABOUT BREWLYTICS
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          Know before
          <br />
          <span>you brew.</span>
        </motion.h1>

        <motion.p
          className="about-hero-description"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
        >
          Brewlytics helps aspiring café owners understand
          the numbers behind their idea before they commit
          to building it in the real world.
        </motion.p>

      </section>


      {/* =========================
          WHY BREWLYTICS
      ========================== */}

      <section className="about-story">

        <div className="about-story-copy">

          <p className="about-section-number">
            01 / WHY BREWLYTICS
          </p>

          <h2>
            A good café
            <br />
            needs more than
            <span> good coffee.</span>
          </h2>

          <p>
            Opening a café involves dozens of decisions —
            location, rent, staffing, pricing, equipment,
            competition and daily operating costs.
          </p>

          <p>
            Brewlytics brings those pieces together into
            one financial picture, so you can explore the
            viability of your idea before putting your
            savings behind it.
          </p>

        </div>


        <div className="about-story-card">

          <span className="story-card-label">
            THE QUESTION
          </span>

          <p>
            “Can this café actually
            make money?”
          </p>

          <span className="story-card-answer">
            Brewlytics helps you find out.
          </span>

        </div>

      </section>


      {/* =========================
          WHAT WE DO
      ========================== */}

      <section className="about-inputs">

        <div className="about-section-heading">

          <p className="about-section-number">
            02 / WHAT WE DO
          </p>

          <h2>
            Turn the café
            <br />
            idea into <span>numbers.</span>
          </h2>

          <p>
            Every part of your café plan becomes an input
            into the analysis.
          </p>

        </div>


        <div className="input-card-field">

          {cafeInputs.map((item, index) => (

            <motion.div
              key={item.title}
              className={`about-input-card ${item.className}`}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
                rotate: 0,
              }}
            >

              <span className="input-card-number">
                {item.number}
              </span>

              <strong>
                {item.title}
              </strong>

              <small>
                {item.description}
              </small>

            </motion.div>

          ))}

        </div>

      </section>


      {/* =========================
          HOW IT WORKS
      ========================== */}

      <section className="about-how">

        <div className="about-section-heading centered">

          <p className="about-section-number">
            03 / HOW IT WORKS
          </p>

          <h2>
            From idea to
            <br />
            <span>business picture.</span>
          </h2>

        </div>


        <div className="how-grid">

          {steps.map((step, index) => (

            <motion.div
              key={step.number}
              className="how-card"
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >

              <span className="how-number">
                {step.number}
              </span>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

            </motion.div>

          ))}

        </div>

      </section>


      {/* =========================
          RESULT
      ========================== */}

      <section className="about-result">

        <div className="about-section-heading">

          <p className="about-section-number">
            04 / THE RESULT
          </p>

          <h2>
            See the business
            <br />
            <span>behind the brew.</span>
          </h2>

          <p>
            Instead of one vague yes-or-no answer,
            Brewlytics gives you a complete financial
            picture.
          </p>

        </div>


        <div className="result-card-field">

          {resultCards.map((item, index) => (

            <motion.div
              key={item.label}
              className={`about-result-card ${item.className}`}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -7,
              }}
            >

              <span>
                {item.label}
              </span>

              <strong>
                {item.value}
              </strong>

            </motion.div>

          ))}

        </div>


        <div className="viability-card">

          <div>

            <span className="viability-label">
              CAFÉ VIABILITY SCORE
            </span>

            <strong>
              82
            </strong>

            <span className="viability-out-of">
              /100
            </span>

          </div>

          <div className="viability-right">

            <span>
              HIGH POTENTIAL
            </span>

            <div className="viability-bar">
              <div />
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          METHODOLOGY
      ========================== */}

      <section className="about-methodology">

        <p className="about-section-number">
          05 / DATA & METHODOLOGY
        </p>

        <h2>
          Numbers you can
          <br />
          <span>understand.</span>
        </h2>

        <p>
          Brewlytics is designed around transparent estimates.
          Your café inputs are combined with location and market
          indicators to create a realistic business projection.
        </p>

        <div className="methodology-points">

          <div>
            <strong>
              Your inputs
            </strong>

            <span>
              The café you actually want to build.
            </span>
          </div>

          <div>
            <strong>
              Market data
            </strong>

            <span>
              Location, rent, demand and competition indicators.
            </span>
          </div>

          <div>
            <strong>
              Calculation model
            </strong>

            <span>
              Revenue, costs, profit and break-even estimates.
            </span>
          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================== */}

      <section className="about-cta">

        <p>
          READY TO TEST THE IDEA?
        </p>

        <h2>
          Before you brew,
          <br />
          <span>know.</span>
        </h2>

        <button
          onClick={goToAnalyze}
        >
          Analyze My Café
          <span>→</span>
        </button>

      </section>


      <footer className="about-footer">
        Brewlytics — Café Business Intelligence
      </footer>

    </main>
  )
}

export default About