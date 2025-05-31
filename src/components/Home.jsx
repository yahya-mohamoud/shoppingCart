import { Link } from "react-router-dom"


function Home() {
  return (
    <div className="home">
        <h1>Welcome to Shoppie an online fake store where you can see nothing but fake products with fake prices.</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod laboriosam sint quia, reiciendis reprehenderit itaque, voluptatem incidunt maiores pariatur nobis dicta ad quaerat quis quos voluptatum voluptate odio! Nesciunt, maxime.
        Recusandae maiores nesciunt quas quae, magni impedit optio sequi vero ex fugit, libero vel id eligendi deleniti pariatur. Iusto, quisquam? Labore itaque vitae quisquam error, iste nam officiis eaque ad?
        Odio omnis vero totam consectetur! Dolorem ducimus in neque eveniet vero veniam illum libero et culpa, reprehenderit omnis aliquam velit voluptas sapiente nobis suscipit quasi distinctio laborum earum assumenda hic?</p>
        <Link to={'/shop'}> <h2>Click here ↗ to see the products</h2></Link>

    </div>
  )
}

export default Home