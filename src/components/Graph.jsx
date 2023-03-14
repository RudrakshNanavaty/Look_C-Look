import { Paper } from '@mui/material';

import {
	Chart,
	Series,
	ArgumentAxis,
	Tooltip,
	Grid,
	Legend,
	Title
} from 'devextreme-react/chart';

import logic from './logic';

const Graph = props => {
	const { records, pivot, algorithm } = props;

	const result =
		algorithm === 'look'
			? logic.look(records, pivot)
			: logic.cLook(records, pivot);

	console.log(result);

	return (
		<Paper
			sx={{
				mt: '12px',
				p: '24px',
				width: '50vw',
				display: algorithm ? 'block' : 'none'
			}}
		>
			<Chart
				palette={['#1976d2', '#42a5f5', '#1265c0']}
				dataSource={result.records}
			>
				<Title text={`Total Seek Time: ${result.seekTime} ns`} />
				<Series argumentField='time' valueField='value' />

				{/* Enabling gridlines within the chart */}
				<ArgumentAxis>
					<Grid visible={true} />
				</ArgumentAxis>

				<Tooltip enabled={true} />

				<Legend visible={false} />
			</Chart>
		</Paper>
	);
};

export default Graph;
