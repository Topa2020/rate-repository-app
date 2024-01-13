import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { View, StyleSheet, Pressable } from 'react-native';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    width: '100%',
    color: 'white',
    fontSize: theme.fontSizes.subheading,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 5,
    height: 40
  },
  inputText: {
    width: '100%',
    fontSize: theme.fontSizes.subheading,
    color: 'grey',
    borderColor: '#e1e4e8',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    height: 40,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});

const SignInForm = ({ onSubmit }) => {

  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="username" style={styles.inputText}/>
      <FormikTextInput name="password" placeholder="password" style={styles.inputText} secureTextEntry />
      <Pressable onPress={onSubmit} >
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;