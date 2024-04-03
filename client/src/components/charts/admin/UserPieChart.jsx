import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const UserPieChart = ({ data }) => {
    const pieColors = ['#F6AE2D', '#132A13', '#7838d4', '#21f1f1'];

    // Assuming `data` is passed as a prop, or you can define it directly here like so:
    // const data = [
    //     {
    //         "id": "Client Users",
    //         "label": "Client Users",
    //         "value": 120, // Sample value
    //     },
    //     {
    //         "id": "Trucker Users",
    //         "label": "Trucker Users",
    //         "value": 80, // Sample value
    //     }
    // ];

    return (
        <ResponsivePie
            data={data}
            margin={{ top: 30, right: 80, bottom: 50, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={pieColors}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
            radialLabelsSkipAngle={10}
            radialLabelsLinkColor={{ from: 'color' }}
            sliceLabelsSkipAngle={10}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            theme={{
                labels: {
                    text: {
                        fill: "#BC4749"
                    }
                }
            }}
        />
    );
};

export default UserPieChart;
