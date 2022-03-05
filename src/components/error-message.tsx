import * as React from 'react';
import { ErrorMessage as DefaultErrorMessage } from '@hookform/error-message';
import { StyleSheet, Text } from 'react-native';

interface ErrorMessageProps {
  errors: any;
  name: string;
}

const styles = StyleSheet.create({
  errorMessage: { paddingLeft: 10 },
});

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { errors, name } = props;
  return (
    <DefaultErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <Text style={styles.errorMessage}>{message}</Text>
      )}
    />
  );
};

export default ErrorMessage;
