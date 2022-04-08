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

export const SignIn: React.VFC = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false)

  const { register, handleSubmit, control } = useForm<SignInData>();
  const onSubmit: SubmitHandler<SignInData> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "入力してください",
                  minLength: { value: 8, message: "8文字以上にしてください" },
                  maxLength: { value: 20, message: "20文字以内にしてください" }
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="メールアドレス"
                  />
                  )}
              />
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              <Controller
                  name="password"
                  control={control}
                  /*defaultValue=""*/
                  rules={{
                    required: "入力してください",
                    minLength: { value: 8, message: "8文字以上にしてください" },
                    maxLength: { value: 20, message: "20文字以内にしてください" }
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="パスワード"
                    />
                  )}
                />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">ログイン</Button>
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
