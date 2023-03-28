export const calculatePercentage = ({
  x,
  y,
}: {
  x: number;
  y: number;
}): string => {
  return (y / x).toFixed(2);
};
