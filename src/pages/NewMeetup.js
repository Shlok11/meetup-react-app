import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/Meetups/NewMeetupForm";

function NewMeetupsPage() {
  const navigate = useNavigate();
  function addMeetupHandler(meetupdata) {
    fetch("https://meetup-app-473e1-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupdata),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/", { replace: true });
    });
  }
  return (
    <section>
      <h1>Add New MeetUp</h1>
      <NewMeetupForm onAddNewMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
