import React from 'react';
import Axios from "axios";

function Senders(props) {
    var [data, setData] = React.useState(['Loading..']);
    var [refresh, setRefresh] = React.useState(true);
    var [selected, select] = React.useState(false);
    if(refresh) Axios.post("https://moulinduk.000webhostapp.com/bankmoulindu/api/customer/read.php")
    .then((res) => {
        setData(res.data.records.map((cust, i) => 
            <div key={i+1}>
                {i+1}. {cust.name} ({cust.balance})
                <button onClick={() => {
                    props.setSenderid(cust.id);
                    select(true);
                }}>Select</button>
            </div>
        ));
        setRefresh(false);
    }).catch((err) => {
        console.log(err)
    })
    return (
        <div>
            <h2>Sender List</h2>
            {(selected)? null : data}
        </div>
    )
}

export default Senders
