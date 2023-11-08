import { Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import NotFound from "../pages/404/NotFound";

const PrivateMap = ({ element, allowedRoles }) => {
  // Verifica si el usuario está autenticado y tiene el rol correcto
  // Puedes obtener la información del usuario de tu contexto o desde localStorage
  const { auth } = useAuth();
  console.log(auth.role);
  const userRole = auth.role;

  if (!userRole || !allowedRoles.includes(userRole)) {
    return <NotFound />;
  }

  return <Route element={element} />;
};

export default PrivateMap;
