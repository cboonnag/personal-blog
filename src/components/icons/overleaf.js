import React from "react"
import PropTypes from "prop-types"

const Overleaf = ({ color }) => {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        aria-hidden="true" 
        focusable="false" 
        width="1em" 
        height="1em" 
        preserveAspectRatio="xMidYMid meet" 
        viewBox="0 0 24 24"
        >
            <path 
                d="M22.352.748C19.11-.51 7.365-.982 7.345 6.027C3.918 8.22 1.65 11.795 1.65 15.625a8.373 8.373 0 0 0 13.122 6.898a8.373 
                8.373 0 0 0-1.767-14.72c-.606-.234-1.923-.648-2.975-.559c-1.5.955-3.33 2.916-4.195 4.87c2.59-3.083 7.505-2.426 9.194 1.228c1.689
                3.654-.995 7.824-5.02 7.8a5.5 5.5 0 0 1-4.195-1.933c-1.485-1.748-1.868-3.644-1.562-5.497c1.057-6.495 8.76-10.19 14.486-11.61c-1.867.99-5.237
                2.614-7.594 4.384C18.015 9.138 19.13 3.345 22.352.748z" 
              />

    </svg>
  )
}

Overleaf.propTypes = {
  color: PropTypes.string,
}

Overleaf.defaultProps = {
  color: "#000000",
}

export default Overleaf
