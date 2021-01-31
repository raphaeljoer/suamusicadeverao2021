const formatNumber = (value: string | number) => {
  return Intl.NumberFormat('pt-BR').format(Number(value));
};

export default formatNumber;
