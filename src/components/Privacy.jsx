import React from 'react';
import "../../styles/legal.css";

export const Privacy = () => {
  return (
    <div className="legal-wrapper container py-5">
      <h1 className="mb-4">Política de Privacidad</h1>

      <p>
        En cumplimiento del Reglamento General de Protección de Datos (RGPD), informamos que los datos personales recabados a través de AstralPet serán tratados por BEBANANA LLC como responsable del tratamiento.
      </p>

      <h4>1. Datos recabados</h4>
      <p>
        Los datos que solicitamos son: nombre de la mascota, email de entrega y, en ciertos casos, datos necesarios para la elaboración de la carta astral (fecha, hora y lugar de nacimiento). No se solicitan datos personales identificativos del usuario salvo el email de entrega.
      </p>

      <h4>2. Finalidad del tratamiento</h4>
      <p>
        Usamos estos datos exclusivamente para generar y enviar la carta astral solicitada, así como para comunicaciones puntuales relacionadas con promociones si el usuario no se ha opuesto.
      </p>

      <h4>3. Conservación de datos</h4>
      <p>
        Los datos serán conservados durante el tiempo necesario para prestar el servicio y cumplir con obligaciones legales, y podrán ser eliminados a solicitud del usuario.
      </p>

      <h4>4. Base legal</h4>
      <p>
        La base legal para el tratamiento es el consentimiento expreso del usuario al proporcionar sus datos para la prestación del servicio.
      </p>

      <h4>5. Derechos del usuario</h4>
      <p>
        Puedes ejercer los derechos de acceso, rectificación, supresión, oposición y portabilidad escribiendo a <a href="mailto:contact@astralpet.es">contact@astralpet.es</a>.
      </p>

      <h4>6. Cesión de datos</h4>
      <p>
        No compartimos los datos con terceros, salvo obligación legal o necesidad técnica para el funcionamiento del servicio (como el uso de Stripe para procesar pagos).
      </p>

      <p className="mt-4"><strong>Última actualización:</strong> Mayo 2025</p>

      <button
        className="btn btn-dark mt-4"
        onClick={() => window.history.back()}
        >
        Volver atrás
      </button>

    </div>
  );
};