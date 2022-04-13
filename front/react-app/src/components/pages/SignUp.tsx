import React, { useState } from "react"
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Cookies from "js-cookie"

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormHelperText } from "@mui/material";

import { signUp } from "lib/api/auth"
import { SignUpData } from "interfaces"
import { signIn } from "lib/api/auth"
import { SignInData } from "interfaces";

const SignUp: React.VFC = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")

  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm<SignUpData>({
  });
  const onSubmit: SubmitHandler<SignUpData> = (data) => console.log(data);
  /*const onSubmit = async data => {
    await sleep(2000);
    if (data.username === "bill") {
      alert(JSON.stringify(data));
    } else {
      alert("There is an error");
    }
  };*/

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              <Controller
                name="name"
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
                    label="名前"
                    error={!!errors.name}
                    helperText={errors.name && errors.name.message}
                  />
                )}
              />
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              <Controller
                name="email"
                control={control}
                /*defaultValue={email}*/
                rules={{
                  required: "入力してください",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="メールアドレス"
                    /*onChange={event => setEmail(event.target.value)}*/
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
                /*defaultValue={password}*/
                rules={{
                  required: "入力してください"
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="パスワード"
                    /*onChange={event => setPassword(event.target.value)}*/
                    error={!!errors.password}
                    helperText={errors.password && errors.password.message}
                  />
                )}
              />
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              <Controller
                name="passwordConfirmation"
                control={control}
                /*defaultValue={passwordConfirmation}*/
                rules={{
                  required: "入力してください"
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="パスワード（確認用）"
                    /*onChange={event => setPasswordConfirmation(event.target.value)}*/
                    error={!!errors.passwordConfirmation}
                    helperText={errors.passwordConfirmation && errors.passwordConfirmation.message}
                  />
                )}
              />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">新規登録</Button>
          </CardActions>
        </Card>
      </form>
    </>
  )
}

export default SignUp
