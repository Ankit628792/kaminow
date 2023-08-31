import React, { useEffect } from 'react';

const NoRightClick = () => {
  useEffect(() => {
    const disableRightClick = (event) => {
      event.preventDefault();
    };

    window.addEventListener('contextmenu', disableRightClick);

    return () => {
      window.removeEventListener('contextmenu', disableRightClick);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default NoRightClick;
