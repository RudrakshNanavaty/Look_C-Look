// fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// MUI
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// local files
import AppLayout from './AppLayout';
import assets from './assets';

const App = () => {
	return (
		// custom theme
		<ThemeProvider theme={createTheme(assets.theme)}>
			<CssBaseline />
			<AppLayout />
		</ThemeProvider>
	);
};

export default App;
