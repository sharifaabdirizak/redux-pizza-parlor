export default function SelectPizza(){

  useEffect(() => {
    console.log("in useEffect");
    getPizzas();
  }, []);

  const getPizzas = () => {
    axios({
      method: "GET",
      url: "/api/pizza",
    })
      .then((response) => {
        // response.data is the array of artists
        console.log(response.data);
        dispatch({
          type: "UPDATE_ARTISTS",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error on GET", error);
      });
  };
  return(


  )
}