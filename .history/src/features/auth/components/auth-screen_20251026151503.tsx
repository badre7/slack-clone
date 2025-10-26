"use client";

import { useState  } from "react";
import { SignInFlow } from "../types";

export const AuthScreen = () => {
const [state, setState] = useState<SignInFlow>("signIn");

    return (
        <div class>
            Auth screen 
        </div>
    );
};