import loadable from '@loadable/component';

export const home = loadable(() => import('./pages/Home'));
export const hbti = loadable(() => import('./pages/Hbti'));
export const notice = loadable(() => import('./pages/HomfoNotice'));
export const noticeDetail = loadable(() => import('./pages/HomfoNotice/Detail'));
export const residenceArea = loadable(() => import('./pages/ResidenceArea'));
export const mypage = loadable(() => import('./pages/Mypage/Main'));
export const setting = loadable(() => import('./pages/Mypage/AppSetting'));
export const faq = loadable(() => import('./pages/Mypage/FAQ'));
export const inquiry = loadable(() => import('./pages/Mypage/Inquiry'));
export const personalInfo = loadable(() => import('./pages/Mypage/PersonalInfo'));
export const accountInfo = loadable(() => import('./pages/Mypage/AccountInfo'));
export const modifyPassword = loadable(() => import('./pages/Mypage/Modify/Password'));
export const modifyPhonenumber = loadable(() => import('./pages/Mypage/Modify/Phonenumber'));
export const request = loadable(() => import('./pages/Request'));
export const requestComplete = loadable(() => import('./pages/RequestComplete'));
export const requestBox = loadable(() => import('./pages/RequestBox'));
export const modifyRequest = loadable(() => import('./pages/ModifyRequest'));
export const homfoRecommendedArea = loadable(() => import('./pages/HomfoRecommendedArea'));
export const homfoRecommendResult = loadable(() => import('./pages/HomfoRecommendResult'));
export const realEstateKnowledge = loadable(() => import('./pages/RealEstateKnowledge'));
export const realEstateKnowledgeDetail = loadable(
    () => import('./pages/RealEstateKnowledge/Detail')
);
export const areaDetailInfo = loadable(() => import('./pages/AreaDetailInfo'));
export const requestDocument = loadable(() => import('./pages/RequestDocument'));
export const homfoResultRouting = loadable(() => import('./pages/HomfoRecommendResult/RoutePage'));
export const Bookmarks = loadable(() => import('./pages/Bookmarks'));
export const BookmarksSenseDetail = loadable(() => import('./pages/Bookmarks/DetailSense'));
export const agreementOfTermsOfUse = loadable(() => import('./pages/TermsOfUse'));