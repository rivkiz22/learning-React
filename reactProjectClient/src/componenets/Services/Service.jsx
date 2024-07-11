import { useState } from "react";
import AddServices from "./AddServices";
import AddMeeting from "../Meetings/AddMeeting";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Service = ({ service, isAdmin }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [openAddMeeting, setOpenAddMeeting] = useState(false);

  return (
    <>
      {isEditMode ? (
        <AddServices service={service} close={()=>{setIsEditMode(false)}} />
      ) : (
        <>
          {openAddMeeting ? (
            <AddMeeting Service={service.id} defaultService={service.name} close={()=>{setOpenAddMeeting(false)}} />
          ) : (
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                 {service.name}
                </Typography>
                <Typography variant="body2" component="p">
                  <p>{service.desciption}</p>
                </Typography>
                <Typography color="text.secondary">
                  <p> מחיר: {service.price} שקלים</p>
                </Typography>
               
              </CardContent>

              {!isAdmin && !openAddMeeting && (
                <button onClick={()=>{setOpenAddMeeting(true)}}>
                  לקביעת פגישה
                </button>
              )}

            

              {isAdmin && (
                <button
                  onClick={() => {
                    setIsEditMode(true);
                  }}
                >
                  ערוך
                </button>
              )}
            </Card>
          )}
        </>
      )}
    </>
  );
};

export default Service;
