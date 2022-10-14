import React from 'react'

const Stats = ({column,info}) => {
  return (
    <div className="LabDetail__statsContainer" style={{width: column? "400px":null  }}>
      <div className="LabDetail__stat">
        <svg
          width="15"
          height="19"
          viewBox="0 0 15 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="LabDetail__statIcon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.88678 1.14902C6.16268 -0.212247 8.96012 -0.188454 11.2147 1.21135C13.447 2.63966 14.8038 5.18878 14.7912 7.93091C14.7392 10.6551 13.2844 13.2158 11.4658 15.1953C10.4162 16.343 9.24198 17.3578 7.96722 18.2191C7.83593 18.2973 7.69212 18.3496 7.54289 18.3735C7.39926 18.3672 7.25938 18.3235 7.13588 18.2463C5.1897 16.9522 3.48232 15.3003 2.09585 13.3701C0.935704 11.7589 0.276587 9.81231 0.208009 7.7947C0.206503 5.04731 1.61089 2.51029 3.88678 1.14902ZM5.20193 8.93172C5.58476 9.90327 6.48841 10.537 7.49093 10.537C8.1477 10.5419 8.77904 10.2711 9.24427 9.78493C9.7095 9.29881 9.96997 8.63776 9.96764 7.94907C9.97114 6.89786 9.36994 5.9481 8.44474 5.54327C7.51954 5.13844 6.45285 5.35838 5.74271 6.10041C5.03258 6.84243 4.81909 7.96016 5.20193 8.93172Z"
            fill="#130F26"
          />
        </svg>

        <span className="LabDetail__statText">{info.ubicacion} </span>
      </div>
      <div className="LabDetail__stat">
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="LabDetail__statIcon"
        >
          <path
            opacity="0.4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.60634 0.940116C7.60634 0.420708 7.19883 0 6.69692 0H6.69573L4.74903 0.00123375C2.13073 0.00370124 0 2.20594 0 4.91032V7.24951C0 7.76768 0.407504 8.18962 0.909414 8.18962C1.41132 8.18962 1.82002 7.76768 1.82002 7.24951V4.91032C1.82002 3.24106 3.13455 1.8827 4.75023 1.88023L6.69692 1.879C7.20003 1.879 7.60634 1.45829 7.60634 0.940116ZM17.1725 0.000298394H15.2688C14.7669 0.000298394 14.3594 0.421007 14.3594 0.940415C14.3594 1.45859 14.7669 1.87806 15.2688 1.87806H17.1725C18.7941 1.87806 20.1134 3.24012 20.1134 4.91432V7.2498C20.1134 7.76798 20.5209 8.18992 21.0228 8.18992C21.5259 8.18992 21.9323 7.76798 21.9323 7.2498V4.91432C21.9323 2.20377 19.7979 0.000298394 17.1725 0.000298394ZM7.6667 4.70848H14.268C14.991 4.70848 15.6853 5.00828 16.1908 5.5425C16.6999 6.08164 16.9819 6.80585 16.9807 7.55967V9.12653C16.9747 9.31036 16.9807 9.46458 16.9807 9.46458H4.95585C4.95585 9.46458 4.95877 9.30913 4.95518 9.12653V7.55967C4.94204 5.99898 6.15618 4.72452 7.6667 4.70848Z"
            fill="#130F26"
          />
          <path
            d="M21.9879 11.375H0.0546829C-0.000248525 11.5748 0.0547003 11.8102 0.0547003 12.3296C0.0547003 12.8478 0.0543467 12.5813 0.0543467 13.2528L0.0543467 17.7362C0.0543467 20.4406 2.18627 22.6428 4.80457 22.6453L6.75127 22.6465C7.25437 22.6465 7.66068 22.2258 7.66188 21.7064C7.66188 21.1882 7.25437 20.7675 6.75246 20.7675L4.80696 20.7663C3.19009 20.7638 1.87437 19.4055 1.87437 17.7362V11.375H5.00892V14.5001C4.99697 16.0608 6.20992 17.3365 7.72043 17.3513H14.3218C15.8335 17.3365 17.0464 16.0608 17.0345 14.5001V11.375H20.169V17.7313C20.169 19.4067 18.8497 20.7675 17.2281 20.7675H15.3244C14.8213 20.7675 14.4138 21.1882 14.4138 21.7064C14.4138 22.2258 14.8213 22.6465 15.3244 22.6465H17.2281C19.8523 22.6465 21.9879 20.4431 21.9879 17.7313V13.2528C22.0153 12.3296 21.9879 12.8478 21.9879 12.3296C21.9879 11.8102 21.9883 12.078 21.9879 11.375Z"
            fill="#130F26"
          />
        </svg>

        <span className="LabDetail__statText">{info.area} mtr2 </span>
      </div>
      <div className="LabDetail__stat">
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="LabDetail__statIcon"
        >
          <path
            d="M11.5723 12.1191C7.97853 12.1191 4.94629 12.7236 4.94629 15.0567C4.94629 17.3907 7.99812 17.9739 11.5723 17.9739C15.166 17.9739 18.1983 17.3694 18.1983 15.0364C18.1983 12.7024 15.1464 12.1191 11.5723 12.1191Z"
            fill="#130F26"
          />
          <path
            opacity="0.4"
            d="M11.5722 9.8965C14.0056 9.8965 15.9569 7.87634 15.9569 5.35694C15.9569 2.83657 14.0056 0.817383 11.5722 0.817383C9.13873 0.817383 7.1875 2.83657 7.1875 5.35694C7.1875 7.87634 9.13873 9.8965 11.5722 9.8965Z"
            fill="#130F26"
          />
          <path
            opacity="0.4"
            d="M21.0918 6.41411C21.7213 3.86477 19.8755 1.5752 17.5251 1.5752C17.2695 1.5752 17.0251 1.60417 16.7864 1.65341C16.7546 1.66114 16.7192 1.67756 16.7006 1.70652C16.6791 1.74322 16.695 1.79247 16.7183 1.82434C17.4243 2.84986 17.8301 4.09846 17.8301 5.43879C17.8301 6.72312 17.4579 7.92053 16.805 8.9142C16.7379 9.01655 16.7976 9.15464 16.916 9.17589C17.0802 9.20582 17.2481 9.22127 17.4197 9.2261C19.1312 9.27245 20.6674 8.13201 21.0918 6.41411Z"
            fill="#130F26"
          />
          <path
            d="M22.8853 12.4163C22.5719 11.7249 21.8155 11.2507 20.6654 11.018C20.1226 10.8809 18.6536 10.6877 17.2872 10.7138C17.2666 10.7167 17.2554 10.7312 17.2536 10.7409C17.2508 10.7544 17.2564 10.7775 17.2834 10.792C17.9149 11.1155 20.3558 12.5225 20.0489 15.49C20.0359 15.6184 20.1357 15.7294 20.2597 15.7101C20.8604 15.6213 22.4059 15.2775 22.8853 14.2066C23.1502 13.6407 23.1502 12.9831 22.8853 12.4163Z"
            fill="#130F26"
          />
          <path
            opacity="0.4"
            d="M6.46346 1.65341C6.22562 1.6032 5.98031 1.5752 5.72475 1.5752C3.37432 1.5752 1.52848 3.86477 2.159 6.41411C2.58245 8.13201 4.11862 9.27245 5.83015 9.2261C6.00177 9.22127 6.17059 9.20486 6.33381 9.17589C6.45227 9.15464 6.51196 9.01655 6.4448 8.9142C5.79191 7.91957 5.41975 6.72312 5.41975 5.43879C5.41975 4.09749 5.82642 2.8489 6.53248 1.82434C6.55486 1.79247 6.57165 1.74322 6.54927 1.70652C6.53061 1.67659 6.4961 1.66114 6.46346 1.65341Z"
            fill="#130F26"
          />
          <path
            d="M2.58528 11.0177C1.43525 11.2504 0.67975 11.7246 0.366359 12.416C0.100537 12.9828 0.100537 13.6404 0.366359 14.2073C0.845773 15.2772 2.39128 15.6219 2.99194 15.7098C3.11599 15.7291 3.21486 15.619 3.2018 15.4897C2.89494 12.5231 5.33584 11.1162 5.96822 10.7927C5.99434 10.7772 5.99994 10.755 5.99714 10.7405C5.99527 10.7309 5.98501 10.7164 5.96449 10.7145C4.59714 10.6874 3.12905 10.8806 2.58528 11.0177Z"
            fill="#130F26"
          />
        </svg>
        <span className="LabDetail__statText">{info.capacidad_maxima_personas} </span>
      </div>
    </div>
  )
}

export default Stats