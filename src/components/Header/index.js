import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { signOut } from "../../store/modules/auth/actions";

import Notifications from "../Notifications";

import avatar from "../../assets/image/avatar.svg";

import { Container, Content, Profile } from "./styles";

function Header() {
   const dispatch = useDispatch();
   const profile = useSelector((state) => state.user.profile);

   function handleSignOut() {
      dispatch(signOut());
   }

   return (
      <Container>
         <Content>
            <nav>
               <Link to="/dashboard">ACDC</Link>
            </nav>

            <aside>
               <Notifications />
               <Profile>
                  <div>
                     <strong>{profile.name}</strong>
                     <div>
                        <span onClick={handleSignOut}>Sair</span>
                        <Link to="/profile">Meu Perfil</Link>
                     </div>
                  </div>
                  <img src={avatar} alt="Matheus Vieira" />
               </Profile>
            </aside>
         </Content>
      </Container>
   );
}

export default Header;

/**
 * 
 *  <Link to="/dashboard">ACDC</Link>

            <NavDropdown
               alignRight
               title={<FaUserCircle size={30} />}
               color="white"
               id="collasible-nav-dropdown "
            >
               <NavDropdown.Item as={Link} to="/dashboard">
                  Informações Pessoais
               </NavDropdown.Item>
               <NavDropdown.Item as={Link} to="/dashboard">
                  Ajuda
               </NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item onClick={handleSignOut}>Sair</NavDropdown.Item>
            </NavDropdown>

            <br />
         </Header>
 */
