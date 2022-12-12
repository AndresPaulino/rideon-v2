import Page from './components/Page';
import Routes from './Routes';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Page>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </LocalizationProvider>
    </Page>
  );
}

export default App;
