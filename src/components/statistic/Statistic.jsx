import { useState } from "react";
import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";

import { Button } from "@mui/material";

function createData(username, score, id) {
  return { username, score, id };
}

let idCounter = 1;

const rows = [
  createData("Krasi", 320, idCounter++),
  createData("Yordan", 401, idCounter++),
  createData("George", 250, idCounter++),
  createData("Donald", 260, idCounter++),
  createData("Mickey", 450, idCounter++),
  createData("Minnie", 300, idCounter++),
  createData("Belle", 150, idCounter++),
  createData("Aurora", 195, idCounter++),
  createData("Ariel", 220, idCounter++),
  createData("Philip", 290, idCounter++),
  createData("Pongo", 260, idCounter++),
  createData("Lady", 340, idCounter++),
  createData("Garfield", 180, idCounter++),
  createData("Madeline", 330, idCounter++),
  createData("Manny", 210, idCounter++),
  createData("Goofy", 290, idCounter++),
  createData("Mulan", 310, idCounter++),
  createData("Elsa", 200, idCounter++),
  createData("Eric", 250, idCounter++),
  createData("Tiana", 350, idCounter++),
].sort((a, b) => b.score - a.score);

export default function Statistic() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom>
        Statistic
      </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="center">Score</TableCell>
              <TableCell align="right">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.username}
                  </TableCell>
                  <TableCell align="center">{row.score}</TableCell>
                  <TableCell align="right">
                    <Button
                      component={Link}
                      to={`/profile-details/${row.id}`}
                      variant="contained"
                      color="primary"
                      size="small"
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
}
