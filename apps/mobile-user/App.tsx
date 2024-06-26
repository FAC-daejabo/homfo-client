import React,{useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from "react-native-splash-screen";
import { BackHandler } from 'react-native';
import Login from './screens/Login';
import Register from './screens/Regitster';
import Home from './screens/Home';
import FindID from './screens/FindAccount/FindID';
import FindPassword from './screens/FindAccount/FindPassword';
import ResultId from './screens/FindAccount/FindID/result';
import ResultPassword from './screens/FindAccount/FindPassword/result';
import Agreement from './screens/Agreement';
import SearchScreen from './screens/SearchNaver';
import RegisterComplete from './screens/RegisterComplete';
import Branding from './screens/BrandingPage';
import { getData } from './utils/asyncStorage';
import { fetchUserInfo } from './store/api/login';
import { useUserStore } from './store/context/useUserStore';
const Stack = createStackNavigator();
const App = () =>  {
  const {userInfo, setUserInfo} = useUserStore();
  const [initialRoute, setInitialRoute] = useState<any>(null);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });
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
  useEffect(() => {
    const checkInitialValue = async () => {
      try {
        const initialValue = await getData("initial");
        if (initialValue === "TRUE") {
          const token = await getData("token");
          if (token !== null) {
            const userInfo = await fetchUserInfo(token, setUserInfo);
            console.log(userInfo)
            if (userInfo) {
              setInitialRoute("Home");
            } else {
              setInitialRoute("로그인");
            }
          } else {
            setInitialRoute("로그인");
          }
        } else {
          setInitialRoute("브랜딩");
        }
      } catch (error) {
        setInitialRoute("브랜딩");
      }
    };

    checkInitialValue();
  }, []); // 컴포넌트 마운트 시 한 번 실행하도록 빈 의존성 배열을 사용

  if (initialRoute === null) {
    // 초기 경로가 결정될 때까지 로딩 표시기를 표시할 수 있습니다.
    return null;
  }

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen
              name="브랜딩"
              component={Branding}
              options={{
                headerShown: false,
                gestureEnabled: false, 
              }}
            />
            <Stack.Screen
              name="로그인"
              component={Login}
              options={{
                headerShown: false,
                gestureEnabled: false, 
              }}
            />
            <Stack.Screen
                name="Home" 
                component={Home}
                options={{
                  headerShown:false,
                  gestureEnabled: false,
            }}/>
            <Stack.Screen
            name="아이디찾기"
            component={FindID}
            options={{
              title: '',
              headerBackTitleVisible: false,
              headerTintColor:'black',
              headerShadowVisible: false 
            }}
          />          
          <Stack.Screen
          name="아이디찾기결과"
          component={ResultId}
          options={{
            title: '',
            headerBackTitleVisible: false,
            headerTintColor:'black',
            headerShadowVisible: false 
          }}
        />
          <Stack.Screen
            name="비밀번호찾기"
            component={FindPassword}
            options={{
              title: '',
              headerBackTitleVisible: false,
              headerTintColor:'black',
              headerShadowVisible: false 
            }}
          />
          <Stack.Screen
            name="비밀번호찾기결과"
            component={ResultPassword}
            options={{
              title: '',
              headerBackTitleVisible: false,
              headerTintColor:'black',
              headerShadowVisible: false 
            }}
          />
          <Stack.Screen 
            name="회원가입" 
            component={Register}
            options={{
              title: '',
              headerBackTitleVisible: false,
              headerTintColor:'black',
              headerShadowVisible: false 
          }}/>
          <Stack.Screen 
            name="이용 약관 동의" 
            component={Agreement}
            options={{
              title: '',
              headerBackTitleVisible: false,
              headerTintColor:'black',
              headerShadowVisible: false 
          }}/>
          <Stack.Screen 
            name="네이버 검색" 
            component={SearchScreen}
            options={{
              title: '',
              headerBackTitleVisible: false,
              headerTintColor:'black',
              headerShadowVisible: false 
          }}/>
        <Stack.Screen 
            name="회원가입 완료" 
            component={RegisterComplete}
            options={{
              headerShown: false,
              gestureEnabled: false, 
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
