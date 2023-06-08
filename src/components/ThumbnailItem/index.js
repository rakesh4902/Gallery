// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, isActive, onTabActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = details

  const onClickTabActive = () => {
    onTabActive(id)
  }

  const activeTab = isActive ? 'active' : ''
  return (
    <>
      <li className="listItems" type="none">
        <button className="imgButton" type="button" onClick={onClickTabActive}>
          <img
            className={`img1 ${activeTab}`}
            src={thumbnailUrl}
            alt={thumbnailAltText}
          />
        </button>
      </li>
    </>
  )
}

export default ThumbnailItem
