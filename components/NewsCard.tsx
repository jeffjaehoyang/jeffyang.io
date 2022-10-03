const NewsCard = ({ content, explanation, published }) => {
  return (
    published && (
      <div className="mb-8">
        <div className="flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#709d3b"
            viewBox="0 0 24 24"
            className="mr-3"
            style={{ minWidth: 18, minHeight: 18, maxWidth: 18, maxHeight: 18 }}
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
          <div className="flex flex-col">
            <div className="text-md font-bold">{content}</div>
            <div className="text-md">{explanation}</div>
          </div>
        </div>
      </div>
    )
  )
}

export default NewsCard
