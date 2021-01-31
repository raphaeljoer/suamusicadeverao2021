import { ToastProvider } from '@/hooks/toast';
import { VoteProvider } from '@/context/VoteContext';

const AppProvider = ({ children }) => (
  <VoteProvider>
    <ToastProvider>{children}</ToastProvider>;
  </VoteProvider>
);

export default AppProvider;
