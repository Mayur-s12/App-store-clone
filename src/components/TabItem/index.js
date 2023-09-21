// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, onSelected, isActive} = props
  const {tabId, displayText} = tabsList

  const onPressed = () => {
    onSelected(tabId)
  }

  const activeClass = isActive ? 'btn-active' : 'btn'

  return (
    <li className="list-style">
      <button onClick={onPressed} className={activeClass}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
