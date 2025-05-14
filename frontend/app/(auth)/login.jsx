import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import colours from "../../constants/colours";
import typography from "../../constants/typography";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome</Text>

      <View style={styles.card}>
        <Text style={styles.label}> Email</Text>
        <TextInput
          placeholder="example@example.com"
          style={styles.input}
          placeholderTextColor={colours.lightGreen}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="••••••••"
          secureTextEntry
          style={styles.input}
          placeholderTextColor={colours.lightGreen}
        />
      </View>

      <Pressable style={styles.loginBtn}>
        <Text style={styles.loginText}>Log In</Text>
      </Pressable>

      <Text style={styles.forgot}>Forgot Password?</Text>

      {/* Add Facebook and Google icons here */}

      <Text style={styles.bottomText}>
        Don’t have an account? <Text style={styles.link}>Sign Up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.background,
    alignItems: "center",
    padding: 24,
  },
  header: {
    ...typography.title,
    color: colours.textPrimary,
    fontSize: 22,
    marginTop: 80,
    marginBottom: 32,
  },
  card: {
    width: "100%",
    backgroundColor: colours.background,
    borderRadius: 36,
    padding: 24,
    marginBottom: 24,
  },
  label: {
    ...typography.subtitle,
    color: colours.textPrimary,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colours.white,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  loginBtn: {
    backgroundColor: colours.mainGreen,
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 32,
    width: "80%",
    alignItems: "center",
    marginBottom: 10,
  },
  loginText: {
    ...typography.title,
    color: colours.white,
    fontSize: 16,
  },
  forgot: {
    ...typography.subtext,
    color: colours.textPrimary,
    opacity: 0.7,
    marginBottom: 20,
  },
  signupBtn: {
    backgroundColor: colours.mustard,
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 32,
    width: "80%",
    alignItems: "center",
    marginBottom: 30,
  },
  signupText: {
    ...typography.title,
    color: colours.textPrimary,
    fontSize: 16,
  },
  alt: {
    ...typography.subtext,
    color: colours.textPrimary,
    marginBottom: 8,
  },
  bottomText: {
    ...typography.subtext,
    color: colours.textPrimary,
    marginTop: 12,
  },
  link: {
    color: colours.mainGreen,
    textDecorationLine: "underline",
  },
  
});
