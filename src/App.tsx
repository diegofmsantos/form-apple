import appleBg from "./assets/banner-apple.png";
import Form from "./components/Form";

const App = () => {

  return (
    <div className='w-screen h-screen bg-bottom bg-cover flex justify-center items-center' style={{ backgroundImage: `url(${appleBg})` }}>
      <Form />
    </div>
  )
}

export default App;
