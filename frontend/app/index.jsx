import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { Image } from "expo-image";
import colours from "../constants/colours.js";
import typography from "../constants/typography.js";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>

      <Image
        source={require("../assets/images/logo2.png")}
        style={styles.logo}
      />
      <Text style={styles.text}> </Text>

      {/* Buttons container */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.loginButton}>
          <Text style={styles.loginText}>Log In</Text>
        </Pressable>

        <Pressable style={styles.signupButton}>
          <Text style={styles.signupText}>Sign Up</Text>
        </Pressable>
      </View>

      {/* Forgot Password */}
      <Text style={styles.forgot}>Forgot Password?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.background,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },

  text: {
    ...typography.title,
    color: colours.textPrimary,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    gap: 16,
    width: "100%",
    alignItems: "center",
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: colours.mainGreen,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 40,
    width: "80%",
    alignItems: "center",
  },
  loginText: {
    ...typography.title,
    color: colours.white,
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: colours.mustard,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 40,
    width: "80%",
    alignItems: "center",
  },
  signupText: {
    ...typography.title,
    color: colours.textPrimary,
    fontSize: 16,
  },
  forgot: {
    ...typography.subtext,
    color: colours.textPrimary,
    opacity: 0.8,
    fontSize: 15,
  },
});
