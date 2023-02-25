function Button ({ text, colorBtn, width, height, borderRadius, onClick  }) {

    return(
        <button className="btn-style"
        onClick={onClick}
        style={{
            backgroundColor: colorBtn, 
            width: width, 
            height: height, 
            borderRadius: borderRadius 
        }}>{text}</button>
    )
}

export default Button