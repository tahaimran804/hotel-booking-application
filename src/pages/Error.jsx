import { Link } from "react-router-dom"
import ErrorIamge from "../assets/Error.svg"
import Container from "../components/Container"

const Error = () => {
    return (
        <Container className="py-10 flex gap-2 w-full flex-col items-ceter justify-center">
            <div className="flex flex-col items-center gap-2 justify-center">
                <h1 style={{
                    fontFamily: "'Roboto', sans-serif"
                }} className="text-2xl font-bold"
                >Page not found</h1>
                <p style={{
                    fontFamily: "'Roboto', sans-serif"
                }} className="text-sm font-normal text-center text-gray-500">With RateCompares you can go anywhere. But first you need to go back to the homepage.</p>
                <Link to={"/"}>
                    <button className="py-2 cursor-pointer px-10 bg-[var(--primary-color)] text-[var(--accent-color)] rounded-sm">Go Back</button>
                </Link>
            </div>

            <div className="w-full h-[200px]">
                <img src={ErrorIamge} alt="error" className="w-full h-full" />
            </div>
        </Container>
    )
}

export default Error