import './Header.css'

export default function Header({ isDarkmode }) {
  return (
    <header className={isDarkmode ? 'Header Header--darkmode' : 'Header'}>
      Pokemon App
    </header>
  )
}
