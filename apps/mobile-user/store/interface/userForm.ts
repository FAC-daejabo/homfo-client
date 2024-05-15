export {type UserFormData};
interface UserFormData {
	account: string;
	password: string;
  nickname: string;
  phoneNumber: string;
  gender: string|null;
  job: string|null;
  birthday: string|null;
}
