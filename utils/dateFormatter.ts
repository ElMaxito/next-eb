// utils/dateFormatter.ts
const germanDateFormatter = new Intl.DateTimeFormat('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  
  export const formatGermanDate = (date: string) => germanDateFormatter.format(new Date(date));