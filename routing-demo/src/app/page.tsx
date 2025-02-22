import Link from "next/link";


const Home = () => {
    return (
        <div>
            <h1>Welcome Back!</h1>
            <Link href='/blog'>Blog</Link>
            <Link href='/docs'>Docs</Link>
            <Link href='/login'>login</Link>
        </div>
    );
};

export default Home;