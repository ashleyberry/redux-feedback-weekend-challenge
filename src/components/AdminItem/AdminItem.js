import React, {Component} from 'react';

// style
import { 
    Button, 
    TableCell,
    TableRow
} from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiDeleteSweep } from '@mdi/js';

class AdminItem extends Component {

  render() {
    return (
        <TableRow>
            <TableCell>{ this.props.item.feeling }</TableCell>
            <TableCell>{ this.props.item.understanding }</TableCell>
            <TableCell>{ this.props.item.support }</TableCell>
            <TableCell>{ this.props.item.comments }</TableCell>
            <TableCell>
                <Button variant="outlined" 
                    // snag this item's id to send to delete function
                    onClick={ () => this.props.onDelete ( this.props.item.id ) }>
                    <Icon path={ mdiDeleteSweep } size={ 1 }/>
                </Button>
            </TableCell>
        </TableRow>
    );
  }
}

export default AdminItem;
