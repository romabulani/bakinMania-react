import { useAuth } from "contexts";
import { FormEvent, useReducer } from "react";
import { signup } from "services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function useSignupHandler() {
  const { setAuthUser } = useAuth();
  const navigate = useNavigate();

  type AuthFormAndError = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  type FormActionType = {
    type:
      | "INPUT_FIRST_NAME"
      | "INPUT_LAST_NAME"
      | "INPUT_EMAIL"
      | "INPUT_PASSWORD"
      | "INPUT_CONFIRM_PASSWORD";
    payload: string;
  };

  type FormErrorActionType = {
    type:
      | "ERROR_FIRST_NAME"
      | "ERROR_LAST_NAME"
      | "ERROR_EMAIL"
      | "ERROR_PASSWORD"
      | "ERROR_CONFIRM_PASSWORD";
    payload: string;
  };

  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const initialErrorState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formReducer = (state: AuthFormAndError, action: FormActionType) => {
    switch (action.type) {
      case "INPUT_FIRST_NAME":
        return {
          ...state,
          firstName: action.payload,
        };
      case "INPUT_LAST_NAME":
        return {
          ...state,
          lastName: action.payload,
        };
      case "INPUT_EMAIL":
        return {
          ...state,
          email: action.payload,
        };
      case "INPUT_PASSWORD":
        return {
          ...state,
          password: action.payload,
        };
      case "INPUT_CONFIRM_PASSWORD":
        return {
          ...state,
          confirmPassword: action.payload,
        };
      default:
        return { ...state };
    }
  };

  const errorReducer = (
    state: AuthFormAndError,
    action: FormErrorActionType
  ) => {
    switch (action.type) {
      case "ERROR_FIRST_NAME":
        return {
          ...state,
          firstName: action.payload,
        };
      case "ERROR_LAST_NAME":
        return {
          ...state,
          lastName: action.payload,
        };
      case "ERROR_EMAIL":
        return {
          ...state,
          email: action.payload,
        };
      case "ERROR_PASSWORD":
        return {
          ...state,
          password: action.payload,
        };
      case "ERROR_CONFIRM_PASSWORD":
        return {
          ...state,
          confirmPassword: action.payload,
        };
      default:
        return { ...state };
    }
  };

  const [errorData, errorDispatch] = useReducer(
    errorReducer,
    initialErrorState
  );
  const [formData, formDispatch] = useReducer(formReducer, initialFormState);

  const checkValidation = () => {
    let signupFlag = true;

    if (!new RegExp("^[a-zA-Z]+$").test(formData.firstName)) {
      errorDispatch({
        type: "ERROR_FIRST_NAME",
        payload: "First Name should have only letters",
      });
      signupFlag = false;
    }

    if (!new RegExp("^[a-zA-Z]+$").test(formData.lastName)) {
      errorDispatch({
        type: "ERROR_LAST_NAME",
        payload: "Last Name should have only letters",
      });
      signupFlag = false;
    }

    if (!new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(formData.email)) {
      errorDispatch({
        type: "ERROR_EMAIL",
        payload: " Please enter valid email",
      });
      signupFlag = false;
    }

    if (
      !new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}"
      ).test(formData.password)
    ) {
      errorDispatch({
        type: "ERROR_PASSWORD",
        payload:
          "Password should contain atleast 8 characters, 1 uppercase, 1 lowercase, 1 digit and 1 special character",
      });
      signupFlag = false;
    }

    if (formData.password !== formData.confirmPassword) {
      errorDispatch({
        type: "ERROR_CONFIRM_PASSWORD",
        payload: "Both the passwords should match",
      });
      signupFlag = false;
    }
    return signupFlag;
  };

  const signUpHandler = async (e: FormEvent, location: any) => {
    e.preventDefault();
    try {
      if (checkValidation()) {
        const userObj = await signup(
          formData.firstName + " " + formData.lastName,
          formData.email,
          formData.password
        );
        if (userObj) {
          setAuthUser(userObj);
          localStorage.setItem("authUser", JSON.stringify(userObj));
          toast.success("Signed up and Logged in successfully!");
          if (location.state)
            navigate(location?.state?.from?.pathname, { replace: true });
          else navigate("/");
        }
      }
    } catch (e) {
      console.error("signUpHandler : Couldn't signup", e);
    }
  };

  return { formData, formDispatch, errorData, errorDispatch, signUpHandler };
}

export { useSignupHandler };
