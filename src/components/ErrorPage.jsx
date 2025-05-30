import { Link } from "react-router-dom"
function ErrorPage() {
  return (
    <div>
        <h3>OOPS!, you are in wrong address</h3>
        <h4>You can go back to home</h4>
        <Link to={'/'}>Home</Link>
    </div>
  )
}

export default ErrorPage