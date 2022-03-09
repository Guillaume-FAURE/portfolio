type AppProps={
    name:string;
}

export function TitlePage({name}:AppProps){
    return(
        <h2 className="titlePage">{name}</h2>
    )
}