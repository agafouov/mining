export default function HeaderBtn({ asset }) {
  return (
    <button className="r2DG V7r1 EGpD Kp43 aPJp x4dM dDTU">
      <div className="P13Q">
        <div className="dEpV qSw9">
          <span className="S5cS GnzX">
            {asset === "buy" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 28 28"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 14C3 7.925 7.925 3 14 3s11 4.925 11 11-4.925 11-11 11S3 20.075 3 14m11-5.75a.75.75 0 0 1 .75.75v4.25H19a.75.75 0 0 1 0 1.5h-4.25V19a.75.75 0 0 1-1.5 0v-4.25H9a.75.75 0 0 1 0-1.5h4.25V9a.75.75 0 0 1 .75-.75"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : asset === "withdraw" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 28 28"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M14 3C7.925 3 3 7.925 3 14s4.925 11 11 11 11-4.925 11-11S20.075 3 14 3m4.53 9.47-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 1 0 1.06 1.06l2.72-2.72V19a.75.75 0 0 0 1.5 0v-8.19l2.72 2.72a.75.75 0 1 0 1.06-1.06"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="29"
                fill="none"
                viewBox="0 0 28 29"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 14.5c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11m9.304-5.97c.26.26.26.68 0 .94l-1.365 1.365h7.394a.665.665 0 1 1 0 1.33H10.94l1.364 1.365a.665.665 0 1 1-.94.94l-2.5-2.5a.665.665 0 0 1 0-.94l2.5-2.5c.26-.26.68-.26.94 0m3.556 6.94a.665.665 0 1 1 .94-.94l2.5 2.5a.665.665 0 0 1 0 .94l-2.5 2.5a.665.665 0 1 1-.94-.94l1.365-1.365H9.83a.665.665 0 1 1 0-1.33h7.395z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </span>
          <div
            variant="subtitle2"
            weight="medium"
            className="cpHh YLSR CF5m m_Vw JelQ"
          >
            {asset === "buy"
              ? "Buy"
              : asset === "withdraw"
              ? "Withdraw"
              : "Trade"}
          </div>
        </div>
      </div>
      <div className="gtBI"></div>
    </button>
  );
}
