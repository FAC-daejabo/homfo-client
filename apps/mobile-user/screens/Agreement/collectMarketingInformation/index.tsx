import React, {useEffect, useRef, useState} from 'react';
import { Text } from 'react-native';
import WebView from 'react-native-webview';
enum DocsLink {
    userInfoAgreement = "https://docs.google.com/document/d/1RfCdlUOPWK7Lsl-wtr2pMgk2uBWD3Z0O8va726T08Ds",
    marketingCollectAgreement = "https://docs.google.com/document/d/1LjvPYRExRmUJ2fFsVNC4DHYv7cK-ymK2chZkhVUCMFU"
}
const AgreementDocs = ({ route, navigation }: {route: any, navigation: any}) => {
  const webViewRef = useRef<WebView>(null);
  const { element } = route.params;
  return(
      <WebView
        ref={ webViewRef}
        originWhitelist={['*']}
        startInLoadingState
        injectedJavaScript="window.ReactNativeWebView.postMessage(document.title)"
        source={{uri: DocsLink[element]}}
        javaScriptEnabled={true}
        mediaCapturePermissionGrantType="grant"
        domStorageEnabled
        cacheEnabled
        thirdPartyCookiesEnabled
        allowsProtectedMedia
        allowUniversalAccessFromFileURLs
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
      />
  );
};
export default AgreementDocs;