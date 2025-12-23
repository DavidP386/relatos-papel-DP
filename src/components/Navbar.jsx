import "../css/estilos-sitio-web.css";

export const Navbar = () => {
  return (
    <table width="100%" border="0" align="center" cellPadding="0" cellSpacing="0" className="tabla-cabezote">
      <tbody>
        <tr valign="top">
          <td width="10%">
            <div className="logo">
               &nbsp;
            </div>
          </td>
          <td width="26%">
            <div className="titulo-sitio-web">
               LIBRERÍA RELATOS DE PAPEL.
            </div>
          </td>
          <td width="18%">
            <div className="opcion-menu-superior">
               <a href="/" title="Inicio." target="_self"><u>Inicio.</u></a>
            </div>
          </td>
          <td width="18%">
            <div className="opcion-menu-superior">
               <a href="/search" title="Búsqueda." target="_self">Búsqueda.</a>
            </div>
          </td>
          <td width="18%">
            <div className="opcion-menu-superior">
               Hola<br/><strong><a href="#" title="Perfíl." target="_self">Nombres y apellidos usuario.</a></strong>
            </div>
          </td>
          <td width="10%">
            <div className="opcion-menu-superior">
               <a href="/shopping-cart" title="Carrito de Compras." target="_self">
                 <div className="icono-carrito-compras">
                    &nbsp;
                 </div>
               </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};