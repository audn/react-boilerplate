export const validateRegex = ({
  value,
  regex,
}: {
  value?: string;
  regex?: (val: string) => void;
}) => {
  if (!value) {
    return '';
  }
  if (regex) return regex(value);
};
