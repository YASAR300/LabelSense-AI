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
        explanation: `🧠 What matters here
- High processing for a "creamy" feel using rapeseed oil and phosphates.
- Hidden sweetness from breaking down starches during production.
- Choice between convenience and whole-food ingredients.

⚖️ Tradeoffs to understand
- Stabilizers are used to prevent curdling in heat and separation.
- You gain a smooth, dairy-like experience but compromise on natural fiber and simplicity.

❓ Where uncertainty remains
- Long-term effects of stabilizers on mineral balance are still being studied.

✅ Bottom line
- A great occasional choice for coffee, but consider an unsweetened, simpler version for daily use.`
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
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
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
