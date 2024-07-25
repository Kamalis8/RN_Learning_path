import { StyleSheet } from 'react-native';
import colors from '../colors/colors';

const commonStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Text styles
  text: {
    fontSize: 16,
    color: colors.text,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.headerText,
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 18,
    color: colors.subHeaderText,
    marginBottom: 5,
  },
  linkText: {
    fontSize: 16,
    color: colors.linkText,
  },

  // Button styles
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 18,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
  },

  // Input styles
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  textarea: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    height: 100,
    textAlignVertical: 'top',
  },

  // Card styles
  card: {
    backgroundColor: colors.cardBackground,
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardContent: {
    fontSize: 16,
    color: colors.subHeaderText,
  },

  // Footer styles
  footer: {
    padding: 16,
    backgroundColor: colors.footerBackground,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  footerText: {
    fontSize: 14,
    color: colors.footerText,
  },

  // Other styles
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  divider: {
    height: 1,
    backgroundColor: colors.divider,
    marginVertical: 10,
  },
});

export default commonStyles;