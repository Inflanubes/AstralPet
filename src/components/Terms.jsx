import React from 'react';
import "../../styles/legal.css";

export const Terms = () => {
  return (
    <div className="legal-wrapper container py-5">
      <h1 className="mb-4">Términos y Condiciones de AstralPet</h1>

      <p>
        Al utilizar los servicios de AstralPet, aceptas los siguientes términos y condiciones. Por favor, léelos con atención antes de adquirir cualquier producto.
      </p>

      <h4>1. Titular del servicio</h4>
      <p>
        Este sitio web es propiedad de <strong>BEBANANA LLC</strong>, con sede en Albuquerque, Nuevo México, EE.UU. El correo de contacto es <a href="mailto:contact@astralpet.es">contact@astralpet.es</a>.
      </p>

      <h4>2. Objeto del servicio</h4>
      <p>
        AstralPet ofrece cartas astrales y horóscopos personalizados para mascotas. El usuario proporciona los datos requeridos y recibe el resultado en formato PDF por correo electrónico.
      </p>

      <h4>3. Datos requeridos</h4>
      <p>
        Para generar la carta astral se solicitan el nombre de la mascota, el correo electrónico de entrega y, cuando sea necesario, la fecha, hora y lugar de nacimiento de la mascota. La precisión del informe depende directamente de la exactitud de estos datos.
      </p>

      <h4>4. Entrega y pagos</h4>
      <p>
        El producto se entrega por correo electrónico en un plazo estimado que se indica durante la compra. Los pagos se realizan mediante la pasarela segura Stripe.
      </p>

      <h4>5. Política de reembolsos</h4>
      <p>
        No se aceptan reembolsos, dado que se trata de un producto personalizado generado a medida para cada mascota.
      </p>

      <h4>6. Uso del contenido</h4>
      <p>
        El contenido entregado es para uso personal del comprador. Queda prohibida su reproducción, distribución o venta sin autorización expresa de AstralPet.
      </p>

      <h4>7. Limitación de responsabilidad</h4>
      <p>
        AstralPet no garantiza la precisión absoluta de los resultados si los datos proporcionados son inexactos. Los informes astrológicos se elaboran con base en métodos tradicionales de astrología, pero no constituyen consejo médico, veterinario ni científico.
      </p>

      <h4>8. Comunicaciones promocionales</h4>
      <p>
        El usuario acepta que se le puedan enviar comunicaciones promocionales de forma esporádica. Puede darse de baja en cualquier momento.
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
