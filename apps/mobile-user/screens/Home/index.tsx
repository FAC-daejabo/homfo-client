import React, {useEffect, useRef, useState} from 'react';
import WebView, { WebViewMessageEvent } from 'react-native-webview';
import { Alert, BackHandler, SafeAreaView, StatusBar, View } from 'react-native';
import { useUserStore } from '../../store/context/useUserStore';
import { clearAsyncStorage, removeData, storeData } from '../../utils/asyncStorage';
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Home = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  const webViewRef = useRef<WebView>(null);
  const {userInfo} = useUserStore();
  const [webViewKey, setWebViewKey] = useState<number>(0); 

  useEffect(()=>{
    if (userInfo !==undefined){
      storeData("token", userInfo.token)
    }
  },[userInfo])
  
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
        // 백 버튼 누름을 처리하는 사용자 정의 로직
        // 기본 동작(예: 앱 종료)을 방지하려면 true를 반환
        // 기본 동작을 허용하려면 false를 반환
        return true;
    });
    return () => {
          // 이벤트 리스너 제거됨
        BackHandler.removeEventListener('hardwareBackPress', () => true);
    }

}, []);
  const onMessage = (event: WebViewMessageEvent) => {
    const data = event.nativeEvent.data;
      switch (data){
          case "onLoad": // 웹뷰 load 시 로그인시 발급 해둔 토큰으로 fetch 해 두었던 유저 정보와 현재 Safe Area의 위 아래 높이 전송 
            webViewRef?.current?.postMessage(JSON.stringify({...userInfo, top:insets.top, bottom:insets.bottom}));
            break;
          case "tokenExpired":
            navigation.navigate("로그인");
            break;
          case "logout":
            navigation.navigate("로그인");
            removeData("token");
            setWebViewKey((prevKey) => prevKey + 1); // WebView 리로드
            break;
          case "withDrawal":
            navigation.navigate("브랜딩");
            clearAsyncStorage();
            setWebViewKey((prevKey) => prevKey + 1); // WebView 리로드
            break;
          default:
            if (data!=="React App"&&data!=="onLoad") {
              navigation.navigate("네이버 검색", {searchQuery: data})
             } 
          break;
      }
  }
  return(
      <WebView
        key={webViewKey} // key를 변경하여 리로드
        ref={webViewRef}
        startInLoadingState
        injectedJavaScript="window.ReactNativeWebView.postMessage(document.title)"
        source={{uri: 'https://dev-webview.homfo.co.kr'}}
        // source={{uri: 'http://localhost:3000/'}}
        javaScriptEnabled={true}
        onMessage={onMessage}
        mediaCapturePermissionGrantType="grant"
        userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
        domStorageEnabled={true}
        cacheEnabled
        thirdPartyCookiesEnabled
        allowsProtectedMedia
        allowUniversalAccessFromFileURLs
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
      />
  );
};
// source={{uri: 'https://development.web-user-c1x.pages.dev'}}
export default Home;