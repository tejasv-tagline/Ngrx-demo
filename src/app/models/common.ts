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