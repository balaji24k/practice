import React,{useState} from "react";

import Card from "../UI/Card";
import classes from './Form.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wraper from "../Helpers/Wraper";

const Form = props => {
    const [enteredName,setEnteredName] = useState('')
    const [enteredAge,setEnteredAge] = useState('')
    const [error,setError] = useState()

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredName.trim().length ===0 || enteredAge.trim().length ===0) {
            setError({
                title:'Invalid Input',
                message:'please enter a valid name and age'
            })
            return;
        }

        if (+enteredAge<1) {
            setError({
                title:'Invalid Input',
                message:'please enter a valid age, it must be greater than 0'
            })
            return;
        }

        console.log(enteredName,enteredAge)
        props.onAddUser(enteredName,enteredAge)
        setEnteredName('')
        setEnteredAge('')
    }

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wraper>
            {error && <ErrorModal 
                title = {error.title} 
                message={error.message}
                onConfirm = {errorHandler}
                ></ErrorModal>}
            <Card className={classes.input} >
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">UserName</label>
                    <input 
                        id="name" 
                        type='text' 
                        value={enteredName} 
                        onChange={nameChangeHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        type='number' 
                        value={enteredAge} 
                        onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wraper>
    )
}

export default Form;