import * as React from 'react';
import { ErrorMessage as DefaultErrorMessage } from '@hookform/error-message';
import { Text } from 'react-native';

interface ErrorMessageProps {
  errors: any;
  name: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  const { errors, name } = props;
  return (
    <DefaultErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <Text style={{ paddingLeft: 10 }}>{message}</Text>
      )}
    />
  );
};

export default ErrorMessage;
