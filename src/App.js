import Page from './components/Page';
import Routes from './Routes';
import { AuthProvider } from 'context/FirebaseContext';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Page>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </LocalizationProvider>
      </Page>
    </AuthProvider>
  );
}

export default App;
