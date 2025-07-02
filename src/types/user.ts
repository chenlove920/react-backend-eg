export type UserFiledType = {
  mobile: string;
  code: string;
}
export type UserInfoType = {
  id: string
  photo: string
  name: string
  mobile: string
  gender: number
  birthday: Date
  intro: string
}
export type UserStoreType = {
  token: string,
  userInfo: UserInfoType
}