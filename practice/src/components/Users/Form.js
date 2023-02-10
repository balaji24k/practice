import React,{useState, useRef} from "react";

import Card from "../UI/Card";
import classes from './Form.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wraper from "../Helpers/Wraper";

const Form = props => {
    const nameInputRef = useRef() 
    const ageInputRef = useRef()
    const collegeInputRef = useRef()

    // const [enteredName,setEnteredName] = useState('')
    // const [enteredAge,setEnteredAge] = useState('')
    const [error,setError] = useState()

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredUserName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        const enteredCollege = collegeInputRef.current.value;

        if (enteredUserName.trim().length ===0 || enteredUserAge.trim().length ===0) {
            setError({
                title:'Invalid Input',
                message:'please enter a valid name and age'
            })
            return;
        }

        if (+enteredUserAge<1) {
            setError({
                title:'Invalid Input',
                message:'please enter a valid age, it must be greater than 0'
            })
            return;
        }

        // console.log(enteredName,enteredAge)
        props.onAddUser(enteredUserName,enteredUserAge,enteredCollege)
        nameInputRef.current.value='';
        ageInputRef.current.value='';
        collegeInputRef.current.value='';
        // setEnteredName('')
        // setEnteredAge('')
    }

    // const nameChangeHandler = (event) => {
    //     setEnteredName(event.target.value)
    // }

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value)
    // }

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
                    <label htmlFor="name">UserName:</label>
                    <input 
                        id="name" 
                        type='text' 
                        // value={enteredName} 
                        // onChange={nameChangeHandler}
                        ref={nameInputRef}
                        />
                    <label htmlFor="age">Age (Years):</label>
                    <input 
                        id="age" 
                        type='number' 
                        // value={enteredAge} 
                        // onChange={ageChangeHandler}
                        ref={ageInputRef}
                        />
                    <label htmlFor="college">College Name:</label>
                    <input 
                        id="college" 
                        type='text' 
                        ref={collegeInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wraper>
    )
}

export default Form;