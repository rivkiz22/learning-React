import { defaultMeetings } from "../store/basicData";
import axios from 'axios'
export async function postMeeting(newMeeting) {
  try {
    console.log("postMeeting", newMeeting);

    const response = await fetch("http://localhost:8787/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMeeting),
    });
    console.log("response", response);

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("responseerror", error);

    return false;
  }
}

export const getMeetings = async () => {
  try {
    debugger
    const response = await axios.get("http://localhost:8787/appointments");
    console.log(response)
    if (!response.status==200 ) {
      return defaultMeetings;
    }
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
