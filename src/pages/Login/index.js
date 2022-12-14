import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { colors, fonts } from '../../utils'

const Login = () => {
  return (
    <View style={styles.page}>
        <ILLogo />
      <Text style={styles.title}>
        Masuk dan mulai berkonsultasi
      </Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password"/>
      <Gap height={10} />
      <Link title="Forgot My Password" size={12}  />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align="center" />
      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: 'white',
        flex: 1
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 40,
         
    }
})