import { useState } from 'react';
// MUI
import { Grid } from '@mui/material';
// local files
import InputForm from './components/InputForm';
import Records from './components/Records';
import Graph from './components/Graph';

const AppLayout = () => {
	const [records, setRecords] = useState([]);

	const [pivot, setPivot] = useState(0);
	const [algorithm, setAlgorithm] = useState('');

	return (
		// Sabka Baap
		<Grid
			container
			sx={{
				p: '12px',
				width: '100vw',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			{/* Data Input Form */}
			<InputForm
				records={records}
				pivot={pivot}
				algorithm={algorithm}
				setRecords={setRecords}
				setPivot={setPivot}
				setAlgorithm={setAlgorithm}
			/>

			{/* Records */}
			<Records records={records} />

			{/* Chart */}
			<Graph records={records} pivot={pivot} algorithm={algorithm} />
		</Grid>
	);
};

export default AppLayout;
