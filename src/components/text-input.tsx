import * as React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput as RNPaperTextInput } from 'react-native-paper';
import type { TextInputProps } from 'react-native-paper/lib/typescript/src/components/TextInput/TextInput';
import type { Theme } from 'react-native-paper/lib/typescript/src/types';

type TextFieldProp = Pick<
  TextInputProps,
  | 'label'
  | 'style'
  | 'allowFontScaling'
  | 'ref'
  | 'numberOfLines'
  | 'onLayout'
  | 'testID'
  | 'nativeID'
  | 'maxFontSizeMultiplier'
  | 'selectionColor'
  | 'textBreakStrategy'
  | 'accessible'
  | 'accessibilityLabel'
  | 'accessibilityRole'
  | 'accessibilityHint'
  | 'accessibilityComponentType'
  | 'accessibilityLiveRegion'
  | 'importantForAccessibility'
  | 'accessibilityElementsHidden'
  | 'accessibilityTraits'
  | 'onAccessibilityTap'
  | 'onMagicTap'
  | 'accessibilityIgnoresInvertColors'
  | 'disabled'
  | 'key'
  | 'hitSlop'
  | 'pointerEvents'
  | 'removeClippedSubviews'
  | 'collapsable'
  | 'needsOffscreenAlphaCompositing'
  | 'renderToHardwareTextureAndroid'
  | 'accessibilityViewIsModal'
  | 'accessibilityActions'
  | 'onAccessibilityAction'
  | 'shouldRasterizeIOS'
  | 'isTVSelectable'
  | 'hasTVPreferredFocus'
  | 'tvParallaxProperties'
  | 'tvParallaxShiftDistanceX'
  | 'tvParallaxShiftDistanceY'
  | 'tvParallaxTiltAngle'
  | 'tvParallaxMagnification'
  | 'onStartShouldSetResponder'
  | 'onMoveShouldSetResponder'
  | 'onResponderEnd'
  | 'onResponderGrant'
  | 'onResponderReject'
  | 'onResponderMove'
  | 'onResponderRelease'
  | 'onResponderStart'
  | 'onResponderTerminationRequest'
  | 'onResponderTerminate'
  | 'onStartShouldSetResponderCapture'
  | 'onMoveShouldSetResponderCapture'
  | 'onTouchStart'
  | 'onTouchMove'
  | 'onTouchEnd'
  | 'onTouchCancel'
  | 'onTouchEndCapture'
  | 'render'
  | 'onBlur'
  | 'onFocus'
  | 'multiline'
  | 'mode'
  | 'error'
  | 'placeholder'
  | 'autoCapitalize'
  | 'autoCorrect'
  | 'autoFocus'
  | 'blurOnSubmit'
  | 'caretHidden'
  | 'contextMenuHidden'
  | 'defaultValue'
  | 'editable'
  | 'keyboardType'
  | 'maxLength'
  | 'onChange'
  | 'onChangeText'
  | 'onContentSizeChange'
  | 'onEndEditing'
  | 'onSelectionChange'
  | 'onSubmitEditing'
  | 'onScroll'
  | 'onKeyPress'
  | 'placeholderTextColor'
  | 'returnKeyType'
  | 'secureTextEntry'
  | 'selectTextOnFocus'
  | 'selection'
  | 'inputAccessoryViewID'
  | 'value'
  | 'clearButtonMode'
  | 'clearTextOnFocus'
  | 'dataDetectorTypes'
  | 'enablesReturnKeyAutomatically'
  | 'keyboardAppearance'
  | 'selectionState'
  | 'spellCheck'
  | 'textContentType'
  | 'scrollEnabled'
  | 'autoCompleteType'
  | 'disableFullscreenUI'
  | 'inlineImageLeft'
  | 'inlineImagePadding'
  | 'returnKeyLabel'
  | 'underlineColorAndroid'
  | 'textAlignVertical'
  | 'dense'
> & {
  theme?:
    | import('@callstack/react-theme-provider').$DeepPartial<Theme>
    | undefined;
};

export interface TextFieldProps extends TextFieldProp {
  name: string;
  label: string;
  type?: string;
  underlineColor?: string;
  control: any;
  required?: boolean;
}

const TextInput = React.forwardRef<any, TextFieldProps>(
  (
    { control, name, required, label, ...props },
    forwardedRef: React.Ref<any>
  ) => (
    <Controller
      control={control}
      render={({ onChange, ...hookProps }) => (
        <RNPaperTextInput
          mode="outlined"
          label={required ? `${label}*` : label}
          {...props}
          {...hookProps}
          onChangeText={onChange}
          ref={forwardedRef}
        />
      )}
      name={name}
    />
  )
);

export default TextInput;
