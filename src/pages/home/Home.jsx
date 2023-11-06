import nosotros from "../../assets/nosotros.png";
import gatitos from "../../assets/gatitos.png";
import refu from "../../assets/refu.jpg";
import adoptando from "../../assets/adoptando.jpg";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import NavLanding from "../../components/NavLanding";

const Home = () => {
  return (
    <main className="bg-[#CCC4BB] h-screen">
      <NavLanding />
      <Carousel />
      <div className="bg-[#CCC4BB]">
        <div
          id="nosotros"
          className="flex flex-col items-center justify-center h-full "
        >
          <div className="grid gap-6 px-5 md:px-28">
            <div className="flex gap-5 text-2xl">
              <img src={nosotros} className="w-64 md:w-1/3 rounded-xl" alt="" />
              <section>
                <h2 className="font-bold text-4xl text-gray-700 flex">
                  Misión
                </h2>
                <p>
                  En Pet Transity estamos comprometidos con promover mediante
                  diferentes actividades la adopción responsable, la conciencia
                  de esterilizar y recuperar animales en condición de maltrato y
                  abandono con el fin de enseñar, contribuir y entregar una
                  calidad de vida a todos los perros y gatos que lo necesiten.
                </p>
              </section>
            </div>
            <div className="flex gap-5 text-2xl">
              <section>
                <h2 className="font-bold text-4xl text-gray-700 flex">
                  Visión
                </h2>
                <p>
                  En Pet Transity, aspiramos a construir un mundo en el que cada
                  mascota, independientemente de su especie, tenga la
                  oportunidad de experimentar la compasión, la seguridad y el
                  respeto que merece. Nuestra visión es ser un faro de esperanza
                  y refugio para animales desamparados, donde cada vida importa.
                  Trabajamos incansablemente para brindar cuidado, amor y un
                  hogar temporal a aquellos que han sido abandonados o
                  maltratados, con la creencia de que cada uno de ellos merece
                  una segunda oportunidad. Además, nos esforzamos por fomentar
                  la conciencia y la educación en la comunidad, promoviendo la
                  adopción responsable y la coexistencia armoniosa entre humanos
                  y animales. Nuestra visión es un mundo en el que cada animal
                  pueda encontrar su lugar en un hogar lleno de amor y respeto,
                  y trabajamos todos los días para hacer de este sueño una
                  realidad.
                </p>
              </section>

              <img src={refu} className="w-64 md:w-1/3 rounded-xl" alt="refu" />
            </div>
          </div>
        </div>
      </div>

      {/* requisitos de adopcion */}

      <div className="bg-[#E3DBD3]">
        <div
          id="requisitos"
          className="flex flex-col items-center justify-center h-full pb-4"
        >
          <h1 className="text-4xl font-bold text-center text-gray-600 py-12">
            Requisitos para adoptar
          </h1>
          <div className="grid gap-6 px-5 md:px-28">
            <div className="flex gap-5 text-2xl">
              <section>
                <p>
                  El acto de adoptar es una gran compromiso y responsabilidad
                  que puede oscilar entre los 15 y 20 años, este es el promedio
                  de vida de un gato y perro. Por eso es importante que estés
                  listo y capacitado para hacerte responsable de una nueva vida
                  que dependerá de ti. Antes de hacer esto, un hecho que debes
                  analizar es el espacio que dispones en tu casa, el tiempo que
                  puedes dedicarle para educarlo, acompañarlo, darle la
                  actividad física y cuidados que necesite. Comienza por revisar
                  los costos de alimentación, atención veterinaria, elementos
                  para su adaptación en casa y precios de estadía cuando estés
                  fuera de casa.
                </p>
              </section>
              <img
                src={adoptando}
                className="w-64 md:w-1/3 rounded-xl"
                alt=""
              />
            </div>
            <div className="flex gap-5 text-2xl">
              <img
                src={gatitos}
                className="w-64 md:w-1/3 rounded-xl"
                alt="gatitos"
              />
              <section>
                <p>
                  También debes analizar las edades y tipos de comportamiento de
                  los animales, no es lo mismo un cachorro a un adulto mayor.
                  Los cachorros son muy lindos y tiernos, pero requieren de
                  mucho tiempo y cuidado. Ellos deben alimentarse entre 3 y 4
                  veces al día, suelen llorar al quedarse solos, muerden muchos
                  objetos porque al igual que un bebé humano les molesta las
                  encías y buscan cosas que les ayuden a aliviar estas
                  molestias. Hacen pipí y defecan en cualquier parte. El tamaño
                  final no se puede garantizar hasta que completen el año de
                  edad. Serán fuente de amor y mucha actividad física en la
                  familia. <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  Un perro adulto o adulto mayor ya está esterilizado, se puede
                  sacar a la calle, tiene un tamaño definido, se habitúa más
                  fácil a la familia, son muy agradecidos y cariñosos con los
                  miembros de ella. Aceptan su espacio en la manada, y no
                  requieren tanto trabajo pues suelen ser muy calmados. Cuando
                  ya son adultos mayores puede que no duren mucho tiempo pero
                  hay ser consientes que ellos merecen un hogar y son la mejor
                  compañía.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
