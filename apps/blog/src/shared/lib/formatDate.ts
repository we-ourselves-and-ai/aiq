export function formatDate(dateTime: string) {
  const dateObj = new Date(dateTime);

  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');

  const options: any = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  const formattedDate = dateObj.toLocaleDateString('en-US', options);

  return `${hours}:${minutes} | ${formattedDate}`;
}
