import React, { useState } from 'react'

const InsightBox = ({ title, children, type = 'default' }) => (
  <div className={`boxed ${type}`}>
    <h2>{title}</h2>
    <div>{children}</div>
  </div>
)

const App = () => {
  const [productData, setProductData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSimulateScan = () => {
    setLoading(true)
    // Simulate thinking/reasoning
    setTimeout(() => {
      setProductData({
        name: "Eco-Friendly Oat Milk",
        insight: "Highly processed, but lower environmental impact than dairy. High sugar content for 'Original' version.",
        reasoning: "Contains Dipotassium Phosphate (acidity regulator) and added Rapeseed oil. These improve texture but add calories and processed fats.",
        tradeoff: "You gain a creamy texture and long shelf life, but lose the natural fiber found in whole oats.",
        guidance: "Good for occasional use in coffee; look for 'Unsweetened' next time if you're watching sugar intake."
      })
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Consumer Health Copilot</h1>
        <p className="tagline">Insight, not information. Decision, not configuration.</p>
      </header>

      {!productData && !loading && (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="boxed accent">
            <h3>What are you looking at?</h3>
            <p style={{marginBottom: '1.5rem'}}>Paste ingredient list or simulate a product scan.</p>
            <input 
              type="text" 
              className="intent-input" 
              placeholder="e.g. Water, Oats, Rapeseed Oil, Dipotassium Phosphate..."
            />
            <button className="btn" onClick={handleSimulateScan}>Simulate Product Insight</button>
          </div>
        </div>
      )}

      {loading && (
        <div className="boxed secondary" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2>Reasoning...</h2>
          <p>Inferring what matters most for you right now.</p>
        </div>
      )}

      {productData && !loading && (
        <div className="grid">
          <InsightBox title="The Big Picture" type="primary">
            <p>{productData.insight}</p>
          </InsightBox>

          <InsightBox title="Why It Matters" type="default">
            <p>{productData.reasoning}</p>
          </InsightBox>

          <InsightBox title="The Tradeoff" type="accent">
            <p>{productData.tradeoff}</p>
          </InsightBox>

          <InsightBox title="Next Step" type="secondary">
            <p>{productData.guidance}</p>
            <div style={{marginTop: '1rem'}}>
              <button className="btn" onClick={() => setProductData(null)}>Scan Another</button>
            </div>
          </InsightBox>
        </div>
      )}
    </div>
  )
}

export default App
