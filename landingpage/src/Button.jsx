function Button () {
    return (
        <button onClick={() => window.location.href='https://google.com'} 
                style={{background:"#2ab32ccc", 
                        padding:"5px 8px", 
                        color:"white", 
                        borderRadius: "8px"}}
        >
            Clique Aqui
        </button>
    )
}

export default Button