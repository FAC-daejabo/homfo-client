import loadable from '@loadable/component'

export const home = loadable(() => import('./ui/pages/Home'));
export const login = loadable(() => import('./ui/pages/Login'));
export const register = loadable(() => import('./ui/pages/Register'));
export const employee = loadable(() => import('./ui/pages/Employee'));
export const enrollAgency = loadable(()=>import('./ui/pages/EnrollAgency'))