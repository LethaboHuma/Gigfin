import { StyleSheet } from "react-native";
import { colors } from "../../constants/colours";
import { typography } from "../../constants/typography";

const loginScreenStyles = StyleSheet.create({
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
  loginButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",
    marginBottom: 8,
  },
  loginButtonText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "600",
  },
  signUpButton: {
    backgroundColor: colors.highlight,
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: "center",
    marginBottom: 24,
  },
  signUpButtonText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "600",
  },
  forgotPassword: {
    textAlign: "center",
    fontSize: 13,
    color: colors.textPrimary,
    marginBottom: 16,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 24,
  },
  socialIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: colors.textPrimary,
    alignItems: "center",
    justifyContent: "center",
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

export default loginScreenStyles;
