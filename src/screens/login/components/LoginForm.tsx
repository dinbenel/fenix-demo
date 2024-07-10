import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {View, Text, TouchableOpacity} from 'react-native';
import {zodResolver} from '@hookform/resolvers/zod';
import {
  loginFormSchema,
  LoginFormState,
} from '../../../validations/userFormSchema';
import {loginPageStr} from '../../../constants/stringsRes';
import FormTextInput from '../../../shared/TextInput/FormTextInput';
import Spacer from '../../../shared/Spacer/Spacer';
import Button from '../../../shared/Button/Button';
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {loginUser} from '../../../store/thunk/userThunk';
import {useAppSelector} from '../../../hooks/useAppSelector';
import {navigate} from '../../../navigation/MainNavigation';
import LoadingSpinner from '../../../shared/LoadingSpinner/LoadingSpinner';

const LoginForm = () => {
  const nav = navigate();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.user.isLoading);
  const user = useAppSelector(state => state.user.user);
  const err = useAppSelector(state => state.user.error);

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<LoginFormState>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginFormState> = data => {
    dispatch(loginUser(data));
    if (!err) {
      nav.navigate('Home');
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <View className="flex-1">
      <Text className="text-xl font-bold text-center mt-2 capitalize">
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
      <Spacer />
      <Controller
        name="password"
        control={control}
        render={({field}) => {
          return (
            <FormTextInput
              onChange={value => field.onChange(value)}
              value={field.value}
              error={errors[field.name]?.message}
              label={loginPageStr.passwordInputLabel}
              onBlur={field.onBlur}
            />
          );
        }}
      />
      <Spacer />
      <Button onPress={handleSubmit(onSubmit)}>
        <Text>{loginPageStr.submitBtn}</Text>
      </Button>
    </View>
  );
};

export default LoginForm;
