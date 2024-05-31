export {type IEmployee, type ITotalEmployee, type employee ,EmployeeStatus}

enum EmployeeStatus {
    "S" = "정지",
    "D" = "탈퇴",
    "P" = "승인 대기",
    "U" = "일반"
}

interface IEmployee {
    employee : employee,
    marketingAgreementList: marketingAgreementList
}

interface ITotalEmployee{
    data: employee[];
    hasNext: boolean;
    numberOfElements: number;
    size: number;
    totalElements: number;
    totalPages: number;
}

interface employee {
    account: string;
    birthday: string;
    gender: string;
    id: number;
    job: string;
    nickname: string;
    phoneNumber: string;
    role: string;
    status: keyof typeof EmployeeStatus;
}

interface marketingAgreementList {
    [key: number]: {
        code: string;
        agreement: boolean;
    }
}