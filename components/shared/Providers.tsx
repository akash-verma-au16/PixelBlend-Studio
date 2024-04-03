'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="8px"
        color="#5A3FFF"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;