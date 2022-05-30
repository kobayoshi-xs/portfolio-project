// サインアップ
export interface SignUpData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

// サインイン
export interface SignInData {
  name: string//削除予定
  email: string
  password: string
}

// ユーザー
export interface User {
  id: number
  uid: string
  provider: string
  email: string
  name: string
  nickname?: string
  image?: string
  allowPasswordChange: boolean
}

//Recipe.large_categoriesデータ型定義
export interface LargeCategoties {
  //data: {
    params: {
      categoryId: number
      categoryName: string
      categoryUrl: string
      categoryType: string
    };
  //};
}
