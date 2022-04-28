export interface LoginRespone {
    data: LoginResponeData,
    message: string,
    statusCode: number
}

export interface LoginResponeData {
    email: string,
    name: string,
    role: string,
    token: string
}

export interface SignupResponse {
    data: SignupResponseData,
    message: string,
    statusCode: number
}
export interface SignupResponseData {
    email: string,
    id: string,
    name: string,
    role: string
}