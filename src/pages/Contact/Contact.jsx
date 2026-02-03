import './Contact.css'
import { WhatsAppLink } from "../../components/SwetAlert/Swetwats.jsx";

const Contact = () => {
  return (
    <div>
      <div className="titulares">
        <h1 className="titulop">Nuestros Locales</h1>
  
      </div>
      <section className="mdpconteiner">
        <div className="centro2">
          <div className="mdpcentro">
            <iframe
              className="mapita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18940.619246561804!2d-60.66831409409039!3d-32.94414227056295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1dc9b6d36f%3A0x97b9e9584d94d851!2sMonumento%20Hist%C3%B3rico%20Nacional%20a%20la%20Bandera!5e0!3m2!1ses!2sar!4v1753383088682!5m2!1ses!2sar"
              width="800"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="descripciones2">Local Zona Centro</p>
            <WhatsAppLink/>
            <h2>📞 341-222222</h2>
            <h2>Santa Fe 525</h2>
            <h2 className="h3mdp">de 08:00 a 17:00</h2>
          </div>

          <div className="mdpcentro">
            <iframe
              className="mapita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18941.033849397463!2d-60.694593497073896!3d-32.94220682031196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b653342d637257%3A0x9855046fadfe894b!2sCin%C3%A9polis%20Rosario!5e0!3m2!1ses!2sar!4v1753383193727!5m2!1ses!2sar"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            <p className="descripciones2">Depósito Barrio Belgrano</p>
            <WhatsAppLink/>
            <h2>📞 341-111111</h2>
            <h2 className="h3mdp">Av Córdoba 1234</h2>
            <h2 className="h3mdp">de 08:00 a 17:00</h2>
            
          </div>
        </div>
      </section>

    </div>
  )
};
export { Contact };