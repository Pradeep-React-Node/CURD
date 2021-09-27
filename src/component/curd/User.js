import React, { useEffect } from 'react'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useHistory } from 'react-router';

import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, loadUsers } from '../../actions'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



const User = () => {

  let dispatch = useDispatch();
  let history = useHistory();
  const { users } = useSelector(state => state.data)
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure vwant to delete user ?")) {
      dispatch(deleteUser(id))
    }
  }
  return (
    <div>
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"20px",
          fontSize:"20px"
        }}>
        <Button  variant="contained" color="success" onClick={() => history.push("/addUser")}>ADD USER</Button>
      </div>


      <TableContainer component={Paper}>
        <Table sx={{ marginTop: 10, minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell >Id</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell align="left" >
                  {user.id}
                </StyledTableCell>
                <StyledTableCell align="center">{user.name}</StyledTableCell>
                <StyledTableCell align="center">{user.email}</StyledTableCell>
                <StyledTableCell align="center">{user.phone}</StyledTableCell>
                <StyledTableCell align="center"><Button style={{ marginRight: "5px" }} variant="contained" color="success" onClick={()=>history.push(`/editeuser/${user.id}`)}>Edite</Button>
                  <Button
                    variant="contained" color="error"
                    onClick={() => handleDelete(user.id)}
                  > DELETE</Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default User
