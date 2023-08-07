export default function ShowArticlePage(props){
    console.log(props)
    return(
        <div>
            <h1>
              Article Title Page
            </h1>
            <h1>
                {props.params.title}
            </h1>
        </div>
    )
}