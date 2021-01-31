import { Section } from './styles';

interface DivisorProps {
  height: string;
}

const Divisor = ({ height }: DivisorProps) => {
  return <Section height={height} />;
};

export default Divisor;
