import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { setUserSlice } from '../redux/slice/user';
import { deleteUsersSlice } from '../redux/slice/users';
import { DELETE_USER_BY_ID, GET_USERS } from '../redux/types';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}


export default function MyTable() {
    const dispatch = useDispatch()
    React.useEffect(() => {
        // Your effect code here
        dispatch({type: GET_USERS});
       }, []); // Empty dependency array means this effect runs once on mount
       
    const rows = useSelector(state => state.users);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Password</TableCell>
                        <TableCell align="right">Edit</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: any) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.password}</TableCell>
                            <TableCell align="right">
                                <Button onClick={() => dispatch(setUserSlice(row))} variant="contained">Edit</Button>;
                            </TableCell>
                            <TableCell align="right">
                                <Button onClick={() => dispatch({type: DELETE_USER_BY_ID, id:row.id})} variant="contained">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}