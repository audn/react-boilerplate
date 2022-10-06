export const validateRegex = ({
  value,
  regex,
}: {
  value?: string;
  regex?: string | ((val: string) => void);
}) => {
  if (!value) {
    return;
  }
  if (typeof regex == 'string') {
    return new RegExp(regex).test(value);
  } else if (typeof regex == 'function') {
    return regex(value);
  }
};
