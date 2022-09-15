import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react';

const facebookAppId = '853573322473855';

export function initFacebookSdk() {
    return new Promise(resolve => {
        // wait for facebook sdk to initialize before starting the react app
        (window as any).fbAsyncInit = function () {
          (window as any).FB.init({
                appId: facebookAppId,
                cookie: true,
                xfbml: true,
                version: 'v14.0'
            });

            // auto authenticate with the api if already logged in with facebook
            (window as any).FB.getLoginStatus((e: any) => {
              console.log(e)
                // if (authResponse) {
                //     accountService.apiAuthenticate(authResponse.accessToken).then(resolve);
                // } else {
                //     resolve();
                // }
            });
        };

        // load facebook sdk script
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            (js as any).src = "https://connect.facebook.net/en_US/sdk.js";
            (fjs as any).parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));    
    });
}

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    initFacebookSdk()
  }, [])
  
  return <>
            <Component {...pageProps} />
          </>
}

export default MyApp
