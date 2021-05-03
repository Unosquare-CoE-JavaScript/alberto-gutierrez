import NewMeetupForm from "./../../components/meetups/NewMeetupForm";
export default function Meetup() {
  return (
    <NewMeetupForm
      onAddMeetup={(formData) => {
        console.log(formData);
      }}
    />
  );
}
