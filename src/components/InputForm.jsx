import { useState } from 'react';
// MUI
import {
	Grid,
	TextField,
	Button,
	Typography,
	ToggleButton,
	ToggleButtonGroup
} from '@mui/material';

const InputForm = props => {
	const { records, setRecords, pivot, setPivot, algorithm, setAlgorithm } =
		props;

	const [recordFieldValue, setRecordFieldValue] = useState('');
	const [pivotFieldValue, setPivotFieldValue] = useState('');

	const updateRecords = () => {
		setRecords([
			...records,
			{ name: records.length, value: recordFieldValue }
		]);
	};

	const updatePivot = () => {
		setPivot(parseFloat(pivotFieldValue));
	};

	return (
		// Data Input Form
		<Grid
			item
			container
			xs={6}
			onSubmit={updateRecords}
			columnSpacing='12px'
			sx={{ alignItems: 'center', justifyContent: 'center' }}
		>
			{/* Pivot Controls */}
			<Grid
				item
				container
				xs={6}
				sx={{
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column'
				}}
			>
				{/* Pivot input field */}
				<TextField
					label='Enter Pivot'
					value={pivotFieldValue}
					onChange={e => setPivotFieldValue(e.target.value)}
					sx={{
						m: '12px',
						backgroundColor: 'background.paper',
						borderRadius: '12px'
					}}
				/>

				{/* Update pivot button */}
				<Button variant='contained' onClick={updatePivot}>
					ADD PIVOT
				</Button>
			</Grid>

			{/* Record Controls */}
			<Grid
				item
				container
				xs={6}
				sx={{
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column'
				}}
			>
				{/* Record input field */}
				<TextField
					autoFocus
					label='Enter Record'
					value={recordFieldValue}
					onChange={e => setRecordFieldValue(e.target.value)}
					sx={{
						m: '12px',
						backgroundColor: 'background.paper',
						borderRadius: '12px'
					}}
				/>

				{/* Add record button */}
				<Button
					variant='contained'
					onClick={updateRecords}
					sx={{ height: 'inherit' }}
				>
					ADD RECORD
				</Button>
			</Grid>

			{/* Select Algorithm */}
			<Grid item xs={3}>
				<ToggleButtonGroup
					fullWidth
					exclusive
					sx={{
						backgroundColor: 'background.paper'
					}}
				>
					<ToggleButton
						sx={{
							color: '#000000',
							'&.Mui-selected': {
								backgroundColor: 'primary.main',
								color: '#ffffff'
							}
						}}
						selected={algorithm === 'look'}
						onClick={() => setAlgorithm('look')}
						value={''}
					>
						<Typography>LOOK</Typography>
					</ToggleButton>

					<ToggleButton
						sx={{
							color: '#000000',
							'&.Mui-selected': {
								backgroundColor: 'primary.main',
								color: '#ffffff'
							}
						}}
						selected={algorithm === 'c-look'}
						onClick={() => setAlgorithm('c-look')}
						value={''}
					>
						<Typography>C-LOOK</Typography>
					</ToggleButton>
				</ToggleButtonGroup>
			</Grid>
		</Grid>
	);
};

export default InputForm;
