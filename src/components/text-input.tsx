import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Controller } from 'react-hook-form';

const styles = StyleSheet.create({
  errorMessage: { paddingLeft: 10 },
});

export interface TextFieldProps extends TextInputProps {
  name: string;
  label: string;
  type?: string;
  underlineColor?: string;
  control: any;
  required?: boolean;
  labelStyle?: TextStyle;
  errorMessageStyle?: TextStyle;
  showError?: false;
  containerStyle?: ViewStyle;
}

const TextInput = React.forwardRef<any, TextFieldProps>(
  (
    {
      control,
      name,
      required,
      label,
      labelStyle,
      containerStyle,
      errorMessageStyle,
      showError = true,
      ...props
    },
    forwardedRef: React.Ref<any>
  ) => (
    <Controller
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
        ...hookProps
      }) => (
        <>
          <View style={containerStyle}>
            <Text style={labelStyle}>{required ? `${label}*` : label}</Text>
            <RNTextInput
              {...props}
              {...hookProps}
              ref={forwardedRef}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </View>
          {showError && error?.message && (
            <Text style={[styles.errorMessage, errorMessageStyle]}>
              {error.message}
            </Text>
          )}
        </>
      )}
      name={name}
    />
  )
);

export default TextInput;
