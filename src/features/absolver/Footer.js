/**
 * The footer of the web application
 * @component
 * @returns A div containing three <a> tags, each containing a <p> tag.
 * @author Max Schuhmacher <sleepycobbler@gmail.com>
 */

const Footer = () => (
  <div className="Absolver-footer">
    <a href="https://twitter.com/maxistired">
      <p>
        My Twitter
      </p>
    </a>
    <a href="https://github.com/sleepycobbler/Absolver">
      <p>
        GitHub
      </p>
    </a>
    <a href="https://absolvergame.com/">
      <p>
        Absolver Website
      </p>
    </a>
  </div>
);

export default Footer;