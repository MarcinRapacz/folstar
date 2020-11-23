import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const GDPR = () => {
  const [isAccepted, setIsAccepted] = useState(true)

  const handleClick = () => {
    localStorage.setItem("gdpr", "GDPR accepted")
    setIsAccepted(true)
  }

  useEffect(() => {
    const gdprAccepted = localStorage.getItem("gdpr")
    if (!gdprAccepted) {
      setIsAccepted(false)
    }
  }, [])

  return isAccepted ? null : (
    <div className="GDPR">
      <p>
        Nasza strona internetowa używa plików cookies / storage w celach
        statystycznych, reklamowych oraz funkcjonalnych. Dzięki nim możemy
        indywidualnie dostosować stronę do twoich potrzeb. Każdy ma możliwość
        wyłączenia ich w przeglądarce. Więcej szczegółów w znajdziesz w naszej{" "}
        <Link to="/privacy-policy">polityce prywatności</Link>.
      </p>
      <button onClick={handleClick}>Zgadzam się</button>
    </div>
  )
}

export default GDPR
