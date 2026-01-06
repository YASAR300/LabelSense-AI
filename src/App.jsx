import React, { useState } from 'react'

const App = () => {
  const [productData, setProductData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleUnderstand = () => {
    if (!inputValue.trim()) return
    setLoading(true)
    // Simulate thinking/reasoning
    setTimeout(() => {
      setProductData({
        explanation: "This product is a classic example of modern convenience balancing against processing. While it's vegan and environmentally friendly, the 'creamy' texture you enjoy comes from rapeseed oil and acidity regulators like dipotassium phosphate. It's perfectly fine for your morning coffee, but if you're looking to reduce processed fats or added sugars, you might find the 'Unsweetened' version a more natural companion for your daily routine. Think of it as a helpful shortcut, rather than a whole-food staple."
      })
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <header className="header">
        <h1>Your Health Copilot</h1>
        <p className="tagline">Decipher ingredients and simplify your food choices instantly.</p>
      </header>

      {!productData && !loading && (
        <div className="focused-input-section">
          <div className="boxed accent">
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Paste ingredient list below</h2>
            <textarea
              className="intent-input"
              style={{ height: '150px', resize: 'none' }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="e.g. Water, Oats, Rapeseed Oil, Dipotassium Phosphate, Calcium Carbonate, Salt..."
            />
            <button className="btn" style={{ width: '100%' }} onClick={handleUnderstand}>
              Help me understand
            </button>
          </div>
        </div>
      )}

      {loading && (
        <div className="boxed secondary" style={{ textAlign: 'center', padding: '3rem' }}>
          <h2>Listening...</h2>
          <p>Finding the heart of the matter for you.</p>
        </div>
      )}

      {productData && !loading && (
        <div className="response-section">
          <div className="boxed primary narrative-box">
            <h2>The Insight</h2>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
              {productData.explanation}
            </p>
            <div style={{ marginTop: '2rem', borderTop: '2px dashed #000', paddingTop: '1.5rem' }}>
              <button className="btn" onClick={() => { setProductData(null); setInputValue(''); }}>
                Check another product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
