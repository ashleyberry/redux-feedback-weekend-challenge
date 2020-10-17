import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AdminItem from '../AdminItem/AdminItem';
// styling
import 'fontsource-roboto'
import { 
    Typography, 
    Table, 
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core';

class Admin extends Component {

    render() {
        return (
           <div>
                <header className="App-header">
                    <Typography 
                        variant="h4">
                        Feedback Results
                    </Typography>
                </header>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Feeling</TableCell>
                                <TableCell>Comprehension</TableCell>
                                <TableCell>Support</TableCell>
                                <TableCell>Comments</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* map through each feedback item */}
                            {this.props.feedback.map( item => 
                                <AdminItem 
                                    item={item} 
                                    key={item.id} 
                                    onDelete={ this.props.onDelete }
                                />
                            )}                   
                        </TableBody>
                    </Table>
                </TableContainer>
            </div> 
        ) // end return
    } // end render
} // end Admin component


export default connect() (withRouter ( Admin ));