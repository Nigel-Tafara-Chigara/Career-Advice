import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation


// icons
import { Octicons, Ionicons } from '@expo/vector-icons';

// Components and styles
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  Colors,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from './../components/styles';
import { View, Text } from 'react-native';

// colors
const { brand, darkLight, primary } = Colors;

// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('./../assets/career image.jpg')} />
          <PageTitle></PageTitle>
          <SubTitle>Account Login</SubTitle>

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
              email: Yup.string().email('Invalid email address').required('Email is required'),
              password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              // Simulate form submission (replace this with actual authentication logic)
              console.log(values);

              // Simulate role-based navigation
              if (values.email === 'admin@example.com' && values.password === 'admin123') {
                // Navigate to the Welcome2 screen if the user is an admin
                navigation.navigate('Welcome2');
              } else if (values.email === 'user@example.com' && values.password === 'user123') {
                // Navigate to the Welcome screen if the user is a regular user
                navigation.navigate('Welcome');
              } else {
                alert('Invalid credentials');
              }

              setSubmitting(false); // End the submission process
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isSubmitting, isValid }) => (
              <StyledFormArea>
                <MyTextInput
                  label="Email Address"
                  icon="mail"
                  placeholder="enter email@gmail.com"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  error={touched.email && errors.email}  // Pass error to input
                />
                {touched.email && errors.email && <MsgBox><Text>{errors.email}</Text></MsgBox>}  // Display email error

                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder="********"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  error={touched.password && errors.password}  // Pass error to input
                />
                {touched.password && errors.password && <MsgBox><Text>{errors.password}</Text></MsgBox>}  // Display password error

                {/* Disable the submit button if the form is invalid or if it's submitting */}
                <StyledButton onPress={handleSubmit} disabled={isSubmitting || !isValid}>
                  <ButtonText><Text>Login</Text></ButtonText>
                </StyledButton>
                <Line />

                <ExtraView>
                  <ExtraText><Text>Don't have an account ?</Text></ExtraText>
                  <TextLink onPress={() => navigation.navigate('Signup')}>
                    <TextLinkContent><Text>Register</Text></TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  error,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
      {error && <MsgBox><Text>{error}</Text></MsgBox>} {/* Display error message if there is one */}
    </View>
  );
};

export default Login;
