import * as React from 'react';
import { ErrorMessage as DefaultErrorMessage } from '@hookform/error-message';
import { StyleSheet, Text, View } from 'react-native';

interface FormErrorProps {
  errors: any;
  name: string;
  clearErrors: any;
  CloseIcon: React.FC<{ onPress: () => void }>;
}

const styles = StyleSheet.create({
  errorText: {
    paddingLeft: 10,
    color: '#fff',
    fontWeight: 'bold',
    padding: 10,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const FormError: React.FC<FormErrorProps> = (props) => {
  const { errors, name, clearErrors, CloseIcon } = props;
  const clearFieldError = () => clearErrors(name, { exact: false });
  return (
    <DefaultErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <View style={styles.row}>
          <Text style={styles.errorText}>{message}</Text>
          <CloseIcon onPress={clearFieldError} />
        </View>
      )}
    />
  );
};

export default FormError;
