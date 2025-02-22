import Link from "next/link";


const Home = () => {
    return (
        <div>
            <h1>Welcome Back!</h1>
            <Link href='/blog'>Blog</Link>
            <Link href='/docs'>Docs</Link>
            <Link href='/login'>login</Link>
            <Link href='/articles/breaking-news123?lang=en'>Read In English</Link>
            <Link href='/articles/breaking-news123?lang=fr'>Read In Franch</Link>
        </div>
    );
};

export default Home;