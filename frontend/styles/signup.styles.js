import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const signupScreenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: colors.background,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  inputLabel: {
    ...typography.subtitle,
    color: colors.textPrimary,
    marginBottom: 6,
  },
  inputField: {
    backgroundColor: colors.white,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 14,
    color: colors.textPrimary,
    marginBottom: 16,
  },
  signUpButton: {
    backgroundColor: colors.highlight,
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 24,
  },
  signUpButtonText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "600",
  },
  legalText: {
    fontSize: 12,
    textAlign: "center",
    color: colors.textPrimary,
    marginTop: 10,
  },
  legalBold: {
    fontWeight: "600",
  },
  footerText: {
    fontSize: 13,
    textAlign: "center",
    color: colors.textPrimary,
  },
  footerLink: {
    color: colors.primary,
    fontWeight: "500",
  },
});

export default signupScreenStyles;
