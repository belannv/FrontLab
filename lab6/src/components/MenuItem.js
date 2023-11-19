// components/MenuItem.js
import React from 'react';

const MenuItem = ({ text, url }) => {
  const openInNewTab = (url) => {
    const isExternal = url && !url.startsWith(window.location.origin);
    if (isExternal) {
      window.open(url, '_blank');
    }
  };

  return (
    <li>
      {url ? (
        <a href={url} onClick={() => openInNewTab(url)}>
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </li>
  );
}

export default MenuItem;