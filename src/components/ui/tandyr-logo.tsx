const TandyrLogo = ({ size = 40 }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flames on top */}
          <path
            d="M16 8 C16 6, 18 4, 20 6 C22 4, 24 6, 24 8"
            fill="#D2691E"
          />
          <path
            d="M14 10 C14 8, 16 6, 18 8 C20 6, 22 8, 22 10"
            fill="#FF4500"
          />
          <path
            d="M18 12 C18 10, 20 8, 22 10 C24 8, 26 10, 26 12"
            fill="#D2691E"
          />
          
          {/* Tandyr body */}
          <ellipse cx="20" cy="32" rx="12" ry="4" fill="#FFFFFF" />
          <rect x="8" y="16" width="24" height="16" rx="2" fill="#FFFFFF" />
          
          {/* Brick pattern */}
          <rect x="8" y="16" width="24" height="3" fill="none" stroke="#333" strokeWidth="1.5" />
          <rect x="8" y="19" width="12" height="3" fill="none" stroke="#333" strokeWidth="1.5" />
          <rect x="20" y="19" width="12" height="3" fill="none" stroke="#333" strokeWidth="1.5" />
          <rect x="8" y="22" width="24" height="3" fill="none" stroke="#333" strokeWidth="1.5" />
          <rect x="8" y="25" width="12" height="3" fill="none" stroke="#333" strokeWidth="1.5" />
          <rect x="20" y="25" width="12" height="3" fill="none" stroke="#333" strokeWidth="1.5" />
          <rect x="8" y="28" width="24" height="4" fill="none" stroke="#333" strokeWidth="1.5" />
          
          {/* Inner fire/opening */}
          <ellipse cx="20" cy="20" rx="8" ry="3" fill="#D2691E" />
          <ellipse cx="20" cy="20" rx="6" ry="2" fill="#FF4500" />
          
          {/* Side handles */}
          <path d="M6 24 C4 24, 4 22, 6 22" stroke="#FFFFFF" strokeWidth="2" fill="none" />
          <path d="M34 24 C36 24, 36 22, 34 22" stroke="#FFFFFF" strokeWidth="2" fill="none" />
          
          {/* Side supports */}
          <rect x="4" y="26" width="4" height="1" fill="#FFFFFF" />
          <rect x="32" y="26" width="4" height="1" fill="#FFFFFF" />
        </svg>
      </div>
      
      <div className="flex flex-col">
        <span 
          className="font-heading font-bold text-primary leading-none"
          style={{ 
            fontSize: size * 0.6,
            background: 'linear-gradient(135deg, #D2691E 0%, #FF4500 50%, #FFD700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          ТАНДЫР
        </span>
      </div>
    </div>
  );
};

export default TandyrLogo;