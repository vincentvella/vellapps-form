import * as React from 'react';
import { ErrorMessage as DefaultErrorMessage } from '@hookform/error-message';
import { Card, IconButton, Text } from 'react-native-paper';
import { red300, white } from 'react-native-paper/src/styles/colors';
import { StyleSheet, View } from 'react-native';

interface FormErrorProps {
  errors: any;
  name: string;
  clearErrors: any;
}

const styles = StyleSheet.create({
  errorText: {
    paddingLeft: 10,
    color: white,
    fontWeight: 'bold',
    padding: 10,
    flex: 1,
  },
  card: {
    backgroundColor: red300,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const FormError: React.FC<FormErrorProps> = (props) => {
  const { errors, name, clearErrors } = props;
  const clearFieldError = () => clearErrors(name, { exact: false });
  return (
    <DefaultErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => (
        <Card style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.errorText}>{message}</Text>
            <IconButton icon="close" size={18} onPress={clearFieldError} />
          </View>
        </Card>
      )}
    />
  );
};

export default FormError;
