import * as React from 'react';
import {
  Text,
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { Controller } from 'react-hook-form';

export interface TextFieldProps extends TextInputProps {
  name: string;
  label: string;
  type?: string;
  underlineColor?: string;
  control: any;
  required?: boolean;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const TextInput = React.forwardRef<any, TextFieldProps>(
  (
    { control, name, required, label, labelStyle, containerStyle, ...props },
    forwardedRef: React.Ref<any>
  ) => (
    <Controller
      control={control}
      render={({ onChange, ...hookProps }) => (
        <View style={containerStyle}>
          <Text style={labelStyle}>{required ? `${label}*` : label}</Text>
          <RNTextInput
            {...props}
            {...hookProps}
            ref={forwardedRef}
            onChangeText={onChange}
          />
        </View>
      )}
      name={name}
    />
  )
);

export default TextInput;
