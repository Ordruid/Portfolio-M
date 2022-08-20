export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me!</h1>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Company:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="text" />
        </label>
        <label>
          Phone:
          <input type="text" />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
