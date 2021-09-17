import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Programacion OOP', 70, "Steve", "9-11", 10),
    createData('Algoritmos', 80, "Bill", "11-13", "-"),
    createData('Estructuras de datos', 50, "Mark", "7-9", 10),
    createData('Bases de datos', 40, "Elon", "13-15", 10),
    createData('Principios de SE', 35, "Jeff", "15-17", 10),
  ];


const Home = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
<section className="container-home">

<Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Info" value="1" />
            <Tab label="Materias" value="2" />
            <Tab label="Estadisticas" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </TabPanel>
        <TabPanel value="2">
            

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Materia</TableCell>
            <TableCell align="right">Creditos</TableCell>
            <TableCell align="right">Profesor</TableCell>
            <TableCell align="right">Horario</TableCell>
            <TableCell align="right">Calificacion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
            
            </TabPanel>
        <TabPanel value="3">
            <h2>Estadisticas</h2>
            <img src="./stadistic.png"/>
            
            </TabPanel>
      </TabContext>
    </Box>
</section>
        
    );
}

export default Home;