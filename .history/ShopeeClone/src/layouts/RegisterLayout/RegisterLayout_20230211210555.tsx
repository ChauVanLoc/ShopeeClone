import Header from 'src/components/Header'

type RegisterLayoutType = {
  children: React.ReactNode
}

const RegisterLayout = ({ children }: RegisterLayoutType) => {
  return (
    <div>
      <Header /> RegisterLayout {children}
    </div>
  )
}

export default RegisterLayout
