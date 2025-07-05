import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AllRoutes from './AllRoutes';

import GlobalStyles from './styles/GlobalStyle';

import { DarkModeProvider } from './context/DarkModeContext';
import ReactToaster from './ReactToaster';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //delay to load data ⬇️ from the database
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <AllRoutes />
        <ReactToaster />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
