import Footer from 'src/components/Footer'
import HeaderRegister from 'src/components/HeaderRegister'

type RegisterLayoutType = {
  children: React.ReactNode
}

const RegisterLayout = ({ children }: RegisterLayoutType) => {
  return (
    <div>
      <HeaderRegister />
      {children}
      <Footer />
    </div>
  )
}

export default RegisterLayout
