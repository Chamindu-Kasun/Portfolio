const ResumeButton: React.FC = () => {
  const openPDF = () => {
    window.open(
      "https://drive.google.com/file/d/1SIo1tc7lyQvpWeOeXsTR6yuIrZMp_Erh/view?usp=drive_link",
      "_blank"
    );
  };
  return (
    <div className="resume_button_container">
      <button className="resume_button" onClick={openPDF}>
        MY RESUME
      </button>
    </div>
  );
};

export default ResumeButton;
