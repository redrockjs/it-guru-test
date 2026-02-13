import {Card, CardContent} from "@/components/ui/card.tsx";
import {Field, FieldLabel} from "@/components/ui/field.tsx";
import {InputWithIcon} from "@/components/ui/input-with-icon.tsx";
import {Lock, EyeOff, User, X} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router";
import {DividerWithText} from "@/components/ui/divider-with-text.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Label} from "@/components/ui/label.tsx";
import loginLogo from "../../assets/svg/login.svg";

const iconColor = "#C0C0C0"

function Login() {

  const handleClear = () => {
  }

  const handleShowPassword = () => {
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-[#F9F9F9]">
      <Card
        className="flex flex-col items-center justify-center p-12 rounded-[34px] outline-4 outline-white bg-[linear-gradient(180deg,#F9F9F9,#FFFFFF)]">
        <img src={loginLogo} alt="Добро пожаловать!" className="w-14 h-14"/>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="font-semibold text-4xl mb-3">Добро пожаловать!</h2>
          <p className="font-medium text-lg leading-normal text-[#C0C0C0]">Пожалуйста, авторизируйтесь</p>
        </div>
        <CardContent className="p-0">
          <Field className="mb-4">
            <FieldLabel htmlFor="input-login">Логин</FieldLabel>
            <InputWithIcon
              id="input-login"
              type="text"
              className="w-100 h-14 px-12 rounded-[12px]"
              leftIcon={<User color={iconColor}/>}
              rightIcon={<X color={iconColor}/>}
              onRightIconClick={handleClear}
            />
          </Field>

          <Field className="mb-5">
            <FieldLabel htmlFor="input-password">Пароль</FieldLabel>
            <InputWithIcon
              id="input-password"
              type="password"
              className="w-100 h-14 px-12 rounded-[12px]"
              leftIcon={<Lock color={iconColor}/>}
              rightIcon={<EyeOff color={iconColor}/>}
              onRightIconClick={handleShowPassword}
            />
          </Field>

          <Field orientation="horizontal" className="mb-5">
            <Checkbox id="save-checkbox" name="save-checkbox"/>
            <Label
              htmlFor="save-checkbox"
              className="font-medium text-sx text-gray-400"
            >
              Запомнить данные
            </Label>
          </Field>

          <Button
            className="w-full h-13.5 mb-4 rounded-[12px] bg-[#242EDB] bg-[linear-gradient(180deg,#FFFFFF58,#FFFFFF00)] text-white hover:text-white cursor-pointer hover:bg-blue-700"
            size={"lg"}
          >
            Войти
          </Button>

          <DividerWithText className="mb-6"> или </DividerWithText>

          <p className="font-semibold text-l text-gray-400 text-center">
            Нет аккаунта?
            <Link to={"#"} className="ml-2 text-blue-700 hover:text-blue-800">Создать</Link>
          </p>
        </CardContent>
      </Card>
    </main>
  )
}

export {Login}