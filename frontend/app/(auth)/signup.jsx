import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable , ScrollView} from "react-native";
import colours from "../../constants/colours";
import typography from "../../constants/typography";

export default function SignUp() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Create Account</Text>

      <View style={styles.card}>
        {/* Full Name */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="example@example.com"
          placeholderTextColor={colours.lightGreen}
          style={styles.input}
        />

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="example@example.com"
          placeholderTextColor={colours.lightGreen}
          style={styles.input}
        />

        {/* Mobile Number */}
        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          placeholder="+ 123 456 789"
          placeholderTextColor={colours.lightGreen}
          style={styles.input}
        />

        {/* Date of Birth */}
        <Text style={styles.label}>Date Of Birth</Text>
        <TextInput
          placeholder="DD / MM / YYY"
          placeholderTextColor={colours.lightGreen}
          style={styles.input}
        />

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="••••••••"
          secureTextEntry
          placeholderTextColor={colours.lightGreen}
          style={styles.input}
        />

        {/* Confirm Password */}
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          placeholder="••••••••"
          secureTextEntry
          placeholderTextColor={colours.lightGreen}
          style={styles.input}
        />
      </View>

      {/* Legal Disclaimer */}
     {/*
      <Text style={styles.legal}>
        By continuing, you agree to{" "}
        <Text style={styles.bold}>Terms of Use</Text> and{" "}
        <Text style={styles.bold}>Privacy Policy.</Text>
      </Text> */}

      {/* Sign Up Button */}
      <Pressable style={styles.signupBtn}>
        <Text style={styles.signupText}>Sign Up</Text>
      </Pressable>

      {/* Already have an account */}
      <Text style={styles.bottomText}>
        Already have an account? <Text style={styles.link}>Log In</Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.background,
    padding: 24,
    paddingTop: 50,
    alignItems: "center",
  },
  header: {
    ...typography.title,
    color: colours.textPrimary,
    fontSize: 22,
    marginBottom: 32,
  },
  card: {
    width: "100%",
    backgroundColor: colours.background,
    borderRadius: 36,
    padding: 24,
    marginBottom: 0,
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
  legal: {
    ...typography.subtext,
    color: colours.textPrimary,
    textAlign: "center",
    marginBottom: 16,
  },
  bold: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  signupBtn: {
    backgroundColor: colours.mustard,
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 32,
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
  signupText: {
    ...typography.title,
    color: colours.textPrimary,
    fontSize: 16,
  },
  bottomText: {
    ...typography.subtext,
    color: colours.textPrimary,
  },
  link: {
    color: colours.mainGreen,
    textDecorationLine: "underline",
  },
});
