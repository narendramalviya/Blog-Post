import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button,Typography } from "@material-ui/core";
import {Link} from 'react-router-dom';
const NavBar = () => {
  const navLinkArr = [ 
      {path:'/',name:'Home'},
      {path:'/admin',name:'Admin'},
      {path:'/about',name:'About'},
      {path:'/contact',name:'Contact'},
      {path:'/login',name:'Login'},
      {path:'/logout',name:'Log Out'},
    ]
  const navLinks = navLinkArr.map((link,index)=>(<Link to={link.path} className="ml-3"> {link.name}</Link>))
	return (
		<div>
			<AppBar position="static" color="transparent" className="">
				<Toolbar>
					<Typography variant="h6">Blogs</Typography>
				 <div className="d-flex">
         {navLinks}
        
         </div>
				</Toolbar>
			</AppBar>
		</div>
	);
};
export default NavBar;
