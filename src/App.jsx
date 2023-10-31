import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import RegisterAnimal from "./pages/register-animal/RegisterAnimal";
import Animales from "./pages/animales/Animales";
import { PetProvider } from "./context/PetContext";
import AnimalesId from "./pages/animalesId/AnimalesId";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RefugioProvider>
          <PetProvider>
            <Routes>
              {/* registros */}
              <Route
                path="/register-refugio"
                element={<FormRegisterRefugio />}
              />
              <Route path="/register-animales" element={<RegisterAnimal />} />
              <Route path="/register" element={<Donar />} />
              {/* registros */}
              {/* logeado */}
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/mapa" element={<Mapa />} />
              <Route path="/animales" element={<Animales />} />
              <Route path="/animales/:id" element={<AnimalesId />} />
              <Route path="/donar" element={<Donar />} />
              {/* logeado */}
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="confirmar/:token" element={<Confirmar />} />
              <Route path="/olvide-password" element={<OlvidePassword />} />
              <Route
                path="olvide-password/:token"
                element={<NuevoPassword />}
              />
            </Routes>
          </PetProvider>
        </RefugioProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
