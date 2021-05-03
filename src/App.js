import React from "react";
import {Switch, Route} from "react-router-dom";
import TransferForm from "./Components/TransferForm";
import Senders from './Components/Senders'
import Receivers from './Components/Receivers'

export default function App() {
  const [sender, setSender] = React.useState(false);
  const [receiver, setReceiver] = React.useState(false);
  const [form, setForm] = React.useState(false);

  const [senderid, setSenderid] = React.useState(0);
  const [receiverid, setReceiverid] = React.useState(0);

  return (
    <div>
      {(sender) ? null : <button onClick={() => setSender(true)}>View all customers</button>}
      {(sender) ? <Senders setSenderid={setSenderid}/> : null}
      {(receiver || !sender || !senderid) ? null : <button onClick={() => setReceiver(true)}>View customers to send</button>}
      {(receiver) ? <Receivers setReceiverid={setReceiverid} senderid={senderid}/> : null}
      {(form || !receiver || !sender || !receiverid || !senderid) ? null : <button onClick={() => setForm(true)}>Enter amount to transfer</button>}
      {(form) ? <TransferForm senderid={senderid} receiverid={receiverid} /> : null}
    </div>
  );
}
