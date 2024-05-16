import React from 'react'

export const Flower: React.FunctionComponent<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="129"
    height="123"
    viewBox="0 0 129 123"
    fill="none"
  >
    <g clip-path="url(#clip0_232_6160)">
      <path
        d="M64.9854 74.971L40.9595 121.729L34.6167 122.501L19.6246 111.874L18.4713 105.305L55.1828 68.0154L3.47918 59.5141L0.40387 53.1381L5.97787 35.7491L12.1285 32.4644L58.8347 56.2295L50.3776 4.64196L55.1828 0.00488281H73.6347L78.2477 4.64196L70.175 56.4227L116.882 32.8509L122.648 36.1354L128.414 53.5245L125.53 59.5141L74.2113 68.2086L111.307 105.692L109.962 112.261L95.1622 122.887L88.6268 121.921L64.9854 74.971Z"
        fill="#EEC5C7"
      />
    </g>
    <defs>
      <clipPath id="clip0_232_6160">
        <rect width="129" height="123" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const Vector2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="149" height="287" viewBox="0 0 169 307" fill="none">
    <path
      d="M151.921 10.968C156.122 21.1826 158.966 31.9012 160.378 42.85C161.418 49.8284 162.259 57.6154 162.897 65.9329C163.629 74.8332 163.742 83.7727 163.234 92.6869C162.943 97.4852 162.337 102.259 161.418 106.977C160.524 111.886 159.188 116.705 157.429 121.374C155.68 126.179 153.368 130.76 150.54 135.021C147.745 139.365 144.37 143.31 140.509 146.745L139.855 147.296C139.736 147.029 139.659 146.723 139.549 146.432C135.329 135.459 127.657 126.147 117.686 119.895C112.595 116.779 106.923 114.729 101.016 113.871C94.8292 112.967 88.5159 113.662 82.6789 115.889C79.5655 116.97 76.6452 118.539 74.0277 120.539C71.078 122.757 68.6746 125.619 67.0001 128.906C65.4548 132.139 64.6107 135.661 64.5229 139.244C64.4352 142.826 65.1057 146.388 66.4908 149.696C69.0029 155.688 73.5373 160.613 79.3056 163.617C84.572 166.398 90.3343 168.116 96.2632 168.673C102.088 169.272 107.97 168.969 113.7 167.775C120.848 166.27 127.686 163.559 133.919 159.759C134.175 161.389 134.322 163.034 134.36 164.684C134.653 174.412 132.776 184.082 128.866 192.992C125.276 201.325 120.444 209.066 114.532 215.953C109.401 221.993 103.55 227.384 97.1086 232.007C91.5439 235.809 85.6466 239.103 79.4881 241.847C69.8981 246.24 59.8533 249.57 49.5337 251.775C42.6234 253.31 35.6058 254.32 28.5413 254.795C22.8689 255.139 18.7484 255.192 15.5487 255.156C12.7726 255.171 10.9414 255.105 9.52458 255.116L11.2788 253.935C16.2799 250.57 20.7468 247.442 24.4513 244.713C31.836 239.247 36.3163 235.433 35.7257 234.516C35.1351 233.599 30.0293 235.79 22.0162 240.076C17.9855 242.21 13.2855 244.861 8.10171 247.908L6.13576 249.063C5.28431 249.55 4.47656 250.111 3.7215 250.737C3.24344 251.147 2.80203 251.598 2.4022 252.084C1.89244 252.702 1.47139 253.387 1.15117 254.121C0.491684 255.632 0.332606 257.315 0.697101 258.924C1.28925 260.943 2.25716 262.833 3.55011 264.495L6.22169 268.587C21.4593 291.011 35.1224 308.215 36.7593 306.907C38.3962 305.598 27.4011 286.347 12.1727 263.899L10.1386 260.963C11.6142 261.33 13.1123 261.599 14.6231 261.768C19.1168 262.367 23.649 262.624 28.1807 262.537C35.6415 262.471 43.0794 261.719 50.4003 260.291C61.3755 258.246 72.0697 254.918 82.2619 250.375C88.9812 247.411 95.4081 243.828 101.459 239.672C108.606 234.605 115.088 228.663 120.755 221.985C127.346 214.313 132.718 205.676 136.685 196.374C141.173 186.051 143.285 174.852 142.865 163.6C142.757 160.357 142.321 157.133 141.563 153.977C142.455 153.241 143.346 152.504 144.175 151.715C148.446 147.802 152.171 143.333 155.247 138.427C158.25 133.682 160.687 128.603 162.511 123.293C164.3 118.243 165.624 113.04 166.469 107.75C167.332 102.806 167.866 97.811 168.068 92.7963C168.404 83.6604 168.065 74.5114 167.054 65.4235C166.176 56.9591 165.087 49.1692 163.786 42.0538C161.95 30.9591 158.483 20.1938 153.497 10.1064C152.138 7.45005 150.576 4.90164 148.826 2.48366C147.586 0.875167 146.964 0.111704 146.773 0.176748C146.581 0.241791 148.844 3.95589 151.902 11.0162L151.921 10.968ZM131.375 150.269C131.7 151.085 131.958 151.93 132.216 152.776C126.225 156.518 119.592 159.124 112.65 160.461C107.579 161.426 102.388 161.611 97.259 161.009C92.2199 160.465 87.3366 158.934 82.8894 156.501C78.6507 154.213 75.3423 150.521 73.534 146.062C72.6199 143.883 72.1756 141.536 72.2301 139.175C72.2846 136.814 72.8367 134.492 73.8504 132.359C76.3166 128.266 80.2218 125.237 84.8053 123.864C89.4564 122.157 94.4695 121.669 99.3666 122.446C104.221 123.254 108.864 125.032 113.017 127.673C117.203 130.301 120.929 133.596 124.048 137.427C127.2 141.249 129.684 145.575 131.393 150.221"
      fill="#080708"
    />
  </svg>
)

export const CatCute: React.FunctionComponent<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="282"
    height="304"
    viewBox="0 0 282 304"
    fill="none"
  >
    <path
      d="M36.6697 122.479C32.9433 152.431 72.9435 161.644 95.573 165.671C102.182 166.463 108.827 166.924 115.482 167.052C117.346 165.707 119.493 164.808 121.758 164.424C124.024 164.041 126.347 164.183 128.549 164.84C130.05 165.212 131.502 165.758 132.876 166.468C137.024 166.101 141.156 165.569 145.238 164.834C146.289 159.92 150.304 156.334 159.347 158.108C161.418 158.395 163.465 158.834 165.472 159.419C171.14 157.34 176.614 154.765 181.831 151.726C198.117 143.159 212.717 127.715 207.782 107.942C205.223 100.875 200.863 94.5979 195.133 89.7329L195.113 89.8373C194.673 91.374 192.34 90.3114 192.676 88.9523C192.758 88.579 192.826 88.2023 192.894 87.8255L192.937 87.8001L192.983 87.4832L193.049 87.0841C193.125 86.5633 193.191 86.0253 193.271 85.4908C193.284 85.3554 193.302 85.2287 193.307 85.0984L193.347 84.7145C193.443 83.6948 193.516 82.6766 193.589 81.6585C193.919 75.149 193.779 68.1969 190.575 62.3666C189.953 61.1544 188.714 60.0968 187.469 61.2139C182.57 64.9013 178.097 69.1226 174.133 73.7998L173.206 74.8456L172.467 75.6991L172.283 75.9001L172.022 76.205C170.972 77.2996 169.04 80.9925 167.826 78.1447C168.072 76.8931 168.689 75.7447 169.597 74.8485C143.625 65.7815 108.044 64.0848 79.9654 74.2287C80.7771 75.2709 81.5274 76.2681 82.2132 77.1755C83.1732 78.5481 81.0852 79.5352 80.3438 78.2774C79.5945 77.1637 78.7934 76.0804 77.9594 75.0398C77.7132 74.7206 77.4533 74.3979 77.1898 74.0888L76.9944 73.8558C76.7396 73.5416 76.4813 73.2412 76.2092 72.9373C74.8835 71.3971 73.5396 69.9838 72.1632 68.5548C68.852 65.3991 65.3916 62.0295 61.1228 60.2625C58.3068 59.6008 58.7359 63.7357 58.0805 65.5383C56.93 71.5935 56.421 77.7531 56.5622 83.9151L56.5867 84.7248C56.5847 84.8009 56.5869 84.8771 56.5935 84.9529L56.6051 85.4453L56.6254 85.9325C56.6342 86.1246 56.6379 86.3082 56.6553 86.4952C56.6528 86.5445 56.6547 86.5939 56.661 86.6428L56.7008 87.4783C56.855 89.7091 57.0396 91.9915 57.3205 94.2404C57.3325 94.4196 57.2959 94.5988 57.2147 94.759C57.1335 94.9192 57.0106 95.0546 56.859 95.1509C54.7447 95.7587 54.466 92.5683 54.3161 90.01C53.4546 90.5767 52.6943 91.2838 52.0669 92.102C51.9447 92.1859 51.8282 92.2778 51.7183 92.3772L51.6321 92.4279C51.4643 92.5554 51.3061 92.6952 51.159 92.8462L50.5784 93.3973L49.4741 94.4778C49.0992 94.8298 48.7464 95.2045 48.4175 95.5998L48.0797 96.031C41.4835 103.332 38.2641 112.856 36.6697 122.479Z"
      fill="white"
    />
    <path
      d="M71.9132 206.153C75.8451 222.118 89.608 232.961 104.079 239.255C113.804 243.76 124.816 244.048 135.35 243.074C139.529 242.502 143.782 241.841 147.665 240.098C150.571 238.884 152.774 236.32 155.825 235.45C159.505 235.312 163.997 234.858 166.201 231.528C166.278 231.422 166.348 231.311 166.411 231.195C166.455 231.131 166.493 231.062 166.522 230.99L166.641 230.699L166.755 230.4L166.83 230.193L166.883 230.046C168.94 224.005 167.595 216.939 164.64 211.414C157.805 199.818 152.133 210.243 152.824 218.937C152.931 222.001 153.625 225.016 154.867 227.819C152.885 231.565 150.195 223.713 150.167 222.012C148.431 214.596 151.848 198.397 162.309 204.604C168.797 209.289 172.642 221.01 170.335 229.462C172.83 228.803 175.258 227.911 177.588 226.801C179.839 225.717 182.057 224.537 184.26 223.39L184.234 223.405C183.114 222.371 182.045 221.306 181.029 220.233C180.943 220.149 180.875 220.048 180.828 219.937C180.782 219.826 180.758 219.707 180.759 219.586C180.759 219.466 180.784 219.347 180.831 219.236C180.878 219.125 180.948 219.025 181.034 218.942C182.575 218.208 183.609 221.104 184.798 221.842C185.081 222.105 185.381 222.357 185.672 222.615C186.102 222.989 186.553 223.361 187.005 223.734C199.08 233.703 215.327 240.528 230.967 236.497C248.97 232.165 262.59 209.208 242.7 197.74C224.834 190.963 226.671 225.134 200.962 222.343C197.928 222.039 194.946 221.347 192.087 220.285L191.014 219.861L190.644 219.707L190.14 219.482C187.83 218.455 185.669 217.121 183.716 215.515C183.606 215.436 183.512 215.336 183.441 215.221C183.37 215.105 183.322 214.977 183.3 214.843C183.279 214.71 183.283 214.573 183.315 214.441C183.346 214.309 183.402 214.184 183.482 214.074C183.561 213.964 183.661 213.871 183.776 213.8C183.892 213.729 184.02 213.681 184.154 213.659C184.287 213.637 184.424 213.642 184.556 213.673C184.688 213.704 184.812 213.761 184.922 213.84C185.787 214.527 186.695 215.154 187.643 215.719C189.287 216.673 191.011 217.482 192.795 218.138C196.844 216.086 200.691 213.659 204.286 210.888C204.226 210.694 204.227 210.485 204.289 210.291C204.351 210.097 204.471 209.926 204.632 209.802C207.675 207.684 210.576 205.369 213.316 202.872C218.745 197.432 223.917 191.574 227.532 184.73C229.706 180.122 230.703 175.047 230.434 169.96C230.57 163.948 226.766 156.649 222.296 164.995C221.15 167.6 220.491 170.392 220.35 173.235C220.369 173.407 220.345 173.581 220.281 173.742C220.217 173.903 220.115 174.046 219.983 174.158C219.851 174.27 219.693 174.348 219.524 174.386C219.355 174.423 219.179 174.418 219.012 174.371C217.336 173.931 217.584 170.57 218.459 167.152C217.295 166.26 216.135 164.784 215.153 164.319C213.259 162.864 211.277 161.528 209.219 160.318C206.317 158.445 203.064 157.184 199.659 156.611C196.253 156.038 192.767 156.165 189.412 156.984C183.083 158.753 179.382 165.137 177.182 170.915C176.644 172.09 176.739 174.101 175.346 174.516C174.975 174.575 174.595 174.52 174.256 174.36C173.916 174.2 173.632 173.942 173.442 173.618C173.251 173.295 173.162 172.922 173.187 172.547C173.211 172.172 173.348 171.814 173.579 171.518C174.09 169.675 174.75 167.877 175.552 166.141C174.464 165.772 173.121 164.892 172.553 164.716C171.728 164.124 169.677 163.638 168.866 162.873C167.99 162.589 166.986 162.264 165.907 161.948C164.827 161.633 164.077 161.425 163.127 161.172C162.963 161.13 162.799 161.087 162.631 161.058L162.011 160.913L161.52 160.808C156.141 159.718 150.357 159.692 148.254 164.298L148.165 164.501L148.073 164.718L147.994 164.939L147.916 165.182L147.818 165.507L147.766 165.735C147.715 165.765 147.727 165.885 147.706 165.967L147.644 166.294L147.631 166.627C147.457 170.723 149.167 177.957 152.931 179.754C154.628 179.915 155.696 177.671 155.91 176.222C156.296 174.474 155.292 172.535 155.866 170.908C158.76 169.202 158.31 174.877 158.4 176.507C158.37 177.44 158.145 178.356 157.738 179.196C157.331 180.036 156.752 180.78 156.038 181.382C151.024 185.498 144.611 175.349 144.925 167.038C141.896 167.493 138.847 167.847 135.777 168.101C142.173 172.236 147.905 179.164 141.082 184.092C135.491 187.388 128.835 184.346 123.731 181.458C122.262 180.757 122.969 178.53 124.578 179.311C127.936 181.069 131.461 182.973 135.34 182.799C143.669 181.824 141.303 176.057 136.297 172.193C134.535 170.627 132.522 169.369 130.343 168.472L129.975 168.34L129.616 168.204L129.212 168.07L128.846 167.961L128.82 167.918L128.492 167.833L128.163 167.748L127.299 167.561L127.018 167.518L126.927 167.502L126.588 167.458L126.212 167.412L125.842 167.375L125.469 167.352L125.136 167.339L125.084 167.369L124.851 167.367L124.273 167.372L124.009 167.376L123.957 167.407L123.631 167.425L123.324 167.455L122.888 167.503L122.515 167.56L122.174 167.611L122.131 167.636L121.777 167.705L121.481 167.775L120.974 167.9L120.706 167.977L120.637 168.017L120.326 168.12L120.015 168.222L119.638 168.351L119.466 168.452L119.233 168.589L118.915 168.719L118.588 168.912C115.383 170.477 112.647 172.858 110.655 175.817C110.068 177.44 107.663 176.118 108.563 174.729C109.919 172.497 111.613 170.488 113.584 168.774C111.159 168.702 108.721 168.591 106.272 168.441C99.0085 168.082 91.7905 167.085 84.7013 165.462C83.2073 165.12 81.682 164.758 80.1255 164.375C80.327 164.61 80.4431 164.906 80.4547 165.216C80.4663 165.525 80.3728 165.829 80.1894 166.079C78.5998 168.127 77.2289 170.335 76.0992 172.669C71.3935 182.999 68.2645 195.001 71.9132 206.153Z"
      fill="white"
    />
    <path
      d="M71.9132 206.153C75.8451 222.118 89.608 232.961 104.079 239.255C113.804 243.76 124.816 244.048 135.35 243.074C139.529 242.502 143.782 241.841 147.665 240.098C150.571 238.884 152.774 236.32 155.825 235.45C159.505 235.312 163.997 234.858 166.201 231.528C166.278 231.422 166.348 231.311 166.411 231.195C166.455 231.131 166.493 231.062 166.522 230.99L166.641 230.699L166.755 230.4L166.83 230.193L166.883 230.046C168.94 224.005 167.595 216.939 164.64 211.414C157.805 199.818 152.133 210.243 152.824 218.937C152.931 222.001 153.625 225.016 154.867 227.819C152.885 231.565 150.195 223.713 150.167 222.012C148.431 214.596 151.848 198.397 162.309 204.604C168.797 209.289 172.642 221.01 170.335 229.462C172.83 228.803 175.258 227.911 177.588 226.801C179.839 225.717 182.057 224.537 184.26 223.39L184.234 223.405C183.114 222.371 182.045 221.306 181.029 220.233C180.943 220.149 180.875 220.048 180.828 219.937C180.782 219.826 180.758 219.707 180.759 219.586C180.759 219.466 180.784 219.347 180.831 219.236C180.878 219.125 180.948 219.025 181.034 218.942C182.575 218.208 183.609 221.104 184.798 221.842C185.081 222.105 185.381 222.357 185.672 222.615C186.102 222.989 186.553 223.361 187.005 223.734C199.08 233.703 215.327 240.528 230.967 236.497C248.97 232.165 262.59 209.208 242.7 197.74C224.834 190.963 226.671 225.134 200.962 222.343C197.928 222.039 194.946 221.347 192.087 220.285L191.014 219.861L190.644 219.707L190.14 219.482C187.83 218.455 185.669 217.121 183.716 215.515C183.606 215.436 183.512 215.336 183.441 215.221C183.37 215.105 183.322 214.977 183.3 214.843C183.279 214.71 183.283 214.573 183.315 214.441C183.346 214.309 183.402 214.184 183.482 214.074C183.561 213.964 183.661 213.871 183.776 213.8C183.892 213.729 184.02 213.681 184.154 213.659C184.287 213.637 184.424 213.642 184.556 213.673C184.688 213.704 184.812 213.761 184.922 213.84C185.787 214.527 186.695 215.154 187.643 215.719C189.287 216.673 191.011 217.482 192.795 218.138C196.844 216.086 200.691 213.659 204.286 210.888C204.226 210.694 204.227 210.485 204.289 210.291C204.351 210.097 204.471 209.926 204.632 209.802C207.675 207.684 210.576 205.369 213.316 202.872C218.745 197.432 223.917 191.574 227.532 184.73C229.706 180.122 230.703 175.047 230.434 169.96C230.57 163.948 226.766 156.649 222.296 164.995C221.15 167.6 220.491 170.392 220.35 173.235C220.369 173.407 220.345 173.581 220.281 173.742C220.217 173.903 220.115 174.046 219.983 174.158C219.851 174.27 219.693 174.348 219.524 174.386C219.355 174.423 219.179 174.418 219.012 174.371C217.336 173.931 217.584 170.57 218.459 167.152C217.295 166.26 216.135 164.784 215.153 164.319C213.259 162.864 211.277 161.528 209.219 160.318C206.317 158.445 203.064 157.184 199.659 156.611C196.253 156.038 192.767 156.165 189.412 156.984C183.083 158.753 179.382 165.137 177.182 170.915C176.644 172.09 176.739 174.101 175.346 174.516C174.975 174.575 174.595 174.52 174.256 174.36C173.916 174.2 173.632 173.942 173.442 173.618C173.251 173.295 173.162 172.922 173.187 172.547C173.211 172.172 173.348 171.814 173.579 171.518C174.09 169.675 174.75 167.877 175.552 166.141C174.464 165.772 173.121 164.892 172.553 164.716C171.728 164.124 169.677 163.638 168.866 162.873C167.99 162.589 166.986 162.264 165.907 161.948C164.827 161.633 164.077 161.425 163.127 161.172C162.963 161.13 162.799 161.087 162.631 161.058L162.011 160.913L161.52 160.808C156.141 159.718 150.357 159.692 148.254 164.298L148.165 164.501L148.073 164.718L147.994 164.939L147.916 165.182L147.818 165.507L147.766 165.735C147.715 165.765 147.727 165.885 147.706 165.967L147.644 166.294L147.631 166.627C147.457 170.723 149.167 177.957 152.931 179.754C154.628 179.915 155.696 177.671 155.91 176.222C156.296 174.474 155.292 172.535 155.866 170.908C158.76 169.202 158.31 174.877 158.4 176.507C158.37 177.44 158.145 178.356 157.738 179.196C157.331 180.036 156.752 180.78 156.038 181.382C151.024 185.498 144.611 175.349 144.925 167.038C141.896 167.493 138.847 167.847 135.777 168.101C142.173 172.236 147.905 179.164 141.082 184.092C135.491 187.388 128.835 184.346 123.731 181.458C122.262 180.757 122.969 178.53 124.578 179.311C127.936 181.069 131.461 182.973 135.34 182.799C143.669 181.824 141.303 176.057 136.297 172.193C134.535 170.627 132.522 169.369 130.343 168.472L129.975 168.34L129.616 168.204L129.212 168.07L128.846 167.961L128.82 167.918L128.492 167.833L128.163 167.748L127.299 167.561L127.018 167.518L126.927 167.502L126.588 167.458L126.212 167.412L125.842 167.375L125.469 167.352L125.136 167.339L125.084 167.369L124.851 167.367L124.273 167.372L124.009 167.376L123.957 167.407L123.631 167.425L123.324 167.455L122.888 167.503L122.515 167.56L122.174 167.611L122.131 167.636L121.777 167.705L121.481 167.775L120.974 167.9L120.706 167.977L120.637 168.017L120.326 168.12L120.015 168.222L119.638 168.351L119.466 168.452L119.233 168.589L118.915 168.719L118.588 168.912C115.383 170.477 112.647 172.858 110.655 175.817C110.068 177.44 107.663 176.118 108.563 174.729C109.919 172.497 111.613 170.488 113.584 168.774C111.159 168.702 108.721 168.591 106.272 168.441C99.0085 168.082 91.7905 167.085 84.7013 165.462C83.2073 165.12 81.682 164.758 80.1255 164.375C80.327 164.61 80.4431 164.906 80.4547 165.216C80.4663 165.525 80.3728 165.829 80.1894 166.079C78.5998 168.127 77.2289 170.335 76.0992 172.669C71.3935 182.999 68.2645 195.001 71.9132 206.153Z"
      fill="white"
    />
    <path
      d="M156.077 181.429C156.79 180.827 157.368 180.082 157.775 179.242C158.182 178.402 158.408 177.487 158.439 176.554C158.349 174.924 158.807 169.302 155.905 170.955C155.331 172.582 156.335 174.521 155.949 176.269C155.725 177.759 154.585 180.079 152.807 179.781C152.84 179.786 152.872 179.794 152.903 179.806L153.008 179.825C149.096 177.975 147.422 170.349 147.667 166.316C149.427 156.619 162.596 160.743 169.006 162.815C170.503 163.72 171.04 161.697 169.616 161.132C166.398 159.527 162.921 158.503 159.347 158.107C134.639 153.252 147.387 188.467 156.077 181.429Z"
      fill="#363434"
    />
    <path
      d="M141.127 184.148C150.707 177.223 135.526 166.357 128.585 164.842C120.31 162.244 112.568 167.76 108.389 174.611C107.469 175.966 109.874 177.288 110.481 175.699C117.204 166.211 127.5 164.576 136.398 172.286C141.407 176.135 143.749 181.882 135.441 182.891C131.562 183.065 128.002 181.181 124.679 179.403C123.06 178.627 122.362 180.85 123.832 181.55C128.874 184.394 135.541 187.452 141.127 184.148Z"
      fill="#363434"
    />
    <path
      d="M76.191 72.8667C76.7944 73.5557 77.3807 74.2548 77.9411 74.9692C106.807 63.7578 144.331 65.6205 171.02 75.3327C171.449 75.5093 171.875 75.6995 172.295 75.8812C172.915 75.1794 173.521 74.4741 174.145 73.7809C173.332 73.4247 172.563 73.0654 171.716 72.7519C145.153 63.0578 105.774 61.3367 76.191 72.8667Z"
      fill="#363434"
    />
    <path
      d="M161.58 160.773C163.126 161.092 164.643 161.498 166.034 161.908C172.201 159.72 178.138 156.929 183.757 153.574C201.158 144.28 216.379 127.054 210.047 106.131C206.763 97.2714 200.703 90.2802 193.365 84.7041C193.259 85.7649 193.134 86.8135 192.916 87.882C199.528 93.19 204.943 99.7372 207.779 107.955C212.693 127.694 198.113 143.172 181.828 151.739C175.419 155.462 168.632 158.491 161.58 160.773Z"
      fill="#363434"
    />
    <path
      d="M147.673 166.324C147.797 165.61 148.011 164.915 148.309 164.254C131.074 167.763 113.009 167.72 95.5731 165.671C72.9233 161.61 32.9434 152.431 36.6698 122.479C38.259 112.848 41.552 103.35 48.0462 95.9347L48.384 95.5035C48.7129 95.1081 49.0657 94.7334 49.4406 94.3815L50.5449 93.301L51.1254 92.7498C51.2726 92.5989 51.4307 92.4591 51.5986 92.3316L51.6848 92.2808C51.7947 92.1815 51.9111 92.0895 52.0333 92.0057C53.0545 90.3707 56.1274 89.1048 56.6673 87.382C56.6028 86.1895 56.552 85.0006 56.5286 83.8188C55.3932 84.7086 54.2867 85.6279 53.228 86.5886C48.7517 91.2239 43.9141 95.5613 40.6612 101.228C36.2808 108.937 33.8145 117.584 33.4695 126.443C34.3136 152.215 63.8274 160.634 84.7013 165.463C91.7337 167.052 98.8912 168.026 106.093 168.373C110.219 168.599 114.313 168.751 118.378 168.793C120.255 167.916 122.296 167.442 124.368 167.403C126.44 167.363 128.497 167.758 130.407 168.562C136.191 168.271 141.952 167.635 147.66 166.657L147.673 166.324Z"
      fill="#363434"
    />
    <path
      d="M57.2819 94.1346C56.0221 84.587 56.2786 74.9002 58.0419 65.4325C58.7177 63.6644 58.2935 59.5382 61.0842 60.1567C65.358 61.9324 68.8134 65.2933 72.1246 68.449C75.1364 71.4481 77.8774 74.7074 80.3154 78.1889C81.0771 79.4811 83.1651 78.4941 82.1848 77.087C77.1606 70.3558 68.4835 59.4168 60.1008 57.6022C55.3613 57.7146 56.1014 64.2083 55.0413 67.5496C53.9946 74.1125 53.6685 80.7701 54.0688 87.4039C54.4969 89.2526 53.845 95.9053 56.8305 95.0624C56.983 94.9634 57.1056 94.8247 57.1851 94.6612C57.2647 94.4978 57.2981 94.3157 57.2819 94.1346Z"
      fill="#363434"
    />
    <path
      d="M195.139 89.8218C196.597 81.6609 198.236 61.8547 189.041 58.0118C183.718 57.528 174.01 69.6927 170.443 73.7228C169.516 75.1047 167.94 76.4285 167.803 78.1459C169.009 80.9988 170.95 77.3009 172 76.2062C176.686 70.7854 181.624 65.3786 187.481 61.1948C188.718 60.0828 189.965 61.1353 190.587 62.3475C193.757 68.1981 193.931 75.1299 193.596 81.6308C193.481 84.0979 193.191 86.5537 192.728 88.9798C192.406 90.3648 194.688 91.3412 195.139 89.8218Z"
      fill="#363434"
    />
    <path
      d="M221.143 167.451C223.474 165.241 209.673 157.032 207.671 156.019C202.216 152.908 195.704 152.475 189.605 153.492C181.018 155.072 175.875 163.676 173.696 171.461C173.461 171.753 173.319 172.11 173.289 172.484C173.259 172.859 173.342 173.233 173.528 173.56C173.714 173.886 173.994 174.148 174.332 174.313C174.669 174.478 175.048 174.538 175.42 174.484C176.856 174.044 176.727 172.054 177.264 170.878C179.465 165.1 183.166 158.716 189.495 156.947C192.849 156.128 196.336 156.001 199.741 156.574C203.147 157.147 206.4 158.409 209.301 160.281C211.36 161.491 213.342 162.827 215.235 164.282C216.973 165.103 219.232 169.054 221.143 167.451Z"
      fill="#363434"
    />
    <path
      d="M206.446 211.855C216 205.063 227.245 192.769 231.28 181.674C233.323 174.92 234.914 165.508 229.86 159.77C228.728 158.791 227.264 158.283 225.769 158.352C224.274 158.421 222.862 159.062 221.826 160.141C219.683 161.567 215.789 173.532 219.057 174.368C219.224 174.415 219.399 174.42 219.569 174.383C219.738 174.345 219.895 174.267 220.027 174.155C220.159 174.043 220.262 173.9 220.326 173.739C220.39 173.578 220.414 173.404 220.395 173.232C220.535 170.389 221.195 167.597 222.34 164.992C226.811 156.646 230.615 163.945 230.479 169.957C230.748 175.044 229.751 180.119 227.577 184.727C223.962 191.571 218.807 197.418 213.361 202.869C210.62 205.366 207.72 207.681 204.677 209.799C203.515 210.821 205.312 212.768 206.446 211.855Z"
      fill="#363434"
    />
    <path
      d="M167.717 234.593C174.2 226.686 170.221 210.365 162.256 204.613C151.795 198.405 148.403 214.59 150.114 222.02C150.142 223.722 152.832 231.574 154.814 227.828C153.572 225.025 152.878 222.01 152.77 218.945C152.114 210.231 157.752 199.827 164.587 211.423C167.706 217.245 168.995 224.808 166.462 231.026C164.408 234.849 159.637 235.34 155.765 235.486C152.714 236.356 150.511 238.92 147.605 240.134C143.722 241.877 139.477 242.534 135.29 243.11C124.79 244.064 113.778 243.776 104.018 239.291C89.5478 232.997 75.7848 222.154 71.8529 206.189C68.1957 195.042 71.3246 183.041 76.0101 172.675C77.1398 170.342 78.5106 168.133 80.1002 166.085C80.3118 165.785 80.3987 165.414 80.3426 165.051C80.2866 164.688 80.092 164.361 79.7998 164.138C77.5435 161.847 74.1575 170.064 73.1048 171.567C67.6761 183.114 65.0805 196.67 69.9216 208.86C76.4743 229.212 96.6952 242.366 117.093 245.56C129.426 246.415 143.627 247.25 154.141 239.485C158.163 236.522 163.339 239.159 167.717 234.593Z"
      fill="#363434"
    />
    <path
      d="M242.099 234.114C256.176 225.956 260.452 206.173 245.751 196.278C244.225 195.222 242.496 194.494 240.674 194.142C238.851 193.79 236.976 193.821 235.166 194.232C233.356 194.644 231.652 195.428 230.162 196.534C228.671 197.64 227.427 199.044 226.508 200.656C222.426 206.197 219.28 212.753 213.569 216.85C205.789 222.063 195.371 220.125 187.673 215.69C186.725 215.125 185.816 214.498 184.952 213.812C184.842 213.732 184.717 213.676 184.585 213.644C184.454 213.613 184.317 213.609 184.183 213.63C184.049 213.652 183.921 213.7 183.806 213.771C183.69 213.842 183.59 213.936 183.511 214.046C183.432 214.156 183.375 214.28 183.344 214.412C183.313 214.544 183.308 214.681 183.33 214.814C183.351 214.948 183.399 215.076 183.471 215.192C183.542 215.307 183.635 215.407 183.745 215.486C188.708 219.41 194.713 221.791 201.015 222.335C226.709 225.101 224.872 190.93 242.762 197.726C262.653 209.217 249.019 232.148 231.02 236.489C214.411 240.766 197.108 232.799 184.852 221.834C183.662 221.096 182.628 218.199 181.087 218.934C181.001 219.017 180.932 219.117 180.884 219.228C180.837 219.339 180.812 219.458 180.812 219.578C180.812 219.699 180.835 219.818 180.882 219.929C180.928 220.04 180.997 220.141 181.083 220.225C195.821 235.972 222.331 247.113 242.099 234.114Z"
      fill="#363434"
    />
    <path
      d="M190.185 219.48C190.819 219.768 191.474 220.032 192.132 220.282C196.149 218.492 199.983 216.318 203.581 213.789C205.056 212.687 206.78 211.694 207.794 210.145C207.805 209.978 207.775 209.812 207.706 209.66C207.637 209.509 207.532 209.377 207.399 209.276C207.266 209.176 207.11 209.11 206.945 209.085C206.78 209.061 206.612 209.077 206.455 209.134C206.13 209.375 205.826 209.644 205.547 209.937C200.824 213.718 195.667 216.922 190.185 219.48Z"
      fill="#363434"
    />
    <path
      d="M166.175 231.544C166.265 231.562 166.358 231.566 166.449 231.556C169.931 231.342 173.347 230.508 176.536 229.093C179.945 227.65 183.255 225.982 186.443 224.1C186.641 223.983 186.848 223.862 187.054 223.74C186.603 223.367 186.151 222.995 185.722 222.621C185.24 222.906 184.731 223.205 184.227 223.433C182.007 224.591 179.798 225.765 177.555 226.844C174.212 228.531 170.602 229.622 166.884 230.069C166.777 230.399 166.651 230.717 166.517 231.04C166.417 231.217 166.302 231.386 166.175 231.544Z"
      fill="#363434"
    />
    <path
      d="M177.237 165.752C177.294 165.627 177.324 165.491 177.326 165.354C177.328 165.217 177.302 165.08 177.249 164.954C177.196 164.827 177.118 164.712 177.019 164.617C176.92 164.522 176.802 164.449 176.673 164.401C175.571 163.89 174.572 163.318 173.498 162.697C172.262 162.195 168.379 159.33 168.666 162.377C168.975 163.413 171.677 163.98 172.653 164.67C173.638 164.983 176.817 167.264 177.237 165.752Z"
      fill="#363434"
    />
    <path
      d="M111.822 125.887C114.394 131.649 121.697 134.762 127.238 131.206C129.949 129.7 131.451 125.809 129.262 123.257C127.628 121.155 124.349 121.382 122.947 119.062C122.967 118.969 122.977 118.874 122.977 118.778C122.961 118.529 122.88 118.289 122.743 118.081C122.606 117.873 122.417 117.704 122.196 117.59C121.886 117.065 121.046 116.782 120.637 117.348C119.645 117.147 118.68 116.831 117.761 116.408C117.052 116.072 116.341 115.574 115.505 115.672C115.134 115.734 114.799 115.931 114.566 116.226C114.008 116.774 113.388 117.256 112.719 117.662C112.121 118.143 111.219 118.129 110.706 118.698C110.277 121.152 110.669 123.679 111.822 125.887Z"
      fill="#CA5C3B"
    />
    <path
      d="M161.969 134.158C169.515 125.752 158.456 117.25 149.994 117.467C146.43 117.658 143.035 119.042 140.354 121.397C139.125 122.013 138.066 122.92 137.269 124.04C133.956 128.523 137.034 134.335 141.574 136.523C147.902 139.734 156.915 139.645 161.969 134.158Z"
      fill="#E5BAB1"
    />
    <path
      d="M94.4803 134.16C99.6513 127.966 95.6246 120.879 88.5919 118.814C84.8194 117.553 80.7293 117.617 76.9985 118.997C75.5352 119.488 74.2979 120.461 72.7726 120.768C67.9185 121.946 64.0611 127.494 66.2924 132.342C68.5807 136.914 74.2356 138.63 78.9853 139.185C84.4686 139.586 90.6683 138.288 94.4803 134.16Z"
      fill="#E5BAB1"
    />
    <path
      d="M63.1689 85.8471L63.6427 85.5678L64.0218 85.3444L65.7907 84.1507C67.0904 83.3033 68.4019 82.4954 69.732 81.6997L72.9022 79.831C73.1781 79.6432 73.4658 79.4736 73.7637 79.3232C73.6837 79.0797 73.552 78.8564 73.3778 78.6684C71.5649 75.593 69.7986 72.4785 67.7323 69.564C66.8851 68.4615 66.3271 67.0028 65.032 66.3616C63.061 65.5385 62.1734 67.4199 62.0026 69.0993C61.4331 72.7332 61.0935 76.3995 60.986 80.0762C60.8178 81.4661 60.7857 82.8691 60.8899 84.2653C61.0571 84.7203 61.3349 85.1265 61.6983 85.4473C62.0617 85.7681 62.4992 85.9934 62.9714 86.1028L63.1689 85.8471Z"
      fill="#E5BAB1"
    />
    <path
      d="M187.179 87.3057C188.138 84.3255 189.989 67.3199 184.207 69.0105C183.335 69.5562 182.565 70.2495 181.932 71.0595C179.774 73.1908 177.813 75.5124 176.073 77.9958L175.87 77.9874C175.571 78.3847 175.252 78.7698 174.942 79.1498C175.837 79.7828 176.711 80.359 177.607 80.9336C178.72 81.6591 179.851 82.3385 180.973 83.059C182.24 83.8904 183.517 84.7166 184.777 85.5754C185.412 86.0205 186.019 86.504 186.594 87.0233C186.617 87.0523 186.636 87.0842 186.65 87.118C186.674 87.1466 186.693 87.1785 186.706 87.2128L187.028 87.5223L187.179 87.3057Z"
      fill="#E5BAB1"
    />
    <path
      d="M68.8347 71.3758C69.9535 69.985 67.0819 68.5204 66.3386 67.4959C65.2036 66.5747 64.3845 65.1654 62.9932 64.5577C60.8264 64.2099 60.8923 69.1857 60.5362 70.6493C60.5135 70.8901 60.5789 71.131 60.7202 71.3273C60.8616 71.5236 61.0692 71.662 61.3048 71.7169C62.5153 71.9784 62.2943 70.4023 62.5299 69.6598C62.6822 68.7774 62.9181 67.9116 63.2343 67.0738C64.0442 67.8965 64.8695 68.745 65.6363 69.593C66.4032 70.4411 67.5215 72.4169 68.8347 71.3758Z"
      fill="#363434"
    />
    <path
      d="M188.836 75.8002C188.649 69.201 187.747 60.8177 181.329 70.312C181.286 70.5381 181.296 70.7712 181.359 70.9927C181.422 71.2142 181.535 71.418 181.691 71.5878C181.846 71.7577 182.039 71.889 182.254 71.9713C182.469 72.0535 182.7 72.0845 182.929 72.0618C183.907 71.575 184.779 70.8992 185.495 70.0734C185.846 71.6479 186.117 73.239 186.308 74.8407C186.227 75.2823 186.319 75.7383 186.564 76.1143C186.809 76.4904 187.19 76.7577 187.627 76.861C187.78 76.8942 187.938 76.891 188.09 76.8519C188.241 76.8127 188.381 76.7385 188.499 76.6353C188.616 76.5322 188.708 76.4029 188.767 76.2578C188.825 76.1128 188.849 75.956 188.836 75.8002Z"
      fill="#363434"
    />
    <path
      d="M121.424 124.139C122.273 122.211 119.043 121.596 118.786 119.821C119.56 117.983 116.402 116.978 116.289 119.169C115.876 120.793 119.864 126.022 121.424 124.139Z"
      fill="#363434"
    />
    <path
      d="M69.7567 109.626C66.092 116.859 72.4266 124.454 79.8327 125.045C84.2126 125.307 88.2555 123.029 91.737 120.605C96.6513 116.988 102.848 111.885 101.801 105.107C99.9927 98.396 91.587 96.4441 85.5227 97.7553C84.4074 97.8323 79.3942 99.174 77.9048 100.586C77.2667 100.966 76.655 101.389 76.0736 101.851C73.6843 103.213 70.5122 107.973 69.7567 109.626Z"
      fill="#363434"
    />
    <path
      d="M132.6 111.689C135.288 120.03 149.018 126.505 156.743 121.533C167.006 114.74 163.404 104.002 152.437 100.855C147.715 99.4827 135.785 98.0882 134.145 104.267C133.969 104.215 133.782 104.22 133.61 104.282C133.437 104.344 133.289 104.459 133.187 104.611C132.597 105.683 132.239 106.868 132.138 108.088C132.037 109.307 132.195 110.535 132.6 111.689Z"
      fill="#363434"
    />
    <path
      d="M123.851 117.346C124.57 116.597 125.744 114.964 125.04 113.928C124.663 113.466 123.809 113.238 123.432 113.82C122.665 115.433 120.771 117.339 118.957 116.074C116.844 114.557 116.703 111.6 114.37 115.204C112.732 117.643 110.25 118.061 108.645 115.339C108.424 114.935 108.253 114.506 108.136 114.061C107.93 113.161 106.538 112.611 105.947 113.459C105.259 115.443 108.08 118.18 109.765 118.951C112.434 120.349 115.162 118.439 116.457 116.086C118.046 118.527 121.655 119.627 123.851 117.346Z"
      fill="#363434"
    />
  </svg>
)

export const LineVector2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="427" height="242" viewBox="0 0 467 282" fill="none">
    <path
      d="M1.00002 287.357C1.00002 287.357 5.6224 244.481 24.6271 261.57C43.6317 278.659 66.9664 325.935 88.324 289.627C109.682 253.319 130.482 279.118 146.396 283.25C168.52 288.849 201.099 265.779 189.696 213.325C178.293 160.872 143.751 165.042 132.445 112.576C121.14 60.1102 171.429 37.7414 194.903 30.4339C218.377 23.1264 253.296 37.7414 269.474 63.375C285.652 89.0086 247.476 109.924 241.169 85.5015C234.862 61.0794 270.894 17.6553 306.216 29.2733C341.539 40.8914 373.413 -2.66074 466 1.2493"
      stroke="#482E1F"
      stroke-width="1.26"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)