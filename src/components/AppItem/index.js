// Write your code here

import './index.css'

const AppItem = props => {
  const {appsList} = props

  const {appId, appName, imageUrl, category} = appsList

  return (
    <li className="div-class">
      <img className="image-size" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
