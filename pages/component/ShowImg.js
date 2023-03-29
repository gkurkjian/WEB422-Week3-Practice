export default function ShowImg() {
    let imgURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVHu5rXAK8KUSep6zlSxc_hg5m1oMLsvvC1sGRDeuFrMyoZFK52QShTR0F3hza4pMG1w&usqp=CAU";
    
    return (
        <>
            {/* This way it'll not work because there's no curly brackets wrapped up */}
            {/* <img src="imgURL" alt="seneca-college-img" /> */}

            {/* This is the right way to pass the values in JSX */}
            <img src={imgURL} alt={"seneca-college-img"} />

            <br />
            {/* The class name passed it must be className="..." not class="..." */}
            <img className="coolImage" src={imgURL} alt={"second-seneca-college-img"}/>
        </>
    )
}