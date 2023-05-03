import { Loading, Modal, TextArea } from "@carbon/react";
import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

const EventSuggestionModal = ({ open, handleModalClose }) => {
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);
  const scriptUrl = process.env.REACT_APP_FIREBASE_SUGGESTIONS_DATABASE;

  const handleSubmission = async () => {
    await axios.post(scriptUrl, 
      { suggestion, createdAt: new Date() })
      .then(res => {
        setLoading(false);
        handleModalClose();
        toast("We hear you loud and clear! Thank you for the suggestion.");
      })
      .catch(err => {
        setLoading(false);
        handleModalClose();
        toast("An error occured while sending feedback. Contact club members");
      });
    setSuggestion("");
  };

  if (loading) return <Loading
        description="Active loading indicator" withOverlay={false} />

  return (
    <Modal
      open={open}
      modalHeading="We want to hear from you ♥️"
      primaryButtonText="Suggest Event"
      secondaryButtonText="Nevermind"
      onRequestClose={handleModalClose}
      onRequestSubmit={handleSubmission}>
      <p style={{ marginBottom: '1rem' }}>
        We're back and better than ever, and we need your help. We're planning a bunch of awesome events for the upcoming year, and we want to make sure we're catering to your every whim and fancy. After all, who knows better what you want than...well, you?<br></br><br></br>
        So, we're here to ask you to put on your thinking caps and let us know what kinds of events you'd like to see us host. Don't be shy, we're open to all kinds of suggestions (within reason, of course). The weirder and wackier, the better!<br></br><br></br>
        So hit us with your best ideas, and let's make this year one to remember!
      </p>
      <TextArea
        data-modal-primary-focus
        id="text-input-1"
        rows={4}
        maxCount={60}
        labelText="Describe the event that you want us to organize"
        placeholder="How about we do a tech talk on Blockchain?"
        style={{ marginBottom: '1rem' }}
        onChange={(e) => setSuggestion(e.target.value)}
        value={suggestion}
      />
    </Modal>
  );
};

export default EventSuggestionModal;