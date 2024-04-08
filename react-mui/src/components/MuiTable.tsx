import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

// https://mockaroo.com/

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Fredek",
    last_name: "Reddlesden",
    email: "freddlesden0@hubpages.com",
    gender: "Male",
    ip_address: "87.213.102.12",
  },
  {
    id: 2,
    first_name: "Lisette",
    last_name: "Noakes",
    email: "lnoakes1@jigsy.com",
    gender: "Female",
    ip_address: "248.112.125.191",
  },
  {
    id: 3,
    first_name: "Giacopo",
    last_name: "Tarpey",
    email: "gtarpey2@businessweek.com",
    gender: "Male",
    ip_address: "186.102.88.87",
  },
  {
    id: 4,
    first_name: "Ephraim",
    last_name: "Lensch",
    email: "elensch3@networkadvertising.org",
    gender: "Male",
    ip_address: "99.62.110.156",
  },
  {
    id: 5,
    first_name: "Nicolis",
    last_name: "Pedrick",
    email: "npedrick4@unc.edu",
    gender: "Male",
    ip_address: "204.115.242.211",
  },
  {
    id: 6,
    first_name: "Jaclin",
    last_name: "Dewicke",
    email: "jdewicke5@wunderground.com",
    gender: "Female",
    ip_address: "117.21.227.61",
  },
  {
    id: 7,
    first_name: "Guy",
    last_name: "Dreschler",
    email: "gdreschler6@vk.com",
    gender: "Polygender",
    ip_address: "0.65.52.231",
  },
  {
    id: 8,
    first_name: "Eadmund",
    last_name: "O' Markey",
    email: "eomarkey7@walmart.com",
    gender: "Male",
    ip_address: "17.223.110.22",
  },
  {
    id: 9,
    first_name: "Sheelagh",
    last_name: "Ewenson",
    email: "sewenson8@scientificamerican.com",
    gender: "Female",
    ip_address: "88.148.251.248",
  },
  {
    id: 10,
    first_name: "Vasilis",
    last_name: "Davitt",
    email: "vdavitt9@disqus.com",
    gender: "Male",
    ip_address: "179.220.117.111",
  },
];
