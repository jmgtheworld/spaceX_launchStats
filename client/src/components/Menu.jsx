import './Menu.scss'
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className = "navbar navbar-dark bg-dark menuBar">
      <Link to = "/" className = "navbar-brand menuItem"> Launches </Link>
      <Link to = "/capsules" className = "navbar-brand menuItem"> Capsules </Link>
      <Link to = "" className = "navbar-brand menuItem"> About </Link>
    </nav>
  )
}