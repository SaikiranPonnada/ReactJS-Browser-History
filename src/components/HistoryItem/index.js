import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-list">
      <h1 className="time">{timeAccessed}</h1>
      <div className="history-list-item">
        <div className="domain-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="domain-details">
            <h1 className="title">{title}</h1>
            <p className="url">{domainUrl}</p>
          </div>
        </div>

        <button
          type="button"
          className="delete-button"
          onClick={onDeleteHistory}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
