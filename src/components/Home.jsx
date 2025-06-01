import { Link } from "react-router-dom"


function Home() {
  return (
    <div className="home">
        <h1>Welcome to Shoppie an online fake store where you can see nothing but fake products with fake prices.</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicingniam illum libero et culpa, reprehenderit omnis aliquam velit voluptas sapiente nobis suscipit quasi distinctio laborum earum assumenda hic?</p>
        <Link to={'/shop'}> <h2>Click here ↗ to see the products</h2></Link>

    </div>
  )
}

export default Home