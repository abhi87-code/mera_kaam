import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface Participant {
  name: string;
  attentionSpan: number;
  attentive: boolean;
  screenTime: string;
}

const participants: Participant[] = [
  { name: 'Prachi', attentionSpan: 9, attentive: true, screenTime: '80%' },
  { name: 'Bhargav', attentionSpan: 7, attentive: true, screenTime: '75%' },
  { name: 'Yashasvi', attentionSpan: 2, attentive: false, screenTime: '30%' },
  { name: 'Sahil', attentionSpan: 6, attentive: false, screenTime: "50%"},
  // Add more participants as needed
];

const Report = () => {
  return (
    <div className="mt-5">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Participant Name</TableCell>
            <TableCell align="right">Attention Span (min)</TableCell>
            <TableCell align="center">Slept Well?</TableCell>
            <TableCell align="right">Screen Time (hours)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {participants.map((participant) => (
            <TableRow key={participant.name}>
              <TableCell component="th" scope="row">
                {participant.name}
              </TableCell>
              <TableCell align="right">{participant.attentionSpan}</TableCell>
              <TableCell align="center">{participant.sleptWell ? 'Yes' : 'No'}</TableCell>
              <TableCell align="right">{participant.screenTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default Report;
