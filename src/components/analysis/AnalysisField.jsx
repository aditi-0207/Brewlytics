import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import './AnalysisField.css'

function AnalysisField({
  field,
  value,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleField = () => {
    setIsOpen((current) => !current)
  }

  return (
    <motion.div
      layout
      className={`analysis-field ${
        isOpen ? 'is-open' : ''
      }`}
      transition={{
        layout: {
          duration: 0.35,
          ease: 'easeInOut',
        },
      }}
    >
      <div
        className="analysis-field-header"
        onClick={toggleField}
      >
        <div className="analysis-field-title">

          <span className="analysis-field-number">
            {field.number}
          </span>

          <h2>
            {field.label}
          </h2>

        </div>

        <button
          type="button"
          className="analysis-field-toggle"
          onClick={(event) => {
            event.stopPropagation()
            toggleField()
          }}
          aria-label={
            isOpen
              ? `Collapse ${field.label}`
              : `Expand ${field.label}`
          }
        >
          {isOpen ? '−' : '+'}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="analysis-field-content"
          >
            <p className="analysis-field-description">
              {field.description}
            </p>

            <FieldInput
              field={field}
              value={value}
              onChange={onChange}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}


/* =========================
   FIELD INPUT
========================= */

function FieldInput({
  field,
  value,
  onChange,
}) {

  /* =========================
     SELECT
  ========================= */

  if (field.type === 'select') {
    return (
      <select
        className="analysis-field-input"
        value={value || ''}
        onChange={(event) =>
          onChange(event.target.value)
        }
      >
        <option value="">
          {field.placeholder}
        </option>

        {field.options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    )
  }


  /* =========================
     TIME RANGE
  ========================= */

  if (field.type === 'time-range') {
    return (
      <div className="analysis-time-range">

        <div>
          <label>
            Opens
          </label>

          <input
            className="analysis-field-input"
            type="time"
            value={value?.open || ''}
            onChange={(event) =>
              onChange({
                ...value,
                open: event.target.value,
              })
            }
          />
        </div>

        <div>
          <label>
            Closes
          </label>

          <input
            className="analysis-field-input"
            type="time"
            value={value?.close || ''}
            onChange={(event) =>
              onChange({
                ...value,
                close: event.target.value,
              })
            }
          />
        </div>

      </div>
    )
  }


  /* =========================
     CURRENCY
  ========================= */

  if (field.type === 'currency') {
    return (
      <div className="analysis-field-input-wrapper">

        <span className="analysis-field-prefix">
          ₹
        </span>

        <input
          className="analysis-field-input has-prefix"
          type="number"
          placeholder={field.placeholder}
          value={value || ''}
          onChange={(event) =>
            onChange(event.target.value)
          }
        />

      </div>
    )
  }


  /* =========================
     COMPETITORS
  ========================= */

  if (field.type === 'competitors') {
    return (
      <CompetitorInput
        suggestions={field.suggestions || []}
        value={value || []}
        onChange={onChange}
      />
    )
  }


  /* =========================
     STANDARD INPUT
  ========================= */

  return (
    <div
      className={
        field.unit
          ? 'analysis-field-input-wrapper'
          : undefined
      }
    >
      <input
        className={`analysis-field-input ${
          field.unit
            ? 'has-unit'
            : ''
        }`}
        type={field.type}
        placeholder={field.placeholder}
        value={value || ''}
        onChange={(event) =>
          onChange(event.target.value)
        }
      />

      {field.unit && (
        <span className="analysis-field-unit">
          {field.unit}
        </span>
      )}
    </div>
  )
}


/* =========================
   COMPETITOR INPUT
========================= */

function CompetitorInput({
  suggestions,
  value,
  onChange,
}) {
  const [input, setInput] = useState('')


  const addCompetitor = (name) => {
    const cleanName = name.trim()

    if (
      !cleanName ||
      value.includes(cleanName)
    ) {
      return
    }

    onChange([
      ...value,
      cleanName,
    ])
  }


  const removeCompetitor = (name) => {
    onChange(
      value.filter(
        (competitor) =>
          competitor !== name
      )
    )
  }


  const handleInputKeyDown = (event) => {
    if (event.key !== 'Enter') {
      return
    }

    event.preventDefault()

    addCompetitor(input)
    setInput('')
  }


  const toggleSuggestion = (suggestion) => {
    if (value.includes(suggestion)) {
      removeCompetitor(suggestion)
    } else {
      addCompetitor(suggestion)
    }
  }


  return (
    <div className="competitor-input">

      {/* SELECTED COMPETITORS */}

      {value.length > 0 && (
        <div className="competitor-selected">

          {value.map((competitor) => (
            <button
              type="button"
              key={competitor}
              className="competitor-chip"
              onClick={() =>
                removeCompetitor(competitor)
              }
            >
              {competitor}

              <span>
                ×
              </span>
            </button>
          ))}

        </div>
      )}


      {/* SUGGESTED COMPETITORS */}

      {suggestions.length > 0 && (
        <div className="competitor-suggestions">

          <p>
            Nearby competitors
          </p>

          <div className="competitor-options">

            {suggestions.map(
              (suggestion) => {
                const selected =
                  value.includes(
                    suggestion
                  )

                return (
                  <button
                    type="button"
                    key={suggestion}
                    className={`competitor-option ${
                      selected
                        ? 'selected'
                        : ''
                    }`}
                    onClick={() =>
                      toggleSuggestion(
                        suggestion
                      )
                    }
                  >
                    {suggestion}

                    {selected && (
                      <span>
                        ✓
                      </span>
                    )}
                  </button>
                )
              }
            )}

          </div>

        </div>
      )}


      {/* MANUAL INPUT */}

      <input
        className="analysis-field-input"
        type="text"
        placeholder="Type another competitor..."
        value={input}
        onChange={(event) =>
          setInput(event.target.value)
        }
        onKeyDown={handleInputKeyDown}
      />

    </div>
  )
}

export default AnalysisField