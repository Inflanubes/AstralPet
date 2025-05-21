import React from 'react';
import "../styles/legal.css";

export const Legal = () => {
  return (
    <div className="legal-wrapper container py-5">
      <h1 className="mb-4">Aviso Legal</h1>

      <p><strong>Titular del sitio web:</strong> BEBANANA LLC</p>
      <p><strong>Domicilio:</strong> Albuquerque, Nuevo México, EE.UU.</p>
      <p><strong>Email de contacto:</strong> <a href="mailto:contact@astralpet.es">contact@astralpet.es</a></p>

      <p>
        AstralPet es un sitio web destinado a ofrecer cartas astrales y horóscopos personalizados para mascotas. Aunque el titular es una entidad estadounidense, el sitio opera comercialmente en España y se acoge a la normativa aplicable en dicho país.
      </p>

      <p>
        El acceso a esta web implica la aceptación de las condiciones aquí descritas. No está permitido el uso del sitio con fines ilegales o contrarios a la buena fe.
      </p>

      <p>
        Todos los contenidos de este sitio web (textos, diseños, imágenes, software, etc.) son propiedad de BEBANANA LLC o de sus respectivos autores, y están protegidos por la legislación sobre propiedad intelectual. Queda prohibida su reproducción sin autorización expresa.
      </p>

      <p>
        BEBANANA LLC no se responsabiliza de interrupciones del servicio, errores técnicos ni del uso indebido del contenido por parte de terceros.
      </p>

      <p>
        Este aviso podrá ser modificado sin previo aviso. Se recomienda su revisión periódica.
      </p>

      <p className="mt-4"><strong>Última actualización:</strong> Mayo 2025</p>
    </div>
  );
};
