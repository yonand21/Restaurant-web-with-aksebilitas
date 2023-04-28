const footer = document.createElement("footer");
footer.innerHTML = `
  <div class="footer-content">
    <h1 tabindex="0">Yonanda Putra | Dicoding Submission</h1>
    <p tabindex="0">&copy;2023</p>
    <ul class="socials">
      <li>
        <a href="#" role="button" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
      </li>
      <li>
              <a href="#" role="button" aria-label="Twitter"
                ><i class="fa fa-twitter"></i
              ></a>
            </li>
            <li>
              <a href="#" role="button" aria-label="Google Plus"
                ><i class="fa fa-google-plus"></i
              ></a>
            </li>
            <li>
              <a href="#" role="button" aria-label="Youtube"
                ><i class="fa fa-youtube"></i
              ></a>
            </li>
            <li>
              <a href="#" role="button" aria-label="LinkedIn"
                ><i class="fa fa-linkedin-square"></i
              ></a>
            </li>
    </ul>
  </div>
`;

document.body.appendChild(footer);
