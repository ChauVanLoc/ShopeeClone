import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

type RegisterLayoutType = {
  children: React.ReactNode
}

const RegisterLayout = ({ children }: RegisterLayoutType) => {
  return (
    <div>
      <Header />
      {children} <Footer />
    </div>
  )
}

export default RegisterLayout
