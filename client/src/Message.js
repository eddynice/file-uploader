import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

function Message ({msg})  {
    const classes = useStyles();
    return (
        <div className={classes.root}>
         <Card/>
            
        </div>
    )
}

Message.propTypes = {
    msg:PropTypes.string.isRequired

}

export default Message
