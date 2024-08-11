const Fetchdata = () => {
  fetch("http://localhost:8080/Table").then((result) => {
    result.json().then((Response) => {
      console.log(Response);
    });
  });

  return <div></div>;
};

export default Fetchdata;
