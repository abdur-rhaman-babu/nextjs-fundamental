const Docs = async ({params}:{
    params: Promise<{slug: string[]}>
}) => {
    const {slug} = await params;
    if(slug?.length === 2){
        return <h1>view docs for {slug[0]} and concept {slug[1]}</h1>
    }else if(slug?.length === 1){
        return <h1>view docs for {slug[0]}</h1>
    }else if(slug?.length === 3){
        return <h1>view docs for {slug[0]} and concept {slug[1]} and {slug[2]}</h1>
    }
    return <h1>Docs Home page</h1>
};

export default Docs;