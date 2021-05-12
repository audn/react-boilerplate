export default function toDate({ dateString }: { dateString: string }) {
  const options: object = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  if (dateString) {
    return new Date(dateString).toLocaleDateString('en-US', options);
  } else return dateString;
}
