import React, { useState } from "react";
import Cookies from "js-cookie"

import { Box } from "@mui/system";

import { signIn } from "lib/api/auth";
import { SignInData } from "interfaces/index";

const SignIn: React.VFC = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false)

    return (

    )
}

export default SignIn
