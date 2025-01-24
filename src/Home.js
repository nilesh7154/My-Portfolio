// import { Link } from "react-router-dom"

function Home(props){
    let navData = props.data1
    console.log(navData,"props")
    return(
        <>
            {
                navData.map((val)=>{
                        return(
                            <>
                                <h1>This is a {val} Component</h1>
                                <h2>This is a {val} Component</h2>
                                {/* <Link to="https://www.nettechindia.com/">Component</Link> */}
                            </>
                        )
                })
            }
        </>
    )
}


export default Home