import { useEffect, useState } from 'react';
import { Mail, Menu, Phone, X } from 'lucide-react';

const settings = {
  title: "JUNE'S",
  subtitle: 'DUO VOCAL',
  phone1: '06.45.17.61.74',
  phone2: '06.74.28.12.78',
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactFeedback, setContactFeedback] = useState('');
  const contactFeedbackType = 'success';

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('contact') === 'envoye') {
      setContactFeedback('Merci ! Votre message a bien été transmis à JUNE’S.');
      params.delete('contact');
      window.history.replaceState(null, '', window.location.pathname + '#contact');
    }
  }, []);

  const visual =
    import.meta.env.BASE_URL + 'resources/junes-visual.png';

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top">
          JUNE'S
        </a>
        <button
          className="menu-btn"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <h1>{settings.title}</h1>
          <p className="subtitle">{settings.subtitle}</p>
          <div className="phones">
            <a href={'tel:' + settings.phone1.replace(/\D/g, '')}>
              <Phone size={18} /> {settings.phone1}
            </a>
            <a href={'tel:' + settings.phone2.replace(/\D/g, '')}>
              <Phone size={18} /> {settings.phone2}
            </a>
          </div>
          <a className="primary-btn" href="#contact">
            <Mail size={17} /> Nous contacter
          </a>
        </div>
        <div className="visual-wrap">
          <img src={visual} alt="JUNE'S Duo Vocal" />
        </div>
      </section>

      <section className="about-section" id="univers">
        <div className="about-header">
          <p className="eyebrow">NOTRE UNIVERS</p>
          <h2>Deux voix, une même passion.</h2>
          <p>Nous sommes deux chanteuses passionnées, réunies par l’amour de la musique et l’envie de partager de beaux moments avec vous.</p>
          <p>Notre répertoire traverse les générations et les styles, avec des reprises plus ou moins connues, de la pop anglaise à la variété française.</p>
        </div>
        <div className="about-grid">
          <article className="about-item">
            <h3>Une ambiance à votre image</h3>
            <p>Notre univers est à la fois chaleureux, élégant et convivial, idéal pour accompagner vos repas, apéritifs, soirées et événements en musique, tout en laissant la place aux échanges et aux moments partagés.</p>
          </article>
          <article className="about-item">
            <h3>Vos moments uniques</h3>
            <p>Pour les mariages, nous pouvons également personnaliser notre répertoire et intégrer des morceaux qui ont une signification particulière pour les mariés, afin de rendre cette journée encore plus personnelle.</p>
          </article>
          <article className="about-item">
            <h3>Des rendez-vous musicaux</h3>
            <p>Nous pouvons intervenir pour une soirée ponctuelle, un événement particulier, mais aussi imaginer avec vous un rendez-vous musical régulier, par exemple une fois par mois, afin de créer un véritable moment attendu par votre clientèle.</p>
          </article>
        </div>
        <p className="about-signature">Deux voix, des chansons que l’on aime, et l’envie de créer avec vous de beaux souvenirs en musique.</p>
        <a className="primary-btn" href="#contact">Parlons de votre événement</a>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-intro">
          <p className="eyebrow">CONTACT</p>
          <h2>Parlons de votre soirée</h2>
          <p>
            Pour une date, une prestation ou une demande d'information,
            écrivez-nous directement.
          </p>
          <div className="contact-links">
            <a href={'tel:' + settings.phone1.replace(/\D/g, '')}>
              {settings.phone1}
            </a>
            <a href={'tel:' + settings.phone2.replace(/\D/g, '')}>
              {settings.phone2}
            </a>
          </div>
        </div>
        <form className="contact-form" method="POST" action="https://formsubmit.co/lesons.factory@gmail.com">
          <input type="hidden" name="_subject" value="JUNE'S | Nouvelle demande de contact" />
          <input type="hidden" name="_cc" value="victoria.bousquet1@gmail.com,mallaurie.duboe@orange.fr" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_autoresponse" value={"Bonjour,\n\nNous avons bien reçu votre message, merci de votre intérêt pour JUNE’S.\n\nNous vous recontacterons dès que possible.\n\nÀ très vite,\nMallaurie & Victoria\nJUNE’S – Duo Vocal"} />
          <input type="hidden" name="_next" value={window.location.origin + '/?contact=envoye#contact'} />
          <input type="hidden" name="_replyto" value="" />
          <label>
            Nom
            <input name="name" required />
          </label>
          <label>
            E-mail
            <input name="email" type="email" required />
          </label>
          <label>
            Téléphone
            <input name="phone" inputMode="tel" />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>
          <button className="primary-btn" >
            Envoyer
          </button>
          {contactFeedback && (
            <p className={'status ' + contactFeedbackType}>{contactFeedback}</p>
          )}
        </form>
      </section>

      <footer>
        <span>© JUNE'S</span>
        <span>Duo vocal</span>
        <a className="admin-link" href="https://june-s-qzodzw.v2.appdeploy.ai/#admin">
          Admin
        </a>
      </footer>
    </main>
  );
}

export default App;
