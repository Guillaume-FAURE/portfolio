import {TitlePage} from './TitlePage'

type AppProps={
    name: string;
    children?: any;
}

export function Page({name, children}: AppProps){
    return(
        <div className={`${name} Page`}>
            <TitlePage name={name}/>
            {children}
        </div>
    )
}