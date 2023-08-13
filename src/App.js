
// import Post from "./post";
 function App() {




  const handel=async (e) =>{
    e.preventDefault();
    
    const name =document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password =document.getElementById('pass').value;
  
try{ 

 const rep= await fetch("https://node-6bdz.onrender.com/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: name, email: email, pass: password })
  }); alert(await rep.text())}
  catch(e){console.error('err in submition ')}

  
}



  return(  
  
    
    <div>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
      <header className="bg-primary p-3 d-flex justify-content-between ">
        <a className="cursor-auto text-light">home </a>
        <a className="cursor-pointer text-light">GAMES</a>
        <a className="cursor-pointer text-light">about us</a>
      </header>
      <nav  className="bg-info p-2">
        <h1 className="text-danger bg-light rounded-4  p-1" >enter your detail for new account</h1>
        </nav>

      <section  className=" col d-flex justify-content-center  align-items-center bg-info">
        <form onSubmit={handel} className=" px-2 ">
          <label className="px-2 col">name:</label>
          <input id="name" required className="px-1"  placeholder="enter your name"></input><br/>
          
          <label className="px-2 mt-2 col">email:</label>
          <input id="email" type="email" required placeholder="enter your email"></input><br/>
          
          <label className="mt-2">password:</label>
          <input id="pass" type="password" required placeholder="enter your pass"></input><br/>
          <input className="m- btn btn-primary"  type="submit"></input>
        </form>

      </section>

      <footer className="bg-primary p-3">created By <br></br>shiv</footer>
    </div>
  
  )
}

export default App;
