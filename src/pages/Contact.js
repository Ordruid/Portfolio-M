export default function Contact() {
  return (
    <div className="page">
      <h1>Contact Me!</h1>
      
      <form>
      <div className="contact">
        <label>
          Name:
          <input type="text" className="contact" />
        </label>
        <label>
          Company:
          <input type="text" className="contact" />
        </label>
        <label>
          Email:
          <input type="text" className="contact" />
        </label>
        <label>
          Phone:
          <input type="text" className="contact" />
        </label>
        <input type="submit" className="contact" />
      </div>
      </form>
    </div>
  );
}
