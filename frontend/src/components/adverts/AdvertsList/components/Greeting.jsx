import { useAuth } from "../../../auth/AuthContext"

export const Greeting = ({ username }) => {
  const { isLogged } = useAuth();

const token  = JSON.parse(localStorage.getItem('isVerified'));
if (token === false) {
  console.log('El token es falso');
} else {
  console.log('Token válido');
}

  return (
    <div>
      {isLogged && username && (
        <div
          className="hidden"
          style={{
            padding: "30px",
            width: "500px",
            margin: "0 auto",
            borderRadius: "30px",
            backgroundColor: "#CEFE98",
            marginBottom: "10px"
          }}
        >
          <h5>Hola {username}, bienvenido de vuelta</h5>
        </div>
      )}
        {isLogged && !token && (
        <div
          className="hidden"
          style={{
            padding: "10px",
            paddingTop: "20px",
            width: "500px",
            margin: "0 auto",
            borderRadius: "30px",
            backgroundColor: "#FFB26E",
            fontSize: "16px"
          }}
        >
          <p>Su correo electronico no esta verificado,
          revise su Bandeja de entrada de su correo para verificar la cuenta</p>
        </div>
      )}
    </div>
    
  );
};
