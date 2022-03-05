export const nextInputFocus = (ref: any) => () => {
  if (ref) {
    ref.current.focus();
  }
};
