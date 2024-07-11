import { observer } from "mobx-react-lite";
import meetingStore from "../../store/meetingStore.js";
import MeetingView from "./MeetingView.jsx";
import React from 'react'

const MeetingsList = observer(() => {
  debugger
  const { meetings } = meetingStore;

  return (
    <>
      <h3>רשימת הפגישות שלך:</h3>

      {meetings.length>0 && meetings.map((x) => {
        return(
       <MeetingView meetingId={x.id} key={x.id}/>)
  })}
    </>
  );
});

export default MeetingsList;
