// MUI
import { Paper } from '@mui/material';
// DevExtreme React Chart
import {
	Chart,
	Series,
	ArgumentAxis,
	Tooltip,
	Grid,
	Legend,
	Title
} from 'devextreme-react/chart';
// local files
import logic from './logic';

const Graph = props => {
	const { records, pivot, algorithm } = props;

	const results =
		algorithm === 'look'
			? logic.look(records, pivot)
			: logic.cLook(records, pivot);

	return (
		<Paper
			sx={{
				mt: '12px',
				p: '24px',
				width: '50vw',
				display: algorithm ? 'block' : 'none'
			}}
		>
			<Chart palette={['#1976d2']} dataSource={results.records}>
				<Title
					text={
						results.seekTime &&
						`Total Seek Time: ${results.seekTime} ns`
					}
				/>
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
