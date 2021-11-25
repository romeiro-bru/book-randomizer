import './style.css';

export function Randomizer() {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div className="randomize tooltip">
      <button onClick={handleClick}>Randomize</button>
      <span class="tooltiptext">Pick a genre or make a list</span>
    </div>
  )
}