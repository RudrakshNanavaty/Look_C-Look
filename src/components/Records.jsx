import { Grid, Card, Typography } from '@mui/material';

const Records = props => {
	const { records } = props;

	return (
		<Grid
			item
			container
			xs={12}
			sx={{
				mt: '12px',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			{/* Records */}
			{records.map(record => {
				return (
					<Grid
						item
						component={Card}
						sx={{
							m: '6px',
							p: '12px',
							width: '5rem',
							backgroundColor: 'primary.main',
							overflow: 'clip'
						}}
						key={record.value}
					>
						<Typography align='center' color='#ffffff'>
							{record.value}
						</Typography>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default Records;
