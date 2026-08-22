import { useState } from 'react'
import AnalysisStep from './AnalysisStep'
import { analysisSteps } from './analysisConfig'
import './Analyze.css'

const createInitialData = () => ({
  location: {},
  cafeSetup: {},
  staff: {},
  menuPricing: {},
  equipment: {},
  operatingCosts: {},
  market: {},
})

function Analyze() {
  const [currentStep, setCurrentStep] = useState(0)

  const [analysisData, setAnalysisData] =
    useState(createInitialData)

  const currentStepConfig =
    analysisSteps[currentStep]

  const updateField = (
    field,
    value
  ) => {
    setAnalysisData((previous) => ({
      ...previous,

      [currentStepConfig.id]: {
        ...previous[currentStepConfig.id],
        [field]: value,
      },
    }))
  }

  const nextStep = () => {
    if (
      currentStep <
      analysisSteps.length - 1
    ) {
      setCurrentStep(
        (previous) => previous + 1
      )
    }
  }

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(
        (previous) => previous - 1
      )
    }
  }

  const progress =
    ((currentStep + 1) /
      analysisSteps.length) *
    100

  return (
    <main className="analyze-page">

      <header className="analyze-header">

        <button
          className="analyze-logo"
          onClick={() => {
            window.location.hash = ''
          }}
        >
          <span className="logo-mark">
            B
          </span>

          <span>
            Brewlytics
          </span>
        </button>

        <span className="step-counter">
          {String(currentStep + 1).padStart(2, '0')}
          {' / '}
          {String(analysisSteps.length).padStart(2, '0')}
        </span>

      </header>


      <div className="progress-section">

        <div className="progress-track">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="progress-labels">

          {analysisSteps.map(
            (step, index) => (
              <span
                key={step.id}
                className={
                  index === currentStep
                    ? 'active'
                    : index < currentStep
                      ? 'completed'
                      : ''
                }
              >
                {step.number}{' '}
                {step.title}
              </span>
            )
          )}

        </div>

      </div>


      <section className="analyze-content">

        <AnalysisStep
          step={currentStepConfig}
          data={
            analysisData[
              currentStepConfig.id
            ]
          }
          onChange={updateField}
        />

      </section>


      <footer className="analyze-footer">

        <button
          className="back-button"
          onClick={previousStep}
          disabled={currentStep === 0}
        >
          ← Back
        </button>

        <button
          className="continue-button"
          onClick={nextStep}
          disabled={
            currentStep ===
            analysisSteps.length - 1
          }
        >
          Continue →
        </button>

      </footer>

    </main>
  )
}

export default Analyze