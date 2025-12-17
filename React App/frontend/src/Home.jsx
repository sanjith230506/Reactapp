import{Link} from "react-router-dom";

export default function Home() {
    return (
        <div style={{padding:"20px"}}>
            <h1>Home Page</h1>
            <p>Welcome to our simple React store.</p>

            <Link to="/products">
            <img src=""
            alt="Store banner"
            style={{width:"100%",cursor:"pointer"}}
            />
            </Link>
            <p>Click the image to explore Products</p>


        </div>
    );
}