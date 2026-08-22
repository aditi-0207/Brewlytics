import AnalysisField from './AnalysisField'
import './AnalysisStep.css'

function AnalysisStep({
  step,
  data,
  onChange,
}) {
  return (
    <section className="analysis-step">

      <div className="analysis-step-heading">

        <p className="analysis-step-eyebrow">
          {step.number} / {step.title.toUpperCase()}
        </p>

        <h1>
          {step.heading}
        </h1>

        <p>
          {step.description}
        </p>

      </div>


      {step.fields.length > 0 && (
        <div className="analysis-step-fields">

          {step.fields.map((field) => (
            <AnalysisField
              key={field.id}
              field={field}
              value={data[field.id]}
              onChange={(value) =>
                onChange(field.id, value)
              }
            />
          ))}

        </div>
      )}

    </section>
  )
}

export default AnalysisStep