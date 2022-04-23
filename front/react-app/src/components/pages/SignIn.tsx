import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Cookies from "js-cookie"
import { Link } from "react-router-dom";

import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { signIn } from "lib/api/auth";
import { SignInData } from "interfaces";
import { access } from "fs";

export const SignIn: React.VFC = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false)

  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm<SignInData>();
  const onSubmit = async (e: React.FormHTMLAttributes<HTMLFormElement>) => {

    const data: SignInData = {
      name: name,//これを削除すると型定義でエラー発生する！
      email: email,
      password: password
    }

    try {
      const res = await signIn(data)
      console.log(res)

      if (res.status === 200) {
        Cookies.set("_access_token", res.headers["access_token"])
        Cookies.set("_client", res.headers["client"])
        Cookies.set("_uid", res.headers["uid"])
      } else {
        alert("エラーが発生しました。");
      }
    } catch(e) {
      alert("エラーが発生しました。")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "入力してください",
                  minLength: { value: 8, message: "8文字以上にしてください" },
                  maxLength: { value: 20, message: "20文字以内にしてください" }
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="メールアドレス"
                    error={!!errors.email}
                    helperText={errors.email && errors.email.message}
                  />
                  )}
              />
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "入力してください",
                    minLength: { value: 8, message: "8文字以上にしてください" },
                    maxLength: { value: 20, message: "20文字以内にしてください" }
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="パスワード"
                      error={!!errors.password}
                      helperText={errors.password && errors.password.message}
                    />
                  )}
                />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" type="submit">ログイン</Button>
          </CardActions>
          <Typography sx={{ fontSize: 14 }} >
            まだアカウントをお持ちでない方は
            <Link to="/signup">
              こちら
            </Link>
            から作成してください。
          </Typography>
        </Card>
      </form>
    </>
  );
}
