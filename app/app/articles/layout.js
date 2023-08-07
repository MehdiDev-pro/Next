export const metadata = {
    title: "Articles"
}

export default function({children}){
    return(
        <div>
            <h1>
                Articles Layout
            </h1>
            <div style={{background: "red"}}>
                {children}
            </div>
        </div>
    )
}