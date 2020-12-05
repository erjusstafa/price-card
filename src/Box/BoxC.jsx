import React from 'react'
import { Button } from '@material-ui/core';
import { FiCheck } from "react-icons/fi";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    all: {
        position: 'absolute',
        top: '15%',
        right: '10%',
        width: '20%',
        height: '70vh',
        boxShadow: '3px 7px 14px rgb(0,250,154)',
        textAlign: 'center',
    },
    header: {
        width: '100%',
        height: '200px',
        backgroundColor: ' rgb(0,250,154)',
        paddingTop: '25px',
    },

    basic: {
        color: 'white',
        fontSize: '20px',
        backgroundColor: 'rgb(0,250,154)',

    },
    values: {

        color: 'white',
        marginBottom: '-15px',
        padding: '2px',
        fontSize: '50px',
        backgroundColor: 'rgb(0,250,154)',

    },
    month: {
        color: 'white',
        fontSize: '15px',
        marginBottom: '40px',
        backgroundColor: 'rgb(0,250,154)',

    },

    span: {
        color: 'rgb(0,250,154)',
        width: '150px',
        marginRight: '10px',

    },

    ul: {
        marginTop: '25px',
        textAlign: 'start',

    },
    list: {
        listStyle: 'none',
        marginLeft: '15%',

    },

    save: {
        color: 'green',
        marginRight: '10px'
    },

    btn: {
        width: '120px',
        backgroundImage: 'linear-gradient(to bottom, rgb(144,238,144),rgb(0,250,154))',
        borderColor: 'rgb(255,69,0)',
        marginTop: '30px',

    }
})



function BoxC() {

    const classes = useStyles();


    const list = ['Web Developer ', 'Data Scientist', 'Machine Learning', 'Big Data', 'Artificial Intelligence']

    const myList = list.map((x, index) => {
        return <div className={classes.ul}>
            <ul>
                <li className={classes.list} key={index}><span><FiCheck className={classes.save} /></span>{x}</li>
            </ul>
        </div>
    })

    return (
        <div>
            <div className={classes.all}>
                <div className={classes.header}>
                    <div className={classes.basic}>Premium</div>
                    <div className={classes.values}>€2999</div>
                    <div className={classes.month}>per month</div>
                </div>
                <div> {myList}</div>
                <Button className={classes.btn} type="button" variant="contained" color="primary">BUY NOW</Button>

            </div>
        </div>
    )

}

export default BoxC;