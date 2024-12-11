import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Octicons, Ionicons } from '@expo/vector-icons';

// Styled Components
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
import { View } from 'react-native';

// Colors
const { brand, darkLight, primary } = Colors;

// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo
            resizeMode="cover"
            source={require('./../assets/career image.jpg')}
          />
          <PageTitle></PageTitle>
          <SubTitle>Account Registration</SubTitle>

          <Formik
            initialValues={{
              fullName: '',
              email: '',
              dateOfBirth: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={(values) => {
              console.log(values);
              navigation.navigate('Login');
            }}
            validateOnChange={true} // Trigger validation on change
            validateOnBlur={true} // Trigger validation on blur
            validate={(values) => {
              let errors = {};

              // Validation for fields
              if (!values.email) {
                errors.email = 'Email is required';
              }
              if (!values.password) {
                errors.password = 'Password is required';
              }
              if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Passwords must match';
              }
              return errors;
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
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
                />
                {/* Display email error message */}
                {errors.email && touched.email && <MsgBox>{errors.email}</MsgBox>}

                <MyTextInput
                  label="Full Name"
                  icon="person"
                  placeholder="enter your full name"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={values.fullName}
                />

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
                />
                {/* Display password error message */}
                {errors.password && touched.password && <MsgBox>{errors.password}</MsgBox>}

                <MyTextInput
                  label="Confirm Password"
                  icon="lock"
                  placeholder="********"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                {/* Display confirm password error message */}
                {errors.confirmPassword && touched.confirmPassword && <MsgBox>{errors.confirmPassword}</MsgBox>}

                {/* Button visibility logic */}
                <StyledButton
                  onPress={handleSubmit}
                  disabled={!isValid} // Disable the button if the form is not valid
                  style={{
                    backgroundColor: isValid ? brand : brand, // Change color based on validity
                  }}
                >
                  <ButtonText>Register</ButtonText>
                </StyledButton>

                {/* Line separator */}
                <Line />

                {/* Redirect to Login */}
                <ExtraView>
                  <ExtraText>Already have an account?</ExtraText>
                  <TextLink onPress={() => navigation.navigate('Login')}>
                    <TextLinkContent>Login</TextLinkContent>
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

// Custom Input Component for Formik
const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
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
          <Ionicons
            name={hidePassword ? 'eye-off' : 'eye'}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default Signup;
