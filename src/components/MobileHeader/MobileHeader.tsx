import React from 'react';

import { pagesNamings } from '../../Router/Router';
import { useRouter } from '../../utils/hooks/useRouter';

import './mobile-header.scss';

const MobileHeader = () => {
  const router = useRouter();

  const activePage =
    Object.entries(pagesNamings).find(
      (entry) => entry[0] === router.pathname
    ) || '';

  return <header className="mobile-header">{activePage[1]}</header>;
};

export default MobileHeader;
