import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://www.facebook.com/profile/pic.php?cuid=AYgYifaamGrc3M8lYdm9h9doePrBxtL_kqoP-gsEh9HCEwCHyGdcVklu0gX_yKskaNg4fV1bWToHWLImNeU9oWqRHMb87qFOAyNWSO9aSyWUEPHoliIv8FXE-pYmxSlZO7U-meBUNkpasnqGij2NQwqHXIBWHloJGjH9Sz-ppSUesy28RSP6gt3Ujoz2uOjGSoDyBSyL6x1TtCzD_IQqvk-stY5k4d74F3z5_PUFJUlbW1t6v5sz0BS6CVZAElNIaFQrnjUHUhmuW3OcKkMTosj9ro5-9n_0ck1MsUVEZDYZyiUArtNwwHVoMFafx4v8lmK_dtG_RjXO3uaWFumMnF-CHcpABISNtWH0_8HfO-YoBQ&square_px=64" alt="Victor Carvalho" />
        <div>
          <strong>Victor Carvalho</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet
        <br />
        <br />
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
