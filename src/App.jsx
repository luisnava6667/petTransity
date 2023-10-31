import { HashRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import Home from "./pages/home/Home";
import Donar from "./pages/donar/Donar";
import Login from "./pages/login/Login";
import FormRegisterRefugio from "./pages/form-register-refugio/FormRegisterRefugio";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/dashboard/Dashboar";
import Mapa from "./pages/mapa/Mapa";
import { RefugioProvider } from "./context/RefugioContext";
import Confirmar from "./pages/confirmar/Confirmar";
import OlvidePassword from "./pages/olvide-password/OlvidePassword";
import NuevoPassword from "./pages/nuevo-password/NuevoPassword";
import FormRegisterUser from "./pages/form-register-usuario/FormRegisterUser";
import RegisterAnimal from "./pages/register-animal/RegisterAnimal";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <RefugioProvider>
          <Routes>
            <Route path="/register-refugio" element={<FormRegisterRefugio />} />
            <Route path="/register-usuario" element={<FormRegisterUser />} />
            <Route path="/register-animal" element={<RegisterAnimal />} />
            <Route path="/register" element={<Donar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mapa" element={<Mapa />} />
            <Route path="/donar" element={<Donar />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="confirmar/:token" element={<Confirmar />} />
            <Route path="/olvide-password" element={<OlvidePassword />} />
            <Route path="olvide-password/:token" element={<NuevoPassword />} />
          </Routes>
        </RefugioProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
