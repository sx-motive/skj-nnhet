import instagram from '/icons/logo-instagram.svg';
import facebook from '/icons/logo-facebook.svg';

export const menu = `
    <nav class="menu" id="menu">
      <ul class="primary-nav">
        <li><a data-caption data-text="Shop" href="/">Shop</a></li>
        <li><a data-caption data-text="Lookbook" href="/">Lookbook</a></li>
        <li><a data-caption data-text="About" href="/">About</a></li>
      </ul> 
      <div class="menu-footer">
        <img src="${instagram}" alt="instagram" />
        <img src="${facebook}" alt="facebook" />
      </div>
    </nav>
`;
