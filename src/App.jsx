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
        explanation: `Based on the ingredients, here are the three things that matter most for your decision right now:

1. **Processing for Texture**: The "creamy" mouthfeel is achieved through added rapeseed oil and phosphates. Companies use these because they prevent separation and create the silky texture of dairy without the actual dairy, but they do make this a highly processed choice rather than a whole food.

2. **Hidden Sweetness Strategy**: While "sugar" might not be the first item, the way oats are processed often breaks down starches into simpler sugars. It’s an effective way to make the drink palatable, but it means the glycemic impact might be higher than you'd expect from "healthy oats."

3. **Additive Tradeoffs**: Dipotassium phosphate is used as an acidity regulator to keep the milk from curdling in coffee. Evidence on its long-term impact on mineral balance is currently evolving, making it a "mixed evidence" ingredient that is fine in moderation but worth noting if consumed in large quantities daily.

**The Decision**: This is a great occasional companion for coffee or baking. However, if you are looking for a daily staple, you might consider an 'Unsweetened' version or one with fewer stabilizers to keep your baseline as natural as possible.`
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
