import { useHistory } from "react-router"

const Landing = () => {
    const history = useHistory()

    const toHome = () => {
        history.push("/home")
    }

    return (
        <div>
            <div>
                Hello, I'm Soo-Beom Kim.
            </div>
            <span>
                I'm a full-stack web developer.
            </span>

            <button onClick={toHome}>
                Learn More
            </button>
        </div>
    )
}

export default Landing