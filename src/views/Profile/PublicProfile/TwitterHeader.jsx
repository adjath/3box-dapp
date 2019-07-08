import React from 'react';
import { Helmet } from 'react-helmet';

import { shortenEthAddr } from '../../../utils/funcs';

const TwitterHeader = ({
  otherName,
  otherProfileAddress,
  otherImage,
}) => (
    <Helmet>
      <title>{`${otherName} on 3Box` || '3Box | Ethereum Profiles'}</title>
      <meta name="description" content={`Profile for ${shortenEthAddr(otherProfileAddress)}`} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@3boxdb" />
      <meta name="twitter:title" content={`${otherName} on 3Box` || '3Box | Ethereum Profiles'} />
      <meta name="twitter:description" content={`3Box Profile for ${otherProfileAddress}`} />
      <meta name="twitter:image" content="https://i.imgur.com/9YTMIoE.png" />
    </Helmet>
  );

export default TwitterHeader;
