import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_SSR) {
      Component.apiMethod().then(setApiData);
    }
  }, [Component.apiMethod]);

  return <Component apiData={apiData} {...pageProps} />;
}
