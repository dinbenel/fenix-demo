import {zodResolver} from '@hookform/resolvers/zod';
import {useState} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {Text, View} from 'react-native';
import {loginPageStr} from '../../../constants/stringsRes';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import AppModal from '../../../shared/AppModal/AppModal';
import Button from '../../../shared/Button/Button';
import Spacer from '../../../shared/Spacer/Spacer';
import FormTextInput from '../../../shared/TextInput/FormTextInput';
import {loginUserData} from '../../../store/slices/userSlice';
import {
  loginFormSchema,
  LoginFormState,
} from '../../../validations/userFormSchema';
import LoginModal from './LoginModal';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [isShow, setIsShow] = useState<boolean>(false);

  const {
    control,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm<LoginFormState>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      phone: '',
    },
  });

  const onSubmit: SubmitHandler<LoginFormState> = data => {
    dispatch(loginUserData(data));
    setIsShow(true);
  };

  return (
    <View className="flex-1 bg-background p-4">
      <Text className="text-xl font-bold text-center text-foreground mt-2 capitalize">
        {loginPageStr.loginFormTitle}
      </Text>
      <Spacer />
      <Controller
        name="email"
        control={control}
        render={({field}) => {
          return (
            <FormTextInput
              onChange={value => field.onChange(value)}
              value={field.value}
              error={errors[field.name]?.message}
              label={loginPageStr.emailInputLabel}
              onBlur={field.onBlur}
            />
          );
        }}
      />
      <Spacer padding={1} />
      <Controller
        name="phone"
        control={control}
        render={({field}) => {
          return (
            <FormTextInput
              onChange={value => field.onChange(value)}
              value={field.value}
              error={errors[field.name]?.message}
              label={loginPageStr.phoneInputLabel}
              onBlur={field.onBlur}
            />
          );
        }}
      />
      <Spacer padding={2} />
      <Button
        onPress={handleSubmit(onSubmit)}
        styles="bg-rose-500 p-2 items-center rounded-md">
        <Text className="text-foreground text-lg capitalize">
          {loginPageStr.submitBtn}
        </Text>
      </Button>
      <AppModal visible={isShow}>
        <LoginModal
          onPress={() => {
            setIsShow(false);
            reset();
          }}
        />
      </AppModal>
    </View>
  );
};

export default LoginForm;
