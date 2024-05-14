let header=`
<header class="container">
        <div class="header-top">
            <div class="logo">
                <img src="./logo/logo.png" alt="Logo">
            </div>
            <div class="magnifying-glass">
                <i class="fa-sharp fa-thin fa-magnifying-glass"></i>
            </div>
            <form action="">
                <input type="text">
                <input type="submit" value="Search">
            </form>
            <div class="icon">
                <div class="user">
                    <i class="fa-regular fa-user"></i>
                  <a href="./Login.html" class="Login_Register">Login / Register</a>
                </div>
                <div class="shopping">
                    <i class="fa-regular fa-bag-shopping"></i>
                </div>
            </div>
          <!--! Start Burger  -->
          <button id="menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <!--? End Burger -->
        </div>
        <nav>
          <ul id="actions">
              <li><a href="index.html">Home</a></i>
              <li><a href="#">Categories </a><i class="fa-solid fa-caret-down"></i>
                <div class="dropdown-menu">
                  <ul>
                    <h4><a href="#">Desktop</a></h4>
                    <li><a href="./Motherboard.html">Motherboard</a></li>
                    <li><a href="Graphics.html">Graphic</a></li>
                    <li><a href="./RAM.html">Ram</i></a></li>
                    <li><a href="Processors.html">Processors</a></li>
                    <li><a href="./BUNDLES.html">Bundles</a></li>
                    <li><a href="#">Power Supply</a></li>
                  </ul>
                  <ul>
                    <h4><a href="#">NOTEBOOK</a></h4>
                    <li><a href="./NotebookMsi.html">NOTEBOOK MSI</a></li>
                    <li><a href="./GeForce_RTX_30_Series.html">GeForce RTX 30 Series</a></li>
                    <li><a href="./GeForce_RTX_40_Series.html">GeForce RTX 40 Series</a></li>
                    <li><a href="#">Laptop Chargers & Adapters</a></li>
                  </ul>
                  <ul>
                    <h4><a href="#">Storage</a></h4>
                    <li><a href="#">Internal Hard</a></li>
                    <li><a href="./SSD.html">SSD</i></a></li>
                    <li><a href="./SSD.M2.html">M.2</a></li>
                    <li><a href="#">External SSD</a></li>
                    <li><a href="./memory.html">Memory Card</a></li>
                    <li><a href="./flashDisk.html">Flash Disk</a></li>
                  </ul>
                  <ul>
                    <h4><a href="#">ACCESSORIES</a></h4>
                    <li><a href="./PC_Cooling.html">PC Cooling</a></li>
                    <li><a href="./Mouse.html">Mouse</a></li>
                    <li><a href="./Keyboard.html">Keyboard</a></li>
                    <li><a href="./HeadPhones.html">Headphones</i></a></li>
                    <li><a href="./Speaker.html">Speaker</a></li>
                    <li><a href="#">microphones</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="./aboutUs.html">About Us</a></li>
              <li><a href="./contactUs.html">Contact Us</a></li>
              <li><a href="./Blog.html">Blog</a></li>
              <li><a href="#">Special Offer</a></li>
              <li><a href="#">Seller</a><i class="fa-solid fa-caret-down"></i>
                  <div class="dropdown-menu">
                    <ul>
                      <li><a href="#">Pc world</a></li>
                      <li><a href="#">AULA</a></li>
                      <li><a href="#">INGCO</a></li>
                      <li><a href="#">MSI</a></li>
                      <li><a href="#">C-M</i></a></li>
                      <li><a href="#">SIGMA</a></li>
                    </ul>
                </div>
              </li>
              <span class="bg-col"></span>
          </ul>
        </nav>
    </header>
`;
document.write(header);