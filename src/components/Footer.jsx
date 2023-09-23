import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4> bussines </h4>
            <a href=""><p>TEXTO</p></a>
            <a href=""><p>TEXTO</p></a>
            <a href=""><p>TEXTO</p></a>
          </div>
          <div className="sb__footer-links_div">
            <h4> bussines </h4>
            <a href=""><p>TEXTO</p></a>
            <a href=""><p>TEXTO</p></a>
            <a href=""><p>TEXTO</p></a> 
          </div>
           <div className="sb__footer-links_div">
              <h4>otroh4</h4>
              <a href=""><p>parrafo</p></a>
              <a href=""><p>parrafo</p></a>
              <a href=""><p>parrafo</p></a>
              <a href=""><p>contacto </p></a>
            </div>
            <div className="sb__footer-links_div">
              <h4>Seguinos en</h4>
              <div className="socialmedia">
                <p><img src="" alt="pag de fb" /></p>
                <p><img src="" alt="pag de insta" /></p>
                <p><img src="" alt="pag linkedin" /></p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="sb__footer-below">
            <div className="sb__footer-copyright">
              <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
            </div>
            <div className="sb__footer-below-links">
              <a href="">
                <div>
                  <p>Terminos y Condiciones</p>
                </div>
              </a>
              <a href="">
                <div>
                  <p>Privacidad</p>
                </div>
              </a>
              <a href="">
                <div>
                  <p>Seguridad</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    
  )
};

export default Footer;
