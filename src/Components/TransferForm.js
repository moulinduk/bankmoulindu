import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik";
import Axios from "axios";

function TransferForm(props) {
    return (
        <Formik
            initialValues={{
                amount: 0
            }}
            onSubmit={(values) => {
                console.log(values.amount)
                const req = {
                    senderid: props.senderid,
                    receiverid: props.receiverid,
                    amount: values.amount
                }
                Axios.post("https://moulinduk.000webhostapp.com/bankmoulindu/api/transfer/create.php", req)
                .then((res) => {
                    alert(res.data.message);
                }).catch((err) => {
                    console.log(err);
                })
            }}
            validate={(values) => {
                let errors = {};
                if (isNaN(values.amount)) errors.amount = "Enter numeric value only";
                return errors;
            }}
        >
            <Form>
                <Field type="number" name="amount" />
                <ErrorMessage name="amount"/>
                <input type="submit" value="Transfer" />
            </Form>
        </Formik>
    )
}

export default TransferForm
