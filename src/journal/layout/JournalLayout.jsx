import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { SideBar, NavBar } from "../components";




const drawerWidth = 280;


export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>

        {/* Navbar */}
        <NavBar drawerWidth={ drawerWidth }/>



        {/* sidebar */}
        <SideBar drawerWidth={ drawerWidth }/>

        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
             {/* toolbar */}
             <Toolbar/>

             { children }

        </Box>



    </Box>
  )
}
