import React, { useState, useRef } from 'react'
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import BackButton from '../../components/BackButton'
import { theme } from '../../core/theme'
import { emailValidator } from '../../helpers/emailValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
import { nameValidator } from '../../helpers/nameValidator'
import { phoneValidator } from '../../helpers/phoneValidator'
import { lastNameValidator } from '../../helpers/lastNameValidator'
import { userNameValidator } from '../../helpers/userNameValidator'

import PhoneInput from "react-native-phone-number-input";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [lastName, setlastName] = useState({ value: '', error: '' })
  const [userName, setuserName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [phone, setPhone] = useState({ value: '', error: '' })
  const [error, setError] = useState(false)


  const onSignUpPressed = async () => {
    try {
      // check if error and save in varaible
      const nameError = nameValidator(name.value)
      const lastNameError = lastNameValidator(lastName.value)
      const userNameError = userNameValidator(userName.value)
      const phoneError = phoneValidator(phone.value)
      const emailError = emailValidator(email.value)
      const passwordError = passwordValidator(password.value)
      //check if input empty
      if (emailError || passwordError || nameError || lastNameError || userNameError || phoneError) {
        setName({ ...name, error: nameError })
        setlastName({ ...email, error: lastNameError })
        setuserName({ ...name, error: userNameError })
        setEmail({ ...email, error: emailError })
        setPassword({ ...password, error: passwordError })
        setPhone({ ...password, error: phoneError })
        return
      }
      // send data
      const response = await fetch('https://api.hoodzpronos.com/register', {
        withCredentials: true,
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: name.value,
          lastName: lastName.value,
          userName: userName.value,
          phone: phone.value,
          email: email.value,
          password: password.value,
        })
      });
      //If response is in json then in success
      const data = await response.json();
      setError(data.error)
      navigation.reset({
        index: 0,
        routes: [{ name: 'loginScreen' }],
      })
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ScrollView
      barStyle="light-content"
      translucent
      showVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: "#fff",
        paddingBottom: 90,
      }}
    >
      <Background>
        <BackButton goBack={navigation.LoginScreen} />
        <Logo />
        <Header>Créer un compte</Header>
        {
          error ? (
            <View>
              <Text style={styles.link}>{error}</Text>
            </View>
          ) : null
        }

        <TextInput
          label="Nom"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!name.error}
          errorText={name.error}
        />
        <TextInput
          label="Prénom"
          returnKeyType="next"
          value={lastName.value}
          onChangeText={(text) => setlastName({ value: text, error: '' })}
          error={!!lastName.error}
          errorText={lastName.error}
        />
        <TextInput
          label="Nom d'utilisateur"
          returnKeyType="next"
          value={userName.value}
          onChangeText={(text) => setuserName({ value: text, error: '' })}
          error={!!userName.error}
          errorText={userName.error}
        />
        <PhoneInput
          value={phone.value}
          error={!!phone.error}
          errorText={phone.error}
          onChangeText={(text) => setPhone({ value: text, error: '' })}
          autoFocus
        />
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Mot de passe"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <Button
          mode="contained"
          onPress={onSignUpPressed}
          style={{ marginTop: 24 }}
        >
          S'inscrire
        </Button>
        <View style={styles.row}>
          <Text>Vous avez déjà un compte? </Text>
          <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
            <Text style={styles.link}>Connexion</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
