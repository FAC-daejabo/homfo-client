export {type UserFormData, SmsCodeType};
interface UserFormData {
	account: string;
	password: string;
  nickname: string;
  phoneNumber: string;
  gender: string|null;
  job: string|null;
  birthday: string|null;
}

enum SmsCodeType {
  // 회원가입 시 핸드폰 인증 용도입니다.
  VALIDATE = "VALIDATE",
  // 계정 찾기 시 핸드폰 인증 용도입니다.
  ACCOUNT = "ACCOUNT",
  // 비밀번호 찾기 시 핸드폰 인증 용도입니다.
  PASSWORD = "PASSWORD"
}