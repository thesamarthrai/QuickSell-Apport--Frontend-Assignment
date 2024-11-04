import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

// The onPerfEntry parameter is a function that receives performance metrics
const reportWebVitals = (onPerfEntry?: (metric: { name: string; value: number }) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
