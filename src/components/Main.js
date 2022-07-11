import MainEmailToolbar from "./MainEmailToolbar"
import MainEmailContent from "./MainEmailContent"
import MainEmailWrite from "./MainEmailWrite"



function Main () {

    return (

      <main className="email-view">
        <MainEmailToolbar />
        <MainEmailContent />
        <MainEmailWrite />
      </main>
    )
}

export default Main